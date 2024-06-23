document.addEventListener('DOMContentLoaded', function() { 
    const nameListElement = document.querySelectorAll('.name-list'); 
 
    nameListElement.forEach(nameList => { 
        nameList.addEventListener('click', function() { 
            this.classList.toggle('active'); 
            const panel = this.nextElementSibling; 
            if (panel.style.display === "block") { 
                panel.style.display = "none"; 
            } else { 
                panel.style.display = "block"; 
            } 
        }); 
    }); 
});