var menuBtn = document.querySelector('.menu');
var closeBtn = document.querySelector('.close');
var blackLayer = document.querySelector('.black-layer');
var redLayer = document.querySelector('.red-layer');
var respoNav = document.querySelector('.responsive-nav');
var mainElem = document.querySelector('main');

menuBtn.addEventListener('click', (e) => openMenu(e))
closeBtn.addEventListener('click', (e) => closeMenu(e))
mainElem.addEventListener('click', (e) => closeMenu(e))

function openMenu(e) {
    e.preventDefault()
    blackLayer.classList.add('show');
    redLayer.classList.add('show');
    respoNav.classList.add('show');
}

function closeMenu(e) {
    e.preventDefault()
    respoNav.classList.remove('show');
    redLayer.classList.remove('show');
    blackLayer.classList.remove('show');
}