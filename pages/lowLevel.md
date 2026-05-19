---
layout: post
title: "Low-Level Platform Optimisation"
---

<body>
  <!-- Gallery Section -->
  <section class="project-gallery">

  <!-- Slide 1 (Video) -->
  <div class="slide" style="text-align: center;">
    <iframe
      src="https://www.youtube.com/embed/MxoTHOpgPrc"
      title=""
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>

  <!-- Slide 2 (Main Image) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/LowLevel/LowLevelMainImage.png"
      alt="Main Image"
      class="slide-img">
  </div>

  <!-- Slide 3 (Main Menu) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/LowLevel/LowLevelBouncing.png"
      alt="Bouncing"
      class="slide-img">
  </div>

  <!-- Slide 4 (Evercade Level Demo) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/LowLevel/LowLevelManyObjects.png"
      alt="Many Objects"
      class="slide-img">
  </div>

  <!-- Navigation -->
  <button class="prev" onclick="plusSlides(-1)" aria-label="Previous slide">❮</button>
  <button class="next" onclick="plusSlides(1)" aria-label="Next slide">❯</button>

  <!-- Caption -->
  <div class="caption-containerSlide">
    <p id="caption"></p>
  </div>

  <!-- Thumbnails -->
  <div class="thumbnail-row">
      <div class="thumbnail-column video-thumb">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/LowLevel/LowLevelMainImage.png"
          onclick="currentSlide(1)"
          alt="Main Video">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/LowLevel/LowLevelMainImage.png"
          onclick="currentSlide(2)"
          alt="Main Image">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/LowLevel/LowLevelBouncing.png"
          onclick="currentSlide(3)"
          alt="Bouncing">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/LowLevel/LowLevelManyObjects.png"
          onclick="currentSlide(4)"
          alt="Many Objects">
      </div>
    </div>
  </section>

  <!-- Project Highlights -->
  <section class="project-content">
    <h3>Project Highlights</h3>
    <p>- Porting over to Playstation 5.</p>
    <p>- Creating memory management systems.</p>
    <p>- Using timing optimisations to improve performance.</p>
  </section>

  <!-- Overview -->
  <section class="project-content">
    <h3>Overview</h3>
    <p>During the project learned a lot about memory management, timing optimisations, and porting to PS5.</p>
    <p></p>
    <p>Memory Managemnet - For memory management I gave it serveral capabilities for it to track memory allocations correctly:</p>
    <p> Tracker - This was done to track any memory given or removed from the program.</p>
    <p> Objects Creation and Destruction - To track memory management I needed a way to create the objects and destroy them at any point in the program.</p>
    <p> Memory Pool - A memory pool was created for any objects created. This way instead of creating new memory for each object it would instead assign it.</p>
    <p>Timing Optimisations - There were serveral optimisations done to the program to run at max capacity.</p>
    <p> Spatial Partitioning - Seperating the area on the screen into regions allowed for quicker the collisions to calculate quicker.</p>
    <p> Spatial Partitioning Threads - This was later improved with threads since the threads could calcuate a given region at the same time.</p>
  </section>

<script>
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
  showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
</script>

</body>
