document.addEventListener('DOMContentLoaded', () => {
 
  const currentYearElement = document.getElementById("currentyear");
  const lastModifiedElement = document.getElementById("lastModified");

 
  if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
  }
  if (lastModifiedElement) {
      lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
  }
});
