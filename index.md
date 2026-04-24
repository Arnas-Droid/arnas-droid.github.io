---
layout: default
title: Home
---

<html> 
<body>
<h1 style="text-align:center;">Introduction</h1>
</body> 
</html> 

```c++
{
  string name = "Arnas Puidokas";
  string uni = "University of Staffordshire";
  string major = "Computer Games Programming";
  string favouriteSubject = "Graphics";
  string year = "Third year";
}
```

<html> 
<body>
<h1 style="text-align:center;">Best Project</h1>
  <div style="text-align:center;">
    <div class="project-container">
      <a href="{{ '/2000/01/01/witchforest.html' | relative_url }}">
        <img src="{{ '/assets/Witch/WitchForestMain.png' | relative_url }}" alt="Witch Forest" style="width:800px;height:300px;">
      </a>
      <div class="overlay">Witch Forest</div>
    </div>
  </div>
</body> 
</html> 

<html> 
<body>
<h1 style="text-align:center;">Projects</h1>
<div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
<div style="display: flex; justify-content: center; gap: 20px;">
  <!-- Echoes -->
  <div class="project-container">
    <a href="{{ '/2006/01/01/advancedGraphics.html' | relative_url }}">
      <img class="enlarge-onhover" src="{{ '/assets/Echoes/EchoesMainMenu.png' | relative_url }}" alt="Echoes Of Imagination Main Menu" style="width:800px;height:300px;">
      </a>
    <div class="overlay">Advanced Graphics</div>
  </div>

  <!-- Real Time -->
  <div class="project-container">
    <a href="{{ '/2000/01/01/witchforest.html' | relative_url }}">
      <img class="enlarge-onhover" src="{{ '/assets/Witch/WitchForestMain.png' | relative_url }}" alt="Witch Forest" style="width:800px;height:300px;">
      </a>
    <div class="overlay">Witch Forest</div>
  </div>

  <!-- Glut -->
  <div class="project-container">
    <a href="{{ '/2003/01/01/glut.html' | relative_url }}">
      <img class="enlarge-onhover" src="{{ '/assets/GLUT/GLUTMainImage.png' | relative_url }}" alt="Glut" style="width:800px;height:300px;">
      </a>
    <div class="overlay">GLUT</div>
  </div>
</div>

<div style="display: flex; justify-content: center; gap: 20px;">
  <!-- Smile Engine -->
  <div class="project-container">
    <a href="{{ '/2008/01/01/smileEngine.html' | relative_url }}">
      <img class="enlarge-onhover" src="{{ '/assets/LowLevel/LowLevelMainImage.png' | relative_url }}" alt="Low Level" style="width:800px;height:300px;">
      </a>
    <div class="overlay">Smile Engine (Temp Name + Currently worked on)</div>
  </div>

  <!-- Low Level -->
  <div class="project-container">
    <a href="{{ '/2004/01/01/lowLevel.html' | relative_url }}">
      <img class="enlarge-onhover" src="{{ '/assets/LowLevel/LowLevelMainImage.png' | relative_url }}" alt="Low Level" style="width:800px;height:300px;">
      </a>
    <div class="overlay">Low Level Optimisation</div>
  </div>

  <!-- Bespoke -->
  <div class="project-container">
    <a href="{{ '/2005/01/01/bespoke.html' | relative_url }}">
      <img class="enlarge-onhover" src="{{ '/assets/Bespoke/BespokeWindowsLevel1.png' | relative_url }}" alt="Bespoke Platform" style="width:800px;height:300px;">
      </a>
    <div class="overlay">Bespoke Platform</div>
  </div>
</div>

<div style="display: flex; justify-content: center; gap: 20px;">
  <!-- Junior Collab (Echoes) -->
  <div class="project-container">
    <a href="{{ '/2002/01/01/echoes.html' | relative_url }}">
      <img class="enlarge-onhover" src="{{ '/assets/Echoes/EchoesMainMenu.png' | relative_url }}" alt="Echoes Of Imagination Main Menu" style="width:800px;height:300px;">
      </a>
    <div class="overlay">Echoes Of Imagination</div>
  </div>

  <!-- Arcade -->
  <div class="project-container">
    <a href="{{ '/2001/01/01/arcade.html' | relative_url }}">
      <img class="enlarge-onhover" src="{{ '/assets/Arcade/ArcadeGameplay.png' | relative_url }}" alt="Arcade Games" style="width:800px;height:300px;">
      </a>
    <div class="overlay">Arcade Games</div>
  </div>
</div>

</div>
</body> 
</html>