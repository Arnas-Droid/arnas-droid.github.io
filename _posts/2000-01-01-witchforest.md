---
layout: post
title: "The Witch Forest"
---

<body>
  <!-- Gallery Section -->
  <section class="project-gallery">

  <!-- Slide 1 (Video) -->
  <div class="slide" style="text-align: center;">
    <iframe
      src="https://www.youtube.com/embed/hXlKtwVcpxY"
      title="Witch Forest Trailer"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>

  <!-- Slide 2 (Close up) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/Witch/WitchForestMain.png"
      alt="Witch Forest Screenshot"
      class="slide-img">
  </div>

  <!-- Slide 3 (Side Profile) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/Witch/WitchForestSide.png"
      alt="Witch Forest Screenshot"
      class="slide-img">
  </div>

  <!-- Slide 4 (Far Away) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/Witch/WitchForestFar.png"
      alt="Witch Forest Screenshot"
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
          src="{{ site.baseurl }}/assets/Witch/WitchForestMain.png"
          onclick="currentSlide(1)"
          alt="Demo Trailer">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/Witch/WitchForestMain.png"
          onclick="currentSlide(2)"
          alt="Close up perspective">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/Witch/WitchForestSide.png"
          onclick="currentSlide(3)"
          alt="Side profile">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/Witch/WitchForestFar.png"
          onclick="currentSlide(4)"
          alt="Far away">
      </div>
    </div>
  </section>

  <!-- Project Highlights -->
  <section class="project-content">
    <h3>Project Highlights</h3>
    <p>- Build a 3D environment using DirectX 11.</p>
    <p>- Implemented a scene graph hierarchy to manage object parent and child transformations.</p>
    <p>- Used JSON to load and access external files like lighting.</p>
  </section>

  <!-- Overview -->
  <section class="project-content">
    <h3>Overview</h3>
    <p>Using DirectX 11, I learned more about graphic pipelines and how to create a 3D environment that utilized the pipeline for rendering lighting and shading models. Drawing inspiration from my heritage, I created the <strong>Witch Forest</strong> scene.</p>
    <p>My biggest challenge came when I was working on the scene graph hierarchy. I struggled with the idea of using functions to access different files. Although it worked when created in the main function, it felt a bit messy and harder to follow from an external viewpoint. Ultimately, I managed to build it, but there were issues I would approach differently in future projects. It's currently my favorite piece of work.</p>
  </section>

  <section class="project-content">
    <h3>Technical Breakdown</h3>

  <!-- Card 1 -->
  <div class="tech-card">
    <div class="tech-text">
      <h3>Scene Breakdown</h3>
      <p>
      Some text.
      </p>
    </div>
    <div class="tech-image">
      <img src="{{ site.baseurl }}/assets/Witch/WitchForestMain.png" alt="Temp">
    </div>
  </div>

  <!-- Card 2 -->
  <div class="tech-card">
    <div class="tech-text">
      <h3>Systems Breakdown</h3>
      <p>
      Some text.
      </p>
    </div>
    <div class="tech-image">
      <img src="{{ site.baseurl }}/assets/Witch/WitchForestMain.png" alt="Temp">
    </div>
  </div>


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