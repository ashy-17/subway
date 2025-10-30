// Tailwind Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'subway-green': '#009639',
        'subway-yellow': '#FBCE07',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'slideInRight': 'slideInRight 0.3s ease-out forwards',
        'slideOutRight': 'slideOutRight 0.3s ease-in forwards',
        'fadeIn': 'fadeIn 0.2s ease-out forwards',
        'fadeOut': 'fadeOut 0.2s ease-in forwards',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        }
      }
    }
  }
};

// Shopping Cart System
class ShoppingCart {
  constructor() {
    this.items = [];
    this.deliveryFee = 40;
    this.updateCartDisplay();
  }

  addItem(id, name, price, image) {
    // Check if item already exists in cart
    const existingItemIndex = this.items.findIndex(item => item.id === id);
    
    if (existingItemIndex !== -1) {
      // Update quantity if item already exists
      this.items[existingItemIndex].quantity += 1;
    } else {
      // Add new item to cart
      this.items.push({ 
        id, 
        name, 
        price: parseInt(price), 
        image,
        quantity: 1 
      });
    }
    
    this.updateCartDisplay();
    this.showCart();
    
    return this.items;
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.updateCartDisplay();
  }

  updateQuantity(id, quantity) {
    const item = this.items.find(item => item.id === id);
    if (item) {
      item.quantity = quantity;
      this.updateCartDisplay();
    }
  }

  calculateSubtotal() {
    return this.items.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
  }

  calculateTotal() {
    return this.calculateSubtotal() + this.deliveryFee;
  }

  getTotalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Update cart count
    if (cartCount) {
      cartCount.textContent = this.getTotalItems();
    }
    
    // Update cart items
    if (cartItems) {
      // Clear existing items except the empty cart message
      const itemsToRemove = cartItems.querySelectorAll('.cart-item');
      itemsToRemove.forEach(item => item.remove());
      
      // Show/hide empty cart message
      if (this.items.length === 0) {
        emptyCartMessage.classList.remove('hidden');
      } else {
        emptyCartMessage.classList.add('hidden');
        
        // Add each item to the cart
        this.items.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.className = 'cart-item bg-gray-50 rounded-xl p-4 mb-4';
          cartItem.innerHTML = `
            <div class="flex items-center">
              <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover">
              <div class="ml-4 flex-1">
                <h4 class="font-bold text-gray-800">${item.name}</h4>
                <p class="text-subway-green font-bold">₱${item.price}</p>
                <div class="flex items-center mt-2">
                  <button class="quantity-btn decrease text-gray-500 hover:text-subway-green" data-id="${item.id}">
                    <i class="fas fa-minus"></i>
                  </button>
                  <span class="mx-3 font-bold">${item.quantity}</span>
                  <button class="quantity-btn increase text-gray-500 hover:text-subway-green" data-id="${item.id}">
                    <i class="fas fa-plus"></i>
                  </button>
                  <button class="remove-item ml-4 text-red-500 hover:text-red-700" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          `;
          cartItems.appendChild(cartItem);
        });
      }
    }
    
    // Update totals
    if (cartSubtotal) {
      cartSubtotal.textContent = `₱${this.calculateSubtotal()}`;
    }
    
    if (cartTotal) {
      cartTotal.textContent = `₱${this.calculateTotal()}`;
    }
    
    // Enable/disable checkout button
    if (checkoutBtn) {
      checkoutBtn.disabled = this.items.length === 0;
    }
    
    // Add event listeners to cart buttons
    this.attachCartEventListeners();
  }

  attachCartEventListeners() {
    // Quantity decrease buttons
    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
      button.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const item = this.items.find(item => item.id === id);
        if (item && item.quantity > 1) {
          this.updateQuantity(id, item.quantity - 1);
        } else {
          this.removeItem(id);
        }
      });
    });
    
    // Quantity increase buttons
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
      button.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const item = this.items.find(item => item.id === id);
        if (item) {
          this.updateQuantity(id, item.quantity + 1);
        }
      });
    });
    
    // Remove item buttons
    document.querySelectorAll('.remove-item').forEach(button => {
      button.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        this.removeItem(id);
      });
    });
  }

  showCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
  }

  hideCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
  }
}

// Profile Dropdown System
class ProfileDropdown {
  constructor() {
    this.dropdown = document.getElementById('profile-dropdown');
    this.profileBtn = document.getElementById('profile-btn');
    this.isOpen = false;
    
    this.init();
  }
  
  init() {
    // Toggle dropdown on click
    this.profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      if (this.isOpen) {
        this.close();
      }
    });
    
    // Prevent dropdown from closing when clicking inside it
    this.dropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    
    // Hover functionality for desktop
    if (window.innerWidth > 768) {
      this.profileBtn.addEventListener('mouseenter', () => {
        this.open();
      });
      
      const profileContainer = document.getElementById('profile-container');
      profileContainer.addEventListener('mouseleave', () => {
        this.close();
      });
    }
  }
  
  open() {
    this.dropdown.classList.add('open');
    this.isOpen = true;
  }
  
  close() {
    this.dropdown.classList.remove('open');
    this.isOpen = false;
  }
  
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}

// Logout Modal System
class LogoutModal {
  constructor() {
    this.modal = document.getElementById('logout-modal');
    this.logoutBtn = document.getElementById('logout-btn');
    this.cancelBtn = document.getElementById('cancel-logout');
    this.confirmBtn = document.getElementById('confirm-logout');
    
    this.init();
  }
  
  init() {
    // Open modal when logout button is clicked
    this.logoutBtn.addEventListener('click', () => {
      this.open();
    });
    
    // Close modal when cancel button is clicked
    this.cancelBtn.addEventListener('click', () => {
      this.close();
    });
    
    // Handle logout confirmation
    this.confirmBtn.addEventListener('click', () => {
      this.performLogout();
    });
    
    // Close modal when clicking outside
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });
  }
  
  open() {
    this.modal.classList.add('open');
  }
  
  close() {
    this.modal.classList.remove('open');
  }
  
  performLogout() {
    // Close the modal
    this.close();
    
    // Close the profile dropdown
    profileDropdown.close();
    
    // Redirect to login page
    window.location.href = 'login.html';
  }
}

// Initialize systems
const cart = new ShoppingCart();
const profileDropdown = new ProfileDropdown();
const logoutModal = new LogoutModal();

// Cart Button Functionality
document.getElementById('cart-btn').addEventListener('click', function() {
  cart.showCart();
});

// Close Cart Button
document.getElementById('close-cart').addEventListener('click', function() {
  cart.hideCart();
});

// Close Cart when clicking overlay
document.getElementById('cart-overlay').addEventListener('click', function() {
  cart.hideCart();
});

// Continue Shopping Button
document.getElementById('continue-shopping').addEventListener('click', function() {
  cart.hideCart();
});

// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

// Global variables for map and markers
let map;
let markers = {};

// Initialize the map
function initMap() {
    // Center on Philippines
    map = L.map('map').setView([14.5995, 120.9842], 6);
    
    // Add tile layer (map background)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Subway locations in Philippines
    const subwayLocations = [
        {
            name: "Subway SM Mall of Asia",
            latlng: [14.5355, 120.9821],
            address: "SM Mall of Asia, Pasay City, Metro Manila",
            phone: "(02) 8556-7890"
        },
        {
            name: "Subway Greenbelt Makati",
            latlng: [14.5547, 121.0244],
            address: "Greenbelt 5, Ayala Center, Makati City",
            phone: "(02) 8752-3456"
        },
        {
            name: "Subway Bonifacio Global City",
            latlng: [14.5547, 121.0500],
            address: "Bonifacio High Street, Taguig City",
            phone: "(02) 8876-5432"
        },
        {
            name: "Subway Trinoma",
            latlng: [14.6543, 121.0340],
            address: "Trinoma Mall, Quezon City",
            phone: "(02) 8901-2345"
        },
        {
            name: "Subway Ayala Center Cebu",
            latlng: [10.3157, 123.8854],
            address: "Ayala Center Cebu, Cebu City",
            phone: "(032) 412-3456"
        },
        {
            name: "Subway Abreeza Mall Davao",
            latlng: [7.0689, 125.6070],
            address: "Abreeza Mall, Davao City",
            phone: "(082) 285-6789"
        },
        {
            name: "Subway SM City Iloilo",
            latlng: [10.7202, 122.5621],
            address: "SM City Iloilo, Iloilo City",
            phone: "(033) 509-8765"
        },
        {
            name: "Subway SM Clark",
            latlng: [15.1850, 120.5790],
            address: "SM City Clark, Pampanga",
            phone: "(045) 499-0123"
        }
    ];
    
    // Add markers for each location
    subwayLocations.forEach((location, index) => {
        const marker = L.marker(location.latlng).addTo(map);
        markers[index] = marker;
        
        marker.bindPopup(`
            <div class="p-3 min-w-[250px]">
                <h3 class="font-bold text-lg text-subway-green mb-2">${location.name}</h3>
                <div class="space-y-2">
                    <p class="text-sm flex items-start">
                        <i class="fas fa-map-marker-alt text-subway-green mt-1 mr-2"></i>
                        ${location.address}
                    </p>
                    <p class="text-sm flex items-center">
                        <i class="fas fa-phone text-subway-green mr-2"></i>
                        ${location.phone}
                    </p>
                </div>
                <div class="mt-3 flex space-x-2">
                    <button onclick="focusOnLocation(${location.latlng[0]}, ${location.latlng[1]})" 
                            class="flex-1 bg-subway-green text-white py-2 px-3 rounded text-sm hover:bg-green-700 transition">
                        View Details
                    </button>
                    <button onclick="getDirections(${location.latlng[0]}, ${location.latlng[1]})" 
                            class="flex-1 bg-subway-yellow text-gray-800 py-2 px-3 rounded text-sm hover:bg-yellow-500 transition">
                        Get Directions
                    </button>
                </div>
            </div>
        `);
    });
}

// Map control functions
function zoomIn() {
    if (map) {
        map.zoomIn();
    }
}

function zoomOut() {
    if (map) {
        map.zoomOut();
    }
}

function resetMap() {
    if (map) {
        map.setView([14.5995, 120.9842], 6);
    }
}

function showAllLocations() {
    if (map && Object.keys(markers).length > 0) {
        const group = new L.featureGroup();
        Object.values(markers).forEach(marker => {
            group.addLayer(marker);
        });
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

function focusOnLocation(lat, lng) {
    if (map) {
        map.setView([lat, lng], 15);
    }
}

function getDirections(lat, lng) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, '_blank');
}

function useMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                if (map) {
                    map.setView([position.coords.latitude, position.coords.longitude], 13);
                    
                    // Add user location marker
                    L.marker([position.coords.latitude, position.coords.longitude])
                     .addTo(map)
                     .bindPopup('Your Location')
                     .openPopup();
                }
            },
            function(error) {
                alert('Unable to get your location: ' + error.message);
            }
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', function() {
    initMap();
});

// Simple search functionality
document.getElementById('location-search').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const locationCards = document.querySelectorAll('.location-card');
  
  locationCards.forEach(card => {
    const locationName = card.querySelector('h4').textContent.toLowerCase();
    const locationAddress = card.querySelector('p').textContent.toLowerCase();
    
    if (locationName.includes(searchTerm) || locationAddress.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});