// Menu Data
    const menuData = [
      // SANDWICHES
      {
        id: 1,
        name: "Italian BMT",
        category: "sandwich",
        price: 229,
        rating: 4.8,
        description: "Wheat bread, extra cheese, lettuce, tomatoes, onions, mayo",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "BESTSELLER",
        tagColor: "bg-subway-green"
      },
      {
        id: 2,
        name: "Chicken Teriyaki",
        category: "sandwich",
        price: 199,
        rating: 4.6,
        description: "White bread, lettuce, cucumbers, olives, sweet onion sauce",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "SPICY",
        tagColor: "bg-red-500"
      },
      {
        id: 3,
        name: "Tuna",
        category: "sandwich",
        price: 199,
        rating: 4.7,
        description: "Hearty Italian bread, spinach, tomatoes, pickles, ranch sauce",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "HEALTHY",
        tagColor: "bg-blue-500"
      },
      {
        id: 4,
        name: "Meatball Marinara",
        category: "sandwich",
        price: 225,
        rating: 4.5,
        description: "Italian-style meatballs in a tangy tomato marinara sauce",
        image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "CLASSIC",
        tagColor: "bg-red-500"
      },
      {
        id: 5,
        name: "Turkey Breast",
        category: "sandwich",
        price: 189,
        rating: 4.4,
        description: "Sliced turkey breast with your choice of fresh veggies",
        image: "pictures/turkey.jpg",
        tag: "LEAN",
        tagColor: "bg-green-500"
      },
      {
        id: 6,
        name: "Veggie Delite",
        category: "sandwich",
        price: 179,
        rating: 4.3,
        description: "Fresh veggies on your choice of bread with sauces",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "VEGGIE",
        tagColor: "bg-green-500"
      },
      
      // SALADS
      {
        id: 11,
        name: "Veggie Delite Salad",
        category: "salad",
        price: 100,
        rating: 4.3,
        description: "Fresh lettuce, tomatoes, cucumbers, bell peppers, onions",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "VEGGIE",
        tagColor: "bg-green-500"
      },
      {
        id: 12,
        name: "Chicken Caesar Salad",
        category: "salad",
        price: 150,
        rating: 4.6,
        description: "Grilled chicken, romaine lettuce, parmesan, croutons",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "CLASSIC",
        tagColor: "bg-yellow-500"
      },
      {
        id: 13,
        name: "Tuna Salad",
        category: "salad",
        price: 130,
        rating: 4.4,
        description: "Fresh tuna with mixed greens and your choice of dressing",
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "HEALTHY",
        tagColor: "bg-blue-500"
      },
      {
        id: 14,
        name: "Italian BMT Salad",
        category: "salad",
        price: 160,
        rating: 4.5,
        description: "All the flavors of the Italian BMT in a fresh salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "MEATY",
        tagColor: "bg-red-500"
      },
      {
        id: 15,
        name: "Turkey Breast Salad",
        category: "salad",
        price: 140,
        rating: 4.3,
        description: "Sliced turkey breast with fresh greens and veggies",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "LEAN",
        tagColor: "bg-green-500"
      },
      
      // DRINKS
      {
        id: 21,
        name: "Fountain Drink",
        category: "drink",
        price: 100,
        rating: 4.2,
        description: "A self-serve soft drink you can choose from the dispenser",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "REFRESHING",
        tagColor: "bg-blue-500"
      },
      {
        id: 22,
        name: "Bottled Water",
        category: "drink",
        price: 50,
        rating: 4.0,
        description: "Pure, refreshing bottled water",
        image: "https://images.unsplash.com/photo-1544003484-3cd181d17917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "PURE",
        tagColor: "bg-blue-500"
      },
      {
        id: 23,
        name: "Iced Tea",
        category: "drink",
        price: 80,
        rating: 4.3,
        description: "Refreshing iced tea, sweetened or unsweetened",
        image: "pictures/iced.jpg",
        tag: "SWEET",
        tagColor: "bg-amber-500"
      },
      {
        id: 24,
        name: "Lemonade",
        category: "drink",
        price: 90,
        rating: 4.5,
        description: "Freshly squeezed lemonade, sweet and tangy",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "TANGY",
        tagColor: "bg-yellow-500"
      },
      {
        id: 25,
        name: "Orange Juice",
        category: "drink",
        price: 110,
        rating: 4.6,
        description: "Freshly squeezed orange juice, packed with vitamin C",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "FRESH",
        tagColor: "bg-orange-500"
      },
      
      // SIDES
      {
        id: 31,
        name: "Chocolate Chip Cookie",
        category: "side",
        price: 50,
        rating: 4.8,
        description: "Freshly baked chocolate chip cookie, warm and delicious",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "SWEET",
        tagColor: "bg-amber-500"
      },
      {
        id: 32,
        name: "Potato Chips",
        category: "side",
        price: 60,
        rating: 4.2,
        description: "Crispy potato chips, perfect as a side to your sandwich",
        image: "pictures/potato chips.jpg",
        tag: "CRISPY",
        tagColor: "bg-yellow-500"
      },
      {
        id: 33,
        name: "Apple Slices",
        category: "side",
        price: 70,
        rating: 4.1,
        description: "Fresh, crisp apple slices for a healthy snack",
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "HEALTHY",
        tagColor: "bg-red-500"
      },
      {
        id: 34,
        name: "Soft Pretzel",
        category: "side",
        price: 80,
        rating: 4.4,
        description: "Warm, soft pretzel with your choice of dipping sauce",
        image: "pictures/pretzel.jpg",
        tag: "WARM",
        tagColor: "bg-amber-500"
      },
      {
        id: 35,
        name: "Yogurt Parfait",
        category: "side",
        price: 120,
        rating: 4.7,
        description: "Layers of yogurt, granola, and fresh berries",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        tag: "CREAMY",
        tagColor: "bg-purple-500"
      }
    ];

    // Pagination variables
    let currentPage = 1;
    const itemsPerPage = 6;
    let filteredMenuData = [...menuData];
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

    // Notification System - UPDATED FOR TOP-RIGHT CORNER
    class NotificationSystem {
      constructor() {
        this.container = document.getElementById('notification-container');
        this.notifications = [];
      }

      showNotification(title, message, type = 'info', duration = 4000) {
        const id = Date.now().toString();
        const notification = document.createElement('div');
        
        // SMALLER NOTIFICATION STYLING FOR TOP-RIGHT
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

    // Menu Filtering System
    document.querySelectorAll('.filter-btn').forEach(button => {
      button.addEventListener('click', function() {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.classList.remove('active', 'bg-subway-green', 'text-white');
          btn.classList.add('bg-gray-200', 'text-gray-700');
        });
        
        this.classList.remove('bg-gray-200', 'text-gray-700');
        this.classList.add('active', 'bg-subway-green', 'text-white');
        
        // Filter menu items
        const category = this.getAttribute('data-category');
        currentCategory = category;
        
        if (category === 'all') {
          filteredMenuData = [...menuData];
        } else {
          filteredMenuData = menuData.filter(item => item.category === category);
        }
        
        currentPage = 1;
        renderMenuItems();
        renderPagination();
        
        // Show filter notification
        notifications.info(
          `Showing ${category === 'all' ? 'all items' : category + 's'}`,
          'Filter Applied'
        );
      });
    });

    // Render menu items
    function renderMenuItems() {
      const menuGrid = document.getElementById('menu-grid');
      menuGrid.innerHTML = '';
      
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const itemsToShow = filteredMenuData.slice(startIndex, endIndex);
      
      itemsToShow.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-subway-green/30 group';
        menuItem.setAttribute('data-category', item.category);
        menuItem.setAttribute('data-id', item.id);
        
        menuItem.innerHTML = `
          <div class="h-48 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-6 relative overflow-hidden">
            <div class="absolute top-4 left-4 ${item.tagColor} text-white text-base font-black py-2 px-4 rounded-full shadow-lg z-10">
              ${item.tag}
            </div>
            <img src="${item.image}" 
                 alt="${item.name}" 
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
          </div>
          <div class="p-6 bg-gradient-to-b from-white to-gray-50 group-hover:to-green-50 transition-all duration-500">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-black text-subway-green group-hover:text-green-700 transition-colors">${item.name}</h3>
              <div class="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                <span class="text-yellow-600 text-sm font-black">★</span>
                <span class="text-gray-700 text-sm font-bold ml-1">${item.rating}</span>
              </div>
            </div>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">${item.description}</p>
            <div class="flex justify-between items-center">
              <div>
                <h4 class="font-black text-gray-800 text-lg">₱${item.price}</h4>
                <p class="text-gray-500 text-sm flex items-center">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  ${item.category === 'sandwich' ? '15-20 min' : item.category === 'salad' ? '10-15 min' : '5-10 min'}
                </p>
              </div>
              <button class="add-to-cart-btn bg-gradient-to-r from-subway-green to-green-600 text-white text-sm font-black py-2 px-4 rounded-lg transition-all duration-300 hover:from-subway-yellow hover:to-yellow-500 hover:text-gray-900 hover:scale-105 shadow-lg hover:shadow-xl" 
                      data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">
                Add to Cart
              </button>
            </div>
          </div>
        `;
        
        menuGrid.appendChild(menuItem);
      });
      
      // Add event listeners to the newly created buttons
      document.querySelectorAll('.add-to-cart-btn').forEach(button => {
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
            'Item Added'
          );
        });
      });
    }

    // Render pagination
    function renderPagination() {
      const pagination = document.getElementById('pagination');
      pagination.innerHTML = '';
      
      const totalPages = Math.ceil(filteredMenuData.length / itemsPerPage);
      
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
          renderMenuItems();
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
          renderMenuItems();
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
          renderMenuItems();
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
          renderMenuItems();
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
          renderMenuItems();
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

    // Initialize the page
    window.addEventListener('load', () => {
      renderMenuItems();
      renderPagination();
      
      setTimeout(() => {
        notifications.info(
          'Browse our menu and filter by category', 
          'Welcome to Our Menu', 
          4000
        );
      }, 1000);
    });