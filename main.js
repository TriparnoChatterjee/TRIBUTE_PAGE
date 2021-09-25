var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta")
// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);


backdrop.addEventListener("click", function () {
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
    
});

toggleButton.addEventListener("click", function () {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';

});

ctaButton.addEventListener('animationstart', function (event) {
    console.log(event);
})

ctaButton.addEventListener('animationend', function (event) {
    console.log(event);
})
ctaButton.addEventListener('animationiteration', function (event) {
    console.log(event);
})