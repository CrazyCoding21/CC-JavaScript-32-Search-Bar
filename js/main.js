const icon = document.querySelector('.icon');
const search = document.querySelector('.search-box');
const clear = document.querySelector('.clear');

icon.addEventListener('click', () => {
    search.classList.toggle('active');
});
    
clear.addEventListener('click', () => {
    const inputClear = document.getElementById('search-input');
    inputClear.value = '';
    inputClear.focus();
});    
