const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    // STOP AT 100
    if (load > 99) {
        clearInterval(int)
    }

    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

    loadText.innerHTML = `${load}`;
    // =output_start + ((output_end - output_start) / (input_end - input_start)) * (input - input_start)
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`




    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
}