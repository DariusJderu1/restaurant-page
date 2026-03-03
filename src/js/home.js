import "../css/home.css";

// function for renderin the homepage
const renderHomePage = () => {

    // div#content
    const contentContainer = document.getElementById("content");

    // div.home-container
    const homePageContainer = document.createElement("div");
    homePageContainer.classList.add("home-container");
    contentContainer.appendChild(homePageContainer);

    // div.hero-card
    const heroCardContainer = document.createElement("div");
    heroCardContainer.classList.add("hero-card");
    homePageContainer.appendChild(heroCardContainer);

    // h1
    const h1Title = document.createElement("h1");
    h1Title.innerText = "The best wood-fired pizza in town";
    heroCardContainer.appendChild(h1Title);

    // h2
    const h2SubTitle = document.createElement("h2");
    h2SubTitle.innerText = "Taste the tradition in every slice!";
    heroCardContainer.appendChild(h2SubTitle);

    // button
    const ctaButton = document.createElement("button");
    ctaButton.innerText = "Menu";
    heroCardContainer.appendChild(ctaButton);
};

export { renderHomePage };

//<div id="content">
//    <div class="home-container">
//
//        <div class="hero-card">
//            <h1>The best wood-fired pizza in town</h1>
//            <h2>Taste the tradition in every slice!</h2>
//            <button>Menu</button>
//        </div>
//
//   </div>
//</div>