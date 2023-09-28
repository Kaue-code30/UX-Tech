"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const ecommerceLink = document.getElementById("ecommerce-link");
    const ecommerceBox = document.querySelector('.ecommerce-box');

    ecommerceLink.addEventListener('click', function (event) {
        event.preventDefault();

        if (ecommerceBox.style.display === 'none' || ecommerceBox.style.display === '') {
            ecommerceBox.style.display = 'grid'; 
        } else {
            ecommerceBox.style.display = 'none'; 
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
        } else {
            ecommerceBox.style.display = 'none'; 
        }
    });
});