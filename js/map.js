const tooltip = document.querySelector('.tooltip');
const continents = document.querySelectorAll('.continent');


    continents.forEach(continent => {
        continent.addEventListener('mouseenter', function () {
            tooltip.style.display = 'block';
            tooltip.innerText = this.dataset.title;
            
        });

        continent.addEventListener('mouseleave', function () {
            tooltip.style.display = 'none';
        });
    });





