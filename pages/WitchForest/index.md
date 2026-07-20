---
layout: page
title: "The Witch Forest"
tags:
  - C++ 
  - DirectX 11
  - Graphics Programming
  - Shaders
slideshow: true
---

<!-- Gallery Section -->
<section class="project-gallery">

<!-- Slide 1 -->
<div class="slide" style="text-align: center;">
  <iframe 
    src="https://www.youtube.com/embed/hXlKtwVcpxY" title="Witch Forest Trailer"
    frameborder="0" allowfullscreen>
  </iframe>
</div>

<!-- Slide 2 -->
<div class="slide">
  <img src="MainScene.png" alt="Witch Forest Screenshot" class="slide-img">
</div>

<!-- Slide 3 -->
<div class="slide">
  <img src="MainScene(Wireframe).png" alt="Witch Forest Screenshot" class="slide-img">
</div>

<!-- Slide 4 -->
<div class="slide">
  <img src="Transparency.png" alt="Witch Forest Screenshot" class="slide-img">
</div>

<!-- Navigation -->
<button class="prev" onclick="plusSlides(-1)" aria-label="Previous slide">❮</button>
<button class="next" onclick="plusSlides(1)" aria-label="Next slide">❯</button>

<!-- Caption -->
<div class="caption-containerSlide">
  <p id="caption"></p>
</div>

<!-- Thumbnails -->
<div class="thumbnail-row">
  <div class="thumbnail-column video-thumb">
    <img class="demo cursor thumb-img" src="MainScene.png" onclick="currentSlide(1)" alt="Demo Trailer">
  </div>
  <div class="thumbnail-column">
    <img class="demo cursor thumb-img" src="MainScene.png" onclick="currentSlide(2)" alt="Main Scene showcasing game objects and more">
  </div>
  <div class="thumbnail-column">
    <img class="demo cursor thumb-img" src="MainScene(Wireframe).png" onclick="currentSlide(3)" alt="Main Scene, but with wireframe state">
  </div>
  <div class="thumbnail-column">
    <img class="demo cursor thumb-img" src="Transparency.png" onclick="currentSlide(4)" alt="Transparency applied to trees">
  </div>
</div>
</section>

<!-- Overview -->
<section class="project-content">
  <h3>Overview</h3>
  <p>The project aimed at creating a real-time 3D environment using DirectX 11, implementing custom vertex and pixel shaders for the rendering pipeline to manage object transformations, lighting models and shading. Drawing inspiration from my heritage, I created the <strong>Witch Forest</strong> to demonstrate technical graphic skills.</p>
  <p>A key challenge was designing a hierarchical scene graph to manage an object's transformation and relationship to other objects. While the system was successful in doing both to an extent and highlighted initial design flaws from the beginning. This ultimately still had problems with struggling to maintain child-parent relationships with more than 1 parent. Even with that, this remains to still be one of my favourite projects since it showed me what graphic programming is capable of.</p>
</section>

<!-- Key project features -->
<h3>Key Features</h3>
<section class="features">
  <div class="feature-card" onclick="location.href='#directx11'">
    <h3>DirectX 11 Pipeline</h3>
    <p>Learning about custom rendering pipelines, buffers and shaders.</p>
  </div>
  <div class="feature-card" onclick="location.href='#scene'">
    <h3>Scene Hierarchy</h3>
    <p>Recursive parent-child transformations.</p>
  </div>
  <div class="feature-card" onclick="location.href='#json'">
    <h3>JSON Breakdown</h3>
    <p>JSON system for runtime lighting parameters.</p>
  </div>
</section>

<!-- Technical Breakdown -->
<section class="project-content">
  <h2 class="tech-title">Technical Breakdown</h2>

<!-- Card 1 -->
<div class="tech-card" id="directx11">
  <div class="tech-text">
    <h3>DirectX 11</h3>
    <h4>Graphics Pipeline</h4>
    <p>While not a feature/system of the artefact, this project is where I learnt a lot of fundamental knowledge for DirectX 11. Started with learning the theoretical knowledge of the graphics pipeline and worked with the input assembler to feed data through. Vertex shader for transforming the geometry and the pixel shader for texturing and colouring.</p>
    <h4>Buffers and Resources</h4>
    <p>Used vertex buffers to store the positions, normals, and texture coordinates of the object. While an index buffer was used to define how the triangle would use the same vertices for efficiency. Lastly, a constant buffer for storing the transform matrices, the lighting data, and camera properties.</p>
  </div>
  <div class="tech-image"> 
    <img src="DX11Pipeline.png" alt="DX11Pipeline">
  </div>
</div>

<!-- Card 2 -->
<div class="tech-card" id="scene">
  <div class="tech-text">
    <h3>Scene Hierarchy</h3>
    <p>This system was built for rendering game objects, applying their textures, applying their transforms and drawing meshes recursively through a hierarchical scene graph structure.</p>
  <div class="tech-code">
<pre><code>
XMMATRIX newChild = _GameObjects[i]->_transform * base;
_GameObjects[i]->DrawGameObjects(_immediateContext, newChild, cbdata, constantbuffer, mappedSubresource);
</code></pre>
  </div>
  <p>The code above shows the example of the recursive nature where it would multiply the parent's transform (base) with the current child's transform (game objects).</p>
  <div class="tech-code">
<pre><code>
_immediateContext->IASetVertexBuffers(0, 1, &GetMeshData()->VertexBuffer, &GetMeshData()->VBStride, &GetMeshData()->VBOffset);
_immediateContext->IASetIndexBuffer(GetMeshData()->IndexBuffer, DXGI_FORMAT_R16_UINT, 0);
_immediateContext->DrawIndexed(GetMeshData()->IndexCount, 0, 0);
</code></pre>
  </div>
  <p>The code above shows how the vertex and index buffers are set, with this being crucial when it comes to drawing the object.</p>
  <p>Lastly, to improve the system, instead of sending data to the constant buffer for each object, it would be better to send it all at once. Then there are specific hard-coded conditions like checking the object index, which could be removed and added as a check. The last concern is the fact the hierarchy only cares about the parent object, which is blank and nothing else due to its nature. This could be improved to add children objects and add the associated logic with that.</p>
  </div>
  <div class="tech-image">
    <img src="MainScene.png" alt="MainScene">
  </div>
</div>

<!-- Card 3 -->
<div class="tech-card" id="json">
  <div class="tech-text">
  <h3>JSON Breakdown</h3>
  <p>The image shows an example of JSON data that will be parsed at runtime. This specific file houses lighting parameters, which are used for the lighting in the artefact.</p> 
  <div class="tech-code">
<pre><code>
json jFile;
std::ifstream fileOpen("JSON/LightingFormat.json");
jFile = json::parse(fileOpen);
json& objects = jFile["Lighting"]; //Gets an array
int size = objects.size(); //Size of array
for (unsigned int i = 0; i < size; i++)
{
  LightingStruct g;
  json& objectDesc = objects.at(i);
  g.DiffuseLight.x = objectDesc["DiffuseLight"][0];
  g.DiffuseLight.y = objectDesc["DiffuseLight"][1];
  g.DiffuseLight.z = objectDesc["DiffuseLight"][2];
  g.DiffuseLight.w = objectDesc["DiffuseLight"][3];
}
</code></pre>
  </div>
  <p>Doing parsing from the code sample above into a lighting struct that matches the structure of JSON keys. This is then sent to the GPU via a constant buffer using similar logic without the need to parse, of course. When the constant buffer is set, the shader can use the data from the lighting parameters during rendering. Using JSON files is a good way to manage lighting parameters that can be modified quickly.</p>
  <p>To accomplish the task, it used the nlohmann version of JSON, and while there were other options like YAML, I felt at the time JSON was the easiest to implement. Lastly, ways to improve this would be moving the logic out of the game object class and having a separate class manage data like this. As a safety measure, adding error handling, e.g., file existing, fallbacks, etc., would help catch anything wrong without picking apart the code for hours.</p>
  </div>
  <div class="tech-image">
    <img src="LightingJSON.png" alt="LightingJSON">
  </div>
</div>
</section>