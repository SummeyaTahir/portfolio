// home.js
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
  
  
  // Function to generate home content
  function generateHomeContent() {
    const homeContent = document.getElementById('page_home');
    homeContent.innerHTML = `
      <div class="row">
        <div class="col-12 col-sm-12 col-lg-6">
          <div id="home_content">
            <div id="h2">${homeData.title}</div>
            <p>${homeData.description}</p>
            <div><a id="about" href="${homeData.aboutLink}">About me >></a></div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-lg-6">
          <img id="home_img" src="${homeData.image}">
        </div>
      </div>
    `;
  }
  
  // Initialize home page
  function initHomePage() {
    generateNavigation();
    generateHomeContent();
  }
  
  document.addEventListener("DOMContentLoaded", initHomePage);
  function opensidebar() {
    document.getElementById("navigation2").style.display = "flex";
}
function closesidebar() {
    document.getElementById("navigation2").style.display = "none";
}