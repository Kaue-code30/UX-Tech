document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');

    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });

    const submenus = document.querySelectorAll('.submenu');

    submenus.forEach(submenu => {
        const submenuContent = submenu.querySelector('.submenu-content');

        submenu.addEventListener('click', (event) => {
            event.stopPropagation();

            // Fecha todos os outros submenus
            submenus.forEach(otherSubmenu => {
                if (otherSubmenu !== submenu) {
                    otherSubmenu.querySelector('.submenu-content').classList.remove('active');
                }
            });

            // Alterna o estado do submenu clicado
            submenuContent.classList.toggle('active');
        });

        // Fecha o submenu ao clicar em qualquer lugar da página
        document.addEventListener('click', () => {
            submenuContent.classList.remove('active');
        });

        // Impede que o clique no submenu feche o menu
        submenuContent.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
});
