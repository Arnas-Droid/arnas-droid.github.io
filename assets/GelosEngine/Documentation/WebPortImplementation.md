# Web Port Rendering Implementation
**Author:** Arnas
## Introduction
This section will go over the implementation of the web rendering backend using Emscripten and WebGL 2. The goal was to integrate the web port into the engine rendering pipeline, enabling it to run inside the browser while maintaining similar rendering behaviour to the Windows implementation (base implementation). The renderer reused the engine's abstracted layer already developed by another member for DirectX 11 and Prospero (PS5), allowing platform-specific behaviour to be implemented while still maintaining shared engine systems. Initially WebGPU was considered to be done through Google's Dawn due to its modern graphic features and debugging support [1](#DawnGoogle)</sup>. However, due to time constraints and additional complexity that comes from integrating WebGPU into the existing engine, Emscripten and WebGL 2 were selected [2](#Emscripten)</sup>. This allowed the engine to be compiled in C++ for WebAssembly while still supporting programmable shaders and framebuffer operations through OpenGL ES.

## Emscipten Integration and Hosting
### Emscipten Integration
The web renderer, while implemented through OpenGL 3, was built using Emscripten, which compiled the native C++ code into WebAssembly for running it in the browser [2](#Emscripten)</sup>. Setting up Emscripten required the right configuration of variables, file paths and command-line build commands. To simplify this workflow, a command prompt cheat sheet was created to help with repeated build commands and reduce setup errors between systems:
```bash
emcc main.cpp GameEngine.cpp GameObject.cpp BaseRenderer.cpp WebRenderer.cpp TextureManager_web.cpp -o index.html -s USE_WEBGL2=1 -s FULL_ES3=1 -s ALLOW_MEMORY_GROWTH=1 -sASSERTIONS=2 --preload-file smile.png
```
This enabled the following functionality:
- WebGL 2 support.
- OpenGL ES 3 functionality.
- Dynamic memory growth.
- Preloading texture resources into the browser filesystem.

During development, additional debugging flags were used:
```bash
-sSAFE_HEAP=1 
-sSTACK_OVERFLOW_CHECK=2 
-gsource-map
```
While this improved debugging support, source maps exposed internal source files and platform-specific code, making it unsuitable for public hosting. This highlighted limitations in debugging browser workflows since development and release builds required separate configurations.

### Hosting
While the project could be built and hosted locally, to demonstrate the rendering working outside of development, the project was hosted publicly, and anyone with the four index files created from the build could host it publicly as well [3](#WebPortHost)</sup>. Local hosting is useful for developing and testing, this was even more so since public hosting introduced additional concerns with source file exposure and asset packaging. All it achieved was highlighting differences between native development and released browser builds, particularly when it came to debugging information, asset loading, and browser security restrictions.

## Rendering Pipeline
The web renderer reused the engine's abstracted multipass structure by separating rendering into scene pass, lighting pass, and final pass. First the scene pass rendered the textured sprites into a framebuffer texture, while the lighting pass applied point and spot lights through a full-screen quad using additive blending [4](#WebBlending)</sup>. These framebuffer objects were used to render intermediate textures before combining them into a final image for the browser's back buffer [5](#WebMultiPass)</sup> [6](#WebRenderToTarget)</sup>. This is similar to what multi-pass rendering does in DirectX 11 and PS5, demonstrating that the rendering abstraction could function past the first port of a different API. The GLSL ES shaders were implemented for WebGL 2 compatibility [7](#WebGLShaders)</sup>. For the fullscreen pass there was trouble in finding information on a triangle version, so instead it was performed using a fullscreen geometry quad rendered in normalised device coordinates. This simplified its post-processing and lighting calculations while reducing unnecessary scene rendering during the lighting pass [8](#WebFullscreen)</sup>. 

Instead of an abstracted texture manager, a temporary loader was created due to time constraints and could be replaced in the future. This would upload an OpenGL-formatted texture and get bound during rendering before drawing the sprite geometry using the created vertex buffers and index buffers. Then objects would use the transformation matrices built through GLM to position, rotate, and scale the sprites similar to how the other renderers do it. Also, an attempt was made to get an abstracted camera in, but instead a temporary orthographic camera was created [9](#WebCamera)</sup>. Additional blending was attempted between lights and shadows, but since shadows weren't implemented, it was lights that got blending only [4](#WebBlending)</sup>.

## Limitations and Reflection
### Limitations
Several limitations were identified during the development of the web renderer:
- Most of the limitations came from Emscripten requiring it to be rebuilt every time the web port changed, which slowed the number of iterations. 
- Additionally, debugging the browser was restrictive compared to other platforms like Windows since Visual Studio can't be used to pause the compiler. 
- Important engine systems like the camera and texture manager were attempted but not fully implemented.
- Another problem was that the implementation heavily relied on manual shader setup and OpenGL state management.
- WebGPU 2 limitations reduced flexibility compared to other APIs like DirectX 11.
- Finally, while the renderer supported multi-pass rendering and lighting, shadow rendering was not fully integrated into the web implementation due to time constraints.

### Reflection
While limited time made it hard to implement even most of the rendering systems, the implementation demonstrated again that other graphic APIs can be used within the engine pipeline, which does allow for more ports. It also did replicate some core systems like game objects, framebuffer usage, and multipass rendering. The project highlighted the challenges that came from adapting native rendering systems to the web. Compared to DirectX 11, the web renderer required additional considerations for build systems, browser compatibility, shader restrictions, and deployment workflows. Additionally, there were other approaches considered, such as WebGPU through Google's Dawn, but Emscripten proved to be a more practical solution within the project scope, this is from its easier integration into the existing engine architecture. Overall, the implementation provided a strong introduction into browser graphics programming and demonstrated how the engine's pipeline can be used across multiple platforms while maintaining similar rendering workflows.

## Commnad Sheet
This was the command prompt cheat sheet used during development:

[Command Sheet Cheat](../Resources/EmscriptenCheatSheet.txt) - For building quickly

[Command Sheet Cheat](EmscriptenCheatSheet.md) - For documenation

## References: 
<a id="DawnGoogle">1</a>: dawn.googlesource.com. (n.d.). dawn - Git at Google. [online] Available at: https://dawn.googlesource.com/dawn.

<a id="Emscripten">2</a>: emscripten.org. (n.d.). Main — Emscripten 2.0.7 documentation. [online] Available at: https://emscripten.org/.

<a id="WebPortHost">3</a>: Arnas Puidokas. (2008). Gelos Engine. [online] Available at: https://arnas-droid.github.io/2008/01/01/gelosEngine.html.

<a id="WebBlending">4</a>: learnopengl.com. (n.d.). LearnOpenGL - Blending. [online] Available at: https://learnopengl.com/Advanced-OpenGL/Blending.

<a id="WebMultiPass">5</a>: learnopengl.com. (n.d.). LearnOpenGL - Framebuffers. [online] Available at: https://learnopengl.com/Advanced-OpenGL/Framebuffers.

<a id="WebRenderToTarget">6</a>: Webglfundamentals.org. (2026). WebGL Rendering to a Texture. [online] Available at: https://webglfundamentals.org/webgl/lessons/webgl-render-to-texture.html.

<a id="WebGLShaders">7</a>: Ruta, D. (2017). Using WebGL shaders in WebAssembly. [online] Medium. Available at: https://medium.com/free-code-camp/how-to-use-webgl-shaders-in-webassembly-1e6c5effc813.

<a id="WebFullscreen">8</a>: Oakes, M. (2010). What’s the best way to draw a fullscreen quad in OpenGL 3.2? [online] Stack Overflow. Available at: https://stackoverflow.com/questions/2588875/whats-the-best-way-to-draw-a-fullscreen-quad-in-opengl-3-2.

<a id="WebCamera">9</a>: learnopengl.com. (n.d.). LearnOpenGL - Camera. [online] Available at: https://learnopengl.com/Getting-started/Camera.

[<- Back to Overview](../GraphicsOverview.md)