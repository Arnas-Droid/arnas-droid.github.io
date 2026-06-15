---
layout: default
title: Home
---
 
<body>

<!-- Hero Project -->
<div class="hero-card">
  <!-- Background image -->
  <a class="hero-image" href="{{ '/pages/hyperion.html' | relative_url }}">
    <img src="{{ '/assets/Hyperion/HyperionVolumetricFog.png' | relative_url }}" alt="Hyperion Fog">
  </a>
  <!-- Overlay -->
  <div class="hero-overlay">
    <div class="hero-content">
      <div class="hero-badge">⭐ BEST PROJECT</div>
      <h2 class="hero-title">Hyperion</h2>
      <h3 class="hero-subtitle">Real-time Volumetric Lighting System</h3>
      <p class="hero-desc">A rebuilt real-time volumetric lighting system that features engine architecture and volume-bound volumetric lighting for light scattering effects like volumetric fog.</p>
      <div class="hero-tags">
        <span>C++</span>
        <span>DirectX 11 / 12</span>
        <span>Rendering Engine</span>
        <span>Real-time graphics</span>
        <span>Performance Optimisation</span>
      </div>
      <a class="hero-button" href="{{ '/pages/hyperion.html' |  relative_url }}">View Project</a>
    </div>
  </div>
</div>

  <!-- Featured Projects -->
<div class="featured-section">
  <div class="featured-header">
        <!-- Title -->
    <h1 class="section-title">Featured Projects</h1>
        <!-- Button -->
      <a href="{{ '/pages/projects.html' | relative_url }}" class="hero-button">View all projects -></a>
  </div>
  <div class="project-grid featured-grid">
      <!-- Gelos Engine -->
    <div class="project-card">
      <a href="{{ '/pages/gelosEngine.html' | relative_url }}"><img src="{{ '/assets/SmileEngine/SmileEngineShadows.png' |   relative_url }}" alt="Gelos Engine"></a>
      <div class="project-info">
        <h2>Gelos Engine</h2>
        <p>A custom engine project built around game engine architecture, porting to other platforms, and low-level rendering systems.</p>
        <div class="project-tags">
          <span>C++</span>
          <span>Engine Programming</span>
          <span>Porting</span>
          <span>Team Project</span>
        </div>
        <a class="hero-button" href="{{ '/pages/gelosEngine.html' |  relative_url }}">View Project</a>
      </div>
    </div>
      <!-- Low Level Optimisation  -->
    <div class="project-card">
      <a href="{{ '/pages/lowLevel.html' | relative_url }}"><img src="{{ '/assets/LowLevel/LowLevelMainImage.png' | relative_url }}"  alt="Low Level"></a>
      <div class="project-info">
        <h2>Low Level Optimisation (Page in development)</h2>
        <p>A performance-focused project looking at low-level optimisations like memory management, multithreading and spatial partitioning.</p>
        <div class="project-tags">
          <span>C++</span>
          <span>Performance</span>
          <span>Multithreading</span>
          <span>Optimisation</span>
        </div>
        <a class="hero-button" href="{{ '/pages/lowLevel.html' |  relative_url }}">View Project</a>
      </div>
    </div>
      <!-- Advanced Graphics -->
    <div class="project-card">
      <a href="{{ '/pages/advancedGraphics.html' | relative_url }}"><img src="{{ '/assets/AdvancedGraphics/AdvancedGraphicsStandard.png' | relative_url }}" alt="Advanced Graphics"></a>
      <div class="project-info">
        <h2>Advanced Graphics</h2>
        <p>A real-time DirectX 11 graphics project explores real-time rendering techniques like render-to-texture (RTT), custom shader workflows, and pipeline optimisation.</p>
        <div class="project-tags">
          <span>C++</span>
          <span>Graphics Programming</span>
          <span>DirectX 11</span>
          <span>RenderDoc</span>
        </div>
        <a class="hero-button" href="{{ '/pages/advancedGraphics.html' |  relative_url }}">View Project</a>
      </div>
    </div>
  </div>
</div>

<!-- Other Projects -->
<h1 style="text-align:center;">Game Jams</h1>
<div class="project-grid">
      <!-- Endless Dodge -->
  <div class="project-card">
    <a href="{{ '/pages/GameJams/endlessDodge.html' | relative_url }}"><img src="{{ '/assets/GameJams/EndlessDodge/EndlessDodgeMenu.png' | relative_url }}" alt="Endless Dodge"></a>
    <div class="project-info">
      <h2>Endless Dodge</h2>
      <p>This was a game developed for the GameBridge 2026 game jam, which was a top-down arcade survival game where enemies lock onto your position and attack.</p>
      <div class="project-tags">
        <span>C#</span>
        <span>Unity</span>
      </div>
    </div>
  </div>
</div>

</body> 