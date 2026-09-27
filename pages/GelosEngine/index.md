---
layout: page
title: "// Gelos Engine"
tags:
  - C++
  - Engine Programming
  - Porting
  - Team Project
slideshow: true
---

<!-- Gallery Section -->
<section class="project-gallery">

  <!-- Slide 1 -->
  <div class="slide">
    <img src="EnginePlay.gif" alt="Engine Play"
      class="slide-img">
  </div>

  <!-- Slide 2 -->
  <div class="slide">
    <img src="EngineShadows.png" alt="Engine Shadows"
      class="slide-img">
  </div>

  <!-- Slide 3 -->
  <div class="slide">
    <img src="EngineExtras.png" alt="Engine Extras"
      class="slide-img">
  </div>

  <!-- Slide 4 -->
  <div class="slide">
    <img src="EngineWeb.gif" alt="Engine Web"
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
      <img class="demo cursor thumb-img" src="EnginePlay.png" 
        onclick="currentSlide(1)" alt="Mario Playing Scene Gif - A recreation of the first Mario level">
    </div>
    <div class="thumbnail-column">
      <img class="demo cursor thumb-img" src="EngineShadows.png"
        onclick="currentSlide(2)" alt="Four Shadow Types Image - The four shadow types created for different senerios by me">
    </div>
    <div class="thumbnail-column">
      <img class="demo cursor thumb-img" src="EngineExtras.png"
        onclick="currentSlide(3)" alt="Extras Image - This was an extra level created to show some other features of the engine that werne't in the Mario level.">
    </div>
    <div class="thumbnail-column video-thumb">
      <img class="demo cursor thumb-img" src="EngineWeb.png"
        onclick="currentSlide(4)" alt="Engine Web Gif - This was the port to web that I attempted in three days.">
    </div>
  </div>
</section>

<!-- Overview -->
<section class="project-content">
  <div class="project-section-label">// OVERVIEW</div>
  <p> This documentation goes over the overview of the architecture, rendering systems, and platform-specific implementation developed for the engine. The documents are separated into their areas to better explain their reasoning, implementation details and technical limitations of each system.</p>

  <a href="GraphicsOverview.html" class="project-button"> DOCUMENTATION → </a>
</section>

<!-- Key Features -->
<section class="project-content">
  <div class="project-section-label">// KEY FEATURES</div>
  <div class="features">
    <div class="feature-card">
      <h3>GRAPHICS BACKENDS</h3>
      <p>The main graphic backend for this project was DirectX 11, with a full port to PS5 and partial port to the web. 2 members of the team were in charge of this including me.</p>
    </div>
    <div class="feature-card">
      <h3>LIGHTING AND SHADOWS</h3>
      <p>Can have up to 16 lights while maintaining 60+ fps. With three light types: point, spot and direction. And four shadow types: hard shadows, hard shadows+, soft shadows and soft shadows+.</p>
    </div>
    <div class="feature-card">
      <h3>SCOPE AND TEAM PROJECT</h3>
      <p>This engine was developed within three months with 7 members in the team in charage of their own systems, so it was important to have consistent communication.</p>
    </div>
    <div class="feature-card">
      <h3>CUSTOM ENGINE ARCHITECTURE</h3>
      <p>Focused on being cross platform and separating the differances between engine and game(s).</p>
    </div>
  </div>
</section>

<!-- Web Port -->
<section class="project-content">
  <div class="project-section-label">// WEB PORT VERSION</div>
  <p>Note: This doesn't represent the newest state of the engine or what capabilities it has. This was my attempt at porting it over for the web within three days.</p>
  <a href="{{ '/GelosEngine/index.html' | relative_url }}" target="_blank" rel="noopener noreferrer" class="project-button"> LAUNCH WEB PORT →</a>
</section>

<!-- Back -->
<section class="project-content">
  <a href="{{ '/' | relative_url }}" class="project-button"> ← BACK TO HOME </a>
  <a href="{{ '/pages/projects.html' | relative_url }}" class="project-button"> ← BACK TO PROJECTS </a>
</section>