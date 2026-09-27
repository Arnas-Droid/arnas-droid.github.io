# Graphics Overview
**Author:** Arnas

## Engine Architecture and Design
[Game Engine Architecture](Documentation/GameEngineArchitecture.html) - Looks over the scope of the engine, including abstraction between engine systems and game logic.

[Justification for DirectX 11](Documentation/JustificationForDX11.html) -  Has technical and practical reasons for using DirectX 11 as the primary rendering API for the engine. 

## Rendering Systems
[Texture Loader](Documentation/TextureLoader.html) - Covers the research, implementation, and comparison of texture loading used within the engine.

[Lighting and Shadows](Documentation/LightingAndShadows.html) - Explains the implementation of real-time lighting and geometric shadow systems, including the limitations and rendering trade-offs.

## Rendering Backend Implementation
[DirectX 11 Rendering Implementation](Documentation/DirectX11Implementation.html) - Details the DirectX 11 backend, including device creation, swap chain management, buffers and debugging considerations. 

[PS5 Rendering Implementation](GraphicsOverview.html) - Discuss the rendering backend implementation targeting the PS5 (Prospero) platform and having it one-to-one graphically. Note: This has been omitted from the public due to NDA reasons, however my work included the inital implementation, the multi-rendering passes, and porting over the shader logic to work for PS5.

[Web Port Rendering Implementation](Documentation/WebPortImplementation.html) - Explains the implementation considerations and limitations when porting the renderer to OpenGL 3 and Emscripten for the web.

## Artefact Functions
[Artefact Functions](Documentation/ArtefactFunctions.html) - Documents rendering functions used throughout development. 

[<- Back to Gelos Engine]({{ '/pages/GelosEngine/index.html' | relative_url }})