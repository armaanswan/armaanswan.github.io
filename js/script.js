document.addEventListener('DOMContentLoaded', function () {
    const nameHeading = document.getElementById('name');
    const bottomSection = document.getElementById('bottom-section');

    bottomSection.style.width = `${nameHeading.offsetWidth}px`;

    // Activities List Item Hover Effect
    const items = document.querySelectorAll('.activities li');
    const messageContainer = document.getElementById('activity-message-container');

    items.forEach(item => {
        item.addEventListener('mouseover', function () {
            let text = item.getAttribute('data-text');
            text = text.split('\\n').join('\n');
            messageContainer.textContent = text;
        });

        item.addEventListener('mouseout', function () {
            messageContainer.textContent = '';
        });
    });
});