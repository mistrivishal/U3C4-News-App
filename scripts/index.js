// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {nav,sidenav,get,create,append} from "../components/navbar.js"

let navbar = get("navbar");
navbar.innerHTML = nav();
let sidebar = get("sidebar");
sidebar.innerHTML = sidenav();


//https://masai-mock-api.herokuapp.com/news?q=tesla

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


let countries = get("country").children
let container = get("results")
// console.log(countries)
async function  searchContry(){
    try{
        let country = this.id;
        const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`;
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        append(data.articles,container)
    }catch(err){
        console.log(err)
    }
}

for(let countrty of countries){
    countrty.addEventListener("click", searchContry)
}

async function  searchIN(){
    try{
        const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        append(data.articles,container)
    }catch(err){
        console.log(err)
    }
}
searchIN()