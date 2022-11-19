//-------------------------------------
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

//-------------------------------------

//-------------------------------------
// fetch(API_URL)
//     .then((res) => res.json())
//     .then((data) => {
//         let topNews = `<div class="heading">
//         <h1><span>I</span> Top News</h1>
//     </div>`;
//         data.map((newsItem) => {
//             topNews += `
//             <div class="news-content">
//                 <img class="news-img" src=${newsItem.avatar}>
//                 <a href="#">
//                     <h6>${newsItem.title}</h6>
//                 </a>
//             </div>     
//             `
//         })
//         document.querySelector(".main-left").innerHTML = topNews;
//     })
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'a066089923msh5b1a931b03faf69p19915bjsn78e8ed60fd96',
//         'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
//     }
// };

fetch("news.json")
    .then((res) => res.json())
    .then((data) => {
        let topNews = `<div class="heading">
                    <h1><span>I</span> Top News</h1>
                </div>`;
        let slideImage = "";
        data.slice(8, 12).map((newsItem) => {

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
        document.querySelector(".main-left").innerHTML = topNews;
        document.querySelector(".img-content").innerHTML = slideImage;

    })
    .catch(err => console.error(err));
//-------------------------------------
// <div class="publish">
//     <h4>Published on ${newsItem.published_datetime_utc}</h4>
//     <h4>By ${newsItem.publisher}</h4>
// </div>
// <div class="news-body">
//     <img class="nb-img" src=${newsItem.photo_url}>
//     <p>${newsItem.text.p1}</p>
//     <p>${newsItem.text.p2}</p>
//     <p>${newsItem.text.p3}</p>
//     <p>${newsItem.text.p4}</p>
//     <p>${newsItem.text.p5}</p>


// </div>