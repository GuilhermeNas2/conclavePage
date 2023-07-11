const button = document.querySelector('.button');
const container = document.querySelector('.container');


function toggleMode() {   

    if (container.classList.contains('dark')) {
        
        container.classList.remove('dark');

        button.classList.remove('slidebutton');
        button.classList.add('slide-back');
       

    } else {
        
        container.classList.add('dark');

        button.classList.add('slidebutton');
        button.classList.remove('slide-back')
        
    }
    
}