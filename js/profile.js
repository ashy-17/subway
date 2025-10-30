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

    // Initialize cart
    const cart = new ShoppingCart();

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

    // Address Management System
    class AddressManager {
      constructor() {
        this.addresses = [];
        this.container = document.getElementById('address-container');
        this.loadInitialAddresses();
        this.renderAddresses();
      }

      loadInitialAddresses() {
        // Load initial addresses (in a real app, this would come from a database)
        this.addresses = [
          {
            id: 1,
            homeNumber: '123 Condo Building',
            street: 'Ortigas Center',
            city: 'Mandaluyong',
            zipCode: '1550',
            phone: '+63 917 123 4567',
            isDefault: true
          },
          {
            id: 2,
            homeNumber: '456 Apartment Complex',
            street: 'Shaw Boulevard',
            city: 'Mandaluyong',
            zipCode: '1552',
            phone: '+63 917 123 4567',
            isDefault: false
          }
        ];
      }

      addAddress(addressData) {
        // If this is set as default, unset any existing default
        if (addressData.isDefault) {
          this.addresses.forEach(addr => addr.isDefault = false);
        }
        
        // Generate a unique ID
        const newId = this.addresses.length > 0 
          ? Math.max(...this.addresses.map(addr => addr.id)) + 1 
          : 1;
        
        // Add the new address
        const newAddress = {
          id: newId,
          ...addressData
        };
        
        this.addresses.push(newAddress);
        this.renderAddresses();
        return newAddress;
      }

      updateAddress(id, addressData) {
        // Find the address to update
        const addressIndex = this.addresses.findIndex(addr => addr.id === id);
        
        if (addressIndex === -1) return null;
        
        // If this is set as default, unset any existing default
        if (addressData.isDefault) {
          this.addresses.forEach(addr => addr.isDefault = false);
        }
        
        // Update the address
        this.addresses[addressIndex] = {
          ...this.addresses[addressIndex],
          ...addressData
        };
        
        this.renderAddresses();
        return this.addresses[addressIndex];
      }

      deleteAddress(id) {
        this.addresses = this.addresses.filter(addr => addr.id !== id);
        this.renderAddresses();
      }

      setDefaultAddress(id) {
        this.addresses.forEach(addr => {
          addr.isDefault = addr.id === id;
        });
        this.renderAddresses();
      }

      getAddressById(id) {
        return this.addresses.find(addr => addr.id === id);
      }

      renderAddresses() {
        // Clear the container
        this.container.innerHTML = '';
        
        // If no addresses, show a message
        if (this.addresses.length === 0) {
          this.container.innerHTML = `
            <div class="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
              <p class="text-gray-500">No addresses saved yet. Add your first address!</p>
            </div>
          `;
          return;
        }
        
        // Render each address
        this.addresses.forEach(address => {
          const addressCard = document.createElement('div');
          addressCard.className = 'bg-gray-50 rounded-lg p-4 border border-gray-200 relative mb-4';
          addressCard.innerHTML = `
            <!-- Edit and Delete Icons in Top Right Corner -->
            <div class="absolute top-4 right-4 flex space-x-2">
              <button class="text-gray-400 hover:text-subway-green transition-colors duration-200 edit-address" data-id="${address.id}">
                <i class="fas fa-edit"></i>
              </button>
              <button class="text-gray-400 hover:text-red-500 transition-colors duration-200 delete-address" data-id="${address.id}">
                <i class="fas fa-trash"></i>
              </button>
            </div>
            
            <h3 class="font-bold text-lg text-gray-800 mb-2">${address.homeNumber}</h3>
            <p class="text-gray-600 mb-2">${address.street}</p>
            <p class="text-gray-600 mb-2">${address.city}, ${address.zipCode}</p>
            <p class="text-gray-600 mb-3">${address.phone}</p>
            
            <!-- Default Address Badge and Set as Default Button -->
            <div class="mt-2 flex justify-between items-center">
              ${address.isDefault 
                ? '<span class="bg-subway-green text-white text-xs px-2 py-1 rounded">Default Address</span>' 
                : '<button class="text-subway-green text-xs hover:underline set-default-address" data-id="' + address.id + '">Set as Default</button>'
              }
            </div>
          `;
          
          this.container.appendChild(addressCard);
        });
        
        // Add event listeners to the buttons
        this.attachEventListeners();
      }

      attachEventListeners() {
        // Delete address buttons
        document.querySelectorAll('.delete-address').forEach(button => {
          button.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            this.deleteAddress(id);
            notifications.success('Address deleted successfully', 'Address Deleted');
          });
        });
        
        // Set default address buttons
        document.querySelectorAll('.set-default-address').forEach(button => {
          button.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            this.setDefaultAddress(id);
            notifications.success('Default address updated', 'Address Updated');
          });
        });
        
        // Edit address buttons
        document.querySelectorAll('.edit-address').forEach(button => {
          button.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.getAttribute('data-id'));
            this.openEditModal(id);
          });
        });
      }

      openEditModal(id) {
        const address = this.getAddressById(id);
        if (!address) return;
        
        // Populate the edit form with the address data
        document.getElementById('edit-address-id').value = address.id;
        document.getElementById('edit-home-number').value = address.homeNumber;
        document.getElementById('edit-street').value = address.street;
        document.getElementById('edit-city').value = address.city;
        document.getElementById('edit-zip-code').value = address.zipCode;
        document.getElementById('edit-default-address').checked = address.isDefault;
        
        // Open the edit modal
        openEditModal();
      }
    }

    // Initialize address manager
    const addressManager = new AddressManager();

    // Mobile Menu Toggle
    document.getElementById('mobile-menu-btn').addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });

    // Profile Dropdown Toggle
    document.getElementById('profile-btn').addEventListener('click', function() {
      const dropdown = document.getElementById('profile-dropdown');
      dropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
      const dropdown = document.getElementById('profile-dropdown');
      const profileBtn = document.getElementById('profile-btn');
      
      if (!profileBtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
      }
    });

    // Add Address Modal Functionality
    const addAddressModal = document.getElementById('add-address-modal');
    const addModalContent = document.getElementById('add-modal-content');
    const addAddressBtn = document.getElementById('add-address-btn');
    const closeAddModalBtn = document.getElementById('close-add-modal');
    const cancelAddBtn = document.getElementById('cancel-add-btn');
    const addAddressForm = document.getElementById('add-address-form');

    // Function to open the add modal
    function openAddModal() {
      addAddressModal.classList.remove('hidden');
      setTimeout(() => {
        addModalContent.classList.remove('scale-95', 'opacity-0');
        addModalContent.classList.add('scale-100', 'opacity-100');
      }, 10);
    }

    // Function to close the add modal
    function closeAddModal() {
      addModalContent.classList.remove('scale-100', 'opacity-100');
      addModalContent.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        addAddressModal.classList.add('hidden');
        addAddressForm.reset();
        // Reset the default address checkbox
        document.getElementById('add-default-address').checked = false;
      }, 300);
    }

    // Event listeners for add modal
    addAddressBtn.addEventListener('click', openAddModal);
    closeAddModalBtn.addEventListener('click', closeAddModal);
    cancelAddBtn.addEventListener('click', closeAddModal);

    // Close add modal when clicking outside the content
    addAddressModal.addEventListener('click', function(event) {
      if (event.target === addAddressModal) {
        closeAddModal();
      }
    });

    // Handle add form submission
    addAddressForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const homeNumber = document.getElementById('add-home-number').value;
      const street = document.getElementById('add-street').value;
      const city = document.getElementById('add-city').value;
      const zipCode = document.getElementById('add-zip-code').value;
      const isDefault = document.getElementById('add-default-address').checked;
      
      // Validate required fields
      if (!homeNumber || !street || !city || !zipCode) {
        notifications.error('Please fill in all required fields', 'Missing Information');
        return;
      }
      
      // Add the new address
      addressManager.addAddress({
        homeNumber,
        street,
        city,
        zipCode,
        phone: '+63 917 123 4567', // Using the default phone from profile
        isDefault
      });
      
      // Show success notification
      notifications.success('New address has been added successfully!', 'Address Added');
      
      // Close the modal
      closeAddModal();
    });

    // Edit Address Modal Functionality
    const editAddressModal = document.getElementById('edit-address-modal');
    const editModalContent = document.getElementById('edit-modal-content');
    const closeEditModalBtn = document.getElementById('close-edit-modal');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    const editAddressForm = document.getElementById('edit-address-form');

    // Function to open the edit modal
    function openEditModal() {
      editAddressModal.classList.remove('hidden');
      setTimeout(() => {
        editModalContent.classList.remove('scale-95', 'opacity-0');
        editModalContent.classList.add('scale-100', 'opacity-100');
      }, 10);
    }

    // Function to close the edit modal
    function closeEditModal() {
      editModalContent.classList.remove('scale-100', 'opacity-100');
      editModalContent.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        editAddressModal.classList.add('hidden');
        editAddressForm.reset();
        // Clear the hidden address ID field
        document.getElementById('edit-address-id').value = '';
      }, 300);
    }

    // Event listeners for edit modal
    closeEditModalBtn.addEventListener('click', closeEditModal);
    cancelEditBtn.addEventListener('click', closeEditModal);

    // Close edit modal when clicking outside the content
    editAddressModal.addEventListener('click', function(event) {
      if (event.target === editAddressModal) {
        closeEditModal();
      }
    });

    // Handle edit form submission
    editAddressForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const addressId = document.getElementById('edit-address-id').value;
      const homeNumber = document.getElementById('edit-home-number').value;
      const street = document.getElementById('edit-street').value;
      const city = document.getElementById('edit-city').value;
      const zipCode = document.getElementById('edit-zip-code').value;
      const isDefault = document.getElementById('edit-default-address').checked;
      
      // Validate required fields
      if (!homeNumber || !street || !city || !zipCode) {
        notifications.error('Please fill in all required fields', 'Missing Information');
        return;
      }
      
      // Update existing address
      addressManager.updateAddress(parseInt(addressId), {
        homeNumber,
        street,
        city,
        zipCode,
        phone: '+63 917 123 4567', // Using the default phone from profile
        isDefault
      });
      
      notifications.success('Address updated successfully!', 'Address Updated');
      
      // Close the modal
      closeEditModal();
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

    // Show welcome notification after page load
    window.addEventListener('load', () => {
      setTimeout(() => {
        notifications.info(
          'Welcome to your profile page', 
          'Profile', 
          4000
        );
      }, 1000);
    });