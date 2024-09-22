// projects.js


// Function to generate navigation menu
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
  // Function to generate projects
  function generateProjects() {
    const projectsContainer = document.getElementById('projects_page');
    projectsContainer.innerHTML = ''; // Clear existing content
    
    for (let i = 0; i < projectsData.length; i += 2) {
      const project1 = projectsData[i];
      const project2 = projectsData[i + 1];
  
      // Generate HTML for two projects in one row
      const projectHTML = `
        <div class="row">
          <div class="col-0 col-md-2 col-lg-2"></div>
          
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <div class="image-container">
              <img id="projectimages" src="${project1.image}" alt="${project1.title}">
              <div class="overlay">
                <span>${project1.description}</span>
              </div>
            </div>
          </div>
          
          ${project2 ? `
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <div class="image-container">
              <img id="projectimages" src="${project2.image}" alt="${project2.title}">
              <div class="overlay">
                <span>${project2.description}</span>
              </div>
            </div>
          </div>` : `
          <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <div class="image-container empty-container">
              <!-- Placeholder for empty column if no second project -->
            </div>
          </div>`}
          
          <div class="col-0 col-md-2 col-lg-2"></div>
        </div>
      `;
  
      projectsContainer.innerHTML += projectHTML;
    }
  }
  
  
  // Initialize projects page
  function initProjectsPage() {
    generateNavigation();
    generateProjects();
  }
  
  document.addEventListener("DOMContentLoaded", initProjectsPage);
  function opensidebar() {
    document.getElementById("navigation2").style.display = "flex";
}
function closesidebar() {
    document.getElementById("navigation2").style.display = "none";
}