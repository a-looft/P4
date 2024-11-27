//*DEVELOPER: Aida Looft, IS117-003, Fall 2024 */

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.custom-card');
    cards.forEach(card => {
        const bgImage = card.getAttribute('data-bg');
        if (bgImage) {
            // Dynamically inject a style block to apply the background image
            const styleElement = document.createElement('style');
            styleElement.innerHTML = `
                .custom-card[data-bg="${bgImage}"]::before {
                    background-image: url(${bgImage});
                }
            `;
            document.head.appendChild(styleElement);
        }
    });
});
