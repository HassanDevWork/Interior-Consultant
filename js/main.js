const animateCSS = (element, animation, prefix = "animate__") =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = element;

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve("Animation ended");
        }

        node.addEventListener("animationend", handleAnimationEnd, { once: true });
    });

window.onload = function () {
    let hambergermenu = document.querySelector("#hambergermenu");
    let smallMenu = document.querySelector(".menu-small");

    function toggleFlex(element) {
        element.classList.toggle("flex");
    }

    hambergermenu.onclick = function () {
        toggleFlex(smallMenu);
        animateCSS(smallMenu, "slideInDown")
    };

    let close = document.querySelector("#close-icon");
    close.onclick = function () {
        animateCSS(smallMenu, "slideOutUp").then(() => {
            toggleFlex(smallMenu);
        });
    };
    
    let listItems = document.querySelectorAll('.menu-items-small li')
    listItems.forEach(item => {
        item.onclick = function () {
            animateCSS(smallMenu, "slideOutUp").then(() => {
                toggleFlex(smallMenu);
            });
        }
    })
};
