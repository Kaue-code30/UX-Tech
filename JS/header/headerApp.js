"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const ecommerceLink = document.getElementById("ecommerce-link-desk");
    const ecommerceBox = document.querySelector('.ecommerce-box');

    ecommerceLink.addEventListener('click', function (event) {
        event.preventDefault();

        if (ecommerceBox.style.display === 'none' || ecommerceBox.style.display === '') {
            ecommerceBox.style.display = 'grid'; 
            ecommerceLink.style.fontWeight = '700'
        } else {
            ecommerceBox.style.display = 'none'; 
            ecommerceLink.style.fontWeight = '400'
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const ecommerceLink = document.getElementById("ecommerce-link-mobile");
    const ecommerceBox = document.querySelector('.ecommerce-box-mobile');

    ecommerceLink.addEventListener('click', function (event) {
        event.preventDefault();

        if (ecommerceBox.style.display === 'none' || ecommerceBox.style.display === '') {
            ecommerceBox.style.display = 'flex'; 
            ecommerceLink.style.fontWeight = '700'
        } else {
            ecommerceBox.style.display = 'none'; 
            ecommerceLink.style.fontWeight = '400'
        }
    });
});