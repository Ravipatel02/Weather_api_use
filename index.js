async function find(){
    try{
        let city = document.getElementById("city").value;

        let res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8909ed734e1e07011ccfd72731f00e2c&units=metric`);

        let data = await res.json()
        console.log(data)
        append(data)
    }
    catch(err){
        console.log("error")
    }
}

function append(data){
    document.getElementById("container").innerHTML='';

    var maindiv = document.getElementById("container")

    var div1 = document.createElement('div')

    let city = document.createElement('h1')
    city.innerText = data.city.name;

    let maxTemp = document.createElement('p')
    maxTemp.innerText= `Max_Temp : ${data.list[0].main.temp_max}`;

    let minTemp = document.createElement('p')
    minTemp.innerText= `Min_Temp : ${data.list[0].main.temp_min}`;

    let des = document.createElement('p')
    des.innerText= `description : ${data.list[0].weather[0].description}`;

    let clouds = document.createElement('p')
    clouds.innerText= `Date-Time : ${data.list[0].dt_txt}`;

    let wind = document.createElement('p')
    wind.innerText= `wind : Deg : ${data.list[0].wind.deg}- Gust: ${data.list[0].wind.gust}- Speed ${data.list[0].wind.speed}`;
    


    div1.append(city,maxTemp,minTemp,des,clouds,wind)
    div1.setAttribute('class','alldata')
    div1.style.backgroundImage = "url('https://www.cambridge.org/elt/blog/wp-content/uploads/2019/02/background-3268840_1920-768x546.jpg.webp')";
    

    div2 = document.createElement('div')
    
    var ifream = document.createElement('iframe')
    ifream.src= `https://maps.google.com/maps?q=${data.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    div2.append(ifream)

    maindiv.append(div1,div2)
}

