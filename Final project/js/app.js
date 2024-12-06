document.addEventListener("DOMContentLoaded", () => {
    // Load Header and Footer
    fetch("shared/header.html")
      .then(response => response.text())
      .then(data => {
        document.querySelector("header").innerHTML = data;
      });
  
    fetch("shared/footer.html")
      .then(response => response.text())
      .then(data => {
        document.querySelector("footer").innerHTML = data;
      });
  
    // Add-to-Cart functionality
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("add-to-cart")) {
        alert("Typewriter added to cart!");
      }
    });
  });
  