// ==============================
// শুভ্রনীল ফটোগ্রাফি
// script.js
// ==============================


// ===== LOADER =====

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        if (loader) {

            loader.classList.add("loader-hide");

            setTimeout(function () {
                loader.style.display = "none";
            }, 600);

        }

    }, 2500);

});



// ===== HERO IMAGE SLIDER =====

const heroImage = document.getElementById("heroImage");

const heroImages = [
"hero1.jpg",
"hero2.jpg",
"hero3.jpg",
"hero4.jpg"

];

let currentImage = 0;

if (heroImage) {

    setInterval(function () {

        currentImage++;

        if (currentImage >= heroImages.length) {

            currentImage = 0;

        }

        heroImage.style.opacity = "0";

        setTimeout(function () {

            heroImage.src = heroImages[currentImage];

            heroImage.style.opacity = "1";

        }, 500);

    }, 4000);

}
// ===== COUNTER ANIMATION =====

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.dataset.target;
    let count = 0;

    const updateCounter = () => {

        const increment = Math.ceil(target / 100);

        if (count < target) {

            count += increment;

            if (count > target) count = target;

            counter.innerText = count;

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});





// ===== BOOKING FORM =====

const bookingForm = document.querySelector(".booking form");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("আপনার Booking Request সফলভাবে পাঠানো হয়েছে।");

        bookingForm.reset();

    });

}



// ===== LOCATION BUTTON =====

const locationBtn = document.getElementById("getLocation");

if (locationBtn) {

    locationBtn.addEventListener("click", function () {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(function (position) {

                document.querySelector('input[placeholder="আপনার লোকেশন (গ্রাম/শহর)"]').value =
                    position.coords.latitude + "," + position.coords.longitude;

            });

        } else {

            alert("আপনার ব্রাউজার Location Support করে না");

        }

    });

}
// ===== SMOOTH SCROLL =====

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



// ===== GALLERY IMAGE CLICK EFFECT =====

document.querySelectorAll(".photos img").forEach(img => {

    img.addEventListener("click", function () {

        this.style.transform = "scale(1.05)";

        setTimeout(() => {

            this.style.transform = "";

        }, 250);

    });

});



// ===== PACKAGE BUTTON =====

document.querySelectorAll(".package-btn").forEach(btn => {

    btn.addEventListener("click", function () {

        alert("ধন্যবাদ! অনুগ্রহ করে নিচের Booking Form পূরণ করুন।");

    });

});



// ===== END =====
console.log("Subhranil Photography Website Loaded Successfully");
// ===== Mobile Menu =====

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});