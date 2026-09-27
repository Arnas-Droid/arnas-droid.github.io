---
layout: page
title: "// Low-Level Platform Optimisation"
tags:
  - C++ 
  - Performance
  - Multithreading
  - Optimisation
slideshow: true
---

<!-- Gallery Section -->
<section class="project-gallery">

  <!-- Slide 1 -->
  <div class="slide">
    <img src="BaseTest.gif" alt="Base Test"
      class="slide-img">
  </div>

  <!-- Slide 2 -->
  <div class="slide">
    <img src="LimitTest1.gif" alt="Limit Test 1"
      class="slide-img">
  </div>

  <!-- Slide 3 -->
  <div class="slide">
    <img src="LimitTest2.gif" alt="Limit Test 2"
      class="slide-img">
  </div>

  <!-- Slide 4 -->
  <div class="slide">
    <img src="StressTest.gif" alt="Stress Test"
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
      <img class="demo cursor thumb-img" src="BaseTest.png"
        onclick="currentSlide(1)" alt="Base Line Testing - 1000 objects, 1 region, 1 thread">
    </div>
    <div class="thumbnail-column video-thumb">
      <img class="demo cursor thumb-img" src="LimitTest1.png"
        onclick="currentSlide(2)" alt="Limit Testing Example 1 - 10000 objects, 64 regions, 8 threads">
    </div>
    <div class="thumbnail-column video-thumb">
      <img class="demo cursor thumb-img" src="LimitTest2.png"
        onclick="currentSlide(3)" alt="Limit Testing Example 2 - 20000 objects, 64 regions, 8 threads">
    </div>
    <div class="thumbnail-column video-thumb">
      <img class="demo cursor thumb-img" src="StressTest.png"
        onclick="currentSlide(4)" alt="Stress Testing - 200000 objects, 256 regions, 16 threads">
    </div>
  </div>
</section>

<!-- Overview -->
<section class="project-content">
  <div class="project-section-label">// OVERVIEW</div>
  <p>This project looked at low-level optimisation techniques such as memory management, timing optimisations and porting over to PS5. A custom memory manager system was implemented to track memory allocations, this included an allocation tracker, object creation and destruction, and a memory pool to reduce allocation overhead by reusing pre-allocated memory. Performance improvements were achieved through spatial partitioning, which split the scene and reduced collision checks. Finally, a multithreaded system was applied to this that allowed the regions of the scene to be checked at the same time.</p>
</section>

<!-- Key Features -->
<section class="project-content">
  <div class="project-section-label">// KEY FEATURES</div>
  <div class="features">
    <div class="feature-card" onclick="location.href='#memorytracker'">
      <h3>Memory Management</h3>
      <p>Custom memory allocation tracking, object lifecycle control, and memory pooling to reduce allocation overhead.</p>
    </div>
    <div class="feature-card">
      <h3>Spatial Partitioning</h3>
      <p>Reduced collision checks by dividing the scene into regions.</p>
    </div>
    <div class="feature-card">
      <h3>Multithreading</h3>
      <p>Processed spatial regions in parallel to improve performance.</p>
    </div>
    <div class="feature-card">
      <h3>PlayStation 5 Optimisation</h3>
      <p>Explored low-level optimisation techniques for PS5.</p>
    </div>
  </div>
</section>

<!-- Technical Breakdown -->
<section class="project-content" id="memorytracker">
  <div class="project-section-label">// TECHNICAL BREAKDOWN</div>

  <h2>Memory Management</h2>
  <h3>Memory Allocation Tracker</h3>
  <p>A custom memory tracking system was implemented to monitor object allocations at runtime. This was done through multiple tracker instances like box, sphere, and global (all objects), where each tracked their respective object type. The trackers managed their total allocation and deallocations of which objects were still using memory at runtime.</p>
  <table align="center">
    <tr>
      <td align="center" valign="middle" style="width: 50%;">
        <a href="MemoryTracker.png"> <img src="MemoryTracker.png" style="width: 100%; max-height: 400px; object-fit: contain;"> </a>
      </td>
      <td align="center" valign="middle" style="width: 50%;">
        <a href="MemoryTrackerAllocation.png"> <img src="MemoryTrackerAllocation.png" style="width: 100%; max-height: 400px; object-fit: contain;"> </a>
      </td>
    </tr>
    <tr>
      <td colspan="2" align="center">
        <br>
        <em>The first code shows what is inside the tracker class and some functions of it. While the second piece shows the trackers getting   their own allocation of memory through malloc. (Figures are clickable)</em>
      </td>
    </tr>
  </table>

  <h3>Object Removal</h3>
  <p>Objects were removed through the object's collider that was closest to the screen cursor upon getting clicked and removed from the all object vector. Initially there were threading issues when using "std::vector::erase"; however, by adding synchronisation to ensure all threads complete their tasks before deleting an object, this prevents race conditions from happening and any dangling pointers that would come.</p>
  <p style="text-align: center;">
    <a href="EraseObjects.png"> <img src="EraseObjects.png" style="width: 100%; max-height: 400px; object-fit: contain;"> </a>
    <br>
    <em>This shows of the code that I talking about from above. (Figure is clickable).</em>
  </p>

  <h3>Performance Timer</h3>
  <p>A simple timing profiler was added through "std::chrono" to measure the execution time of physics and the multithreaded systems. Data was accumulated over 60 frames to provide a more stable performance comparison between tests.</p>
  <table align="center">
    <tr>
      <td align="center" valign="middle" style="width: 50%;">
        <a href="TimerUse.png"> <img src="TimerUse.png" style="width: 100%; max-height: 400px; object-fit: contain;"> </a>
      </td>
      <td align="center" valign="middle" style="width: 50%;">
        <a href="TimerUse.png"> <img src="TimerUse.png" style="width: 100%; max-height: 400px; object-fit: contain;"> </a>
      </td>
    </tr>
    <tr>
      <td colspan="2" align="center">
        <br>
        <em></em>
      </td>
    </tr>
  </table>

  <h3>Memory Pool</h3>
  <p>To reduce runtime allocation overhead and avoid heap fragmentation, a memory pool was implemented to preallocate memory for game objects at runtime. Instead of allocating memory dynamically per object, objects are instead constructed using placement new from preloaded memory blocks within the memory pool. This system allowed memory to be reused from the pool and destroyed objects, enabling new objects to be created without repeated heap allocations.</p>
</section>

<!-- Back -->
<section class="project-content">
  <a href="{{ '/' | relative_url }}" class="project-button"> ← BACK TO HOME </a>
  <a href="{{ '/pages/projects.html' | relative_url }}" class="project-button"> ← BACK TO PROJECTS </a>
</section>