import "../css/contact.css";
import locationImage from "../images/location.png";

export const renderContactPage = () => {

    // div#content
    const contentContainer = document.getElementById("content");

    // div.contact-container
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    contentContainer.appendChild(contactContainer);

    // div.contact-wrapper
    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contact-wrapper");
    contactContainer.appendChild(contactWrapper);

    // div.phone-number
    const phoneNumberContainer = document.createElement("div");
    phoneNumberContainer.classList.add("phone-number");
    contactWrapper.appendChild(phoneNumberContainer);

    // the two spans from div.phone-number
    //logo
    const spanPhoneIcon = document.createElement("span");
    spanPhoneIcon.classList.add("material-symbols-outlined");
    spanPhoneIcon.innerText = "call";
    phoneNumberContainer.appendChild(spanPhoneIcon);
    //phone number
    const spanPhoneNumber = document.createElement("span");
    spanPhoneNumber.innerText = "123 456 789";
    phoneNumberContainer.appendChild(spanPhoneNumber);


    // div.location-text
    const locationTextContainer = document.createElement("div");
    locationTextContainer.classList.add("location-text");
    contactWrapper.appendChild(locationTextContainer);

    // the two spans from div.location-text
    //logo
    const spanLocationIcon = document.createElement("span");
    spanLocationIcon.classList.add("material-symbols-outlined");
    spanLocationIcon.innerText = "location_on";
    locationTextContainer.appendChild(spanLocationIcon);
    //phone number
    const spanAddress = document.createElement("span");
    spanAddress.innerText = "205 E Houston St, New York, NY 10002, USA";
    locationTextContainer.appendChild(spanAddress);

    // img
    const image = document.createElement("img");
    image.src = locationImage;
    image.alt = "location";
    image.classList.add("location-picture");
    contactWrapper.appendChild(image);
};

/*
<div class="contact-container">

    <div class="contact-wrapper">
        <div class="phone-number">
            <span class="material-symbols-outlined">call</span>
            <span>123 456 789</span>
        </div>

        <div class="location-text">
            <span class="material-symbols-outlined">location_on</span>
            <span>205 E Houston St, New York, NY 10002, USA</span>
        </div>

        <img src="images/location.png" alt="location" class="location-picture">
    </div>

</div>
*/