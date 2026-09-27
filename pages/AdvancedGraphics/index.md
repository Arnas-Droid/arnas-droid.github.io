---
layout: page
title: "// Advanced Graphics"
tags: 
  - C++
  - Graphics Programming
  - DirectX 11
  - RenderDoc

slideshow: true
---

<!-- Gallery Section -->
<section class="project-gallery">

  <!-- Slide 1 -->
  <div class="slide" style="text-align: center;">
    <iframe src="https://www.youtube.com/embed/YlJKgl5t5rQ" title="Demo Trailer"
      frameborder="0" allowfullscreen>
    </iframe>
  </div>

  <!-- Slide 2 -->
  <div class="slide">
    <img src="Normals.gif" alt="Normals Shader"
      class="slide-img">
  </div>

  <!-- Slide 3 -->
  <div class="slide">
    <img src="Deferred.gif" alt="Deferred Shader"
      class="slide-img">
  </div>

  <!-- Slide 4 -->
  <div class="slide">
    <img src="PostProcessing.gif" alt="Post Processing Gif" 
      class="slide-img">
  </div>

<!-- Navigation -->
<button class="prev" onclick="plusSlides(-1)" aria-label="Previous slide">❮</button>
<button class="next" onclick="plusSlides(1)" aria-label="Next slide">❯</button>

<!-- Caption -->
<div class="caption-containerSlide"> <p id="caption"></p> </div>

  <!-- Thumbnails -->
  <div class="thumbnail-row">
    <div class="thumbnail-column video-thumb">
      <img class="demo cursor thumb-img" src="AdvancedGraphicsStandard.png" 
        onclick="currentSlide(1)" alt="Demonstration trailer over the project (speaking)">
    </div>
    <div class="thumbnail-column">
      <img class="demo cursor thumb-img" src="AdvancedGraphicsNormals.png"
        onclick="currentSlide(2)" alt="Normals Shader Gif">
    </div>
    <div class="thumbnail-column">
      <img class="demo cursor thumb-img" src="AdvancedGraphicsDeferred.png"
        onclick="currentSlide(3)" alt="Deferred Shader Gif">
      </div>
    <div class="thumbnail-column">
      <img class="demo cursor thumb-img" src="AdvancedGraphicsBoxBlur.png"
        onclick="currentSlide(4)" alt="Post Processing Gif">
    </div>
  </div>
</section>
  
<!-- Overview -->
<section class="project-content">
  <div class="project-section-label">// OVERVIEW</div>
  <p>In this project I explored different 3D rendering techniques like Render to Target (RTT), created different shaders like normals, used graphic profiling to debug my graphics pipeline, and used ImGui to change settings at runtime.</p>
</section>

<!-- Key Features -->
<section class="project-content">
  <div class="project-section-label">// KEY FEATURES</div>
  <div class="features">
    <div class="feature-card" onclick="location.href='#memorytracker'">
      <h3>Scene Manipulation</h3>
      <p>Aimed to create an interactive program through ImGui. Using it for ease of accessing lights and objects through managers.</p>
    </div>
    <div class="feature-card">
      <h3>Shaders</h3>
      <p>Implemented multiple shaders like standard, normals, deferred, hull and post-processing to handle varying logic from how the object interacts with the world to screen passing for post-processing.</p>
    </div>
    <div class="feature-card">
      <h3>Profiling</h3>
      <p>Using graphic profilers like RenderDoc to debug rendering passes. One instance of this was for the G-buffer for the deferred shader.</p>
    </div>
  </div>
</section>

<!-- Technical Breakdown -->
<section class="project-content" id="memorytracker">
  <div class="project-section-label">// TECHNICAL BREAKDOWN</div>

  <h2></h2>
  <h3>Scene Manipulation</h3>
  <p>The scene manipulation in this had light, which would allow the user to manipulate its parameters that change the ID, position, colour, materials colours and more. While the object had parameters that changed where it was, the texture was applied at runtime, and it had a spline camera. There were other variables that could be set at runtime, like the shader, post processing effects and minor other visuals. For improvements, this could have pickable objects with a mouse and more visual aid, like where the light positions are with a gizmo.</p>
  <p style="text-align: center;">
    <a href="SceneManipulation.gif"> <img src="SceneManipulation.gif" style="width: 100%; max-height: 400px; object-fit: contain;"> </a>
    <br>
    <em>This shows of some the custom parameters that can be changed. (Figure is clickable).</em>
  </p>

  <h3>Shaders</h3>
  <p>For the purposes of this project, I created different shaders to do different logic. First I had a shader, which only put it correctly into world space, and then applied the texture to the cube with lighting. Then for the normal shader instead of passing normals to the light like the standard shader, I would pass in a bump map, but this wouldn't be enough since it needs tangent space for the normals to interact with the surface. There were also shaders for post-processing, which would do different visual effects over screen space. Something extra I did was doing tessellation through a hull and domain shader, which created extra triangles through the shader. This would add detail and not be as computational heavy when doing higher definition models. Lastly, a major shader was deferred, which would create a g-buffer to store three sets of textures of the scene. One for ambient, normal and world space. It is common to have depth or maybe even specular, but it depends on the needs of it.</p>
  <p style="text-align: center;">
    <a href="Shaders.gif"> <img src="Shaders.gif" style="width: 100%; max-height: 400px; object-fit: contain;"> </a>
    <br>
    <em>This shows the multiple created shaders for the project. (Figure is clickable).</em>
  </p>

  <h3>Post Processing</h3>
  <p>For post-processing I did Render to Target (RTT) to get a texture from the render pass of the scene. This would get applied to a cube at first, but later on for a fullscreen pass, I did a quad across the screen that got the texture. For an upgrade, this could've been one big triangle since that would be more optimised, and while I didn't encounter it, doing two triangles tends to give a seam line where they are crossing. For the first texture applications to the screen, I did a greyscale across:</p>
  <div class="tech-code">
    <pre><code>
float4 vColor = txDiffuse.Sample(samLinear, IN.Tex);
float gray = dot(vColor.rgb, float3(0.299, 0.587, 0.114));
vColor.rgb = gray;
return vColor;
    </code></pre>
  </div>
  <p>To show other functionality of this, I created a box blur, which would offset the texture pixels by a minor degree, and then did a depth blur, which depending on distance, would be more clear or not.</p>
  <p style="text-align: center;">
    <a href="PostBlur.jpg"> <img src="PostBlur.jpg" style="width: 100%; max-height: 400px; object-fit: contain;"> </a>
    <br>
    <em>This shows of the box blur effect through post processing. Left being standard shader while the right have blur on. (Figure is clickable).</em>
  </p>
</section>

<!-- Back -->
<section class="project-content">
  <a href="{{ '/' | relative_url }}" class="project-button"> ← BACK TO HOME </a>
  <a href="{{ '/pages/projects.html' | relative_url }}" class="project-button"> ← BACK TO PROJECTS </a>
</section>