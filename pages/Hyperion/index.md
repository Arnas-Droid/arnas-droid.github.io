---
layout: page
title: "// Hyperion"
tags:
  - C++
  - DirectX 11 / 12
  - Rendering Engine
  - Real-Time Graphics
  - Performance Optimisation
slideshow: true
---

<!-- Gallery Section -->
<section class="project-gallery">

  <!-- Slide 1 -->
  <div class="slide">
    <img src="HyperionVolumetricFogGif.gif" alt="Hyperion Gif"
      class="slide-img">
  </div>

  <!-- Slide 2 -->
  <div class="slide">
    <img src="HyperionMain.png" alt="Hyperion Main Image"
      class="slide-img">
  </div>

  <!-- Slide 3 -->
  <div class="slide">
    <img src="HyperionShowroom.png" alt="Hyperion Showroom"
      class="slide-img">
  </div>

  <!-- Slide 4 -->
  <div class="slide">
    <img src="HyperionEditor.png" alt="Hyperion Editor"
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
      <img class="demo cursor thumb-img" src="HyperionMain.png"
        onclick="currentSlide(1)" alt="Hyperion gif">
    </div>
    <div class="thumbnail-column">
      <img class="demo cursor thumb-img" src="HyperionMain.png"
        onclick="currentSlide(2)" alt="Volumetric Fog City">
    </div>
    <div class="thumbnail-column">
      <img class="demo cursor thumb-img" src="HyperionShowroom.png"
        onclick="currentSlide(3)" alt="Volumetric Showroom">
    </div>
    <div class="thumbnail-column">
      <img class="demo cursor thumb-img" src="HyperionEditor.png"
        onclick="currentSlide(4)" alt="Hyperion Editor">
    </div>
  </div>
</section>

<!-- Overview -->
<section class="project-content">
  <div class="project-section-label">// OVERVIEW</div>
  <p> This project looks at creating realistic and optimised volumetric lighting/fog. Fully built up from the ground up from the architecture of the framework, object loader, texture manager and much more.  Works best with volume-bound volumetric lighting, which allows cities to be encased in volumetric fog and particle lights in a showroom. Currently looking into DirectX 12.</p>
</section>

<!-- Key Features -->
<section class="project-content">
  <div class="project-section-label">// KEY FEATURES</div>
  <div class="features">
    <div class="feature-card">
      <h3>VOLUMETRIC LIGHTING</h3>
      <p>Real-time volumetric lighting and fog using volume-bound lighting calculations.</p>
    </div>
    <div class="feature-card">
      <h3>DIRECTX 11 / 12</h3>
      <p>Rendering architecture developed around DirectX 11 and DirectX 12.
      </p>
    </div>
    <div class="feature-card">
      <h3>REAL-TIME FOG</h3>
      <p>Real-time volumetric fog with configurable density, decay, exposure, colour and sample settings.</p>
    </div>
    <div class="feature-card">
      <h3>PERFORMANCE</h3>
      <p>The renderer includes GPU-focused techniques and configurable rendering settings for investigating performance.</p>
    </div>
  </div>
</section>

<!-- Documentation -->
<section class="project-content">
  <div class="project-section-label">// DOCUMENTATION</div>
  <p>Technical documentation covering the project and its implementation.</p>
  <a href="Documentation\Overview.html" class="project-button"> VIEW DOCUMENTATION → </a>
</section>

<!-- Back -->
<section class="project-content">
  <a href="{{ '/' | relative_url }}" class="project-button"> ← BACK TO HOME </a>
  <a href="{{ '/pages/projects.html' | relative_url }}" class="project-button"> ← BACK TO PROJECTS </a>
</section>