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
    };
