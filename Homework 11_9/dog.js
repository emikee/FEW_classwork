//{"message":"https:\/\/images.dog.ceo\/breeds\/terrier-kerryblue\/n02093859_2625.jpg","status":"success"}

document.getElementById('generate').addEventListener('click', () => {
    randomDog();
})
function randomDog (){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response)=>response.json())
        .then((data)=> {
            console.log(data);
            document.getElementById('image').src = data.message;
            let Randomcolor = Math.floor(Math.random()*16777215).toString(16);
            console.log(Randomcolor);
            document.getElementById('generate').style.setProperty("--random-color", `#${Randomcolor}`);
        });
}