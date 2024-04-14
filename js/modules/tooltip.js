export default function initTooltip() {
  const tooltip = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    tooltip: '',
    element: '',
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    tooltip: '',
    element: '',
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    // console.log(tooltipBox, 'tooltipBox');
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver(event) {
    // console.log(event);
    const tooltipBox = criarTooltipBox(this);

    tooltipBox.style.top = `${event.pageY}px`;
    tooltipBox.style.left = `${event.pageX}px`;

    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);
    onMouseMove.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltip.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
