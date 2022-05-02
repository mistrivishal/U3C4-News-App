// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {nav,sidenav,get,create,append} from "../components/navbar.js"

let navbar = get("navbar");
navbar.innerHTML = nav();

let search = get("search_input");
let container = get("results");
const search_news = async ()=>{
    try{
        let q = search.value || JSON.parse(localStorage.getItem("q"));
        const url = `https://masai-mock-api.herokuapp.com/news?q=${q}`
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        append(data.articles,container)
    }catch(err){
        console.log(err)
    }
}
search.addEventListener("keydown" , search_news);
window.addEventListener("load",search_news)

