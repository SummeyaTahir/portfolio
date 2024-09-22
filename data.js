// data.js


// Content for navigation bars
const navigationData = [
    { text: "Home", link: "home.html" },
    { text: "About", link: "about.html" },
    { text: "Projects", link: "projects.html" },
    { text: "Skills and Experience", link: "skills.html" },
    { text: "Education", link: "education.html" },
    { text: "Contact", link: "contact.html" }
  ];
  
  // Site information
  const siteInfo = {
    logoSrc: "logo.png", // Replace with your logo source
    name: "Your Site Name", // Replace with your site name
    menuIconSrc: "menu.png", // Replace with your menu icon source
    closeIconSrc: "cross-white.png" // Replace with your close icon source
  };
  
  // Projects data
  const projectsData = [
    {
      title: "Chess, Shogi",
      description: "Built multiple board and arcade games, including Chess, Shogi, Snake, Ludo, and Gomoku using C++ and Python, showcasing strategic gameplay mechanics and a variety of user interfaces.",
      image: "chess.jpeg"
    },
    {
      title: "Ludo",
      description: "Built Ludo using C++ showcasing strategic gameplay mechanics and a variety of user interfaces.",
      image: "ludo.png"
    },
    {
      title: "Quranic Insights Website & Quranic Verses API",
      description: "Developed a comprehensive Quranic Insights website using MongoDB, Html, Css, Node.js, JavaScript to provide in-depth analysis of Quranic verses. The Quranic Verses API, powered by a custom-made Redis Database, delivers fast, efficient retrieval of verses for users and developers alike.",
      image: "Quran.jpeg"
    },
    {
      title: "Chatting Screen",
      description: "Developed a chatting screen frontend interface using html, css, javascript to facilitate smooth, live communication between users.",
      image: "chattingscreen.jpg"
    },
    {
      title: "Tic Tac Toe",
      description: "Created a Tic Tac Toe game with simple but effective gameplay, focusing on clean design and logic implementation. Languages used for this are Html, css, javascript.",
      image: "tic tac toe.PNG"
    },
    {
      title: "Inventory Management System",
      description: "Designed an Inventory Management System using Html, css, javascript. that tracks stock levels, manages product entries, and ensures smooth operations for inventory-based needs.",
      image: "inventory.PNG"
    }
  ];
  
  // Home page content data
  const homeData = {
    title: "Future Computer Scientist",
    description: "Future Computer Scientist - I have keen interest to learn WEB DEV and excel in this field.",
    image: "home.PNG",
    aboutLink: "about.html"
  };
  const aboutData = {
    introHeading: "Hello! I'm Summeya Tahir",
    intro: `A dedicated BS Computer Science student at ITU with a strong passion for web development. 
            I’ve completed a web development course from Ideoversity, which further fueled my interest in creating 
            dynamic and engaging websites. Currently, I’m focused on my university studies, but I’m eager to continue 
            learning and honing my skills in web development. My goal is to excel in this field and establish myself 
            as a professional web developer in the future. I like to cooperate with others nicely in every aspect of life 
            including work. I am hoping well to learn Web Dev.`,
    imageSrc: "about.jpg!d"
};
const skillsData = {
    heading: "Skills and Experience",
    generalText1: "The main area I know is front end development (client side of the web). HTML, CSS, JS I know and have made a few projects using them. Further, I know MongoDB, Node.js, Express, C++, Python, and React to some extent.",
    generalText2: "I excel in communication (I am a female lead at Kaare Kamal) and teamwork, effectively collaborating and solving complex problems. My analytical skills, along with strong time management and organizational abilities, ensure efficient task prioritization and productivity."
};
const educationData = {
    heading: "خلفية   تعليمية",
    universities: [
        {
            name: "Information Technology University",
            degree: "BSCS",
            duration: "August 2022 - June 2026",
            cgpa: "4th semester CGPA: 3.33",
            subjects: [
                "Object-Oriented Programming",
                "Differential Equations",
                "Computer Architecture and Assembly Language",
                "Digital Logic and Design",
                "Communication Skills",
                "Data Structures and Algorithms (DSA)",
                "Database Management",
                "Project Management",
                "Game Theory"
            ],
            image: "uni.jpeg"
        },
        {
            name: "Punjab College",
            degree: "Intermediate (Pre-engineering)",
            duration: "August 2020 - August 2022",
            marks: "Marks Scored: 1077/1100",
            image: "pgc.png"
        },
        {
            name: "Lahore Cantt Public High School",
            degree: "Matriculation",
            duration: "August 2018 - August 2020",
            marks: "Marks Scored: 1021/1100",
            image: "school.jpg"
        }
    ],
    certifications: [
        "Certificate in WEB development from Ideoversity",
    ],
    courses: [
        "Object-Oriented Programming",
        "Differential Equations",
        "Computer Architecture and Assembly Language",
        "Digital Logic and Design",
        "Communication Skills",
        "DSA",
        "Database Management",
        "Project Management",
        "Game Theory"
    ]
};
const contactData = {
    email: {
        text: "bscs22044@gmail.com",
        href: "mailto:bscs22044@gmail.com"
    },
    linkedin: {
        text: "summeya.doe1234@linkedinmail.com",
        href: "https://www.linkedin.com/in/summeya.doe1234/"
    },
    socialMedia: {
        instagram: {
            text: "Instagram",
            href: "https://www.instagram.com/yourusername"
        },
        facebook: {
            text: "Facebook",
            href: "https://www.facebook.com/yourusername"
        },
        twitter: {
            text: "Twitter",
            href: "https://twitter.com/yourusername"
        }
    },
    videoSource: "contactvideo.mp4"
};

