
$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 900,
        prevArrow: ' <button type="button" class="slick-prev"> <img src="../icons/left_arrow.png"/> </button> ',
        nextArrow: ' <button type="button" class="slick-next"> <img src="../icons/right_arrow.png"/> </button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    });

    const catalogContent = document.querySelector('.catalog__content');
    const catalogWrapper = document.querySelector('.catalog__wrapper');
    const filters = document.querySelectorAll('.catalog__tab');
    

    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            for(let i = 0; i < filters.length; i++) {
                filters[i].classList.remove('catalog__tab_active');
                if(filters[i] == e.target.parentNode) {
                    filters[i].classList.add('catalog__tab_active')
                }
            }
        })
    })

    const linksListener = (catalogContent) => {
        const mainContent = catalogContent.querySelector('.catalog-item__main-content');
        const listContent = catalogContent.querySelector('.catalog-item__list-content');
        const links = catalogContent.querySelectorAll('.catalog-item__link');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                console.table(e)
                e.preventDefault();
    
                if (mainContent.classList.contains('catalog-item__main-content_active')) {
                    mainContent.classList.remove('catalog-item__main-content_active');
                    listContent.classList.add('catalog-item__list-content_active');
                    return;
                };
                listContent.classList.remove('catalog-item__list-content_active');
                mainContent.classList.add('catalog-item__main-content_active');
    
            })
        })
    }

    for (let i = 0; i < 5; i++) {
        const copiedContent = catalogContent.cloneNode(true);

        if(i>1) {
            copiedContent.style.marginTop = '19px';
        }

        linksListener(copiedContent);

        catalogWrapper.appendChild(copiedContent);
    }
    linksListener(catalogContent);

});