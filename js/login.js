// Toggle Password Visibility
    function togglePassword() {
      const passwordInput = document.getElementById('password');
      const eyeIcon = document.getElementById('eyeIcon');
      
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
      } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
      }
    }

    // Show notification function
    function showNotification(message, type) {
      const container = document.getElementById('notification-container');
      const notification = document.createElement('div');
      
      notification.className = `notification ${type}`;
      notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
      `;
      
      container.appendChild(notification);
      
      // Remove notification after 4 seconds
      setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 500);
      }, 4000);
    }

    // Login Form Handler
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const loginBtn = document.getElementById("loginBtn");

      if (email === "" || password === "") {
        showNotification("Please fill in all fields!", "error");
        return;
      }

      // Show loading state
      loginBtn.classList.add('btn-loading');
      loginBtn.disabled = true;

      // Simulate API call delay
      setTimeout(() => {
        // Get registered users from localStorage
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        
        // Check if credentials match any registered user
        const user = registeredUsers.find(user => user.email === email && user.password === password);
        
        if (user) {
          showNotification("Login successful! Redirecting...", "success");
          
          // Redirect to home.html after a short delay
          setTimeout(() => {
            window.location.href = "home.html";
          }, 1500);
        } else {
          showNotification("Invalid email or password. Please try again.", "error");
          
          // Reset button state
          loginBtn.classList.remove('btn-loading');
          loginBtn.disabled = false;
        }
      }, 1500);
    });

    // Add input field animations
    document.querySelectorAll('.input-field').forEach(input => {
      input.addEventListener('focus', function() {
        this.parentElement.classList.add('animate-pulse');
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.classList.remove('animate-pulse');
      });
    });
