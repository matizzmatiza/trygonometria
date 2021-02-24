document.addEventListener('DOMContentLoaded', () => {

    // convert to radians
    function converToRadians(x) {
        return (x % 360) * Math.PI / 180;
    }

    // function when check correct data
    function checkCorrectData(x, method, round) {
        if(x == "")
            return "Wpisz liczbę stopni.";
        else if((isNaN(x)))
            return "Nieprawidłowa wartość.";
        else {
            if(method == "sin")
                return Math.sin(converToRadians(x)).toFixed(round);
            else if(method == "cos")
                return Math.cos(converToRadians(x)).toFixed(round);
            else
                return Math.tan(converToRadians(x)).toFixed(round);
        }
    }

    // calculate functions
    function calculationSin(x, round) {
        return checkCorrectData(x, "sin", round);
    }
    function calculationCos(x, round) {
        return checkCorrectData(x, "cos", round);
    }
    function calculationTg(x, round) {
        return checkCorrectData(x, "tg", round);
    }

    // section trigonometry
    const sectionTrigonometry = document.querySelector('.trigonometry');

    // submit buttons
    const btnCalculateSin = sectionTrigonometry.querySelector('.trigonometry__form-btn--sin');
    const btnCalculateCos = sectionTrigonometry.querySelector('.trigonometry__form-btn--cos');
    const btnCalculateTg = sectionTrigonometry.querySelector('.trigonometry__form-btn--tg');

    // result area
    const resultSin = sectionTrigonometry.querySelector('.trigonometry__result--sin');
    const resultCos = sectionTrigonometry.querySelector('.trigonometry__result--cos');
    const resultTg = sectionTrigonometry.querySelector('.trigonometry__result--tg');

    // input data
    const inputSin = sectionTrigonometry.querySelector('.trigonometry__form-input--sin');
    const inputCos = sectionTrigonometry.querySelector('.trigonometry__form-input--cos');
    const inputTg = sectionTrigonometry.querySelector('.trigonometry__form-input--tg');

    // select data
    const selectRoundSin = sectionTrigonometry.querySelector('.trigonometry__form-select-list--sin');
    const selectRoundCos = sectionTrigonometry.querySelector('.trigonometry__form-select-list--cos');
    const selectRoundTg = sectionTrigonometry.querySelector('.trigonometry__form-select-list--tg');

    // function when transform data from user to show in result
    function transformData(e, result, input, calculationMethod, select) {
        e.preventDefault();
        result.innerHTML = "";
        let dynamicDiv = document.createElement('div');
        dynamicDiv.classList.add('trigonometry__result-label');
        dynamicDiv.innerHTML = "wynik";
        result.appendChild(dynamicDiv);
        result.innerHTML += calculationMethod(input.value, select.value);
    }

    // listeners
    btnCalculateSin.addEventListener('click', e => {
        transformData(e, resultSin, inputSin, calculationSin, selectRoundSin);
    })

    btnCalculateCos.addEventListener('click', e => {
        transformData(e, resultCos, inputCos, calculationCos, selectRoundCos);
    })

    btnCalculateTg.addEventListener('click', e => {
        transformData(e, resultTg, inputTg, calculationTg, selectRoundTg);
    })
})
