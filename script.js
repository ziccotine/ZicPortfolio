// Project carousel data for the home page
const projects = [
    { image: './img/temp/project-1.jpg', description: "Moving Purple Heart" },
    { image: "./img/temp/project-2.2.jpg", description: "My Artworks!" },
    { image: "./img/temp/project-3.jpg", description: "A simple search mobile app" },
    { image: "./img/temp/project-4.jpg", description: "Travel List App" },
    { image: "./img/temp/project-5.jpg", description: "UI for online shopping app" }
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
  





function toggleProjectDetails(button) {
  const projectDetails = button.closest('.project-item').querySelector('.project-details');
  const isExpanded = projectDetails.style.display === "block";

  if (isExpanded) {
    projectDetails.style.display = "none";
    button.textContent = "▼";  // Change the button text to a down arrow
  } else {
    projectDetails.style.display = "block";
    button.textContent = "▲";  // Change the button text to an up arrow
  }
}

  
  // Contact form submission (mock)
  function submitForm(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  }
  