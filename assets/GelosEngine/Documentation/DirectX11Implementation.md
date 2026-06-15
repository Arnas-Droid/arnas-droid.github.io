# DirectX 11 Rendering Implementation 
**Author:** Arnas
## Introduction
This section goes into the implementation of the DirectX 11 rendering backend and explains its use within the engine as the primary development renderer. The overall abstraction of the renderer was designed by another team member using a polymorphic base renderer and integrated the DirectX 11 renderer that I created into that system. The renderer architecture allows for different graphics backends to be implemented, like the PS5 (Prospero) and the web port (OpenGL 3/Emscripten). Within this, it allows different graphics APIs to maintain their own platform-specific implementations while sharing a common rendering interface.

## Initialisation, Error Handling and Debugging
The implementation of DirectX 11 has several initialisations happening at the start of the program, like the device, device context, swap chain, buffers and other necessities. These are done through several separate functions that are called in sequence. However, exposing these functions introduces risks of incorrect usage if they fail. A more robust design is calling it all within a single initialisation function that correctly calls the order and reduces the chances of failure. This can be seen as the limitation of the current implementation and can be seen being discussed in common engine design practices <sup>[1](#Architecture)</sup>.

Error handling is done through HRESULT values following the function name. While this is good for the debugging stages of the engine, it does expose API-specific details outside of the renderer and assumes that the individual knows DirectX error codes <sup>[2](#ErrorHandling)</sup>. A better approach to this would be through converting these into engine-level error handling, such as booleans to return within a log system to maintain abstraction and help with usability. Debugging within the renderer is handled through simple message box outputs <sup>[3](#MessageBox)</sup>. While this is good at identifying failures during the development of the engine, it is not scalable. A more robust design would integrate HRESULT into a dedicated engine logging system rather than relying on message boxes.

## Device Configuration and Buffer Managment
The renderer prioritises hardware drivers as the main configuration for performance, with fallback support to the Windows Advanced Rasterisation Platform (WARP), a software-based implementation of DirectX, if the hardware implementation is unavailable <sup>[4](#DriverConfiguration)</sup>. 
```c++
D3D_DRIVER_TYPE driverTypes[] =
{
    D3D_DRIVER_TYPE_HARDWARE,
    D3D_DRIVER_TYPE_WARP,
};
```
Feature levels are configured to support Shader Model 5, this is done to allow modern rendering functionality like advanced lighting and flexible shader behaviour <sup>[5](#ShaderModel)</sup>. Furthermore, the renderer attempts to create the highest support feature level before falling back to lower supported versions.
```c++
D3D_FEATURE_LEVEL featureLevels[] =
{
    D3D_FEATURE_LEVEL_11_1,
    D3D_FEATURE_LEVEL_11_0,
};
```

The swap chain is responsible for presenting rendered frames and managing back buffer resources, and the creation depends on the device to ensure compatibility. An attempt at dynamic buffer resizing was attempted, like handling resolution/window size changes <sup>[6](#SwapchainResize)</sup>. However, due to time constraints, this feature wasn't fully completed. Despite that, it does highlight how necessary it is to have in rendering systems since a proper swap chain resize is required to support window resizing and different resolutions. 

During buffer and their description initialisation, memory was cleared through ZeroMemory to ensure that fields were set to known default states before assignment. This prevented undefined behaviour caused by uninitialised data when creating DirectX resources <sup>[7](#ZeroMemory)</sup>. However, this legacy C-style memory handling was later improved to do C++ value initialisation.
```c++
D3D11_BUFFER_DESC constantBufferDesc = {};
```
This does the same result while improving readability and type safety, as value initialisation ensures the buffers are set to well-defined states and reduces risks of uninitialised data <sup>[8](#ValueInitialisation)</sup>. It also reduces the errors that occur when manually clearing memory.

## Reflection
Since DirectX 11 was integrated into the engine through an abstracted renderer design. It could allow other rendering implementations like PS5 and web rendering backends while sharing a common interface. However, upon completion, a number of limitations were discovered. Dynamic swap chain resizing was not present, error handling revealed specific DirectX information outside of the renderer, and initialisation ordering was not completely contained. Furthermore, rather than an engine logging system, a number of debugging implementations were done, like message boxes. Despite the limitations, the implementation is a strong foundation for understanding rendering pipeline setup, GPU resource management, and backend integration within a low-level engine.

## References
<a id="Architecture">1</a>: Gregory, J. (2018). Game Engine Architecture, Third Edition. CRC Press. 

<a id="ErrorHandling">2</a>: stevewhims (2021). Error Handling in COM (Get Started with Win32 and C++) - Win32 apps. [online] Microsoft.com. Available at: https://learn.microsoft.com/en-us/windows/win32/learnwin32/error-handling-in-com.

<a id="MessageBox">3</a>: jwmsft (2023). MessageBoxW function (winuser.h) - Win32 apps. [online] Microsoft.com. Available at: https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-messageboxw.

<a id="DriverConfiguration">4</a>: stevewhims (2024). D3D_DRIVER_TYPE (d3dcommon.h) - Win32 apps. [online] Microsoft.com. Available at: https://learn.microsoft.com/en-us/windows/win32/api/d3dcommon/ne-d3dcommon-d3d_driver_type.

<a id="ShaderModel">5</a>: stevewhims (2020). Shader Model 5 - Win32 apps. [online] Microsoft.com. Available at: https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/d3d11-graphics-reference-sm5.

<a id="SwapchainResize">6</a>: Anti049 (2014). Change resolution in DirectX 11. [online] Stack Overflow. Available at: https://stackoverflow.com/questions/27301550/change-resolution-in-directx-11.

<a id="ZeroMemory">7</a>: Microsoft.com. (2018). ZeroMemory macro (Windows). [online] Available at: https://learn.microsoft.com/en-us/previous-versions/windows/desktop/legacy/aa366920(v=vs.85).

<a id="ValueInitialisation">8</a>: Anon, (n.d.). Available at: https://en.cppreference.com/cpp/language/value_initialization.

[<- Back to Overview](../GraphicsOverview.md)