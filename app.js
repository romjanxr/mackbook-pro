
// button function

function priceUpdate(variant) {
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');

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