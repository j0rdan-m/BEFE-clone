let body;
let bgColorsBody;
let menu;
let menuItems;
let menuBorder;
let activeItem;


function clickItem(item, index,) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem === item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    switch (index) {
    case 0:
        window.location.href="#";
        break;
    case 1:
        window.location.href="#";
        break;
    case 2:
        window.location.href="#";
        break;
    case 3:
        window.location.href="#";
        break;
    case 4:
        window.location.href="/access";
        break;
    }
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

export default function initheader () {
    body = document.body;
    bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
    menu = body.querySelector(".menu");
    menuItems = menu.querySelectorAll(".menu__item");
    menuBorder = menu.querySelector(".menu__border");
    activeItem = menu.querySelector(".active");

    offsetMenuBorder(activeItem, menuBorder);

    menuItems.forEach((item, index) => {

        item.addEventListener("click", () => clickItem(item, index));
    });

    window.addEventListener("resize", () => {
        offsetMenuBorder(activeItem, menuBorder);
        menu.style.setProperty("--timeOut", "none");
    });
} 