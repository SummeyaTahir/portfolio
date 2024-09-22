

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
    // Populate contact information
    const introContainer = document.querySelector("#intro");
    
    // Email
    introContainer.innerHTML = `
        <div>Email: </div>
        <a id="c" href="${contactData.email.href}">${contactData.email.text}</a>
    `;

    // LinkedIn
    const linkedinContainer = introContainer.nextElementSibling;
    linkedinContainer.innerHTML = `
        <div>LinkedIn: </div>
        <a id="c" href="${contactData.linkedin.href}">${contactData.linkedin.text}</a>
    `;

    // Social Media
    const socialMediaContainer = document.querySelector("#intro span");
    socialMediaContainer.innerHTML = `
        <div>Follow me on: </div>
        <a id="c" href="${contactData.socialMedia.instagram.href}">${contactData.socialMedia.instagram.text}</a>
        <a id="c" href="${contactData.socialMedia.facebook.href}">${contactData.socialMedia.facebook.text}</a>
        <a id="c" href="${contactData.socialMedia.twitter.href}">${contactData.socialMedia.twitter.text}</a>
    `;

    // Set video source
    const videoElement = document.getElementById("aboutme_image");
    videoElement.src = contactData.videoSource;

    // Add page transition class
    document.body.classList.add('page-transition-active');
});

window.addEventListener("beforeunload", function() {
    document.body.classList.remove('page-transition-active');
});
