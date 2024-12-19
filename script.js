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
