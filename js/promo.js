// Promos Data
    const promosData = [
      // STUDENT PROMOS
      {
        id: 1,
        name: "Student Meal Deal",
        category: "student",
        price: 229,
        description: "6-inch sub + drink + cookie for students",
        icon: "fas fa-graduation-cap",
        iconColor: "bg-blue-500",
        tag: "Limited Time",
        tagColor: "bg-red-500",
        discount: "15% OFF",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 2,
        name: "Student Discount",
        category: "student",
        price: 130,
        description: "15% off on all sandwiches for students",
        icon: "fas fa-percent",
        iconColor: "bg-blue-500",
        discount: "15% OFF",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 3,
        name: "Weekday Special",
        category: "student",
        price: 199,
        description: "6-inch sub + drink + cookie for only ₱199",
        icon: "fas fa-calendar-day",
        iconColor: "bg-blue-500",
        discount: "15% OFF",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 4,
        name: "Student Breakfast",
        category: "student",
        price: 149,
        description: "Breakfast sandwich + coffee for students",
        icon: "fas fa-sun",
        iconColor: "bg-blue-500",
        discount: "20% OFF",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 5,
        name: "Student Combo",
        category: "student",
        price: 299,
        description: "Footlong sub + drink + chips for students",
        icon: "fas fa-hamburger",
        iconColor: "bg-blue-500",
        discount: "18% OFF",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      
      // FAMILY PROMOS
      {
        id: 6,
        name: "Family Feast Bundle",
        category: "family",
        price: 899,
        description: "Perfect for family dinners",
        icon: "fas fa-home",
        iconColor: "bg-green-500",
        discount: "Save ₱201",
        validUntil: "Ongoing",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 7,
        name: "Weekend Bundle",
        category: "family",
        price: 699,
        description: "2 Footlongs + 2 Six-inch + 4 Drinks",
        icon: "fas fa-calendar-alt",
        iconColor: "bg-green-500",
        discount: "Save ₱151",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 8,
        name: "Family Discount",
        category: "family",
        price: 0,
        description: "15% off on all meals ordering 12 to up meals",
        icon: "fas fa-percent",
        iconColor: "bg-green-500",
        discount: "15% OFF",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 9,
        name: "Family Picnic Pack",
        category: "family",
        price: 999,
        description: "4 sandwiches + 4 drinks + 4 cookies + chips",
        icon: "fas fa-utensils",
        iconColor: "bg-green-500",
        discount: "Save ₱250",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 10,
        name: "Family Breakfast Bundle",
        category: "family",
        price: 599,
        description: "4 breakfast sandwiches + 4 coffees",
        icon: "fas fa-coffee",
        iconColor: "bg-green-500",
        discount: "Save ₱120",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      
      // DISCOUNT PROMOS
      {
        id: 11,
        name: "Buy 1 Take 1 Footlong",
        category: "discount",
        price: 229,
        description: "Get 2 footlong subs for the price of 1",
        icon: "fas fa-gift",
        iconColor: "bg-red-500",
        tag: "Hot Deal",
        tagColor: "bg-red-500",
        discount: "50% OFF",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 12,
        name: "Flash Sale",
        category: "discount",
        price: 0,
        description: "40% off on all 6-inch subs for today only",
        icon: "fas fa-bolt",
        iconColor: "bg-red-500",
        discount: "40% OFF",
        validUntil: "24 hours only",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 13,
        name: "Early Bird Special",
        category: "discount",
        price: 0,
        description: "25% off on breakfast sandwiches before 9 AM",
        icon: "fas fa-earlybirds",
        iconColor: "bg-red-500",
        discount: "25% OFF",
        validUntil: "Dec 31, 2025 (7-9 AM only)",
        image: "https://images.unsplash.com/photo-1544003484-3cd181d17917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 14,
        name: "Late Night Deal",
        category: "discount",
        price: 0,
        description: "30% off on all subs after 9 PM",
        icon: "fas fa-moon",
        iconColor: "bg-red-500",
        discount: "30% OFF",
        validUntil: "Dec 31, 2025 (9-11 PM only)",
        image: "https://images.unsplash.com/photo-1597481499750-3e11b45b56a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 15,
        name: "Combo Discount",
        category: "discount",
        price: 0,
        description: "20% off when you add drink and chips to any sub",
        icon: "fas fa-tags",
        iconColor: "bg-red-500",
        discount: "20% OFF",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      
      // SPECIAL PROMOS
      {
        id: 16,
        name: "Holiday Special",
        category: "special",
        price: 259,
        description: "Festive subs with special holiday ingredients",
        icon: "fas fa-holly-berry",
        iconColor: "bg-purple-500",
        tag: "Seasonal",
        tagColor: "bg-purple-500",
        discount: "Limited Edition",
        validUntil: "Jan 5, 2026",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 17,
        name: "New Flavor Launch",
        category: "special",
        price: 279,
        description: "Try our new Mediterranean Chicken sub",
        icon: "fas fa-rocket",
        iconColor: "bg-purple-500",
        discount: "New",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 18,
        name: "Anniversary Special",
        category: "special",
        price: 0,
        description: "Celebrate our anniversary with special pricing",
        icon: "fas fa-crown",
        iconColor: "bg-purple-500",
        discount: "UP TO 50% OFF",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1566474982190-6b6d6a2a565d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 19,
        name: "Limited Edition Sub",
        category: "special",
        price: 299,
        description: "Spicy Korean BBQ sub available for limited time",
        icon: "fas fa-star",
        iconColor: "bg-purple-500",
        discount: "Limited Time",
        validUntil: "Supplies last",
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      },
      {
        id: 20,
        name: "Charity Promotion",
        category: "special",
        price: 0,
        description: "₱10 from every purchase donated to charity",
        icon: "fas fa-hand-holding-heart",
        iconColor: "bg-purple-500",
        discount: "HELP OTHERS",
        validUntil: "Dec 31, 2025",
        image: "https://images.unsplash.com/photo-1586985289906-4f6a2b3a0b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
      }
    ];

    // Pagination variables
    let currentPage = 1;
    const itemsPerPage = 6;
    let filteredPromosData = [...promosData];
    let currentCategory = 'all';

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
        window.location.href = 'index.html';
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

    // Notification System - UPDATED FOR SMALLER NOTIFICATIONS
    class NotificationSystem {
      constructor() {
        this.container = document.getElementById('notification-container');
        this.notifications = [];
      }

      showNotification(title, message, type = 'info', duration = 4000) {
        const id = Date.now().toString();
        const notification = document.createElement('div');
        
        // SMALLER NOTIFICATION STYLING
        notification.className = `bg-white rounded-lg shadow-lg border-l-4 overflow-hidden transform translate-x-full -translate-y-5 opacity-0 transition-all duration-300 ${
          type === 'success' ? 'border-green-500' : 
          type === 'warning' ? 'border-yellow-500' : 
          type === 'error' ? 'border-red-500' : 'border-blue-500'
        }`;
        
        notification.id = `notification-${id}`;

        // COMPACT NOTIFICATION CONTENT
        notification.innerHTML = `
          <div class="flex items-start p-3">
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-1">
                <h4 class="font-semibold text-gray-800 text-sm truncate">${title}</h4>
                <button class="text-gray-400 hover:text-gray-600 transition-colors duration-200 text-xs ml-2 flex-shrink-0" data-id="${id}">
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <p class="text-gray-600 text-xs leading-tight">${message}</p>
            </div>
          </div>
          <div class="h-1 bg-gray-200 w-full">
            <div class="h-full transition-all duration-100 ease-linear ${
              type === 'success' ? 'bg-green-500' : 
              type === 'warning' ? 'bg-yellow-500' : 
              type === 'error' ? 'bg-red-500' : 'bg-blue-500'
            }" id="progress-${id}"></div>
          </div>
        `;

        this.container.appendChild(notification);
        
        // Animate in from top-right
        setTimeout(() => {
          notification.classList.remove('translate-x-full', '-translate-y-5', 'opacity-0');
          notification.classList.add('translate-x-0', 'translate-y-0', 'opacity-100');
        }, 10);

        // Set up progress bar
        const progressBar = document.getElementById(`progress-${id}`);
        let width = 100;
        const interval = setInterval(() => {
          width -= (100 / (duration / 100));
          progressBar.style.width = `${width}%`;
        }, 100);

        // Auto remove after duration
        const timeout = setTimeout(() => {
          this.removeNotification(id);
        }, duration);

        // Store notification data
        this.notifications.push({
          id,
          element: notification,
          timeout,
          interval
        });

        // Set up close button
        notification.querySelector('button').addEventListener('click', () => {
          this.removeNotification(id);
        });

        return id;
      }

      removeNotification(id) {
        const notificationIndex = this.notifications.findIndex(n => n.id === id);
        if (notificationIndex === -1) return;

        const { element, timeout, interval } = this.notifications[notificationIndex];
        
        clearTimeout(timeout);
        clearInterval(interval);
        
        // Animate out to top-right
        element.classList.remove('translate-x-0', 'translate-y-0', 'opacity-100');
        element.classList.add('translate-x-full', '-translate-y-5', 'opacity-0');
        
        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }, 300);

        this.notifications.splice(notificationIndex, 1);
      }

      // Convenience methods for different notification types
      success(message, title = 'Success', duration = 4000) {
        return this.showNotification(title, message, 'success', duration);
      }

      error(message, title = 'Error', duration = 4000) {
        return this.showNotification(title, message, 'error', duration);
      }

      warning(message, title = 'Warning', duration = 4000) {
        return this.showNotification(title, message, 'warning', duration);
      }

      info(message, title = 'Info', duration = 4000) {
        return this.showNotification(title, message, 'info', duration);
      }
    }

    // Initialize notification system
    const notifications = new NotificationSystem();

    // Promos Filtering System
    document.querySelectorAll('.filter-btn').forEach(button => {
      button.addEventListener('click', function() {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.classList.remove('active', 'bg-subway-green', 'text-white');
          btn.classList.add('bg-gray-200', 'text-gray-700');
        });
        
        this.classList.remove('bg-gray-200', 'text-gray-700');
        this.classList.add('active', 'bg-subway-green', 'text-white');
        
        // Filter promo items
        const category = this.getAttribute('data-category');
        currentCategory = category;
        
        if (category === 'all') {
          filteredPromosData = [...promosData];
        } else {
          filteredPromosData = promosData.filter(item => item.category === category);
        }
        
        currentPage = 1;
        renderPromosItems();
        renderPagination();
        
        // Show filter notification
        notifications.info(
          `Showing ${category === 'all' ? 'all promos' : category + ' promos'}`,
          'Filter Applied'
        );
      });
    });

    // Render promo items
    function renderPromosItems() {
      const promosGrid = document.getElementById('promos-grid');
      promosGrid.innerHTML = '';
      
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const itemsToShow = filteredPromosData.slice(startIndex, endIndex);
      
      itemsToShow.forEach(item => {
        const promoItem = document.createElement('div');
        promoItem.className = 'bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-subway-green/30 group';
        promoItem.setAttribute('data-category', item.category);
        promoItem.setAttribute('data-id', item.id);
        
        let tagHTML = '';
        if (item.tag) {
          tagHTML = `
            <div class="absolute top-0 right-0 z-10">
              <div class="ribbon ${item.tagColor}">${item.tag}</div>
            </div>
          `;
        }
        
        promoItem.innerHTML = `
          ${tagHTML}
          <div class="h-48 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-6 relative overflow-hidden">
            <div class="text-center">
              <div class="w-20 h-20 ${item.iconColor} rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                <i class="${item.icon} text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold text-gray-800">${item.name}</h3>
            </div>
          </div>
          <div class="p-6 bg-gradient-to-b from-white to-gray-50 group-hover:to-green-50 transition-all duration-500">
            <small class="text-gray-500 text-sm">Valid until ${item.validUntil}</small>
            <h3 class="text-xl font-black text-subway-green mb-2 mt-1 group-hover:text-green-700 transition-colors">${item.name}</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">${item.description}</p>
            <div class="flex justify-between items-center mb-4">
              <div>
                ${item.price > 0 ? `<h4 class="font-black text-gray-800 text-lg">₱${item.price}</h4>` : ''}
                <p class="text-sm text-red-500 font-bold">${item.discount}</p>
              </div>
            </div>
            <button class="add-to-cart-promo w-full bg-gradient-to-r from-subway-green to-green-600 text-white text-sm font-black py-3 rounded-xl transition-all duration-300 hover:from-subway-yellow hover:to-yellow-500 hover:text-gray-900 hover:scale-105 shadow-lg hover:shadow-xl" 
                    data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">
              Add to Cart
            </button>
          </div>
        `;
        
        promosGrid.appendChild(promoItem);
      });
      
      // Add event listeners to the newly created buttons
      document.querySelectorAll('.add-to-cart-promo').forEach(button => {
        button.addEventListener('click', function() {
          const id = this.getAttribute('data-id');
          const name = this.getAttribute('data-name');
          const price = this.getAttribute('data-price');
          const image = this.getAttribute('data-image');
          
          // Add to cart directly without modal
          cart.addItem(id, name, price, image);
          
          // Add visual feedback
          const originalText = this.textContent;
          this.textContent = 'Added!';
          this.classList.remove('hover:from-subway-yellow', 'hover:to-yellow-500', 'hover:text-gray-900');
          this.classList.add('from-subway-yellow', 'to-yellow-500', 'text-gray-900');
          
          setTimeout(() => {
            this.textContent = originalText;
            this.classList.remove('from-subway-yellow', 'to-yellow-500', 'text-gray-900');
            this.classList.add('hover:from-subway-yellow', 'hover:to-yellow-500', 'hover:text-gray-900');
          }, 1000);
          
          // Show notification
          notifications.success(
            `${name} added to cart`,
            'Promo Added'
          );
        });
      });
    }

    // Render pagination
    function renderPagination() {
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = '';
      
      const totalPages = Math.ceil(filteredPromosData.length / itemsPerPage);
      
      if (totalPages <= 1) return;
      
      // Create pagination container with better styling
      const paginationContainer = document.createElement('div');
      paginationContainer.className = 'flex items-center justify-center space-x-2 bg-white rounded-2xl p-4';
      
      // Previous button
      if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.className = 'flex items-center justify-center w-10 h-10 bg-subway-green text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md';
        prevButton.innerHTML = '<i class="fas fa-chevron-left text-sm"></i>';
        prevButton.title = 'Previous page';
        prevButton.addEventListener('click', () => {
          currentPage--;
          renderPromosItems();
          renderPagination();
        });
        paginationContainer.appendChild(prevButton);
      }
      
      // Page numbers with ellipsis for many pages
      const maxVisiblePages = 5;
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      // Adjust start page if we're near the end
      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
      
      // First page with ellipsis if needed
      if (startPage > 1) {
        const firstPageButton = document.createElement('button');
        firstPageButton.className = 'flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all duration-300';
        firstPageButton.textContent = '1';
        firstPageButton.addEventListener('click', () => {
          currentPage = 1;
          renderPromosItems();
          renderPagination();
        });
        paginationContainer.appendChild(firstPageButton);
        
        if (startPage > 2) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'text-gray-500 mx-1';
          ellipsis.textContent = '...';
          paginationContainer.appendChild(ellipsis);
        }
      }
      
      // Page numbers
      for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        
        if (currentPage === i) {
          pageButton.className = 'flex items-center justify-center w-10 h-10 bg-gradient-to-r from-subway-green to-green-600 text-white rounded-full font-bold shadow-lg transform scale-105 transition-all duration-300';
        } else {
          pageButton.className = 'flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105';
        }
        
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
          currentPage = i;
          renderPromosItems();
          renderPagination();
        });
        paginationContainer.appendChild(pageButton);
      }
      
      // Last page with ellipsis if needed
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          const ellipsis = document.createElement('span');
          ellipsis.className = 'text-gray-500 mx-1';
          ellipsis.textContent = '...';
          paginationContainer.appendChild(ellipsis);
        }
        
        const lastPageButton = document.createElement('button');
        lastPageButton.className = 'flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all duration-300';
        lastPageButton.textContent = totalPages;
        lastPageButton.addEventListener('click', () => {
          currentPage = totalPages;
          renderPromosItems();
          renderPagination();
        });
        paginationContainer.appendChild(lastPageButton);
      }
      
      // Next button
      if (currentPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.className = 'flex items-center justify-center w-10 h-10 bg-subway-green text-white rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-md';
        nextButton.innerHTML = '<i class="fas fa-chevron-right text-sm"></i>';
        nextButton.title = 'Next page';
        nextButton.addEventListener('click', () => {
          currentPage++;
          renderPromosItems();
          renderPagination();
        });
        paginationContainer.appendChild(nextButton);
      }
      
      // Page info
      const pageInfo = document.createElement('div');
      pageInfo.className = 'text-gray-600 text-sm font-medium ml-4 hidden md:block';
      paginationContainer.appendChild(pageInfo);
      
      pagination.appendChild(paginationContainer);
    }

    // Close modal functionality
    document.getElementById('close-modal').addEventListener('click', function() {
      document.getElementById('order-modal').classList.add('hidden');
    });

    // Close modal when clicking outside
    document.getElementById('order-modal').addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.add('hidden');
      }
    });
    
    // Initialize the page
    window.addEventListener('load', () => {
      renderPromosItems();
      renderPagination();
      
      setTimeout(() => {
        notifications.info(
          'Check out our limited-time promotions', 
          'Welcome to Promotions', 
          4000
        );
      }, 1000);
    });