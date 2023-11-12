const API_KEY = `7d74d2ffad0314d362fd5faab7c44b5c`;

async function weatherApi(){
    let city= document.getElementById('city').value;
    let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    let api= await res.json();

    return api;
};



document.getElementById('clickBtn').addEventListener('click', function(){
    weatherApi().then(data => display(data));
});

function display(temp){
    document.getElementById('city_name').innerText= temp.name;
    document.getElementById('temp').innerText= temp.main.temp;
    document.getElementById('weather').innerText= temp.weather[0].main;
    ///icon///
    document.getElementById('icon').src= `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
}

// function setValue(){

// }