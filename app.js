const productsContainer = document.getElementById("productsContainer");
const addBtn = document.getElementById ("c-btn");

const GET_URL = "https://dummyjson.com/products";
const API_URL = "http://localhost:3000/products"; // json-server

function renderProduct(product, image) {
    productsContainer.insertAdjacentHTML("afterbegin", `
        <div class="product-card" data-id="${product.id}">
            <div class="product-top">
                <span class="product-category">${product.category}</span>
                <img src="${image}" width="150">
            </div>

            <h2 class="product-title">${product.title}</h2>

            <div class="product-footer">
                <div class="price-box">
                    <span class="price-label">Price</span>
                    <span class="product-price">${product.price}</span>
                </div>

                <button class="product-btn">View Product</button>
                <button class="delete-btn">Delete</button>
            </div>
        </div>
    `);
}

// GET (dummyjson)
async function getProducts() {
    try {
        const response = await fetch(GET_URL);
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        data.products.forEach((p) => renderProduct(p, p.thumbnail));
    } catch (error) {
        console.log("Error:", error);
    }
}

// DELETE (json-server)
productsContainer.addEventListener("click", async (event) => {
    if (!event.target.classList.contains("delete-btn")) return;

    const productCard = event.target.closest(".product-card");
    const productId = productCard.dataset.id;

    try {
        const response = await fetch(`${API_URL}/${productId}`, {
            method: "DELETE",
        });

        // 404 = product came from dummyjson
        if (!response.ok && response.status !== 404) {
            throw new Error("Failed to delete product");
        }

        console.log("Deleted:", productId);
        productCard.remove();
    } catch (error) {
        console.log("Error:", error);
    }
});

// POST (json-server)
async function createProduct() {
    const product = {
        title: "Black Hoodie",
        price: 35,
        category: "clothing",
    };

    try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
            });

            if (!response.ok) throw new Error("Failed to create product");

            const data = await response.json();
            console.log("Created:", data);

            renderProduct(data, "./hello.avif");
            await updateProduct(data.id);
        
    } catch (error) {
        console.log("Error:", error);
    }
}

// PUT (json-server)
async function updateProduct(productId) {
    try {
        const updatedProduct = {
            title: "Updated Product",
            price: 50,
            category: "clothing",
        };

        const response = await fetch(`${API_URL}/${productId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct),
        });

        if (!response.ok) throw new Error("Failed to update product");

        const data = await response.json();
        console.log("Updated:", data);

        const productCard = document.querySelector(
            `.product-card[data-id="${productId}"]`
        );

        productCard.querySelector(".product-title").textContent = data.title;
        productCard.querySelector(".product-price").textContent = data.price;
        productCard.querySelector(".product-category").textContent = data.category;
    } catch (error) {
        console.log("Error:", error);
    }
}

getProducts();
addBtn.addEventListener ("click", createProduct);
