// Open menu
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("menuButton");
    var menu = document.getElementById("menu");

    // Toggle menu on button click
    button.addEventListener("click", function(event) {
        // Prevent the click event from propagating to the document
        event.stopPropagation();

        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
            setTimeout(() => {
                menu.style.display = "none";
            }, 150);
        } else {
            menu.style.display = "block";
            setTimeout(() => {
                menu.classList.add("show");
            }, 10);
        }
    });

    // Hide menu when clicking outside of the menu and button
    document.addEventListener("click", function(event) {
        // Check if the click is outside the menu and button
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            if (menu.classList.contains("show")) {
                menu.classList.remove("show");
                setTimeout(() => {
                    menu.style.display = "none";
                }, 150);
            }
        }
    });
});

// Slide Animation to the Left and to the Right

document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('#swipe-to-left, #swipe-to-right');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once the animation starts
            }
        });
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});




// Make it so that the anchor hyperlinks place you at the top
document.addEventListener("DOMContentLoaded", function() {
    const offset = 60; // Adjust this value according to your needs

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetElement = document.querySelector(this.getAttribute('href'));
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});

// Make a shadow appear to the header

window.addEventListener('scroll', function() {
    var header = document.getElementById('main-header');
    if (window.scrollY > 0) {
        header.classList.add('header-shadow');
    } else {
        header.classList.remove('header-shadow');
    }
});

// Dynamically load the EmailJS library
const loadEmailJS = () => {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
        script.onload = () => resolve(window.emailjs);
        script.onerror = () => reject(new Error("Failed to load EmailJS script."));
        document.head.appendChild(script);
    });
};

// Initialize EmailJS after the library is loaded
const initializeEmailJS = async () => {
    try {
        const emailjs = await loadEmailJS();
        emailjs.init("c3fMmSwdyQOSYPNB1");
        console.log("EmailJS initialized successfully.");
        setupFormHandler(emailjs); // Setup form handling after initialization
    } catch (error) {
        console.error("Error initializing EmailJS:", error);
    }
};

// Setup form handling
const setupFormHandler = (emailjs) => {
    document.getElementById("sendMessageButton").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // Validate that fields are not empty
        if (!templateParams.name || !templateParams.email || !templateParams.message) {
            alert("Please fill in all fields.");
            return;
        }

        // Send email using EmailJS
        emailjs
            .send("service_izri1jx", "template_yomshuj", templateParams)
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Your message has been sent successfully!");
                },
                function (error) {
                    console.error("FAILED...", error);
                    alert("Failed to send the message. Please try again later.");
                }
            );
    });
};

// Initialize everything
initializeEmailJS();
