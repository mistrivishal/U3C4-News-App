// Ude Import export (MANDATORY)

import {nav,sidenav,get,create} from "../components/navbar.js"

let navbar = get("navbar");
navbar.innerHTML = nav();


let search = get("search_input");


const search_news = (event)=>{
    if(event.key === "Enter"){
        event.preventDefault()
        let query = search.value;
        localStorage.setItem("q",JSON.stringify(query))
        window.location.href = "search.html"
    }
}
search.addEventListener("keypress" , search_news);


let container = get("detailed_news")

const appendNews = ()=>{
    let news = JSON.parse(localStorage.getItem("news"));

    let box = create("div");

    let img = create("img");
    img.src = news[0];

    let title = create("h3");
    title.innerText = news[1];

    let dis = create("p");
    dis.innerText = news[2];

    box.append(img,title,dis);

    container.append(box)
}

appendNews();