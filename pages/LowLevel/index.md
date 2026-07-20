---
layout: page
title: "Low-Level Platform Optimisation"
tags:
  - C++ 
  - Performance
  - Multithreading
  - Optimisation
slideshow: true
---

<!-- Gallery Section -->
<section class="project-gallery">

<!-- Slide 1 (Video) -->
<div class="slide" style="text-align: center;">
  <iframe
    src="https://www.youtube.com/embed/MxoTHOpgPrc"
    title="Main Video" frameborder="0" allowfullscreen>
  </iframe>
</div>

<!-- Slide 2 (Main Image) -->
<div class="slide">
  <img
    src="{{ site.baseurl }}/assets/LowLevel/LowLevelMainImage.png"
    alt="Main Image" class="slide-img">
</div>

<!-- Slide 3 (Main Menu) -->
<div class="slide">
  <img
    src="{{ site.baseurl }}/assets/LowLevel/LowLevelBouncing.png"
    alt="Bouncing" class="slide-img">
</div>

<!-- Slide 4 (Evercade Level Demo) -->
<div class="slide">
  <img
    src="{{ site.baseurl }}/assets/LowLevel/LowLevelManyObjects.png"
    alt="Many Objects" class="slide-img">
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
        src="{{ site.baseurl }}/assets/LowLevel/LowLevelMainImage.png"
        onclick="currentSlide(1)" alt="Main Video">
    </div>
    <div class="thumbnail-column">
      <img
        class="demo cursor thumb-img"
        src="{{ site.baseurl }}/assets/LowLevel/LowLevelMainImage.png"
        onclick="currentSlide(2)" alt="Main Image">
    </div>
    <div class="thumbnail-column">
      <img
        class="demo cursor thumb-img"
        src="{{ site.baseurl }}/assets/LowLevel/LowLevelBouncing.png"
        onclick="currentSlide(3)" alt="Bouncing">
    </div>
    <div class="thumbnail-column">
      <img
        class="demo cursor thumb-img"
        src="{{ site.baseurl }}/assets/LowLevel/LowLevelManyObjects.png"
        onclick="currentSlide(4)" alt="Many Objects">
    </div>
  </div>
</section>

<!-- Overview -->
<section class="project-content">
  <h3>Overview</h3>
  <p>This project looked at low-level optimisation techniques such as memory management, timing optimisations and porting over to PS5. A custom memory manager system was implemented to track memory allocations, this included an allocation tracker, object creation and destruction, and a memory pool to reduce allocation overhead by reusing pre-allocated memory. Performance improvements were achieved through spatial partitioning, which split the scene and reduced collision checks. Finally, a multithreaded system was applied to this that allowed the regions of the scene to be checked at the same time.</p>
</section>

<!-- Key project features -->
<h3>Key Features</h3>
<section class="features">
    <div class="feature-card">
      <h3>Memory Manager</h3>
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
</section>

<!-- Technical Breakdown -->
<h3>Technical Breakdown</h3>

<section class="project-content">
  <h4>Memory Manager (Memory Allocation Tracker)</h4>
  <p>A custom memory tracking system was implemented to monitor object allocations at runtime. This was done through multiple tracker instances like box, sphere, and global (all objects), where each tracked their respective object type. The trackers managed their total allocation and deallocations of which objects were still using memory at runtime.</p>

  <h4>Memory Manager (Erase Objects)</h4>
  <p>Objects were removed through the object's collider that was closest to the screen cursor upon getting clicked and removed from the all object vector. Initially there were threading issues when using "std::vector::erase"; however, by adding synchronisation to ensure all threads complete their tasks before deleting an object, this prevents race conditions from happening and any dangling pointers that would come.</p>

  <h4>Memory Manager (Performance Timer)</h4>
  <p>A simple timing profiler was added through "std::chrono" to measure the execution time of physics and the multithreaded systems. Data was accumulated over 60 frames to provide a more stable performance comparison between tests.</p>

  <h4>Memory Manager (Memory Pool)</h4>
  <p>To reduce runtime allocation overhead and avoid heap fragmentation, a memory pool was implemented to preallocate memory for game objects at runtime. Instead of allocating memory dynamically per object, objects are instead constructed using placement new from preloaded memory blocks within the memory pool. This system allowed memory to be reused from the pool and destroyed objects, enabling new objects to be created without repeated heap allocations.</p>
</section>