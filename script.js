const items = [
      { id: 1, name: "Wireless Mouse", price: 25.99, inStock: true, details: "Ergonomic design, USB receiver", image: "/images/wirelessMouse.webp" },
      { id: 2, name: "Bluetooth Headphones", price: 59.99, inStock: false, details: "Noise-cancelling, 20hr battery" , image: "/images/headphones.webp" },
      { id: 3, name: "Laptop Stand", price: 34.50, inStock: true, details: "Aluminum, adjustable height" , image: "/images/laptopStand.webp" },
      { id: 4, name: "USB-C Hub", price: 45.00, inStock: true, details: "6-in-1 ports, compact size" , image: "/images/usbHub.webp" },
      { id: 5, name: "Portable SSD", price: 89.99, inStock: false, details: "1TB, USB 3.2 Gen2" , image: "/images/portableSSD.jpg" }
    ];

    const container = document.getElementById("items-container");

    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "item";

      div.innerHTML = 
      ` <img src="${item.image}" alt="${item.name}" style="width:100px; height:auto;">
        <input type="checkbox" id="item-${item.id}" ${!item.inStock ? "disabled" : ""}>
        <label for="item-${item.id}" class="${!item.inStock ? "out-of-stock" : ""}">
          ${item.name} - £${item.price.toFixed(2)} ${!item.inStock ? "(Out of Stock)" : ""}
          <br><small>${item.details}</small>
        </label>
      `;
      container.appendChild(div);
    });

    function calculateTotal() {
      const selectedIds = items
        .filter(item => item.inStock)
        .map(item => {
          const checkbox = document.getElementById(`item-${item.id}`);
          return checkbox.checked ? item.price : 0;
        });

      const total = selectedIds.reduce((sum, price) => sum + price, 0);
      document.getElementById("total-display").textContent = `Grand Total: £${total.toFixed(2)}`;
    }