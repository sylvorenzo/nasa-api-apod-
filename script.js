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
            console.log(data);
            let htmlSegment = `
            <section class="api-container">
            <h2>${data.title}</h2>
            <div class="api-data">
            <img src="${data.url}" class="nasa-image" >
            <p>${data.explanation}</p>
            
        </div>
        </section>`
        section.innerHTML = htmlSegment;
        }

    }catch{(error)=>{
        console.error(error)
    }}
})