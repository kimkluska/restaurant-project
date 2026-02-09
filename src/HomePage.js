import tonicBackground from "./tonic-restaurant-background.png";

export function loadHomePage(){

    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    const h1Element = document.createElement("h1");
    h1Element.classList.add("home-title");
    h1Element.innerHTML = "Restaurant Page!";

    const p1Element = document.createElement("p");
    p1Element.classList.add("home-paragraph");
    p1Element.innerHTML = "bla bla bla";


    const backgroundLayer = document.createElement("div");
    backgroundLayer.style.backgroundImage = "url('" + tonicBackground + "')";
    backgroundLayer.style.position = "fixed";
    backgroundLayer.style.top = "0";
    backgroundLayer.style.left = "0";
    backgroundLayer.style.width = "100%";
    backgroundLayer.style.height = "100%";
    backgroundLayer.style.zIndex = "-1";
    backgroundLayer.style.backgroundRepeat = "no-repeat";
    backgroundLayer.style.backgroundSize = "cover";
    document.body.appendChild(backgroundLayer);

    contentDiv.appendChild(h1Element);
    contentDiv.appendChild(p1Element);
}