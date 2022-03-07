let date = document.getElementById('date');
let nasaBtn = document.getElementById('nasaBtn');
let section = document.getElementById('container');
let image = document.getElementById('image');
let paragraph = document.getElementById('explanation');
nasaBtn.addEventListener('click',async ()=>{

    console.log(date.value);
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=OIoLHMqMSScr2kWW0uT8IupQ0dPrIO4SvdJfYZQ8&date=${date.value}`);
    try{

        if(response.status === 200){

            let data = await response.json();
            console.log(data.explanation);
            let htmlSegment = `<div class="nasa-image">
            <img src="${data.url}" >
            <h2>${data.explanation}</h2>
            
        </div>`
        section.innerHTML = htmlSegment;
        }

    }catch{(error)=>{
        console.error(error)
    }}
})