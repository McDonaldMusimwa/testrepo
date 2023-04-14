export default function modalFuntionality() {
    const buttons = Array.from(document.querySelectorAll(".myBtn"));
    const modals = Array.from(document.querySelectorAll(".myModal"));
    const closeButtons = document.querySelectorAll(".close");
  
    buttons.forEach(function(button, index) {
      button.addEventListener("click", function() {
        modals[index].style.display = "block";
        //console.log("Hello")
      });
    });
  
    closeButtons.forEach(function(closeButton) {
      closeButton.addEventListener("click", function() {
        const modal = this.closest(".myModal");
        modal.style.display = "none";
      });
    });
  
    window.addEventListener("click", function(event) {
      modals.forEach(function(modal) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    });
  }
  