document.addEventListener("DOMContentLoaded", function() {
    const links = [
        "https://glos.onlinesurveys.ac.uk/unmasking-the-impact-exploring-the-relationship-between-c",
        "https://glos.onlinesurveys.ac.uk/unmasking-the-impact-exploring-the-relationship-between-c-2",
        // Add more links as needed
    ];

    const generateLinkButton = document.getElementById("generateLink");
    const linkContainer = document.getElementById("linkContainer");

    generateLinkButton.addEventListener("click", function() {
        if (links.length > 0) {
            const randomIndex = Math.floor(Math.random() * links.length);
            const randomLink = links.splice(randomIndex, 1)[0];
            linkContainer.innerHTML = `<p><a href="${randomLink}" target="_blank">${randomLink}</a></p>`;
            generateLinkButton.disabled = true;
            generateLinkButton.style.display = "none";
        } else {
            linkContainer.innerHTML = "<p>No more links available</p>";
            generateLinkButton.disabled = true;
            generateLinkButton.style.display = "none";
        }
    });
});
