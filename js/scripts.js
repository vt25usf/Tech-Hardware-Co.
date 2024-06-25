function toggleComponents(categoryId) {
    var components = document.getElementById(categoryId);
    if (components.style.display === "none" || components.style.display === "") {
        components.style.display = "block";
    } else {
        components.style.display = "none";
    }
}

let purchases = [];

function addToPurchases(productName, productPrice) {
    const purchase = {
        id: new Date().getTime(),
        name: productName,
        price: productPrice
    };
    purchases.push(purchase);
    renderPurchases();
    showPopupMessage();
}

function renderPurchases() {
    const container = document.getElementById('purchasesContainer');
    const totalAmountElement = document.getElementById('totalAmount');
    container.innerHTML = '';
    let totalAmount = 0;
    purchases.forEach(purchase => {
        totalAmount += purchase.price;
        const purchaseElement = document.createElement('div');
        purchaseElement.className = 'purchase';
        purchaseElement.innerHTML = `
            <div class="purchase-details">
                <h3>${purchase.name}</h3>
                <p>Price: $${purchase.price}</p>
            </div>
            <div class="purchase-actions">
                <button onclick="deletePurchase(${purchase.id})">Delete</button>
            </div>
        `;
        container.appendChild(purchaseElement);
    });
    totalAmountElement.textContent = `Total: $${totalAmount}`;
}

function deletePurchase(purchaseId) {
    purchases = purchases.filter(purchase => purchase.id !== purchaseId);
    renderPurchases();
}

function showPopupMessage() {
    const popup = document.getElementById('popupMessage');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}
