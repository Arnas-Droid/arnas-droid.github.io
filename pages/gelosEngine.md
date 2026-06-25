---
layout: page
title: "Gelos Engine"
tags:
  - C++
  - Engine Programming
  - Porting
  - Team Project
slideshow: true
---

<!-- Gallery Section -->
<section class="project-gallery">
<!-- Slide 1 (Blank Scene) -->
<div class="slide">
  <img
    src="{{ site.baseurl }}/assets/GelosEngine/EngineBlankScene.png"
    alt="Blank Scene" class="slide-img">
</div>

<!-- Slide 2 (Mario Scene) -->
<div class="slide">
  <img
    src="{{ site.baseurl }}/assets/GelosEngine/EngineMarioScene.png"
    alt="Mario Scene" class="slide-img">
</div>

<!-- Slide 3 (Mario Playing) -->
<div class="slide">
  <img
    src="{{ site.baseurl }}/assets/GelosEngine/EngineMarioPlaying.png"
    alt="Mario Playing" class="slide-img">
</div>

<!-- Slide 4 (Shadows) -->
<div class="slide">
  <img
    src="{{ site.baseurl }}/assets/GelosEngine/EngineShadows.png"
    alt="Shadows" class="slide-img">
</div>

<!-- Navigation -->
<button class="prev" onclick="plusSlides(-1)" aria-label="Previous slide">❮</button>
<button class="next" onclick="plusSlides(1)" aria-label="Next slide">❯</button>

<!-- Caption -->
<div class="caption-containerSlide"> <p id="caption"></p> </div>

<!-- Thumbnails -->
<div class="thumbnail-row">
    <div class="thumbnail-column">
      <img
        class="demo cursor thumb-img"
        src="{{ site.baseurl }}/assets/GelosEngine/EngineBlankScene.png"
        onclick="currentSlide(1)" alt="Blank Scene Image">
    </div>
    <div class="thumbnail-column">
      <img
        class="demo cursor thumb-img"
        src="{{ site.baseurl }}/assets/GelosEngine/EngineMarioScene.png"
        onclick="currentSlide(2)" alt="Mario Scene Image">
    </div>
    <div class="thumbnail-column">
      <img
        class="demo cursor thumb-img"
        src="{{ site.baseurl }}/assets/GelosEngine/EngineMarioPlaying.png"
        onclick="currentSlide(3)" alt="Mario Playing Image">
    </div>
    <div class="thumbnail-column">
      <img
        class="demo cursor thumb-img"
        src="{{ site.baseurl }}/assets/GelosEngine/EngineShadows.png"
        onclick="currentSlide(4)" alt="Four Shadow Types Image">
    </div>
  </div>
</section>

<!-- Overview -->
<section class="project-content">
  <h3>Overview</h3>
  <p>This documentation goes over the overview of the architecture, rendering systems, and platform-specific implementation developed for the engine. The documents are separated into their areas to better explain their reasoning, implementation details and technical limitations of each system.</p>
  <a href="{{ '/assets/GelosEngine/GraphicsOverview.html' | relative_url }}" class="btn">📋 Documentation</a>
</section>

<section class="project-content">
  <h3>Web Port Verison</h3>
  <h5>Note: This doesn't represent the newest state of the engine or what capabilities it has. This was an attempt at porting it over for the web within three days.</h5>
  <a href="{{ '/GelosEngine/index.html' | relative_url }}" target="_blank" rel="noopener noreferrer">Launch Web Port</a>
</section>