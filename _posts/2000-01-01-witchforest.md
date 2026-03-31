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

  <!-- Technical Breakdown -->
  <section class="project-content">
    <h2 class="tech-title">Technical Breakdown</h2>

  <!-- Card 1 -->
  <div class="tech-card">
    <div class="tech-text">
      <h3>DirectX 11</h3>
      <p>This was where my foundational knowledge of DirectX 11 was learnt.</p>
    </div>
    <div class="tech-image">
      <img src="{{ site.baseurl }}/assets/Witch/Technical/WitchForestDirectX.jpeg" alt="DirectX">
    </div>
  </div>

  <!-- Card 2 -->
  <div class="tech-card">
    <div class="tech-text">
      <h3>Scene Heirachy</h3>
      <p>This system was built for rendering game objects, applying their textures, applying their transforms and drawing meshes recursively through a hierarchical scene graph structure.</p>
      <div class="tech-code">
        <pre><code>
        XMMATRIX newChild = _GameObjects[i]->_transform * base;
        _GameObjects[i]->DrawGameObjects(_immediateContext, newChild, cbdata, constantbuffer, mappedSubresource);
        </code></pre>
      </div>
      <p>The code shows the example of the recursive nature where it would take the previous base transform and one of the current game objects.</p>
    </div>
    <div class="tech-image">
      <img src="{{ site.baseurl }}/assets/Witch/WitchForestMain.png" alt="Scene">
    </div>
  </div>

  <!-- Card 3 -->
  <div class="tech-card">
    <div class="tech-text">
      <h3>JSON Breakdown</h3>
      <p>The image shows an example of JSON data that will be parsed at runtime. This specific file houses lighting parameters, which are used for the lighting in the artefact.</p> 
      <div class="tech-code">
        <pre><code>
          json jFile;
          std::ifstream fileOpen("JSON/LightingFormat.json");
          jFile = json::parse(fileOpen);
          json& objects = jFile["Lighting"]; //Gets an array
          int size = objects.size(); //Size of array
          for (unsigned int i = 0; i < size; i++)
          {
            LightingStruct g;
            json& objectDesc = objects.at(i);
            g.DiffuseLight.x = objectDesc["DiffuseLight"][0];
            g.DiffuseLight.y = objectDesc["DiffuseLight"][1];
            g.DiffuseLight.z = objectDesc["DiffuseLight"][2];
            g.DiffuseLight.w = objectDesc["DiffuseLight"][3];
          }
        </code></pre>
      </div>
      <p>Doing parsing from the code sample above into a lighting struct that matches the JSON namesense. This is then sent to the GPU via a constant buffer using similar logic without the need to parse, of course. When the constant buffer is set, the shader can use the data from the lighting parameters during rendering. Using JSON files is a good way to manage lighting parameters that can be modified quickly. To accomplish the task, it used the nlohmann version of JSON, and while there were other options like YAML, I felt at the time JSON was the easiest to implement. Lastly, ways to improve this would be moving the logic out of the game object class and having a separate class manage data like this. As a safety measure, there should also be error handling in case of unseen errors.</p>
    </div>
    <div class="tech-image">
      <img src="{{ site.baseurl }}/assets/Witch/Technical/WitchForestJSON.png" alt="Lighting JSON">
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