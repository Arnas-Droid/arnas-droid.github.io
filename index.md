---
layout: default
title: Home
---

<div class="tech-card about-card">
  <div class="tech-text">
      <!-- About Me -->
    <p>Hello, my name is Arnas. I work as a game developer and have a particular interest in real-time simulations and graphics programming. Apart from programming, I'm really interested in video games, physical collecting and drifting.</p>
    <p><strong>Programming Languages:</strong></p>
    <ul>
      <li>C++</li>
      <li>C#</li>
      <li>Visual programming (Unreal blueprints)</li>
    </ul>
    <p><strong>Tools and Frameworks:</strong></p>
    <ul>
      <li>Visual Studio & VS Code</li>
      <li>Unreal Engine 4 & 5</li>
      <li>Unity</li>
      <li>SDL and SFML</li>
      <li>Github Desktop</li>
      <li>Profiling (RenderDoc and Unity's Profiler)</li>
    </ul>
  </div>
  <div class="tech-image">
    <img src="{{ site.baseurl }}/assets/ArnasPic_v2.jpg" alt="Arnas Pic">
  </div>
</div>

<!-- Hero Project -->
<div class="hero-card">
  <!-- Background image -->
  <picture>
  <a class="hero-image" href="{{ '/pages/hyperion.html' | relative_url }}">
    <img src="{{ '/assets/Hyperion/HyperionVolumetricFogGif.gif' | relative_url }}" 
      alt="Hyperion Fog"
      loading="eager"
      decoding="async">
  </a>
  </picture>
  <!-- Overlay -->
  <div class="hero-overlay">
    <div class="hero-content">
      <div class="hero-badge">⭐ BEST PROJECT</div>
      <h2 class="hero-title">Hyperion</h2>
      <h3 class="hero-subtitle">Real-time Volumetric Lighting System</h3>
      <p class="hero-desc">A custom real-time volumetric lighting system focused on volume-bound volumetric fog, light scattering, and modern architecture in DirectX 11/12.</p>
      <div class="hero-tags">
        <span>C++</span>
        <span>DirectX 11 / 12</span>
        <span>Rendering Engine</span>
        <span>Real-Time Graphics</span>
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
      <!-- Pulse Drive -->
    <div class="project-card">
      <a href="{{ '/blogs/2026-07-29-GMTKGameJam2026/index.html' | relative_url }}"><img src="{{ '/blogs/2026-07-29-GMTKGameJam2026/GameplayCover.png' | relative_url }}" alt="Pulse Drive Cover Image"></a>
      <div class="project-info">
        <h2>Pulse Drive</h2>
        <p>Created for GTMK gam jam 2026 and worked mostly on the graphics (shaders, particles and more) with a minor role in scripting.</p>
        <div class="project-tags">
          <span>C#</span>
          <span>Shaders</span>
          <span>Web</span>
          <span>Unity</span>
        </div>
        <table align="left">
        <tr>
          <td align="left" valign="middle" style="width: 50%;">
          <a class="hero-button" href="https://arnas-code.itch.io/pulsedrive">View Game</a>
          </td>
          <td align="left" valign="middle" style="width: 50%;">
          <a class="hero-button" href="{{ '/blogs/2026-07-29-GMTKGameJam2026/index.html' |  relative_url }}">View Blog</a>
          </td>
        </tr>
      </table>
      </div>
    </div>
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
      <a href="{{ '/pages/LowLevel/index.html' | relative_url }}"><img src="{{ '/assets/LowLevel/LowLevelMainImage.png' | relative_url }}"  alt="Low Level"></a>
      <div class="project-info">
        <h2>Low Level Optimisation</h2>
        <p>A performance-focused project looking at low-level optimisations like memory management, multithreading and spatial partitioning.</p>
        <div class="project-tags">
          <span>C++</span>
          <span>Performance</span>
          <span>Multithreading</span>
          <span>Optimisation</span>
        </div>
        <a class="hero-button" href="{{ '/pages/LowLevel/index.html' |  relative_url }}">View Project</a>
      </div>
    </div>
  </div>
</div>