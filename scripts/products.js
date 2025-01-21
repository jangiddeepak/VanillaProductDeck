// Mock API Caller
const apicaller = async () => {
    return [
      {
        id: 1,
        title: "Laptop",
        category: { name: "Electronics" },
        price: 1200.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 2,
        title: "Shoes",
        category: { name: "Fashion" },
        price: 80.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 3,
        title: "Smartphone",
        category: { name: "Electronics" },
        price: 999.99,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 4,
        title: "Wrist Watch",
        category: { name: "Accessories" },
        price: 199.99,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 5,
        title: "Jacket",
        category: { name: "Fashion" },
        price: 150.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 6,
        title: "Wireless Headphones",
        category: { name: "Electronics" },
        price: 120.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 7,
        title: "Backpack",
        category: { name: "Accessories" },
        price: 40.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 8,
        title: "Sneakers",
        category: { name: "Fashion" },
        price: 70.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 9,
        title: "Coffee Maker",
        category: { name: "Home Appliances" },
        price: 89.99,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 10,
        title: "Tablet",
        category: { name: "Electronics" },
        price: 500.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 11,
        title: "Running Shoes",
        category: { name: "Fashion" },
        price: 90.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 12,
        title: "Smartwatch",
        category: { name: "Electronics" },
        price: 250.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 13,
        title: "T-shirt",
        category: { name: "Fashion" },
        price: 25.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 14,
        title: "Bluetooth Speaker",
        category: { name: "Electronics" },
        price: 60.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 15,
        title: "Air Conditioner",
        category: { name: "Home Appliances" },
        price: 450.0,
        images: ["https://via.placeholder.com/50"],
      },
      {
        id: 16,
        title: "Microwave Oven",
        category: { name: "Home Appliances" },
        price: 120.0,
        images: ["https://via.placeholder.com/50"],
      }
    ];
  };
  
  const productTableBody = document.getElementById("productTableBody");
  const selectedProductsBtn = document.getElementById("selectedProductsBtn");
  
  let selectedProducts = [];
  
  // Function to render products
  const renderProducts = async () => {
    try {
      const products = await apicaller();
      productTableBody.innerHTML = ""; // Clear the table body
  
      products.forEach((product) => {
        const row = document.createElement("tr");
  
        row.innerHTML = `
          <td>
            <input type="checkbox" class="product-checkbox" data-id="${product.id}">
          </td>
          <td>
            <img src="${product.images[0]}" alt="${product.title}">
            <span>${product.title}</span>
          </td>
          <td>${product.category.name}</td>
          <td>Rs.${product.price.toFixed(2)}</td>
          <td class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </td>
        `;
  
        productTableBody.appendChild(row);
      });
  
      // Add event listeners for checkboxes
      document.querySelectorAll(".product-checkbox").forEach((checkbox) => {
        checkbox.addEventListener("change", handleCheckboxChange);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      productTableBody.innerHTML = `<tr><td colspan="5">Failed to load products</td></tr>`;
    }
  };
  
  // Handle checkbox selection
  const handleCheckboxChange = (event) => {
    const productId = parseInt(event.target.getAttribute("data-id"));
  
    if (event.target.checked) {
      selectedProducts.push(productId);
    } else {
      selectedProducts = selectedProducts.filter((id) => id !== productId);
    }
  
    selectedProductsBtn.textContent = `${selectedProducts.length} Selected Products`;
  };
  
  // Initialize
  renderProducts();
  