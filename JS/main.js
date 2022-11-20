//---------------SLIDER SECTION----------------------
let index = 0;
let i = 0;
let slider = document.getElementsByClassName("img-box");
let apiPage = document.getElementsByClassName("p");
// let myJson = ;
auto();
let back = document.querySelector(".back");
let next = document.querySelector(".next");
// let API_URL = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1/news"

function show(n) {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    slider[n - 1].style.display = ("block");
}

function auto() {
    index++
    if (index > slider.length) {
        index = 1;
    }
    show(index);
    setTimeout(auto, 8000);
}

function change() {
    let x = 1 || -1
    index += x;
    if (index > slider.length) {
        index = 1;
    }
    if (index < 1) {
        index = slider.length;
    }
    show(index);
}

//--------X-------SLIDER SECTION---------X-------------


//--------------API DATA-----------------
fetch("news.json") //using fetch, get the api or json data
    .then((res) => res.json())
    .then((data) => {
        let topNews = `<div class="heading">
                    <h1><span>I</span> Top News</h1>
                </div>`;
        let slideImage = "";
        data.slice(8, 12).map((newsItem) => { //splice, get a particular section of the files and then map them

            topNews += `
                        <div key=${newsItem.id} class="news-content">
                            <img class="news-img" src=${newsItem.photo_url}>
                            <a href=${newsItem.link}>
                                <h6>${newsItem.title}</h6>
                            </a>
                        </div>     
                        `
            slideImage += ` <div key=${newsItem.id} class="img-box">
                                <img class="img" src=${newsItem.photo_url}>
                                <div class="img-overlay">
                                    <h3 class="img-title">${newsItem.title}</h3>
                                    <h3 class="img-read">
                                        <a href=${newsItem.link}>Read more</a>
                                    </h3>
                                </div>
                                
                            </div> 
                            <a class="back" onclick="change()" href="#"><i class="fas fa-arrow-left"></i></a>
                            <a class="next" onclick="change()" href="#"><i class="fas fa-arrow-right"></i></a>  
                        `

        })
        document.querySelector(".main-left").innerHTML = topNews; //connect every api/json file to the main container ".main-left"
        document.querySelector(".img-content").innerHTML = slideImage;

    })
    .catch(err => console.error(err)); //catch any errors in the api and print them out in the console 
//----X-------API DATA---------X-----------------