
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var BMRgivenHeight = document.getElementById("BMRheight");
var BMRmainWeight = document.getElementById("BMRweight");
var BMRmainAge = document.getElementById("BMRage");

function BMRheightValueFunc() {
    if (BMRheightValue.value == "inch") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in inch)");
    } else if (BMRheightValue.value == "cm") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in centimeter)");
    } else if (BMRheightValue.value == "meter") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in meter)");
    }
}

function BMRcalc() {
    var BMRmainHeight;
    if (BMRheightValue.value == "inch") {
        BMRmainHeight = BMRgivenHeight.value * 2.54;
    } else if (BMRheightValue.value == "cm") {
        BMRmainHeight = BMRgivenHeight.value;
    } else if (BMRheightValue.value == "meter") {
        BMRmainHeight = BMRgivenHeight.value * 100;
    }
    var BMRres;
    var BMRgenderValue = document.getElementById("BMRgenderValue");
    if (BMRgenderValue.value == "female") {
        var BMRdiboWeight = BMRmainWeight.value * 9.6
        var BMRdiboHeight = BMRmainHeight * 1.8
        var BMRdiboAge = BMRmainAge.value * 4.7
        BMRres = BMRdiboWeight + BMRdiboHeight - BMRdiboAge + 655;
    } else if (BMRgenderValue.value == "male") {
        var BMRdiboWeight = BMRmainWeight.value * 13.7
        var BMRdiboHeight = BMRmainHeight * 5
        var BMRdiboAge = BMRmainAge.value * 6.8
        BMRres = BMRdiboWeight + BMRdiboHeight - BMRdiboAge + 66;
    }
    BMRresInt = BMRres
    BMRres = BMRres.toString();

    if (BMRres == "NaN" || BMRres == "0" || BMRres == "66" || BMRres == "655") {
        document.getElementById("BMRres").innerHTML = "<h5>Please Enter Valid Information.</h5>";
        window.alert("Please enter valid information.\nWithout giving valid information, The site will not work.\nHope you understand it.");
    } else {
        BMRres = BMRresInt.toFixed(3);
        var all = `<h5>Your BMR is ${BMRres}</h5>`;
        document.getElementById("BMRres").innerHTML = all;
    }
}
