<script>
  document.addEventListener("DOMContentLoaded", function () {
    const sections = {
      "home-section": "Home",
      "men-section": "Men",
      "women-section": "Women",
      "kids-section": "Kids",
      "accessories-section": "Accessories",
      "lifestyle-section": "Lifestyle",
    };

    const sectionKeys = Object.keys(sections);

    // Function to show the selected section and hide other sections
    function showSection(sectionId) {
      sectionKeys.forEach((key) => {
        const section = document.getElementById(key);
        section.style.display = key === sectionId ? "block" : "none";
      });
    }

    // Event listener to handle click on navigation links
    const navLinks = document.querySelectorAll(".flex ul li a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const sectionId = link.getAttribute("href").substring(1);
        showSection(sectionId);
      });
    });
  });
  function openNewPage() {
  
  window.open(index.html", "_blank");
}
function openNewPage() {
  
  window.open(index.html", "_blank");
}

</script>