//------X------NEWS API--------X-----------------
fetch("news.json") //fetch api from the local json file
    .then((res) => res.json())
    .then((data) => {
        let newsTitle = "";
        data.splice(8, 1).map((newsItem) => { //splice, get a particular section of the files and then map them
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
        document.querySelector(".main-news-content").innerHTML = newsTitle; //connect every api/json file to the main container ".main-news-content"
    })
    .catch(err => console.error(err));

//------X------NEWS API--------X-----------------

//------X------COMMENT SECTION--------X-----------------

let post = document.getElementById("post");
post.addEventListener("click", function(e) {
        e.preventDefault()
        let commentValue = document.getElementById("user-comment").value; //get the value of the textarea in form
        let nameValue = document.getElementById("fullname").value; //get the value of the input in form

        let h3Tag = document.createElement("h3"); //create the h3 tag that will be linked from javascript to html
        let pTag = document.createElement("p"); //create the p tag
        let nameText = document.createTextNode(nameValue);
        let commentText = document.createTextNode(commentValue);

        h3Tag.appendChild(nameText); //link the value of the input to the h3 tag element
        pTag.appendChild(commentText);
        document.querySelector(".box").appendChild(h3Tag);
        document.querySelector(".box").appendChild(pTag);

        const inputs = document.querySelectorAll('#fullname, #user-comment');

        inputs.forEach(input => {
            input.value = '';
            //clear form after a comment has been posted


        });
    })
    //------X------COMMENT SECTION--------X-----------------