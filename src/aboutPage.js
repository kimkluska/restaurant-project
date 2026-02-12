import tonicCooks from "./tonic-cooks.jpg";

export function loadAboutPage(){
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    if(document.querySelector(".background-layer")){
        document.querySelector(".background-layer").remove();
    }

    const h1Element = document.createElement("h1");
    h1Element.classList.add("about-title");
    h1Element.innerHTML = "About Us";
    contentDiv.appendChild(h1Element);  

    const tonicImage = document.createElement("img");
    tonicImage.src = tonicCooks;
    tonicImage.classList.add("tonic-cooks-image");
    contentDiv.appendChild(tonicImage);
}