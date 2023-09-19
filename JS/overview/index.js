'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.item-select');
    const images = document.querySelectorAll('.img-selected');

    listItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Verifica se o item já está ativo, se estiver, não faz nada
            if (item.classList.contains('active')) {
                return;
            }

            // Remove a classe 'active' de todos os itens da lista
            listItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Adiciona a classe 'active' apenas ao item clicado
            item.classList.add('active');

            // Oculta todas as imagens
            images.forEach(img => {
                img.style.display = 'none';
            });

            // Mostra a imagem correspondente ao item clicado
            images[index].style.display = 'block';
        });
    });
});
