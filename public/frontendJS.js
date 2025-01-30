const menuBtn = document.querySelector('.menu-bt');
const menu = document.querySelector('.opc');
const menuNav = document.querySelector('.mobNav');

const CloseBtn = document.querySelector('.closebtn');

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuNav.style.display = 'block';
})

CloseBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuNav.style.display = 'none';
})