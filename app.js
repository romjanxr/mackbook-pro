
// variables

const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const finalPrice = document.getElementById('final-price');

// button function

function priceUpdate(variant) {
    // memory

    if (variant == '8GB') {
        memoryCost.innerText = "0";
    }
    else if (variant == '16GB') {
        memoryCost.innerText = "180";
    }

    // storage

    else if (variant == '256GB') {
        storageCost.innerText = '0';
    }
    else if (variant == '512GB') {
        storageCost.innerText = '100';
    }
    else if (variant == '1TB') {
        storageCost.innerText = '180';
    }

    // delivery cost

    else if (variant == 'free') {
        deliveryCost.innerText = '0';
    }
    else if (variant == '$20') {
        deliveryCost.innerText = '20';
    }
    totalPriceUpdate();
}

// total price update function

function totalPriceUpdate() {
    const bestPriceAmount = parseFloat(bestPrice.innerText);
    const memoryCostAmount = parseFloat(memoryCost.innerText);
    const storageCostAmount = parseFloat(storageCost.innerText);
    const deliveryCostAmount = parseFloat(deliveryCost.innerText);
    const totalPrice = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    document.getElementById('total-price').innerText = totalPrice;
    finalPrice.innerText = totalPrice;
    return totalPrice;
}

// promo code function for bonus

function promoCode() {
    const totalPrice = totalPriceUpdate();
    const promoInputValue = document.getElementById('promo-input').value;
    const promoInputValueConverted = promoInputValue.toLowerCase();
    if (promoInputValueConverted == 'stevekaku') {
        const discount = totalPrice * 0.2;
        finalPrice.innerText = totalPrice - discount;
        document.getElementById('promo-input').value = '';
    }
}

// 8GB unified memory

document.getElementById('8GB-memory').addEventListener('click', function () {
    priceUpdate('8GB');
});

// 16GB unified memory

document.getElementById('16GB-memory').addEventListener('click', function () {
    priceUpdate('16GB');
});

// 256GB SSD Storage

document.getElementById('256GB-storage').addEventListener('click', function () {
    priceUpdate('256GB');
});

// 512GB SSD Storage

document.getElementById('512GB-storage').addEventListener('click', function () {
    priceUpdate('512GB');
});

// 1TB SSD Storage

document.getElementById('1TB-storage').addEventListener('click', function () {
    priceUpdate('1TB');
});

// Friday, Aug 25 FREE Prime delivery

document.getElementById('free-delivery').addEventListener('click', function () {
    priceUpdate('free');
});

// Friday,Aug 21 Delivery charge $20

document.getElementById('20-delivery').addEventListener('click', function () {
    priceUpdate('$20');
});

// promo code apply button

document.getElementById('promo-apply-btn').addEventListener('click', function () {
    promoCode();
})