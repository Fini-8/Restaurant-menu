// Menu items data
const menuItems = [
    {
        name: "Classic Caesar Salad",
        category: "starters",
        price: 12.99,
        description: "Crisp romaine lettuce, parmesan cheese, croutons, and our house-made Caesar dressing",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Grilled Salmon",
        category: "main",
        price: 24.99,
        description: "Fresh Atlantic salmon with lemon butter sauce, served with seasonal vegetables",
        image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Chocolate Lava Cake",
        category: "desserts",
        price: 8.99,
        description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Craft Beer",
        category: "drinks",
        price: 6.99,
        description: "Selection of local craft beers",
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Bruschetta",
        category: "starters",
        price: 9.99,
        description: "Toasted bread topped with fresh tomatoes, garlic, and basil",
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
    },
    {
        name: "Beef Tenderloin",
        category: "main",
        price: 34.99,
        description: "Grilled beef tenderloin with red wine reduction sauce",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
    }
];

// Function to create menu item HTML
function createMenuItemHTML(item) {
    return `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">$${item.price.toFixed(2)}</p>
            </div>
        </div>
    `;
}

// Function to display menu items
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    menuContainer.innerHTML = filteredItems.map(createMenuItemHTML).join('');
}

// Add event listeners for filter buttons
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter menu items
            const category = button.getAttribute('data-category');
            displayMenuItems(category);
        });
    });

    // Display all menu items initially
    displayMenuItems();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 