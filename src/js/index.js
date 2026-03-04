import "../css/global.css";
import "../css/header.css"
import "../css/footer.css";

//to delete
import "../css/contact.css";

import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";

const renderPages = (() => {

    //renderHomePage();

    const contentContainer = document.getElementById("content");
    const homeButton = document.getElementById("home-button");
    const menuButton = document.getElementById("menu-button");
    const contactButton = document.getElementById("contact-button");


    const clearContentContainer = () => contentContainer.innerHTML = "";

    homeButton.addEventListener("click", () => {

        // color the selected buttons
        homeButton.classList.add("selected-nav-link");
        menuButton.classList.remove("selected-nav-link");
        contactButton.classList.remove("selected-nav-link");

        clearContentContainer();

        renderHomePage();
    });

    menuButton.addEventListener("click", () => {

        // color the selected buttons
        homeButton.classList.remove("selected-nav-link");
        menuButton.classList.add("selected-nav-link");
        contactButton.classList.remove("selected-nav-link");

        clearContentContainer();

        renderMenuPage();
    });

})();



