function getInfo() {
    const list = document.getElementById('buses');
    const stop = document.getElementById('stopId');
    const stopID = stop.value;
    const stopNameContainer = document.getElementById('stopName');
    const busesContainer = document.getElementById('buses');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    fetch(BASE_URL + stopID)
    .then((response) =>
        response.json())
    .then((busInfo) => {
        console.log(busInfo);
        const {buses, name} = busInfo;
        stopNameContainer.textContent = name;
        for (const bus in buses) {
            let value = `Bus ${bus} arrives in ${buses[bus]} minutes`;
            let li = document.createElement('li');
            li.textContent = value;
            list.appendChild(li);
        }
    }
    )
    .catch(() => {
        stopNameContainer.textContent = 'Error';
    })
    list.innerHTML = '';
    stop.value =  '';
} 
