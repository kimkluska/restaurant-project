export function loadPage(){
    const contentDiv = document.getElementById("content");

    const h1Element = document.createElement("h1");
    h1Element.innerHTML = "Restaurant Page!";

    const p1Element = document.createElement("p");
    p1Element.innerHTML = "bla bla bla";

    contentDiv.appendChild(h1Element);
    contentDiv.appendChild(p1Element);
}