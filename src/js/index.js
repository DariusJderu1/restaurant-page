import "../css/global.css";
import "../css/header.css"
import "../css/footer.css";

import { renderHomePage } from "./home.js";

const renderPages = (() => {

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

})();


renderHomePage();



