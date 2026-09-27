---
layout: default
title: // Home
---

<!-- About Me -->
<section class="about-section">
  <h2 class="about-title">// ABOUT ME</h2>
  <div class="about-content">
    <div class="about-image"> <div id="hobby-label" class="hobby-label">ARNAS PUIDOKAS</div> <img id="hobby-image" src="{{ site.baseurl }}/assets/ArnasPicture.jpg" alt="Arnas Puidokas"> </div>
      <div class="about-text">
      <h2>BEYOND THE CODE.</h2>
        <p>Hello, my name is <span class="hobby-link" data-image="{{ site.baseurl }}/assets/ArnasPicture.jpg" data-title="ARNAS PUIDOKAS"> Arnas</span>. I work as a game developer with a particular interest in graphics programming and porting.</p>
        <p> Apart from programming, I'm really interested in <span class="hobby-link" data-image="{{ site.baseurl }}/assets/CurrentGame.png" data-title="FINAL FANTASY XVI"> video games</span>, <span class="hobby-link" data-image="{{ site.baseurl }}/assets/PhysicalCollection.jpg" data-title="ZZZ BANGBOO FIGURE"> physical collecting</span> and <span class="hobby-link" data-image="{{ site.baseurl }}/assets/PhotoVideo.jpg" data-title="SHOT ON PS VITA"> amateur photography/videography</span>.</p>
      <h3>PROGRAMMING</h3>
        <p>C++ &nbsp;&nbsp; C# &nbsp;&nbsp; Unreal Blueprints</p>
      <h3>TOOLS</h3>
        <p>Visual Studio &nbsp;&nbsp; VS Code &nbsp;&nbsp; Unity &nbsp;&nbsp; Unreal Engine &nbsp;&nbsp; DirectX &nbsp;&nbsp; RenderDoc</p>
    </div>
  </div>
</section>

<script src="{{ '/assets/js/hobbies.js' | relative_url }}"></script>

<!-- Hero Project -->
<section class="hero-section">
  <h2 class="featured-title">// BEST PROJECT</h2>
  <div class="hero-content">
    <div class="hero-image">
      <a href="{{ '/pages/Hyperion/index.html' | relative_url }}"> <img src="{{ '/pages/Hyperion/HyperionVolumetricFogGif.gif' | relative_url }}" alt="Hyperion Gif" loading="eager" decoding="async"> </a>
    </div>
    <div class="hero-info">
      <div class="hero-label"></div>
      <h2>HYPERION</h2>
        <p class="hero-subtitle"> Real-time Volumetric Lighting System </p>
        <p class="hero-desc"> A custom real-time volumetric lighting system focused on volume-bound volumetric fog, light scattering, and modern architecture in DirectX 11/12. </p>
      <div class="hero-tags">
        <span>C++</span>
        <span>DirectX 11 / 12</span>
        <span>Rendering Engine</span>
        <span>Real-Time Graphics</span>
        <span>Performance Optimisation</span>
      </div>
      <a class="hero-button" href="{{ '/pages/Hyperion/index.html' | relative_url }}"> VIEW PROJECT → </a>
    </div>
  </div>
</section>

<!-- Featured Projects -->
<section class="featured-section">
  <div class="featured-header">
    <h2 class="featured-title">// FEATURED PROJECTS</h2>
    <a href="{{ '/pages/projects.html' | relative_url }}" class="featured-link"> VIEW ALL PROJECTS → </a>
  </div>
  <div class="project-grid featured-grid">
    <!-- Pulse Drive -->
    <article class="project-card">
      <a href="{{ '/blogs/2026-07-29-GMTKGameJam2026/index.html' | relative_url }}" class="project-image"> <img src="{{ '/blogs/2026-07-29-GMTKGameJam2026/GameplayCover.png' | relative_url }}" alt="Pulse Drive"> </a>
      <div class="project-info">
        <h2>Pulse Drive</h2>
        <p> Created for GMTK Game Jam 2026. I worked mostly on the graphics, including shaders and particles, with a minor role in scripting.</p>
        <div class="project-tags">
          <span>C#</span>
          <span>Shaders</span>
          <span>Web</span>
          <span>Unity</span>
        </div>
        <div class="project-buttons">
          <a class="project-button" href="https://arnas-code.itch.io/pulsedrive"> VIEW GAME → </a>
          <a class="project-button" href="{{ '/blogs/2026-07-29-GMTKGameJam2026/index.html' | relative_url }}"> VIEW BLOG → </a>
        </div>
      </div>
    </article>
    <!-- Gelos Engine -->
    <article class="project-card">
      <a href="{{ '/pages/GelosEngine/index.html' | relative_url }}" class="project-image"> <img src="{{ '/pages/GelosEngine/EngineShadows.png' | relative_url }}" alt="Gelos Engine"> </a>
      <div class="project-info">
        <h2>Gelos Engine</h2>
        <p>A custom engine project built around game engine architecture, porting to other platforms, and low-level rendering systems.</p>
        <div class="project-tags">
          <span>C++</span>
          <span>Engine Programming</span>
          <span>Porting</span>
          <span>Team Project</span>
        </div>
        <div class="project-buttons">
          <a class="project-button" href="{{ '/pages/GelosEngine/index.html' | relative_url }}"> VIEW PROJECT → </a>
        </div>
      </div>
    </article>
    <!-- Low Level Optimisation -->
    <article class="project-card">
      <a href="{{ '/pages/LowLevel/index.html' | relative_url }}" class="project-image"> <img src="{{ '/pages/LowLevel/Bouncing.png' | relative_url }}" alt="Low Level Optimisation"> </a>
      <div class="project-info">
        <h2>Low Level Optimisation</h2>
        <p>A performance-focused project looking at low-level optimisations like memory management, multithreading and spatial partitioning.</p>
        <div class="project-tags">
          <span>C++</span>
          <span>Performance</span>
          <span>Multithreading</span>
          <span>Optimisation</span>
        </div>
        <div class="project-buttons">
          <a class="project-button" href="{{ '/pages/LowLevel/index.html' | relative_url }}"> VIEW PROJECT →</a>
        </div>
      </div>
    </article>
  </div>
</section>