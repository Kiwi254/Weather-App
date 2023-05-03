let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();
let current = `${day}` + " " + now.getHours() + ":" + now.getMinutes();
let h4 = document.querySelector("h4");
h4.innerHTML = `${current}`;


function changeCity (event) {
    event.preventDefault();
    let input = document.querySelector("#search");
    let h2 = document.querySelector("h2");
    h2.innerHTML = `${input.value}`


    let now = new Date();
    let current = `${day}` + " " + now.getHours() + ":" + now.getMinutes();
    let h4 = document.querySelector("h4");
    h4.innerHTML = `${current}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", changeCity);



//Bonus Feature
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.
