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
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slideInRight': 'slideInRight 0.3s ease-out forwards',
        'slideOutRight': 'slideOutRight 0.3s ease-in forwards',
        'fadeIn': 'fadeIn 0.2s ease-out forwards',
        'fadeOut': 'fadeOut 0.2s ease-in forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 150, 57, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 150, 57, 0.6)' },
        },
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

// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

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

// Add to Cart buttons
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', function() {
    const id = this.getAttribute('data-id');
    const name = this.getAttribute('data-name');
    const price = this.getAttribute('data-price');
    const image = this.getAttribute('data-image');
    
    cart.addItem(id, name, price, image);
    
    // Show success animation
    this.innerHTML = '<i class="fas fa-check mr-2"></i>Added!';
    this.classList.remove('bg-gradient-to-r', 'from-subway-green', 'to-green-600');
    this.classList.add('bg-green-500');
    
    setTimeout(() => {
      this.innerHTML = 'Add to Cart';
      this.classList.remove('bg-green-500');
      this.classList.add('bg-gradient-to-r', 'from-subway-green', 'to-green-600');
    }, 2000);
  });
});