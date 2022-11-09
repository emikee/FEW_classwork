randomCharacter();
document.getElementById('generateRandom').addEventListener('click', () => {
    randomCharacter();
})

let points = 0;
let status;

function randomCharacter() {
    fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 826)}`)
        .then((response)=>response.json())
        .then((data => {
            console.log(data);
            document.getElementById('image').src = data.image;
            status = data.status;
            console.log(status);
        }))
}

document.getElementById('alive').addEventListener('click', () => {
    if (status == 'Alive') {
        points ++;
        document.body.style.backgroundColor = "green";
        console.log(points);
    } else {
        points = points - 1;
        document.body.style.backgroundColor = "red";
        console.log(points);
    }
    verify();
})
document.getElementById('dead').addEventListener('click', () => {
    if (status == 'Dead') {
        points ++;
        document.body.style.backgroundColor = "green";
        console.log(points);
    } else {
        points = points - 1;
        document.body.style.backgroundColor = "red";
        console.log(points);
    }
    verify();
})
document.getElementById('unknown').addEventListener('click', () => {
    if (status == 'unknown') {
        points ++;
        document.body.style.backgroundColor = "green";
        console.log(points);
    } else {
        points = points - 1;
        document.body.style.backgroundColor = "red";
        console.log(points);
    }
    verify();
})


function verify() {
    document.getElementById('score').innerHTML = points;
    setTimeout(() => {
        randomCharacter();
        document.body.style.backgroundColor = "white";
    }, 2000)
}