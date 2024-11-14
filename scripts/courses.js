// ========== Courses Array

const courses = [
  // course 1

  {
    image: "images/course1.jpg",
    name: "Responsive Social Media Website UI design",
    detail:
      "Learn to design responsive, user-friendly social media websites with modern UI techniques and best practices.",
  },
  // course 2

  {
    image: "images/course2.jpg",
    name: "Responsive SmartPhone Website",
    detail:
      " Learn to design responsive, mobile-friendly websites optimized for seamless user experience across smartphones.",
  },
  // course 3

  {
    image: "images/course3.jpg",
    name: "Responsive Admin Dashbord UI Designing",
    detail:
      "Master designing responsive, user-friendly admin dashboards with modern UI elements for seamless user interaction.",
  },
  // course 4
  {
    image: "images/course4.jpg",
    name: "Web Performance Optimization",
    detail:
      "Enhance website speed and efficiency using caching, image optimization, and asynchronous loading techniques.",
  },
  // course 5
  {
    image: "images/course5.jpg",
    name: "CSS Animations and Transitions",
    detail:
      "Add dynamic visual interest to your websites using CSS keyframes, animations, and smooth, fluid transitions.",
  },
  // course 6
  {
    image: "images/course6.jpg",
    name: "Mastering Web Development with Bootstrap",
    detail:
      "Create responsive, professional websites quickly by mastering Bootstrap’s powerful components and layout utilities.",
  },
  // course 7
  {
    image: "images/course7.jpg",
    name: "JavaScript ES6 and Beyond",
    detail:
      "Master modern JavaScript features with ES6, including arrow functions, destructuring, promises, and template literals.",
  },
  // course 8
  {
    image: "images/course8.jpg",
    name: "Web Accessibility Essentials",
    detail:
      "Learn to build inclusive websites that follow accessibility standards, ensuring usability for all visitors.",
  },
  // course 9
  {
    image: "images/course9.jpg",
    name: "Back-End Basics with Node.js",
    detail:
      "Get hands-on with Node.js fundamentals, learning to create and deploy server-side applications efficiently.",
  },
  // course 10
  {
    image: "images/course10.jpg",
    name: "PHP and MySQL for Beginners",
    detail:
      "Develop dynamic web applications using PHP and MySQL, creating data-driven, interactive web experiences.",
  },
  // course 11
  {
    image: "images/course11.jpg",
    name: "React Fundamentals",
    detail:
      "Understand core React concepts like components, state, and hooks, building interactive user interfaces effectively.",
  },
  // course 12
  {
    image: "images/course12.jpg",
    name: "Vue.js for Web Developers",
    detail:
      "Learn Vue.js to create reactive, data-driven single-page applications with an intuitive component-based architecture.",
  },
  // course 13
  {
    image: "images/course13.jpg",
    name: "Introduction to WordPress Development",
    detail:
      "Customize WordPress sites by creating themes, plugins, and custom features for unique, flexible user experiences.",
  },
  // course 14
  {
    image: "images/course14.jpg",
    name: "Building RESTful APIs with Express",
    detail:
      "Develop RESTful APIs with Express and Node.js, creating endpoints for seamless data-driven applications.",
  },
  // course 15
  {
    image: "images/course15.jpg",
    name: "Introduction to Full-Stack Development",
    detail:
      "Combine front-end and back-end skills to develop and deploy complete, full-stack web applications.",
  },
  // course 16
  {
    image: "images/course16.jpg",
    name: "Web Performance Optimization",
    detail:
      "Enhance website speed and efficiency using caching, image optimization, and asynchronous loading techniques.",
  },
  // course 17
  {
    image: "images/course17.jpg",
    name: "E-commerce Website Development",
    detail:
      "Create a robust e-commerce website with payment integration, shopping carts, and user-friendly product management",
  },
];

// variables
let coursesContainer = document.querySelector(".courses-container");

// showing courses on the document

courses.forEach((item) => {
  let div = document.createElement("div");
  div.classList.add("course");
  div.innerHTML += `
      <div class="course-image">
        <img src="${item.image}" alt="" />
      </div>
      <div class="course-info">
        <h4>${item.name}</h4>
        <p>
          ${item.detail}
        </p>
        <a href="course.html" class="btn btn-primary">Learn More</a>
      </div>
    `;
  coursesContainer.appendChild(div);
});
