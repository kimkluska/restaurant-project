export function loadMenuPage(){
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    const h1Element = document.createElement("h1");
    h1Element.classList.add("menu-title");
    h1Element.innerHTML = "Menu Page!";
    contentDiv.appendChild(h1Element);

    document.body.style.backgroundImage = "none";
}