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

    document.body.style.backgroundImage = "url('" + tonicBackground + "')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "end";
    document.body.style.backgroundAttachment = "fixed";

    contentDiv.appendChild(h1Element);
    contentDiv.appendChild(p1Element);
}