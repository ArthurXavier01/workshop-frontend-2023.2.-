const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0

function carrossel(){
    idx++
    if(idx > img.length - 1){
        idx = 0
    }

    imgs.style.transform = `translateX(${-idx * 850}px)`
}

setInterval(carrossel, 1800)

fetch('https://swapi.dev/api/people/10/').then(r =>{
    return r.json()

}).then(corpo =>{
    document.getElementById("name").innerHTML = corpo.name
    document.getElementById("mass").innerHTML = corpo.mass
    document.getElementById("hair").innerHTML = corpo.hair_color
    document.getElementById("skin").innerHTML = corpo.skin_color
    document.getElementById("eye").innerHTML = corpo.eye_color
    document.getElementById("birth").innerHTML = corpo.birth_year
    document.getElementById("gender").innerHTML = corpo.gender
    
})
fetch('https://swapi.dev/api/people/4/').then(r =>{
    return r.json()

}).then(corpo =>{
    document.getElementById("name2").innerHTML = corpo.name
    document.getElementById("mass2").innerHTML = corpo.mass
    document.getElementById("hair2").innerHTML = corpo.hair_color
    document.getElementById("skin2").innerHTML = corpo.skin_color
    document.getElementById("eye2").innerHTML = corpo.eye_color
    document.getElementById("birth2").innerHTML = corpo.birth_year
    document.getElementById("gender2").innerHTML = corpo.gender
    
})
fetch('https://swapi.dev/api/people/3/').then(r =>{
    return r.json()

}).then(corpo =>{
    document.getElementById("name3").innerHTML = corpo.name
    document.getElementById("mass3").innerHTML = corpo.mass
    document.getElementById("hair3").innerHTML = corpo.hair_color
    document.getElementById("skin3").innerHTML = corpo.skin_color
    document.getElementById("eye3").innerHTML = corpo.eye_color
    document.getElementById("birth3").innerHTML = corpo.birth_year
    document.getElementById("gender3").innerHTML = corpo.gender
    
})
fetch('https://swapi.dev/api/people/14/').then(r =>{
    return r.json()

}).then(corpo =>{
    document.getElementById("name4").innerHTML = corpo.name
    document.getElementById("mass4").innerHTML = corpo.mass
    document.getElementById("hair4").innerHTML = corpo.hair_color
    document.getElementById("skin4").innerHTML = corpo.skin_color
    document.getElementById("eye4").innerHTML = corpo.eye_color
    document.getElementById("birth4").innerHTML = corpo.birth_year
    document.getElementById("gender4").innerHTML = corpo.gender
    
})
fetch('https://swapi.dev/api/people/2/').then(r =>{
    return r.json()

}).then(corpo =>{
    document.getElementById("name5").innerHTML = corpo.name
    document.getElementById("mass5").innerHTML = corpo.mass
    document.getElementById("hair5").innerHTML = corpo.hair_color
    document.getElementById("skin5").innerHTML = corpo.skin_color
    document.getElementById("eye5").innerHTML = corpo.eye_color
    document.getElementById("birth5").innerHTML = corpo.birth_year
    document.getElementById("gender5").innerHTML = corpo.gender
    
})
fetch('https://swapi.dev/api/people/1/').then(r =>{
    return r.json()

}).then(corpo =>{
    document.getElementById("name6").innerHTML = corpo.name
    document.getElementById("mass6").innerHTML = corpo.mass
    document.getElementById("hair6").innerHTML = corpo.hair_color
    document.getElementById("skin6").innerHTML = corpo.skin_color
    document.getElementById("eye6").innerHTML = corpo.eye_color
    document.getElementById("birth6").innerHTML = corpo.birth_year
    document.getElementById("gender6").innerHTML = corpo.gender
    
})