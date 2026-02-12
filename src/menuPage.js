export function loadMenuPage(){
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    if(document.querySelector(".background-layer")){
        document.querySelector(".background-layer").remove();
    }

    const h1Element = document.createElement("h1");
    h1Element.classList.add("menu-title");
    h1Element.innerHTML = "Menu Page!";
    contentDiv.appendChild(h1Element);
}