



// // Select all page elements
// const signupPage = document.getElementById('signup-page');
// const loginPage = document.getElementById('login-page');
// const dashboardPage = document.getElementById('dashboard-page');
// const userInfoSection = document.getElementById('user-info');

// // Sign Up Form
// document.getElementById('signup-form').addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     // Gather input data
//     const user = {
//         firstname: document.getElementById('firstname').value,
//         lastname: document.getElementById('lastname').value,
//         email: document.getElementById('email').value,
//         phone: document.getElementById('phone').value,
//         username: document.getElementById('username').value,
//         password: document.getElementById('password').value,
//     };
    
//     // Store user data in localStorage
//     localStorage.setItem(user.email, JSON.stringify(user));

//     // Navigate to Login page
//     signupPage.style.display = 'none';
//     loginPage.style.display = 'block';
// });

// // Login Form
// document.getElementById('login-form').addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;
    
//     // Retrieve user data from localStorage
//     const user = JSON.parse(localStorage.getItem(email));
    
//     if (user && user.password === password) {
//         alert('Login Successful!');
        
//         // Display user data on Dashboard
//         displayUserData(user);
        
//         // Navigate to Dashboard
//         loginPage.style.display = 'none';
//         dashboardPage.style.display = 'flex';
//     } else {
//         alert('Invalid email or password.');
//     }
// });

// // Logout Functionality
// document.getElementById('logout').addEventListener('click', () => {
//     dashboardPage.style.display = 'none';
//     loginPage.style.display = 'block';
//     document.getElementById('login-form').reset();
// });

// // Display User Data in Dashboard
// function displayUserData(user) {
//     userInfoSection.innerHTML = `
//         <h2>Welcome, ${user.firstname} ${user.lastname}</h2>
//         <p><strong>Email:</strong> ${user.email}</p>
//         <p><strong>Phone:</strong> ${user.phone}</p>
//         <p><strong>Username:</strong> ${user.username}</p>
//     `;
// }





  // // Elements
  // const signupPage = document.getElementById("signupPage");
  // const loginPage = document.getElementById("loginPage");
  // const dashboardPage = document.getElementById("dashboardPage");

  // const signupForm = document.getElementById("signupForm");
  // const loginForm = document.getElementById("loginForm");

  // const dashboardUser = document.getElementById("dashboardUser");

  // // Show specific page
  // function showPage(page) {
  //   signupPage.style.display = "none";
  //   loginPage.style.display = "none";
  //   dashboardPage.style.display = "none";
  //   page.style.display = "block";
  // }

  // // Handle Signup
  // signupForm.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   const name = document.getElementById("signupName").value;
  //   const email = document.getElementById("signupEmail").value;
  //   const password = document.getElementById("signupPassword").value;

  //   if (name && email && password) {
  //     localStorage.setItem("userData", JSON.stringify({ name, email, password }));
  //     alert("Signup successful! Redirecting to login...");
  //     showPage(loginPage);
  //   } else {
  //     alert("Please fill out all fields.");
  //   }
  // });

  // // Handle Login
  // loginForm.addEventListener("submit", (event) => {
  //   event.preventDefault();
  //   const email = document.getElementById("loginEmail").value;
  //   const password = document.getElementById("loginPassword").value;
  //   const userData = JSON.parse(localStorage.getItem("userData"));

  //   if (userData && email === userData.email && password === userData.password) {
  //     alert("Login successful! Redirecting to e-commerce...");
  //     // dashboardUser.textContent = `Welcome, ${userData.name}`;
  //     showPage(dashboardPage);
  //   } else {
  //     alert("Invalid email or password.");
  //   }
  // });

  // // Initialize app (show signup page by default)
  // showPage(signupPage);



  // const cart = [];
  //   const cartSection = document.getElementById("cart");
  //   const cartItems = document.getElementById("cart-items");
  //   const cartTotalPrice = document.getElementById("cart-total-price");
  //   const sellersSection = document.getElementById("sellers");
    
  //   // Add to Cart Functionality
  //   document.querySelectorAll(".add-to-cart").forEach((button, index) => {
  //     button.addEventListener("click", () => {
  //       const productElement = button.closest(".best-p1");
  //       const productName = productElement.querySelector(".name-of-p p").textContent;
  //       const productPrice = parseFloat(productElement.querySelector(".price").getAttribute("data-price"));
  //       const productImage = productElement.querySelector("img").src;
        
  //       const product = { name: productName, price: productPrice, image: productImage };
  //       cart.push(product);
  //       updateCart();
  //       showCart();
  //     });
  //   });
    
  //   // Update Cart Display
  //   function updateCart() {
  //     cartItems.innerHTML = "";
  //     let total = 0;
      
  //     cart.forEach((item, index) => {
  //       total += item.price;
  //       cartItems.innerHTML += `
  //         <div class="cart-item">
  //           <img src="${item.image}" alt="${item.name}">
  //           <p>${item.name}</p>
  //           <p>$${item.price.toFixed(2)}</p>
  //           <button onclick="removeFromCart(${index})">Remove</button>
  //         </div>
  //       `;
  //     });
      
  //     cartTotalPrice.textContent = total.toFixed(2);
  //   }
    
  //   // Remove Item from Cart
  //   function removeFromCart(index) {
  //     cart.splice(index, 1);
  //     updateCart();
  //   }
    
  //   // Show Cart Page
  //   function showCart() {
  //     sellersSection.classList.add("hidden");
  //     cartSection.classList.remove("hidden");
  //   }
    
  //   // Hide Cart Page
  //   document.getElementById("continue-shopping").addEventListener("click", () => {
  //     cartSection.classList.add("hidden");
  //     sellersSection.classList.remove("hidden");
  //   });


  // Elements
const landingPage = document.getElementById("landingPage");
const signupPage = document.getElementById("signupPage");
const loginPage = document.getElementById("loginPage");
const dashboardPage = document.getElementById("dashboardPage");
const cartSection = document.getElementById("cart");

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

const dashboardUser = document.getElementById("dashboardUser");

// Show specific page
function showPage(page) {
  landingPage.style.display = "none";
  signupPage.style.display = "none";
  loginPage.style.display = "none";
  dashboardPage.style.display = "none";
  cartSection.style.display = "none";
  page.style.display = "block";
}

// Show E-commerce Landing Page First
showPage(landingPage);

// Handle Signup
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (name && email && password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name, email, password, cart: [] });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful! Redirecting to login...");
    showPage(loginPage);
  } else {
    alert("Please fill out all fields.");
  }
});

// Handle Login
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Admin Login
  if (email === "admin@gmail.com" && password === "12345") {
    alert("Admin login successful! Redirecting to dashboard...");
    showPage(dashboardPage);
    displayUsersData();
    return;
  }

  // User Login
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Login successful! Redirecting to e-commerce...");
    showPage(landingPage);
  } else {
    alert("Invalid email or password.");
  }
});

// Add to Cart with Pop-up
document.querySelectorAll(".add-to-cart").forEach((button, index) => {
  button.addEventListener("click", () => {
    const productElement = button.closest(".best-p1");
    const productName = productElement.querySelector(".name-of-p p").textContent;
    const productPrice = parseFloat(productElement.querySelector(".price").getAttribute("data-price"));
    const productImage = productElement.querySelector("img").src;

    const product = { name: productName, price: productPrice, image: productImage };

    // Check if user is logged in
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      alert("You need to sign up or log in to add products to the cart.");
      showPage(signupPage);
      return;
    }

    let users = JSON.parse(localStorage.getItem("users"));
    let userIndex = users.findIndex(u => u.email === currentUser.email);
    users[userIndex].cart.push(product);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));
    
    alert("Product added to cart!");
  });
});

// Display Users Data in Admin Dashboard
function displayUsersData() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user, index) => {
    let cartItems = user.cart.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join("");
    userList.innerHTML += `
      <div class="user">
        <p><strong>${user.name}</strong> (${user.email})</p>
        <p>Cart Items:</p>
        <ul>${cartItems || "<li>No items in cart</li>"}</ul>
        <button onclick="deleteUser(${index})">Delete User</button>
      </div>
    `;
  });
}

// Remove User (Admin Only)
function deleteUser(index) {
  let users = JSON.parse(localStorage.getItem("users"));
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  displayUsersData();
}
