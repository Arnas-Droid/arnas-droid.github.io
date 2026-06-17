# Justification for DirectX 11
**Author:** Arnas
## Introduction
This section will go over the justification of using DirectX 11 as the primary graphic API for the engine. While newer APIs like DirectX 12 and Vulkan can offer improved performance and lower-level hardware control, this project prioritises developing a game engine capable of handling cross-platform builds with a focus on Windows as the development platform quickly. 

## DirectX 11 vs DirectX 12
There are specific advantages and disadvantages of DirectX 12 when it comes to comparing it to DirectX 11. Even more than other APIs since they both heavily focus on developing for Windows. To begin, DirectX 12 offers several performance improvements through reduced CPU overhead and improved GPU usage. The reduced CPU overhead comes from utilising newer threaded multi-core systems that come with Windows 10 and Windows 11. Additionally, the improved GPU usage comes from handing off work from the CPU onto the GPU. With these enhancements it allows the PC to run games smoother and would provide benefits for the engine <sup>[1](#DX11VsDX12)</sup>.

However, developers tend to not use these benefits since DirectX 12 requires more control over the GPU resources and the multi-threaded cores, increasing the time and complexity of development <sup>[2](#DX11VsDX12.2)</sup>. This causes performance to be dependent on how the API is implemented. In some cases a poorly implemented DirectX 12 rendering system would perform worse than DirectX 11.

## DirectX 11 vs Vulkan/OpenGL
Other APIs like Vulkan provide better cross-platform support and lower-level hardware control, whereas DirectX 11 has stronger integration with Windows, which is the priority. Furthermore, it leans into being more accessible and works well for our low-level engine and scope. There are more benefits and negatives seen below in the diagram <sup>[3](#DX11vsVulkan)</sup>. 

| Criteria         | Vulkan                                       | DirectX 11                                       |
| ---------------- | -------------------------------------------- | ------------------------------------------------ |
| Platform Support | Cross-platform (Windows, Linux, Android)     | Strong integration with Windows                  |
| API Level        | Low level hardware API                       | Higher level hardware API                        |
| Complexity       | High due to precise control over hardware    | Lower since handled by the API                       |
| Performance      | High potential, depends on implementation    | More consistent performance, less explicit control                  |
| Use Case         | Large-scale, performance-critical systems    | Small to mid-scale engines and rapid development |
| | This diagram shows comparisons between Vulkan and DirectX 11 | |

OpenGL and DirectX 11 can achieve similar performance levels in practice, as both graphics APIs rely on how efficiently they are implemented <sup>[4](#DXvsOpenGL)</sup>. However, DirectX 11 offers more consistent performance on Windows due to its tighter integration with the operating systems and drivers, this doesn't apply to all cases. This is due to performance differences between the two, which are often API design and driver behaviour. This can be seen in early versions of OpenGL, which performance relied on driver-side optimisation and led to inconsistent performance across hardware <sup>[4](#DXvsOpenGL)</sup>. Later versions of OpenGL introduced more explicit control for lower driver overhead and improved predictability. 

Comparatively, DirectX 11 was designed for Windows platforms and is part of the DirectX ecosystem <sup>[5](#DX11Family)</sup>. This allows for more consistent behaviour across supported hardware and stronger integration with development tools. Given that the project focuses on Windows and the need for stability and functionality. The comparison in the table below highlights the trade-offs between OpenGL and DirectX 11.

| Criteria          | OpenGL                                    | DirectX 11                        |
| ----------------- | ----------------------------------------- | --------------------------------- |
| Platform Support  | Cross platform (Windows, Linux, macOS)    | Windows and Xbox                  |
| Driver Dependence | High reliance on drivers                  | More consistent on Windows        |
| Complexity        | Moderate, less structured                 | Lower with better tooling support |
| Performance       | Varies depending on driver implementation | More stable and predictable       |
| Use Case          | Cross platform capabilities               | Window focused development        |
| | This diagram highlights the comparisons between OpenGL and DirectX 11 | |

## DirectX 11 considerations
There is a strong real-world justification as to why DirectX 11 was chosen. Familiarity among the team since everyone worked with it at some point, especially the graphics team, allows the development to be efficient and reduce implementation errors. This was especially important given the constraints of the project, as it minimised the need to learn a new API while building core engine systems. 

While newer APIs like DirectX 12 provide lower-level control over GPU resources and multithreading, this was not required for the scope of the engine. The project focuses on building functional and maintainable rendering systems rather than maximising performance at a low level. As a result, introducing explicit control from DirectX 12 would increase unnecessary development time through manual resource management and explicit synchronisation <sup>[6](#DX12Guide)</sup>. Comparing this to DirectX 11, which operates at a higher level with more responsibility handled by the driver. This makes the implementation easier to debug and iterate over, making it better for small-scale engine development <sup>[7](#Scalability)</sup>. Finally, DirectX 11 is Windows-specific, but the renderer was integrated into an abstracted rendering architecture, allowing alternative backends like the PS5 and web rendering to be implemented separately.

## Uses for engine support
When looking at some modern game engines that support varying graphics APIs as backends like DirectX 11, DirectX 12, and Vulkan, there is Unity, whose needs of the project can choose any of the graphics APIs listed <sup>[8](#UnityUse)</sup>. This is similar to Unreal Engine <sup>[9](#UnrealUse)</sup>. While newer APIs are typically used in demanding or large-scale projects, they continue to use DirectX 11 due to its reliability. For this project having a similar approach but a smaller scale allows the engine to maintain flexibility in the future while prioritising a well-understood foundation during development. 

## Conclusions
While DirectX 12 and Vulkan offer varying benefits from greater performance and cross-compatibility, this would be undoubtedly dependent on how it is implemented and would have higher risks due to unfamiliarity. While OpenGL offers a similarly big range of cross-compatibility, its reliance on driver implementation would lead to inconsistent performance. Given the scope, goal alignments and familiarity, DirectX 11 was the most suitable choice for the project due to fitting the needs.

## Summary
- Porting will be difficult no matter the API and it's more important to have it working well as a game engine for windows.
- Familiarity with DirectX 11 allows everyone to have an easier time when it comes to working with it, especially for the graphics team.

## References
<a id="DX11VsDX12">1</a>: Peterson, J. (2023). Directx 11 Vs Directx 12 Complete Performance Comparison. [online] windowsreport. Available at: https://windowsreport.pages.dev/posts/directx-11-vs-directx-12-complete-performance-comparison/.

<a id="DX11VsDX12.2">2</a>: Wardell, B. (2019). DirectX 11 vs. DirectX 12 oversimplified. [online] Littletinyfrogs.com. Available at: https://littletinyfrogs.com/article/460524/directx-11-vs-directx-12-oversimplified/.

<a id="DX11vsVulkan">3</a>: Team, G2A.COM.E. (2024). Vulkan vs DX11: An In-Depth Comparison. [online] G2A News. Available at: https://www.g2a.com/news/features/vulkan-vs-dx11-comparison/.

<a id="DXvsOpenGL">4</a>: Garbett, S.L. (2022). OpenGL vs. DirectX: Which Should You Use for Game Development? [online] MUO. Available at: https://www.makeuseof.com/opengl-vs-directx-game-development-best/.

<a id="DX11Family">5</a>: GrantMeStrength (2022). DirectX graphics and gaming - Win32 apps. [online] learn.microsoft.com. Available at: https://learn.microsoft.com/en-us/windows/win32/directx.

<a id="DX12Guide">6</a>: stevewhims (2021). Direct3D 12 programming guide - Win32 apps. [online] learn.microsoft.com. Available at: https://learn.microsoft.com/en-us/windows/win32/direct3d12/directx-12-programming-guide.

<a id="Scalability">7</a>: Luna, F.D. (2012). Introduction to 3D game programming with Directx 11. Dulles, Virginia: Mercury Learning And Information.

<a id="UnityUse">8</a>: Technologies, U. (n.d.). Unity - Manual: Graphics API support. [online] docs.unity3d.com. Available at: https://docs.unity3d.com/Manual/GraphicsAPIs.html.

<a id="UnrealUse">9</a>: Epicgames.com. (2026). Securly - Geolocation sharing. [online] Available at: https://dev.epicgames.com/documentation/unreal-engine/hardware-and-software-specifications-for-unreal-engine.

[<- Back to Overview](../GraphicsOverview.md)