---
layout: post
title: "Bespoke Platform Devlopment"
---

<body>
  <!-- Gallery Section -->
  <section class="project-gallery">

  <!-- Slide 1 (Video) -->
  <div class="slide" style="text-align: center;">
    <iframe
      src="https://www.youtube.com/embed/gguMz9gUZwM"
      title="Windows Demo Trailer"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>

  <!-- Slide 2 (Video) -->
  <div class="slide" style="text-align: center;">
    <iframe
      src="https://www.youtube.com/embed/KOD4hRejCro"
      title="Evercade Demo Trailer"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>

  <!-- Slide 3 (Main Menu) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/Bespoke/BespokeWindowsMainMenu.png"
      alt="Main Menu (Windows)"
      class="slide-img">
  </div>

  <!-- Slide 4 (Evercade Level Demo) -->
  <div class="slide">
    <img
      src="{{ site.baseurl }}/assets/Bespoke/BespokeEvercadeLevel1.png"
      alt="Level 1 Image"
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
          src="{{ site.baseurl }}/assets/Bespoke/BespokeWindowsMainMenu.png"
          onclick="currentSlide(1)"
          alt="Windows Demo Trailer">
      </div>
      <div class="thumbnail-column video-thumb">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/Bespoke/BespokeEvercadeMainMenu.png"
          onclick="currentSlide(2)"
          alt="Evercade Demo Trailer">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/Bespoke/BespokeWindowsMainMenu.png"
          onclick="currentSlide(3)"
          alt="Main Menu (Windows)">
      </div>
      <div class="thumbnail-column">
        <img
          class="demo cursor thumb-img"
          src="{{ site.baseurl }}/assets/Bespoke/BespokeEvercadeLevel1.png"
          onclick="currentSlide(4)"
          alt="Level 1 Image">
      </div>
    </div>
  </section>

  <!-- Project Highlights -->
  <section class="project-content">
    <h3>Project Highlights</h3>
    <p>- Designing and creating a game loop.</p>
    <p>- Ported over to evercade through linux.</p>
  </section>

  <!-- Overview -->
  <section class="project-content">
    <h3>Overview</h3>
    <p>During this project I created a game that was ported to the Evercade after following the proper procedure when creating a game. This included a research period, development period and porting period. It taught me how to investigate game design principles and project management, which without I wouldn’t have been able to create a fully fledge out game that was ported. Common struggles involved were porting to Evercade since it wasn’t as simple as pressing a couple of buttons and having worked on it so much throughout the period of the project, I devised my own method of step by step that always worked.</p>
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
