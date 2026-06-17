# Artefact Functions (Not Finished)
**Author:** Arnas
## DirectX 11 Implementation
Functions:
```c++
HRESULT CreateDeviceAndContext();
```
Used to create the device and device context. Use m_d3dDevice and m_immediateContext if needed or the get functions to get them in other classes.
```c++	
HRESULT CreateSwapChainAndBuffers();
```
Used to create the swap chain and buffers like back buffer, depth, and depth stencil to render to the screen. Plus a constant buffer for later. While also setting them all.
```c++	
HRESULT CreateViewport();
```
 Used to create and set the viewport using the client rect dimensions instead of the constants to ensure alignment. 
```c++	
HRESULT CreateShadersAndInput();
```
Used to create the shaders like the vertex shader and pixel shader. Plus, the input layout. Currently it has positions and texture coordinates (uv). Vertex shader passes along the world, view, projection constant buffers for the positions. While passes texture coordinates directly. Pixel shader gets the texture and outputs it.
```c++	
HRESULT CreateVertexIndexBuffers();
```
Used to create the basic vertex and index buffers for a quad. This includes the positions and texture coordinates.
```c++
HRESULT InitialiseVariables();
```
Some of the variables that are set to include vertex, index and input buffers with the sprite renderer getting created and loaded with one texture. This can be changed later, but should have variables that are consistent throughout the program. Last note we need to figure out how the editor should handle new textures getting added on runtime.
```c++
ID3D11Device* GetDevice() { return m_d3dDevice; }
```
Returns device.
```c++
ID3D11DeviceContext* GetDeviceContext() { return m_immediateContext; }
```
Returns device context.
```c++
void Update(float deltaTime, std::vector<GameObject*>& AllObjects);
```
Order of operations are render the ImGui interface, update the camera, update the constant buffer, clear the back buffer, set shaders, draw sprites. 

All the functions except the last four are to be used to set up the pipeline for DirectX 11. The reason for having two devices, two device contexts and two swap chains is to use newer features of DX11. While it creates itself it goes in order of newest feature level for the hardware and goes down if it can't be created. 

## Sprite Renderer (Original)
Functions:
```c++
SpriteRenderer(ID3D11Device* d3dDevice, ID3D11DeviceContext* deviceContext);
```
Sprite renderer constructor gives the device and device context from renderer for storing to create resources.
```c++
~SpriteRenderer();
```
Sprite renderer destructor releases all shader resource views and sets pointers to nullptr.
```c++
HRESULT LoadSpriteFromTexture(std::string filePath);
```
Loads files like .png, .jpeg, .bmp, .tga, .gifs, and more to a texture that can be used to apply into the quad.
```c++
void DrawSprite(int textureID);
```   
This gets the texture ID to create a temporary shader resource view and bind it for the pixel shader. Finally, it draws the quad with the applied texture.
```c++
ID3D11ShaderResourceView* GetSpriteID(int id) { return m_sprites[id]; }
```      
Returns a pointer to the shader resource view from the given ID.   

Currently the sprite renderer can be used to load 2D textures from files like .png, .jpeg and more. This then can be used to draw them given an ID on a quad. Currently tested to work with 32x32 images and only single images since it doesn't work like a spreadsheet, which would be the next step.

[How to load textures] https://github.com/ocornut/imgui/wiki/Image-Loading-and-Displaying-Examples#example-for-directx11-users

## Multipass Renderer (Original)
Functions:
```c++
void Renderer::SetSritePass()
```
```c++
void Renderer::DrawObject()
```
```c++
void Renderer::SetLightPass()
```
```c++
void Renderer::DrawLight()
```
```c++
void Renderer::SetShadowPass()
```
```c++
void Renderer::DrawShadow()
```
```c++
void Renderer::SetFinalPass()
```
```c++
void Renderer::DrawFullscreen()
```

Note: I didn't do the logic for the polymorthic render, but I was the one that added the passes after the orginal set sprite pass and draw functions.

[<- Back to Overview](../GraphicsOverview.md)