const nav = () => {
    return `<a href="index.html">
        <h1>News App</h1>
    </a>
    <input type="text" name="" id="search_input" placeholder="Search news">
    `;
}

const sidenav = ()=>{
    return`
    <h2>Countries : </h2>
    <div id="country">
        <h3 id="in">India</h3>
        <h3 id="ch">China</h3>
        <h3 id="us">USA</h3>
        <h3 id="uk">United Kingdom</h3>
        <h3 id="nz">NewZeland</h3>
    </div>`;
}

const get = (x)=>{
    return document.getElementById(x)
}

const create = (x)=>{
    return document.createElement(x)
}

const append = (data,container)=>{
    container.innerHTML = null;
    data.forEach(({urlToImage,title,description}) => {
        let box  = create("div");
        box.className = "news";
        box.addEventListener("click",()=>{
            localStorage.setItem("news",JSON.stringify([urlToImage,title,description]));
            window.location.href = "news.html";
        })
        let box2  = create("div");

        let img = create("img");
        img.src = urlToImage;

        let titl = create("h3");
        titl.innerText = title;

        let news = create("p");
        news.innerText = description;

        box2.append(titl,news)

        box.append(img,box2)

        return container.append(box)
    });
}
export {nav,sidenav,get,create,append}