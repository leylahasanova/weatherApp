let inp= document.querySelector('input')
let btn= document.querySelector('button')
let result = document.querySelector('.result')

function getData() {
    let local =inp.value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=6cc33596a0c640a5951130652240502&q=${local}`)
    .then(res => res.json())
    .then(data => 
        // console.log(data))
        result.innerHTML = "Şəhər adı: " + data.location.name + "<br> Orta temperatur: "+ data.current.temp_c + "C" + "<br> Küləyin sürəti: " + data.current.wind_kph +"km/h"  + "<br> Nisbi rütubət: " + data.current.humidity + "%" )
    
}



// getData(local)

btn.addEventListener("click", getData)