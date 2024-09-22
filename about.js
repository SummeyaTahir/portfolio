function generateNavigation() {
    const nav1 = document.getElementById('navigation1');
    const nav2 = document.getElementById('navigation2');
    
    // Clear existing content
    nav1.innerHTML = '';
    nav2.innerHTML = '';
  
    // Top Navigation Bar
    nav1.innerHTML = `
      <li>
        <div id="logoname">
          <img src="logo.PNG" id="logo">
          <span id="name">SUMMEYA TAHIR</span>
        </div>
      </li>
    `;
  
    // Add navigation items to both navigation1 and navigation2
    navigationData.forEach(item => {
      const navItemTop = `<li class="nav_li"><a href="${item.link}">${item.text}</a></li>`;
      const navItemSide = `<li style="list-style-type: none;"><a id="side" href="${item.link}">${item.text}</a></li><hr>`;
  
      nav1.innerHTML += navItemTop;
      nav2.innerHTML += navItemSide;
    });
  
    // Add the menu button at the end of navigation1
    nav1.innerHTML += `
      <li style="list-style-type: none;" onclick="opensidebar()">
        <img id="menu_png" src="menu.png">
      </li>
    `;
  
    // Add the close button at the start of navigation2
    nav2.innerHTML = `
      <li style="list-style-type: none;">
        <img id="cross" onclick="closesidebar()" src="cross-white.png">
      </li>
      ${nav2.innerHTML}
    `;
  }
  
  // Call the function to generate navigation on page load
  document.addEventListener('DOMContentLoaded', generateNavigation);
  




document.addEventListener("DOMContentLoaded", function() {
    // Populate about section
    const introHeading = document.getElementById("intro_heading");
    const intro = document.getElementById("intro");
    const aboutMeImage = document.getElementById("aboutme_image");
    
    introHeading.textContent = aboutData.introHeading;
    intro.textContent = aboutData.intro;
    aboutMeImage.src = aboutData.imageSrc;

    

    // Page transition effects
    document.body.classList.add('page-transition-active');

    window.addEventListener("beforeunload", function() {
        document.body.classList.remove('page-transition-active');
    });
});
function opensidebar() {
    document.getElementById("navigation2").style.display = "flex";
}
function closesidebar() {
    document.getElementById("navigation2").style.display = "none";
}