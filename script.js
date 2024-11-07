// Project carousel data for the home page
const projects = [
    { image: './img/temp/project-1.jpg', description: "Description for Project 1" },
    { image: "./img/temp/project-2.jpg", description: "Description for Project 2" },
    { image: "./img/temp/project-3.jpg", description: "Description for Project 3" },
    { image: "./img/temp/project-4.jpg", description: "Description for Project 4" },
    { image: "./img/temp/project-5.jpg", description: "Description for Project 5" }
  ];
  
  let currentSlide = 0;
  
  function showSlide(index) {
    const projectImage = document.getElementById("project-image");
    const projectDescription = document.getElementById("project-description");
  
    projectImage.src = projects[index].image;
    projectDescription.textContent = projects[index].description;
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % projects.length;
    showSlide(currentSlide);
  }
  
  function previousSlide() {
    currentSlide = (currentSlide - 1 + projects.length) % projects.length;
    showSlide(currentSlide);
  }
  
  // Initialize the first slide
  showSlide(currentSlide);
  
  // Toggle project details on the Projects page
  function toggleProjectDetails(button) {
    const projectDetails = button.nextElementSibling;
    const isExpanded = projectDetails.style.display === "block";
    
    if (isExpanded) {
      projectDetails.style.display = "none";
      button.textContent = "▼";
    } else {
      projectDetails.style.display = "block";
      button.textContent = "▲";
    }
  }
  
  // Contact form submission (mock)
  function submitForm(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  }
  