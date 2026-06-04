---
layout: post
title: "Let There Be Light"
---

<body>
  <!-- Gallery Section -->
  <section class="project-gallery">

  <!-- Slide 1 (Video) -->
  <div class="slide" style="text-align: center;">
    <iframe
      src="https://www.youtube.com/embed/5bgFFMmbUfE"
      title=""
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>

  <!-- Slide 2 (Video) -->
  <div class="slide" style="text-align: center;">
    <iframe
      src="https://www.youtube.com/embed/MvODGZ8OJsA"
      title=""
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>

  <!-- Slide 3 (Showroom) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/Hyperion/HyperionShowroom.png"
      alt="Showroom"
      class="slide-img">
  </div>

  <!-- Slide 4 (Showroom (Volumetric Pass)) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/Hyperion/HyperionShowroomVolumetric.png"
      alt="Showroom (Volumetric Pass)"
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
          src="{{ site.baseurl }}/assets/Hyperion/HyperionShowroom.png"
          onclick="currentSlide(1)"
          alt="Showroom Video">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/Hyperion/HyperionShowroomVolumetric.png"
          onclick="currentSlide(2)"
          alt="Showroom (Volumetric Pass) Video">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/Hyperion/HyperionShowroom.png"
          onclick="currentSlide(3)"
          alt="Showroom Image">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/Hyperion/HyperionShowroomVolumetric.png"
          onclick="currentSlide(4)"
          alt="Showroom (Volumetric Pass) Image">
      </div>
    </div>
  </section>

  <!-- Overview -->
  <section class="project-content">
    <h3>Overview</h3>
    <p>Originally this project was my final year project, which looked at creating realistic and optimised volumetric lighting/fog. However, at the time, due to many hurdles, it couldn't be completed to the expected standard. Since finishing university I have rebuilt the artefact from the ground up, taking a step up at the time from archiecture of the framework, object loder, texture manager and more. Once that was set up volumetric lighting from reimplmented from the previous work, with improvements and the best version being volume bound volumetric lighting. This allows effects like volumetric fog, "particles" and more to appear.</p>
  </section>

<h2 class="tech-title">Documentation</h2>
  <a href="{{ '/assets/Hyperion/Documentation.html' | relative_url }}" class="btn">📋 Documentation</a>

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
