
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
  

  document.addEventListener("DOMContentLoaded", function () {
    // Populate the heading
    document.getElementById("Arabic_heading").textContent = educationData.heading;

    // Populate university data
    const container = document.querySelector(".container-fluid");

    educationData.universities.forEach(university => {
        const row = document.createElement("div");
        row.className = "row";
        
        row.innerHTML = `
            <div class="col-lg-2 col-md-2 col-0"></div>
            <div class="col-lg-4 col-md-4 col-12">
                <img src="${university.image}" class="edu_img">
            </div>
            <div class="col-lg-4 col-md-4 col-12">
                <div style="color: white;">
                    <h3>${university.name} / ${university.degree}</h3>
                    <div>
                        <p>${university.duration}</p>
                        ${university.cgpa ? `<p>${university.cgpa}</p>` : ''}
                        ${university.marks ? `<p>${university.marks}</p>` : ''}
                        <p>${university.subjects ? university.subjects.join(', ') : ''}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-0"></div>
        `;

        container.appendChild(row);
    });

    // Populate certifications
    const certContainer = document.createElement("div");
    certContainer.className = "row";
    certContainer.innerHTML = `
        <div class="col-md-0 col-0 col-lg-3"></div>
        <div class="col-md-12 col-12 col-lg-6 box">
            <div id="projects_heading">Certification-شهادة</div><br>
            ${educationData.certifications.map(cert => `<p>${cert}</p>`).join('')}
        </div>
        <div class="col-md-0 col-0 col-lg-3"></div>
    `;
    container.appendChild(certContainer);

    // Populate courses
    const coursesContainer = document.createElement("div");
    coursesContainer.className = "row";
    coursesContainer.innerHTML = `
        <div class="col-md-0 col-0 col-lg-3"></div>
        <div class="col-md-12 col-12 col-lg-6 box">
            <div id="projects_heading">Courses</div><br>
            <p>${educationData.courses.join(', ')}</p>
        </div>
        <div class="col-md-0 col-0 col-lg-3"></div>
    `;
    container.appendChild(coursesContainer);
});
