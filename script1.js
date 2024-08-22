document.addEventListener("DOMContentLoaded", function () {
  fetch("./ecommerce.json")
    .then((response) => response.json())
    .then((data) => {
      const categoriesSection = document.querySelector(".categories");
      categoriesSection.innerHTML = ""; // Clear existing content

      // Extracting the data for men's, women's, and accessories categories
      const products = data.products[0];

      // Dynamically create the category divs
      const categories = ["mens", "womens", "accessories"];

      categories.forEach((category) => {
        const product = products[category][0]; // Access the first item in each category
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");

        categoryDiv.innerHTML = `
                  <img src="${product.thumbnail}" alt="${category}" />
                  <p>Category<br />${
                    category.charAt(0).toUpperCase() + category.slice(1)
                  }</p>
              `;

        categoriesSection.appendChild(categoryDiv);
      });
    })
    .catch((error) => console.error("Error loading products:", error));
});
