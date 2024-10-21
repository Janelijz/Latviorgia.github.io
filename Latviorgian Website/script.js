// Example: Add custom scripts for interactivity here

document.addEventListener("DOMContentLoaded", function() {
    // This function runs after the HTML document is fully loaded
    console.log("Website loaded");
    
    // Example: You could add a pop-up or alert box when someone scrolls down
    window.addEventListener("scroll", function() {
      if (window.scrollY > 100) {
        console.log("User scrolled down more than 100px");
      }
    });
  });
  