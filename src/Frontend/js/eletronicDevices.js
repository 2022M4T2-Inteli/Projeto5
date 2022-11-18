$(document).ready(() => {
    getDevices();

});

const geralDevices = document.querySelector("#geralDevices");
const lastLocation = document.querySelector("#lastLocation");
var aux = 0;

console.log("teste");

const getDevices = () => {$.ajax({
    async:true,
    url: "http://127.0.0.1:5500/rfid/find",
    type: 'GET',
    success: data => {
        console.log("oi");
        data.forEach(element => {
            const div = document.createElement("div");
            const location = document.createElement("p");
        div.innerHTML = `
        <div class="devices">
            <div class="textDevices">
            <img class="circleFillGreenList" src="../imagens/circleFillGreen" alt="">
                <p><b>${element.rec}</b><br>${element.data}</p>
            </div>
            <div class="imgCategoryDevice">
                <img class="mapPinList" src="../imagens/map-pin.svg" alt="map_pin">
                <p class="textCategory">${element.modelo}</p>
            </div>
        </div>
        `
        geralDevices.appendChild(div);

        if(aux == 0){
            location.innerHTML = `
            <p class="lastInfoDev">${element.localizacao}</p>
            `
            lastLocation.appendChild(location);
            aux++;
        };
        });
    }
})
};

