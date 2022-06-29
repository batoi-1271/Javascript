const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabActives = $('.tab-item.active');
const line = $('.tabs .line');

requestIdleCallback(function () {
    line.style.left = tabActives.offsetLeft + "px";
    line.style.width = tabActives.offsetWidth + "px";
  });

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {

        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        pane.classList.add('active');

    }
});

