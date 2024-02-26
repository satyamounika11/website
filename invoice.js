document.getElementById("submitBtn").addEventListener("click", calculateInvoice);
function calculateInvoice() {
    let customerName = document.getElementById("customer-name").value;
    let phoneNumber = parseInt(document.getElementById("phone").value);
    let glovesQuantity = parseInt(document.getElementById("gloves").value) || 0;
    let basketQuantity = parseInt(document.getElementById("basket").value) || 0;
    let jacketQuantity = parseInt(document.getElementById("jacket").value) || 0;
    let glovesPrice = 28.50;
    let basketPrice = 28.50;
    let jacketPrice = 19.99;
    let taxRate = 0.13;
    
    let glovesTotal = glovesQuantity * glovesPrice;
    let basketTotal = basketQuantity * basketPrice;
    let jacketTotal = jacketQuantity * jacketPrice;
    let subTotal = glovesTotal + basketTotal + jacketTotal;
    let taxAmount = subTotal * taxRate;
    let totalCost = subTotal + taxAmount;

    
    if (customerName === "" || phoneNumber === "" || isNaN(glovesQuantity) || isNaN(basketQuantity) || isNaN(jacketQuantity)) {
      alert("Please fill the required fields");
      return;
    }

    let finalSummary = `
      <h4>Customer Details</h4>
      <p>Name: ${customerName}</p>
      <p>Phone: ${phoneNumber}</p>
      <h4>Product Details</h4>
      <p>Gloves: ${glovesQuantity} x $${glovesPrice.toFixed(2)} = $${glovesTotal.toFixed(2)}</p>
      <p>Basket: ${basketQuantity} x $${basketPrice.toFixed(2)} = $${basketTotal.toFixed(2)}</p>
      <p>Jacket: ${jacketQuantity} x $${jacketPrice.toFixed(2)} = $${jacketTotal.toFixed(2)}</p>
      <h4>Order Summary</h4>
      <p>Sub Total: $${subTotal.toFixed(2)}</p>
      <p>Tax (13%): $${taxAmount.toFixed(2)}</p>
      <p><strong>Total Cost: $${totalCost.toFixed(2)}</strong></p>
    `;
    let finalSummaryDiv = document.getElementById("finalSummary");
    finalSummaryDiv.innerHTML = finalSummary;

  }

