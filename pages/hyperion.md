---
layout: page
title: "Hyperion"
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

<!-- Slide 1 (Video) -->
<div class="slide" style="text-align: center;">
  <iframe
    src="https://www.youtube.com/embed/T4ldQ39IFHo"
    title="City Volumetric Fog Video" frameborder="0" allowfullscreen>
  </iframe>
</div>

  <!-- Slide 2 (Video) -->
<div class="slide" style="text-align: center;">
  <iframe
    src="https://www.youtube.com/embed/5bgFFMmbUfE"
    title="Showroom Video" frameborder="0" allowfullscreen>
  </iframe>
</div>

<!-- Slide 3 (City Fog) -->
<div class="slide">
  <img
    src="{{ site.baseurl }}/assets/Hyperion/VolumetricFogClear.png"
    alt="Showroom" class="slide-img">
</div>

<!-- Slide 4 (Showroom (Volumetric Pass)) -->
<div class="slide">
  <img
    src="{{ site.baseurl }}/assets/Hyperion/HyperionShowroomVolumetric.png"
    alt="Showroom (Volumetric Pass)" class="slide-img">
</div>

<!-- Navigation -->
<button class="prev" onclick="plusSlides(-1)" aria-label="Previous slide">❮</button>
<button class="next" onclick="plusSlides(1)" aria-label="Next slide">❯</button>

<!-- Caption -->
<div class="caption-containerSlide"> <p id="caption"></p> </div>

<!-- Thumbnails -->
<div class="thumbnail-row">
    <div class="thumbnail-column video-thumb">
      <img
        class="demo cursor thumb-img"
        src="{{ site.baseurl }}/assets/Hyperion/HyperionVolumetricFog.png"
        onclick="currentSlide(1)" alt="City Volumetric Fog Video">
    </div>
    <div class="thumbnail-column video-thumb">
      <img
        class="demo cursor thumb-img"
        src="{{ site.baseurl }}/assets/Hyperion/HyperionShowroom.png"
        onclick="currentSlide(2)" alt="Showroom Video">
    </div>
    <div class="thumbnail-column">
      <img
        class="demo cursor thumb-img"
        src="{{ site.baseurl }}/assets/Hyperion/VolumetricFogClear.png"
        onclick="currentSlide(3)" alt="Volumetric Fog Image">
    </div>
    <div class="thumbnail-column">
      <img
        class="demo cursor thumb-img"
        src="{{ site.baseurl }}/assets/Hyperion/HyperionShowroomVolumetric.png"
        onclick="currentSlide(4)" alt="Showroom (Volumetric Pass) Image">
    </div>
  </div>
</section>

<!-- Overview -->
<section class="project-content">
  <h3>Overview</h3>
  <p>This project looks at creating realistic and optimised volumetric lighting/fog. Fully built up from the ground up from the architecture of the framework, object loader, texture manager and much more. Works best with volume-bound volumetric lighting, which allows cities to be encased in volumetric fog and particle lights in a showroom. Currently looking into compute shaders.</p>
</section>

<!-- Next Steps -->
<h2 class="tech-title">Next Steps</h2>

- Compute shaders.
- Documentation.

<!-- Documentation -->
<h2 class="tech-title">Documentation</h2>
  <a href="{{ '/assets/Hyperion/Documentation/Overview.html' | relative_url }}" class="btn">📋 Documentation</a>