// Mock API Data
const categories = [
    {
      id: 1,
      name: "Clothes",
      image: "assets/images/Dashboard/QkIa5tT.jpeg",
    },
    {
      id: 2,
      name: "Electronics",
      image: "assets/images/Dashboard/ZANVnHE.jpeg",
    },
    {
      id: 5,
      name: "Accessories",
      image: "https://github.com/jangiddeepak/ProductDeck/blob/main/public/images/Dashboard/furntureDashboard.jpg?raw=true",
    },
    {
      id: 4,
      name: "Furniture",
      image: "https://github.com/jangiddeepak/ProductDeck/blob/main/public/images/Dashboard/accesoriesDashboard.jpg?raw=true",
    },
  ];
  
  // Simulate API fetch with a delay
  function fetchCategories() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(categories); // Resolve categories after a delay
      }, 1000); // Simulate 1-second delay
    });
  }
  
  // Function to create a card
  function createCard(category) {
    return `
      <div class="card">
        <img src="${category.image}" alt="${category.name}">
        <h3>${category.name}</h3>
        <p>Products</p>
        <button>View Products</button>
      </div>
    `;
  }
  
  // Function to load dashboard content
  async function loadDashboard() {
    const dashboard = document.getElementById("dashboard");
  
    // Show a loading message while fetching data
    dashboard.innerHTML = "<p>Loading...</p>";
  
    // Fetch categories
    const categories = await fetchCategories();
  
    // Generate HTML for each category and append to the dashboard
    dashboard.innerHTML = categories.map(createCard).join("");
  }
  
  // Load dashboard on page load
  window.onload = loadDashboard;
  