let baseUrl1 = "https://swapi.dev/api/people/1";
let person1 = document.getElementById("char1");

let baseUrl2 = "https://swapi.dev/api/people/5";
let person2 = document.getElementById("char2");






fetch(baseUrl1).then(Response => Response.json())
.then(json =>{
    person1.innerHTML = `<h1> ${json.name}</h1>`

})

fetch(baseUrl2).then(Response => Response.json())
.then(json =>{
    person2.innerHTML = `<h1> ${json.name}</h1>`

})  