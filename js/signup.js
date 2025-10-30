function togglePassword(fieldId) {
      const passwordInput = document.getElementById(fieldId);
      const eyeIcon = document.getElementById(fieldId + 'Eye');
      
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

    // Form validation functions
    function validateField(field, errorId, validationFn) {
      const errorElement = document.getElementById(errorId);
      const isValid = validationFn(field.value);
      
      if (!isValid) {
        field.classList.add('border-red-500');
        errorElement.classList.remove('hidden');
        return false;
      } else {
        field.classList.remove('border-red-500');
        errorElement.classList.add('hidden');
        return true;
      }
    }
    
    function validateName(name) {
      return name.trim().length >= 2;
    }
    
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
    
    function validateAddress(address) {
      return address.trim().length >= 5;
    }
    
    function validatePassword(password) {
      return password.length >= 6;
    }
    
    function validateConfirmPassword(confirmPassword) {
      const password = document.getElementById('password').value;
      return confirmPassword === password;
    }

    // Form submission
    document.getElementById("registerForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const firstName = document.getElementById("firstName");
      const lastName = document.getElementById("lastName");
      const email = document.getElementById("email");
      const address = document.getElementById("address");
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirmPassword");
      const successMessage = document.getElementById("successMessage");

      const isFirstNameValid = validateField(firstName, 'firstNameError', validateName);
      const isLastNameValid = validateField(lastName, 'lastNameError', validateName);
      const isEmailValid = validateField(email, 'emailError', validateEmail);
      const isAddressValid = validateField(address, 'addressError', validateAddress);
      const isPasswordValid = validateField(password, 'passwordError', validatePassword);
      const isConfirmPasswordValid = validateField(confirmPassword, 'confirmPasswordError', validateConfirmPassword);

      if (isFirstNameValid && isLastNameValid && isEmailValid && 
          isAddressValid && isPasswordValid && isConfirmPasswordValid) {
        
        // Store user data in localStorage
        const userData = {
          firstName: firstName.value.trim(),
          lastName: lastName.value.trim(),
          email: email.value.trim(),
          address: address.value.trim(),
          password: password.value
        };

        // Get existing users or initialize empty array
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        
        // Check if email already exists
        const existingUser = registeredUsers.find(user => user.email === userData.email);
        if (existingUser) {
          alert("Email already registered! Please use a different email.");
          return;
        }

        // Add new user
        registeredUsers.push(userData);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        // Show success message
        successMessage.classList.remove('hidden');
        
        // Redirect after 2 seconds
        setTimeout(function() {
          window.location.href = 'login.html';
        }, 2000);
      }
    });

    // Real-time validation on blur
    document.querySelectorAll('input').forEach(input => {
      input.addEventListener('blur', function() {
        const validations = {
          'firstName': [validateName, 'firstNameError'],
          'lastName': [validateName, 'lastNameError'],
          'email': [validateEmail, 'emailError'],
          'address': [validateAddress, 'addressError'],
          'password': [validatePassword, 'passwordError'],
          'confirmPassword': [validateConfirmPassword, 'confirmPasswordError']
        };
        
        if (validations[this.id]) {
          validateField(this, validations[this.id][1], validations[this.id][0]);
        }
      });
    });