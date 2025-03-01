document.addEventListener('DOMContentLoaded', function() {
    const experiments = {
        exp1: {
            title: "Fire Hands",
            image: "/static/photos/Stem/exp1.jpeg",
            description: `
                <strong>Materials:</strong>
                <ul>
                    <li>Hand sanitizer</li>
                    <li>Water</li>
                    <li>Matches or lighter</li>
                </ul>
                <hr>
                <strong>Method:</strong>
                <ol>
                    <li>Apply a generous amount of hand sanitizer to your hands.</li>
                    <li>Light the hand sanitizer on fire.</li>
                    <li>Wave your hands around to keep the flame going.</li>
                    <li>Extinguish the flame by clapping your hands or dipping them in water.</li>
                </ol>
            `,
        },
        exp2: {
            title: "Flame Tests",
            image: "/static/photos/Stem/exp2.jpeg",
            description: `
                <strong>Materials:</strong>
                <ul>
                    <li>Various metal salts</li>
                    <li>Bunsen burner</li>
                    <li>Wooden splints</li>
                </ul>
                <hr>
                <strong>Method:</strong>
                <ol>
                    <li>Soak the wooden splints in water.</li>
                    <li>Dip the wet splints into the metal salts.</li>
                    <li>Hold the splints in the Bunsen burner flame and observe the colors.</li>
                </ol>
            `,
        },
        exp3: {
            title: "DIY pH Indicator",
            image: "/static/photos/Stem/exp3.jpeg",
            description: `
                <strong>Materials:</strong>
                <ul>
                    <li>Red cabbage</li>
                    <li>Blender</li>
                    <li>Strainer</li>
                    <li>Various household liquids</li>
                </ul>
                <hr>
                <strong>Method:</strong>
                <ol>
                    <li>Chop the red cabbage and blend it with water.</li>
                    <li>Strain the mixture to obtain the purple liquid.</li>
                    <li>Add the liquid to different household liquids and observe the color changes.</li>
                </ol>
            `,
        },
        exp4: {
            title: "Static Electricity Demo",
            image: "/static/photos/Stem/exp4.jpeg",
            description: `
                <strong>Materials:</strong>
                <ul>
                    <li>Balloon</li>
                </ul>
                <hr>
                <strong>Method:</strong>
                <ol>
                    <li>Inflate a balloon.</li>
                    <li>Quickly rub the balloon on your hair. This will cause the electrons in the hair to move to the balloon, causing the balloon to gain a negative charge and the hair to gain a positive charge.</li>
                    <li>As your hair is positively charged, each individual hair will repel the other hairs, causing them to elevate.</li>
                    <li>As the balloon is negatively charged, it will be attracted to other objects. Try holding the balloon near a wall, water from a faucet, and another charged balloon.</li>
                </ol>
            `,
        },
        exp5: {
            title: "Strawberry DNA Extraction",
            image: "/static/photos/Stem/exp4.jpeg",
            description: `
                <strong>Materials:</strong>
                <ul>
                    <li>Beaker, funnel and sieve, spoon, wooden splint</li>
                    <li>Soap, salt and iced down ethanol solution</li>
                    <li>Beaker, funnel and sieve, spoon, wooden splint</li>
                    <li>Plastic bag</li>
                    <li>Strawberries</li>
                </ul>
                <hr>
                <strong>Method:</strong>
                <ol>
                    <li>Place the strawberries in the plastic bag and start breaking them down into a pulp with your hands to break the cells.</li>
                    <li>In a beaker, put one tablespoon of salt and two tablespoons of soap.</li>
                    <li>Add water and mix gently to prevent any bubble from forming.</li>
                    <li>Add the soap and salt solution into the plastic bag.</li>
                    <li>Mix the strawberry pulp with the salt and salt solution gently.</li>
                    <li>Pour this mixture back into the beaker using the sieve and funnel and add iced down ethanol solution on top.</li>
                    <li>White strings will appear. Pick it up using a wooden splint. That is the strawberry DNA!</li>
                </ol>
            `,
        },
    };

    // Open popup on experiment box click
    document.querySelectorAll(".experiment-box").forEach((box) => {
        box.addEventListener("click", () => {
            const experimentId = box.getAttribute("data-experiment");
            const experiment = experiments[experimentId];
            if (!experiment) return;

            const popup = document.getElementById("experiment-popup");
            const popupDetails = document.getElementById("popup-details");

            popupDetails.innerHTML = `
                <h2>${experiment.title}</h2>
                <img src="${experiment.image}" alt="${experiment.title}" class="popup-image" />
                <div class="popup-description">${experiment.description}</div>
            `;

            popup.classList.add("active");
        });
    });

    // Close popup on close button click
    document.getElementById("close-popup").addEventListener("click", () => {
        document.getElementById("experiment-popup").classList.remove("active");
    });

    // Close popup on pressing the Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            document.getElementById("experiment-popup").classList.remove("active");
        }
    });

    // Close popup when clicking outside the pop-up content
    const popup = document.getElementById("experiment-popup");
    popup.addEventListener("click", (event) => {
        const popupContent = popup.querySelector(".popup-content");
        if (!popupContent.contains(event.target)) {
            popup.classList.remove("active");
        }
    });
});
