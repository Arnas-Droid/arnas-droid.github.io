---
layout: page
title: "// Bespoke Platform Devlopment"
tags:
  - C++
  - Evercade
  - Porting
  - Visual Studio
slideshow: true
---

<!-- Gallery Section -->
<section class="project-gallery">

  <!-- Slide 1 -->
  <div class="slide" style="text-align: center;">
    <iframe src="https://www.youtube.com/embed/gguMz9gUZwM" title="Windows Demo Trailer"
      frameborder="0" allowfullscreen>
    </iframe>
  </div>

  <!-- Slide 2 -->
  <div class="slide" style="text-align: center;">
    <iframe src="https://www.youtube.com/embed/KOD4hRejCro" title="Evercade Demo Trailer"
      frameborder="0" allowfullscreen>
    </iframe>
  </div>

  <!-- Slide 3 -->
  <div class="slide">
    <img src="BespokeWindowsMainMenu.png" alt="Main Menu (Windows)"
      class="slide-img">
  </div>

  <!-- Slide 4 -->
  <div class="slide">
    <img src="BespokeEvercadeLevel1.png" alt="Level 1 Image"
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
      <img class="demo cursor thumb-img" src="BespokeWindowsMainMenu.png"
        onclick="currentSlide(1)" alt="Windows Demo Trailer">
    </div>
    <div class="thumbnail-column video-thumb">
      <img class="demo cursor thumb-img" src="BespokeEvercadeMainMenu.png"
        onclick="currentSlide(2)" alt="Evercade Demo Trailer">
    </div>
    <div class="thumbnail-column">
      <img class="demo cursor thumb-img" src="BespokeWindowsMainMenu.png"
        onclick="currentSlide(3)" alt="Main Menu of the game on Windows image">
    </div>
    <div class="thumbnail-column">
      <img class="demo cursor thumb-img" src="BespokeEvercadeLevel1.png"
        onclick="currentSlide(4)" alt="Level 1 on the Evercade image">
    </div>
  </div>
</section>

<!-- Overview -->
<section class="project-content">
  <div class="project-section-label">// OVERVIEW</div>
  <p>During this project I created a game that was ported to the Evercade after following the proper procedure when creating a game. This included a research period, development period and porting period. It taught me how to investigate game design principles and project management, which without I wouldn’t have been able to create a fully fledge out game that was ported. Common struggles involved were porting to Evercade since it wasn’t as simple as pressing a couple of buttons and having worked on it so much throughout the period of the project, I devised my own method of step by step that always worked.</p>
</section>

<!-- Key Features -->
<section class="project-content">
  <div class="project-section-label">// KEY FEATURES</div>
  <div class="features">
    <div class="feature-card" onclick="location.href='#tilebasedmovement'">
      <h3>Production Pipeline</h3>
      <p>Developed a full game that followed a full production pipeline including research, development, and porting to Evercade.</p>
    </div>
    <div class="feature-card">
      <h3>Documentation</h3>
      <p>Created a custom porting cheat sheet to complete the Evercade porting process successfully each time.</p>
    </div>
  </div>
</section>

<!-- Back -->
<section class="project-content">
  <a href="{{ '/' | relative_url }}" class="project-button"> ← BACK TO HOME </a>
  <a href="{{ '/pages/projects.html' | relative_url }}" class="project-button"> ← BACK TO PROJECTS </a>
</section>