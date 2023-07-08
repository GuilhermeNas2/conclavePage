const button = document.querySelector('button');
const container = document.querySelector('.container');


function toggleMode() {   

    if (container.classList.contains('dark')) {
        container.classList.remove('dark');
        button.style.background = ('white var(--switch-bg-url) no-repeat center');
    } else {
        container.classList.add('dark');

        button.style.background = ('white var(--switch-bg-moon) no-repeat center');
    }
    
}