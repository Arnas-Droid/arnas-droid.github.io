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

  <!-- Overview -->
  <section class="project-content">
    <h3>Overview</h3>
    <p>This project looked at low-level optimisation techniques such as memory management, timing optimisations and porting over to PS5. A custom memory manager system was implemented to track memory allocations, this included an allocation tracker, object creation and destruction, and a memory pool to reduce allocation overhead by reusing pre-allocated memory. Performance improvements were achieved through spatial partitioning, which split the scene and reduced collision checks. Finally, a multithreaded system was applied to this that allowed the regions of the scene to be checked at the same time.</p>
  </section>

  <!-- Project Highlights -->
  <section class="project-content">
    <h3>Project Highlights</h3>
    <p>- Created a custom memory management system that had memory allocation tracking, object lifecycle control, and memory pooling to reduce allocation overhead.</p>
    <p>- Improved performance through spatial partitioning, which reduced the number of collision checks by dividing the scene into regions.</p>
    <p>- Implemented multithreading to process the multiple created spatial regions at the same time.</p>
    <p>- Explored low-level optimisation techniques for the PS5.</p>
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
