let menubtn = document.querySelector('.btn-menu');
let span = document.querySelector('.span');
let spanbefore = document.querySelector('.spanbefore');
let spanafter = document.querySelector('.spanafter');
let menu = document.querySelector('.media-nav');
menubtn.addEventListener('click', () => {
    span.classList.toggle('trans45')
    spanbefore.classList.toggle('hiddendisplay')
    spanafter.classList.toggle('trans-45')
    menu.classList.toggle('media-nav-active')
})