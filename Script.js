const temperatureBtn = document.querySelector('#convert-temperature');
const celsiusInput = document.querySelector('#celsius');
const fahrenheitInput = document.querySelector('#fahrenheit');

temperatureBtn.addEventListener('click', function () {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsius) && isNaN(fahrenheit)) {
        // Celsium -> Fahrenheit
        fahrenheitInput.value = (celsius * 9/5) + 32;
    } else if (!isNaN(fahrenheit) && isNaN(celsius)) {
        // Fahrenheit -> Celsium
        celsiusInput.value = (fahrenheit - 32) * 5/9;
    } else {
        alert("Please input value")
    }
});

const weightBtn = document.querySelector('#convert-weight');
const kiloInput = document.querySelector('#kilo');
const poundsInput = document.querySelector('#pounds');

weightBtn.addEventListener('click', function () {
    const kilo = parseFloat(kiloInput.value);
    const pounds = parseFloat(poundsInput.value);

    if (!isNaN(kilo) && isNaN(pounds)) {
        // kg → lb
        poundsInput.value = kilo * 2.205;
    } else if (!isNaN(pounds) && isNaN(kilo)) {
        // lb → kg
        kiloInput.value = pounds / 2.205;
    } else {
        alert("Please input value")
    }
});

const distanceBtn = document.querySelector('#convert-distance');
const kmInput = document.querySelector('#km');
const milesInput = document.querySelector('#miles');

distanceBtn.addEventListener('click', function () {
    const km = parseFloat(kmInput.value);
    const miles = parseFloat(milesInput.value);

    if (!isNaN(km) && isNaN(miles)) {
        // km → miles
        milesInput.value = km / 1.609;
    } else if (!isNaN(miles) && isNaN(km)) {
        // miles → km
        kmInput.value = miles * 1.609;
    } else {
        alert("Please input value");
    }
});