(function() {
    const sliders = [...document.querySelectorAll(".slider-body")];
    const arrowNext = document.querySelector("#next");
    const arrowBefore = document.querySelector("#before");
    let value;

    arrowNext.addEventListener('click', () => change(1));
    arrowBefore.addEventListener('click', () => change(-1));

    function change(pos) {
        const currentE = Number(document.querySelector(".slider-body--show").
        dataset.id);
        value = currentE;
        value += pos;

        if(value === 0 || value == sliders.length+1) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentE-1].classList.toggle("slider-body--show");
        sliders[value-1].classList.toggle("slider-body--show");
    }

})();
