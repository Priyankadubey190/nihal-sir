async function apiCall(url) {

    //add api call logic here
    try{
        let res = await fetch(url)
        let data = await res.json()
        data = data.articles;
        return data;
    }
    catch(e){
        console.log("e",e);
    }
   }


function appendArticles(articles, main) {

    //add append logic here
    data.forEach(({image,title}) =>{
        let div = document.createElement("div")
        let h3 = document.createElement("h3")
        h3.innerHTML = title
        let img = document.createElement("img")
        img.setAttribute("class","imgnews")
        img.src = image
        div.append(img,h3)
        main.append(div)
    })

}

export { apiCall, appendArticles }