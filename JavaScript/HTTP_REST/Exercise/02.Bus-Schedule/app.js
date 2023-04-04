function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let nextStop = 'depot';
    let currentStop = 'none';
    const infoContainer = document.getElementById('info');
    const buttonDepart = document.getElementById('depart');
    const buttonArrive = document.getElementById('arrive');
    function depart() {
        buttonDepart.disabled = 'true';
        buttonArrive.removeAttribute('disabled');
        fetch(BASE_URL + nextStop)
        .then((response) => response.json())
        
        .then((stopData) => {
            const {name, next} = stopData;
            console.log(stopData);
            infoContainer.textContent = `Next stop ${name}`;
            currentStop = name;
            nextStop = next;
        })
        .catch((err) => {
            infoContainer.textContent = "Not Connected";
        })

        

    }

    async function arrive() {
        try{
            buttonDepart.removeAttribute('disabled');
            buttonArrive.disabled = 'true';
            infoContainer.textContent = `Arriving at ${currentStop}`;
            nextStop = next;
        }
        
        catch{
            infoContainer.textContent = "Not Connected";
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();