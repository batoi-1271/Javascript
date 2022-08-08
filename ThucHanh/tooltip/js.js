window.addEventListener('load', function() {
    const text = document.querySelector('.text');

    text.addEventListener('mouseenter', (event) => {
        const title = event.target.dataset.tooltip;
        const tooltipDiv = document.createElement('div');
        tooltipDiv.className = 'tooltip-text';
        tooltipDiv.textContent = title;
        document.body.appendChild(tooltipDiv);

        const position = event.target.getBoundingClientRect();

        const {top, left, width, height} = position;
        const tooltipHeight = tooltipDiv.offsetHeight;

        tooltipDiv.style.left = `${left - width / 4}px`;
        tooltipDiv.style.top = `${top - tooltipHeight - 20}px`;
    })

    text.addEventListener('mouseleave', (event) => {
        const tooltip = document.querySelector('.tooltip-text');
        if (!tooltip) return;
        tooltip.parentNode.removeChild(tooltip);
    })
})