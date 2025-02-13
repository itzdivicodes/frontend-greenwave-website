
    // Function to add product to the cart
    function addToCartObject(nProductId, strProductName, nProductActualPrice,nProductDiscountPrice) {

        if (blnLoginStatus==false)    
            openForm();
    
         if (arrCartObj==null)
            arrCartObj = [];
          
            // Add product to the cart
          arrCartObj.push({ name: strProductName, ActualPrice: nProductActualPrice, DiscountPrice:nProductDiscountPrice });
          nTotalCost += nProductDiscountPrice;
    
          let nSaveAmount = nProductActualPrice - nProductDiscountPrice;
          nTotalSaved += nSaveAmount;
    
          // Show message
          const divProdMsgObj = document.getElementById('spanProductMsg' + (nProductId));
          divProdMsgObj.innerText = "Product added to the cart!";
          setTimeout(() => {
           divProdMsgObj.innerText = "";
         }, 5000);
         
        }
    
        // Function to toggle cart popup visibility
        
        function setCartHeader(objDiv)
        {
    
                 const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');
    
                const itemText1 = document.createElement('span');
                itemText1.innerText = `Item Name`;
                itemDiv.appendChild(itemText1);
    
                const itemText2 = document.createElement('span');
                itemText2.innerText = `Discount Price`;
                itemDiv.appendChild(itemText2);
    
                const itemText3 = document.createElement('span');
                itemText3.innerText = `Action`;
                itemDiv.appendChild(itemText3);
                objDiv.appendChild(itemDiv);
        }
        
        
        
        function toggleCart() 
        {
            if (blnLoginStatus==false)    
            openForm();
            
            if (arrCartObj != null &&  arrCartObj.length === 0) {
                alert("Your cart is empty!");
                return;
            }
    
            const cartItemsDiv = document.getElementById('divCartItems');
            cartItemsDiv.innerHTML = ''; // Clear previous items
    
            // Display each item in the cart with a remove button
            arrCartObj.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');
    
               const itemText = document.createElement('span');
                itemText.innerText = `${item.name} - ₹${item.DiscountPrice}`;
                itemDiv.appendChild(itemText);
                const removeBtn = document.createElement("img");
                removeBtn.src="/images/cart-delete.png"
                removeBtn.classList.add('img');
                removeBtn.onclick = () => removeFromCart(index);
                itemDiv.appendChild(removeBtn);
    
                cartItemsDiv.appendChild(itemDiv);
            });
    
            // Update total cost
            document.getElementById('pTotalCost').innerText = `Total Cost: ₹${nTotalCost}`;
            document.getElementById('pTotalSave').innerText = `Saved : ₹${nTotalSaved}`;
            
    
            // Show popup and overlay
            document.getElementById('cartPopup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }
    
        // Function to remove a product from the cart
        function removeFromCart(index) {
            nTotalCost -= arrCartObj[index].DiscountPrice; 
            arrCartObj.splice(index, 1);
          toggleCart();
        }
    
        // Function to close the cart popup
        function closeCart() {
          document.getElementById('cartPopup').style.display = 'none';
          document.getElementById('overlay').style.display = 'none';
        }
    
        // Function to simulate the "Buy Now" action
        function buyNow() {
          const orderId = 'ORD' + Math.floor(100000 + Math.random() * 900000); // Generate random order ID
          ShowOrderConfirmation(orderId);
          // Clear the cart after purchase
          arrCartObj = [];
          nTotalCost = 0;
        }