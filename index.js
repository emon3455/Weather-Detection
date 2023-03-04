//17230078d15d5e6d7de45fcda93506b8
//https://api.openweathermap.org/data/2.5/weather?q={city-name}&appid={api key}
//https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=17230078d15d5e6d7de45fcda93506b8

const apiKey = "17230078d15d5e6d7de45fcda93506b8";

const loadData=async(cityName)=>{
    try{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        displayData(data);
    }
    catch(ex){
        console.log(ex);
    }
}

const displayData=(data)=>{

    console.log(data.main.temp);
    document.getElementById("tempareture").innerText=data.main.temp;

    document.getElementById("city").innerText=data.name;
    document.getElementById("weather").innerText=data.weather[0].main;

}

document.getElementById("search-btn").addEventListener("click",function(){
    const city = document.getElementById("search-field").value;
    loadData(city);
    document.getElementById("search-field").value="";
})

loadData("dhaka");