---
layout: post
title: "Advanced Graphics"
---
<body>
  <!-- Gallery Section -->
  <section class="project-gallery">

  <!-- Slide 1 (Video) -->
  <div class="slide" style="text-align: center;">
    <iframe
      src="https://www.youtube.com/embed/YlJKgl5t5rQ"
      title="Demo Trailer"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>

  <!-- Slide 2 (Normals Shader) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/AdvancedGraphics/AdvancedGraphicsNormals.png"
      alt="Normals Shader"
      class="slide-img">
  </div>

  <!-- Slide 3 (Deferred Shader) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/AdvancedGraphics/AdvancedGraphicsDeferred.png"
      alt="Deferred Shader"
      class="slide-img">
  </div>

  <!-- Slide 4 (Box Blur Shader (Post Processing)) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/AdvancedGraphics/AdvancedGraphicsBoxBlur.png"
      alt="Box Blur Shader (Post Processing)"
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
          src="{{ site.baseurl }}/assets/AdvancedGraphics/AdvancedGraphicsStandard.png"
          onclick="currentSlide(1)"
          alt="Demo Trailer">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/AdvancedGraphics/AdvancedGraphicsNormals.png"
          onclick="currentSlide(2)"
          alt="Normals Shader">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/AdvancedGraphics/AdvancedGraphicsDeferred.png"
          onclick="currentSlide(3)"
          alt="Deferred Shader">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/AdvancedGraphics/AdvancedGraphicsBoxBlur.png"
          onclick="currentSlide(4)"
          alt="Box Blur Shader (Post Processing)">
      </div>
    </div>
  </section>

  <!-- Project Highlights -->
  <section class="project-content">
    <h3>Project Highlights</h3>
    <p>- Aimed to create an interactive program through ImGui. Using it for ease of accessing lights and objects through managers.</p>
    <p>- Implemented multiple shaders like standard, normals, deferred, hull and post-processing to handle varying logic from how the object interacts with the world to screen passing for post-processing.</p>
    <p>- Using graphic profilers like RenderDoc to debug rendering passes. One instance of this was for the G-buffer for the deferred shader.</p>
  </section>

  <!-- Overview -->
  <section class="project-content">
    <h3>Overview</h3>
    <p>Through this project, I explored different 3D rendering techniques, created different shaders, used graphic profiling, and used ImGui to display change settings at runtime.</p>
  </section>

  <!-- Technical Breakdown -->
  <section class="project-content">
    <h2 class="tech-title">Technical Breakdown</h2>

  <!-- Card 1 -->
  <div class="tech-card">
    <div class="tech-text">
      <h3>Scene Manipulation</h3>
      <p></p>
    </div>
    <div class="tech-image">
      <img src="{{ site.baseurl }}/assets/AdvancedGraphics/AdvancedGraphicsStandard.png" alt="Scene Manipulation">
    </div>
  </div>

  <!-- Card 2 -->
  <div class="tech-card">
    <div class="tech-text">
      <h3>Shaders</h3>
      <p></p>
    </div>
    <div class="tech-image">
      <img src="{{ site.baseurl }}/assets/AdvancedGraphics/AdvancedGraphicsDeferred.png" alt="Shaders">
    </div>
  </div>

  <!-- Card 3 -->
  <div class="tech-card">
    <div class="tech-text">
      <h3>Post Processing</h3>
      <p></p>
    </div>
    <div class="tech-image">
      <img src="{{ site.baseurl }}/assets/AdvancedGraphics/AdvancedGraphicsBoxBlur.png" alt="Post Processing">
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