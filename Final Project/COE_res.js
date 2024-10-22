// pdf viewer code
function viewPDF(pdfUrl, buttonElement) {
  var iframe = document.getElementById("pdf-viewer");
  iframe.src = pdfUrl;

  // Change the clicked button's styles
  buttonElement.style.backgroundColor = "#FF6F3C"; // Change background color
  buttonElement.style.color = "#FFFFFF"; // Change text color

  // Reset styles for all child buttons in the entire side_nav_file section
  const allChildButtons = document.querySelectorAll('.side_nav_file button'); // Select all child buttons
  allChildButtons.forEach(btn => {
      if (btn !== buttonElement) {
          btn.style.backgroundColor = "#f0f0f0"; // Reset background color
          btn.style.color = "#FF6F3C"; // Reset text color
      }
  });

}

// Function to load a Google Drive PDF
function viewGoogleDrivePDF(driveFileId) {
  var googleDriveUrl = `https://drive.google.com/file/d/${driveFileId}/preview`;
  // Get the button that was clicked to change its style
  const buttonElement = event.target; // Use 'event' to get the clicked button
  viewPDF(googleDriveUrl, buttonElement); // Pass the button element
}

// Collapsible Code
document.addEventListener("DOMContentLoaded", function() {
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (window.getComputedStyle(content).display === "block") {
              content.style.display = "none";
          } else {
              content.style.display = "block";
          }
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  function adjustMainMargin() {
      const nav = document.querySelector('nav');
      const headerHeight = nav.offsetHeight; // Get the height of the nav
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`); // Set the CSS variable
  }

  // Call the function once to set the initial margin
  adjustMainMargin();

  // Optional: Adjust margin on window resize
  window.addEventListener('resize', adjustMainMargin);
});

// Debugging logs
console.log("Script loaded");
var coll = document.getElementsByClassName("collapsible");
console.log("Collapsible elements found:", coll.length);