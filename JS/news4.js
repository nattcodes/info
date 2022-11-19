fetch("news.json")
    .then((res) => res.json())
    .then((data) => {
        let newsTitle = "";
        data.splice(8, 1).map((newsItem) => {
            newsTitle += `<div class="mn-title">
                            <h1>${newsItem.title}</h1>
                        </div>
                        <div class="publish">
                            <h4>Published on ${newsItem.published_datetime_utc}</h4>
                            <h4>By ${newsItem.publisher}</h4>
                        </div>
                        <div class="news-body">
                            <img class="nb-img" src=${newsItem.photo_url}>
                            <p>${newsItem.text.p1}</p>
                            <p>${newsItem.text.p2}</p>
                            <p>${newsItem.text.p3}</p>
                            <p>${newsItem.text.p4}</p>
                            <p>${newsItem.text.p5}</p>


                        </div>`
        })
        document.querySelector(".main-news-content").innerHTML = newsTitle;
    })
    .catch(err => console.error(err));
//-------------------------------------