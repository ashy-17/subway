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
    window.location.href = 'index.html';
  }
}

// Notification Data
const notificationsData = [
  // ORDERS
  {
    id: 1,
    type: 'orders',
    title: 'Order Confirmed',
    message: 'Your order #SUB-2024-0012 has been confirmed and is being prepared.',
    time: '10 minutes ago',
    read: false,
    icon: 'fas fa-shopping-bag',
    iconColor: 'text-blue-500'
  },
  {
    id: 2,
    type: 'orders',
    title: 'Order Ready for Pickup',
    message: 'Your order #SUB-2024-0011 is ready for pickup at our store.',
    time: '2 hours ago',
    read: false,
    icon: 'fas fa-store',
    iconColor: 'text-green-500'
  },
  {
    id: 3,
    type: 'orders',
    title: 'Order Delivered',
    message: 'Your order #SUB-2024-0010 has been successfully delivered.',
    time: '1 day ago',
    read: true,
    icon: 'fas fa-truck',
    iconColor: 'text-purple-500'
  },
  {
    id: 4,
    type: 'orders',
    title: 'Order Shipped',
    message: 'Your order #SUB-2024-0009 has been shipped and is on its way.',
    time: '2 days ago',
    read: true,
    icon: 'fas fa-shipping-fast',
    iconColor: 'text-orange-500'
  },
  {
    id: 5,
    type: 'orders',
    title: 'Order Received',
    message: 'We have received your order #SUB-2024-0008 and will process it shortly.',
    time: '3 days ago',
    read: true,
    icon: 'fas fa-clipboard-check',
    iconColor: 'text-teal-500'
  },
  {
    id: 6,
    type: 'orders',
    title: 'Order Delayed',
    message: 'Your order #SUB-2024-0007 is experiencing a slight delay. We apologize for the inconvenience.',
    time: '4 days ago',
    read: true,
    icon: 'fas fa-clock',
    iconColor: 'text-yellow-500'
  },
  {
    id: 7,
    type: 'orders',
    title: 'Order Cancelled',
    message: 'Your order #SUB-2024-0006 has been cancelled as requested.',
    time: '5 days ago',
    read: true,
    icon: 'fas fa-times-circle',
    iconColor: 'text-red-500'
  },
  {
    id: 8,
    type: 'orders',
    title: 'Order Refund Processed',
    message: 'Your refund for order #SUB-2024-0005 has been processed.',
    time: '1 week ago',
    read: true,
    icon: 'fas fa-money-bill-wave',
    iconColor: 'text-green-500'
  },
  
  // PROMOTIONS
  {
    id: 9,
    type: 'promotions',
    title: 'New Promotion Available',
    message: 'Get 20% off on all footlong subs this weekend only!',
    time: '1 hour ago',
    read: false,
    icon: 'fas fa-tag',
    iconColor: 'text-red-500'
  },
  {
    id: 10,
    type: 'promotions',
    title: 'Limited Time Offer',
    message: 'Buy 1 take 1 on all cookies. Valid until Sunday.',
    time: '5 hours ago',
    read: false,
    icon: 'fas fa-gift',
    iconColor: 'text-pink-500'
  },
  {
    id: 11,
    type: 'promotions',
    title: 'Student Discount',
    message: 'Show your student ID and get 15% off on your next purchase.',
    time: '1 day ago',
    read: false,
    icon: 'fas fa-graduation-cap',
    iconColor: 'text-blue-500'
  },
  {
    id: 12,
    type: 'promotions',
    title: 'Family Bundle Deal',
    message: 'Feed the whole family with our new Family Feast Bundle for only ₱899.',
    time: '2 days ago',
    read: true,
    icon: 'fas fa-home',
    iconColor: 'text-green-500'
  },
  {
    id: 13,
    type: 'promotions',
    title: 'Weekend Special',
    message: 'Enjoy our weekend special - any footlong sub for only ₱199.',
    time: '3 days ago',
    read: true,
    icon: 'fas fa-calendar-week',
    iconColor: 'text-purple-500'
  },
  {
    id: 14,
    type: 'promotions',
    title: 'Free Drink with Combo',
    message: 'Get a free fountain drink when you order any combo meal.',
    time: '4 days ago',
    read: true,
    icon: 'fas fa-glass-cheers',
    iconColor: 'text-cyan-500'
  },
  {
    id: 15,
    type: 'promotions',
    title: 'Early Bird Special',
    message: '25% off on all breakfast sandwiches before 9 AM.',
    time: '5 days ago',
    read: true,
    icon: 'fas fa-earlybirds',
    iconColor: 'text-orange-500'
  }
];

// Current filter state
let currentFilter = 'all';
let filteredNotifications = [...notificationsData];

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

// Filter buttons functionality
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', function() {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    this.classList.add('active');
    
    // Filter notifications
    const category = this.getAttribute('data-category');
    currentFilter = category;
    
    if (category === 'all') {
      filteredNotifications = [...notificationsData];
    } else if (category === 'unread') {
      filteredNotifications = notificationsData.filter(notification => !notification.read);
    } else {
      filteredNotifications = notificationsData.filter(notification => notification.type === category);
    }
    
    renderNotifications();
    updateNotificationCounts();
  });
});

// Render notifications
function renderNotifications() {
  const notificationsList = document.getElementById('notifications-list');
  const emptyState = document.getElementById('empty-state');
  
  // Clear the list
  notificationsList.innerHTML = '';
  
  // Show empty state if no notifications
  if (filteredNotifications.length === 0) {
    notificationsList.classList.add('hidden');
    emptyState.classList.remove('hidden');
    return;
  }
  
  // Show notifications list
  notificationsList.classList.remove('hidden');
  emptyState.classList.add('hidden');
  
  // Render each notification
  filteredNotifications.forEach(notification => {
    const notificationItem = document.createElement('div');
    notificationItem.className = `notification-item p-5 transition-all duration-300 ${notification.read ? 'read' : 'unread'}`;
    notificationItem.setAttribute('data-id', notification.id);
    
    notificationItem.innerHTML = `
      <div class="flex items-start">
        <div class="flex-shrink-0 mr-4">
          <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <i class="${notification.icon} ${notification.iconColor}"></i>
          </div>
        </div>
        
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between">
            <div>
              <h4 class="text-base font-bold text-gray-800">${notification.title}</h4>
              <p class="text-gray-600 mt-1 text-sm">${notification.message}</p>
            </div>
            
            ${!notification.read ? '<div class="notification-dot ml-2 mt-1 flex-shrink-0"></div>' : ''}
          </div>
          
          <div class="flex items-center justify-between mt-3">
            <span class="text-xs text-gray-500">${notification.time}</span>
            
            <div class="flex space-x-2">
              ${!notification.read ? `
                <button class="mark-read-btn text-xs text-subway-green font-medium hover:text-green-700 transition-colors flex items-center" data-id="${notification.id}">
                  <i class="fas fa-check mr-1"></i>
                  Mark as Read
                </button>
              ` : ''}
              
              <button class="delete-btn text-xs text-red-500 font-medium hover:text-red-700 transition-colors flex items-center" data-id="${notification.id}">
                <i class="fas fa-trash-alt mr-1"></i>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    notificationsList.appendChild(notificationItem);
  });
  
  // Add event listeners to mark as read buttons
  document.querySelectorAll('.mark-read-btn').forEach(button => {
    button.addEventListener('click', function() {
      const id = parseInt(this.getAttribute('data-id'));
      markAsRead(id);
    });
  });
  
  // Add event listeners to delete buttons
  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
      const id = parseInt(this.getAttribute('data-id'));
      deleteNotification(id);
    });
  });
}

// Mark as read function
function markAsRead(id) {
  const notificationIndex = notificationsData.findIndex(notification => notification.id === id);
  
  if (notificationIndex !== -1) {
    notificationsData[notificationIndex].read = true;
    
    // Update filtered notifications
    if (currentFilter === 'all') {
      filteredNotifications = [...notificationsData];
    } else if (currentFilter === 'unread') {
      filteredNotifications = notificationsData.filter(notification => !notification.read);
    } else {
      filteredNotifications = notificationsData.filter(notification => notification.type === currentFilter);
    }
    
    renderNotifications();
    updateNotificationCounts();
  }
}

// Delete notification function
function deleteNotification(id) {
  const notificationIndex = notificationsData.findIndex(notification => notification.id === id);
  
  if (notificationIndex !== -1) {
    notificationsData.splice(notificationIndex, 1);
    
    // Update filtered notifications
    if (currentFilter === 'all') {
      filteredNotifications = [...notificationsData];
    } else if (currentFilter === 'unread') {
      filteredNotifications = notificationsData.filter(notification => !notification.read);
    } else {
      filteredNotifications = notificationsData.filter(notification => notification.type === currentFilter);
    }
    
    renderNotifications();
    updateNotificationCounts();
  }
}

// Mark all as read function
document.getElementById('mark-all-read').addEventListener('click', function() {
  notificationsData.forEach(notification => {
    notification.read = true;
  });
  
  // Update filtered notifications
  if (currentFilter === 'all') {
    filteredNotifications = [...notificationsData];
  } else if (currentFilter === 'unread') {
    filteredNotifications = notificationsData.filter(notification => !notification.read);
  } else {
    filteredNotifications = notificationsData.filter(notification => notification.type === currentFilter);
  }
  
  renderNotifications();
  updateNotificationCounts();
});

// Clear all function
document.getElementById('clear-all').addEventListener('click', function() {
  // Clear all notifications
  notificationsData.length = 0;
  filteredNotifications = [];
  
  renderNotifications();
  updateNotificationCounts();
});

// Update notification counts in filter buttons
function updateNotificationCounts() {
  const allCount = notificationsData.length;
  const unreadCount = notificationsData.filter(notification => !notification.read).length;
  const ordersCount = notificationsData.filter(notification => notification.type === 'orders').length;
  const promotionsCount = notificationsData.filter(notification => notification.type === 'promotions').length;
  
  // Update counts in filter buttons
  document.querySelector('[data-category="all"] span:last-child').textContent = allCount;
  document.querySelector('[data-category="unread"] span:last-child').textContent = unreadCount;
  document.querySelector('[data-category="orders"] span:last-child').textContent = ordersCount;
  document.querySelector('[data-category="promotions"] span:last-child').textContent = promotionsCount;
  
  // Update notification badge in navbar
  document.getElementById('notification-count').textContent = unreadCount;
}

// Initialize the page
window.addEventListener('load', () => {
  renderNotifications();
  updateNotificationCounts();
});