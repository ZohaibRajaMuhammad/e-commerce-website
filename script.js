
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartUI();

  document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", (event) => {
          event.preventDefault();
          const productElement = button.closest(".best-p1");
          const productName = productElement.querySelector(".name-of-p p").textContent;
          const productPrice = parseFloat(productElement.querySelector(".price").dataset.price);
          const productImage = productElement.querySelector("img").src;

          const product = {
              name: productName,
              price: productPrice,
              image: productImage,
              quantity: 1
          };

          const existingProduct = cart.find(item => item.name === productName);
          if (existingProduct) {
              existingProduct.quantity++;
          } else {
              cart.push(product);
          }

          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartUI();
      });
  });

  function updateCartUI() {
      const cartItemsContainer = document.getElementById("cart-items");
      const cartTotalPrice = document.getElementById("cart-total-price");
      cartItemsContainer.innerHTML = "";
      let total = 0;

      cart.forEach(item => {
          total += item.price * item.quantity;
          cartItemsContainer.innerHTML += `
              <div class="cart-item">
                  <img src="${item.image}" alt="${item.name}" width="50">
                  <p>${item.name}</p>
                  <p>Quantity: ${item.quantity}</p>
                  <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
                  <button class="remove-item" data-name="${item.name}">Remove</button>
              </div>
          `;
      });
      
      cartTotalPrice.textContent = total.toFixed(2);

      document.querySelectorAll(".remove-item").forEach(button => {
          button.addEventListener("click", () => {
              removeFromCart(button.dataset.name);
          });
      });
  }

  function removeFromCart(productName) {
      const productIndex = cart.findIndex(item => item.name === productName);
      if (productIndex !== -1) {
          cart.splice(productIndex, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartUI();
      }
  }

  document.getElementById("continue-shopping").addEventListener("click", () => {
      document.getElementById("cart").classList.add("hidden");
  });

  document.getElementById("checkout").addEventListener("click", () => {
      document.getElementById("./signup.html").classList.remove("hidden");
      document.getElementById("cart").classList.add("hidden");
  });
  document.getElementById("checkout").addEventListener("click", () => {
    window.location.href = "./signup.html";
});


  document.getElementById("signupForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("signupName").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      const user = { name, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Signup successful! Redirecting to login page.");
      document.getElementById("./signup.html").classList.add("hidden");
      document.getElementById("./login.html").classList.remove("hidden");
  });

  document.getElementById("loginForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
          alert("Login successful! Redirecting to checkout.");
          document.getElementById("loginPage").classList.add("hidden");
          document.getElementById("cart").classList.remove("hidden");
      } else {
          alert("Invalid credentials. Please try again.");
      }
  });
});   


// window.addEventListener("beforeunload", () => {
//   localStorage.removeItem("cart"); // Clears the cart when the page is closed or refreshed
// });

// window.addEventListener("beforeunload", (event) => {
//   const nextPage = document.activeElement?.href || "";
  
//   // List of pages where the cart should persist
//   const safePages = ["login.html", "signup.html", "dashboard.html", "checkout.html"];

//   const isNavigatingWithinApp = safePages.some(page => nextPage.includes(page));

//   if (!isNavigatingWithinApp) {
//       localStorage.removeItem("cart"); // Clears the cart only when the user closes the tab
//   }
// });



// Signup Page Logic
document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
      signupForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const name = document.getElementById("signupName").value;
          const email = document.getElementById("signupEmail").value;
          const password = document.getElementById("signupPassword").value;

          const user = { name, email, password };
          localStorage.setItem("user", JSON.stringify(user));

          alert("Signup successful! Redirecting to login page.");
          window.location.href = "login.html";
      });
  }
});








// Login Page Logic
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const storedUser = JSON.parse(localStorage.getItem("user"));

          if (storedUser && storedUser.email === email && storedUser.password === password) {
              localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
              alert("Login successful! Redirecting to e-commerce page.");
              window.location.href = "./index.html";
          } else if (email === "admin@gmail.com" && password === "12345") {
              alert("Admin login successful! Redirecting to dashboard.");
              window.location.href = "./dashboard.html";
          } else {
              alert("Invalid credentials. Please try again.");
          }
      });
  }
});



// // Admin Dashboard Logic
// document.addEventListener("DOMContentLoaded", () => {
//   if (window.location.pathname.includes("./dashboard.html")) {
//       const usersData = JSON.parse(localStorage.getItem("loggedInUser"));
//       const cartData = JSON.parse(localStorage.getItem("cart")) || [];

//       const dashboardContainer = document.getElementById("dashboard");
//       if (usersData) {
//           dashboardContainer.innerHTML = `<h2>Users Data</h2>
//               <p>Name: ${usersData.name}</p>
//               <p>Email: ${usersData.email}</p>
//               <h2>Cart Details</h2>`;
          
//           cartData.forEach(item => {
//               dashboardContainer.innerHTML += `<p>${item.name} - Quantity: ${item.quantity} - Price: $${item.price}</p>`;
//           });
//       } else {
//           dashboardContainer.innerHTML = "No user logged in.";
//       }
//   }
// });


// document.addEventListener("DOMContentLoaded", () => {
//   if (window.location.pathname.includes("dashboard.html")) {
//       const usersData = JSON.parse(localStorage.getItem("loggedInUser"));
//       const cartData = JSON.parse(localStorage.getItem("cart")) || [];

//       const userDataContainer = document.getElementById("userData");
//       const cartItemsContainer = document.getElementById("cartItems");
      
//       if (usersData) {
//           userDataContainer.innerHTML = `<p><strong>Name:</strong> ${usersData.name}</p>
//                                           <p><strong>Email:</strong> ${usersData.email}</p>`;
//       } else {
//           userDataContainer.innerHTML = "No user logged in.";
//       }

//       cartItemsContainer.innerHTML = "";
//       cartData.forEach(item => {
//           cartItemsContainer.innerHTML += `<li>${item.name} - Quantity: ${item.quantity} - Price: $${item.price}</li>`;
//       });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("dashboard.html")) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      let cartData = JSON.parse(localStorage.getItem("cart")) || [];

      const userDataContainer = document.getElementById("userData");
      const cartItemsContainer = document.getElementById("cartItems");

      // Display User Information
      if (loggedInUser) {
          userDataContainer.innerHTML = `
              <p><strong>Name:</strong> ${loggedInUser.name}</p>
              <p><strong>Email:</strong> ${loggedInUser.email}</p>
          `;
      } else {
          userDataContainer.innerHTML = "<p>No user logged in.</p>";
      }

      // Function to update the cart UI
      function updateCartUI() {
          cartItemsContainer.innerHTML = "";
          if (cartData.length > 0) {
              cartData.forEach((item, index) => {
                  cartItemsContainer.innerHTML += `
                      <li>
                          <img src="${item.image}" width="50" alt="${item.name}">
                          <strong>${item.name}</strong> - 
                          Quantity: <span id="qty-${index}">${item.quantity}</span> - 
                          Price: $${(item.price * item.quantity).toFixed(2)}
                          <button onclick="updateQuantity(${index}, 1)">➕</button>
                          <button onclick="updateQuantity(${index}, -1)">➖</button>
                          <button onclick="removeItem(${index})">🗑️ Remove</button>
                      </li>
                  `;
              });
          } else {
              cartItemsContainer.innerHTML = "<p>No items in the cart.</p>";
          }
      }

      // Function to update quantity
      window.updateQuantity = (index, change) => {
          if (cartData[index]) {
              cartData[index].quantity += change;
              if (cartData[index].quantity < 1) {
                  cartData.splice(index, 1);
              }
              localStorage.setItem("cart", JSON.stringify(cartData));
              updateCartUI();
          }
      };

      // Function to remove an item
      window.removeItem = (index) => {
          cartData.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cartData));
          updateCartUI();
      };

      // Initial cart update
      updateCartUI();
  }
});
