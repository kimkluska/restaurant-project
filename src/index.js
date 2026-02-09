import "./styles.css";
import {loadHomePage} from "./HomePage";
import {loadMenuPage} from "./menuPage";
const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

loadHomePage();

homeButton.addEventListener("click", () => {
    loadHomePage();
    console.log("home button clicked");
});
menuButton.addEventListener("click", () => {
    loadMenuPage();
    console.log("menu button clicked");
});
aboutButton.addEventListener("click", () => {
    console.log("about button clicked");
});

