function attachEvents() {
    const getWeather = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomungDiv = document.getElementById('upcoming'); 
    getWeather.addEventListener('click', forecast);
    async function forecast() {
        forecastDiv.style.display = "block";
        const FIRST_URL = 'http://localhost:3030/jsonstore/forecaster/locations';
        const inputField = document.getElementById('location');
        const inputText = inputField.value;
        let inputCode = '';
        let locationName = '';
        let highTemp = '';
        let lowTemp = '';
        let realCondition = '';
        let result = await fetch(FIRST_URL)
        let data = await result.json()
        await data.forEach(e => {
            if (e.name === inputText) {
                inputCode = e.code;
            }
        })
        const SECOND_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
        let res2 = await fetch(`${SECOND_URL}${inputCode}`)
        let result2 = await res2.json();
        const { forecast, name } = result2;
        const { condition, high, low } = forecast;
        locationName = name;
        highTemp = high;
        lowTemp = low;
        realCondition = condition;
        let div1 = document.createElement('div');
        div1.appendChild()
        const THIRD_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
        let res3 = await fetch(`${THIRD_URL}${inputCode}`);
        let result3 = res3.json();
        
    }



}

attachEvents();