
// Open the login form
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  // Close the login form
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  // Simulate the login process
  function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("psw").value;
  
    // Check login credentials (for demo, using a simple condition)
    if (email && password) {
      document.getElementById("myForm").style.display = "none"; // Hide form
      document.body.style.visibility = 'visible'; // Show main page
  
      // Show user icon and details
     // document.getElementById("userIcon").style.visibility = 'visible';
      document.getElementById("userDetails").style.display = 'block';
      document.getElementById("userName").innerText = `Welcome, ${email}!`;
      blnLoginStatus = true;
     // alert("You have successfully logged in!");
    } else {
      blnLoginStatus =false;
      alert("Please enter valid login details.");
    }
  }
  
  // Toggle user details visibility
  function toggleUserDetails() {
  
      const details = document.getElementById("userDetails");
      
      if (blnLoginStatus==true)
          details.style.display = details.style.display === "none" ? "block" : "none";
      else
      {
          details.style.display= "none";
          openForm();
      }
  
  }
  
  // Logout function
  function logout() {
    document.getElementById("userDetails").style.display = "none";
    //document.getElementById("userIcon").style.visibility = 'hidden';
   
    setTimeout(() => {
      arrCartObj = null;
      closeCart();
      document.body.style.visibility = 'visible';
      openForm();
       }, 2000);
  }
  
   // Show popup and overlay
   function ShowOrderConfirmation(strOrderNumer)
   {
      let strMsg = "Order successfully placed !!  Order Number : "+ strOrderNumer + "\n\nTracking details sent to your email."
      closeCart();
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('OrderPopup').style.display = 'block';
      document.getElementById('orderConf').innerText = strMsg;
    
      
    }
  
   function CloseNow()
   {
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('OrderPopup').style.display = 'none';
      closeCart();
    }
  