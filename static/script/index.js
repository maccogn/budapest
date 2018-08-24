let colorBoxChanger;

colorBoxChanger = {
    eventListeners : () =>{
    let btnColor = document.getElementById("colorChanger");
    btnColor.addEventListener("click", colorBoxChanger.changeColor);
    },
    changeColor:() => {
        let box = document.getElementById("colorBox");
        let actualColor = box.dataset.colorBox;
        if (actualColor == "#F3A900") {
            box.style.backgroundColor = "#00B9FF";
            box.setAttribute("data-color-box", "#00B9FF");
        } else if (actualColor == "#00B9FF") {
            box.style.backgroundColor = " #01D787";
            box.setAttribute("data-color-box", "#01D787")
        } else {
            box.style.backgroundColor = "#F3A900";
            box.setAttribute("data-color-box", "#F3A900")
        }
    }
};

let sliderPage;

sliderPage = {
    sliderEvent: () => {
        let btnSlide = document.getElementById("animateBlue");
        btnSlide.addEventListener("click", sliderPage.sliderStart);

    },
    sliderStart: () => {
        let carousel = document.getElementById("carouselExampleIndicators");
        let att = document.createAttribute("data-interval");
        let attSlide = document.createAttribute("data-slide");
        att.value = "5000";
        attSlide.value = "prev";
        carousel.setAttributeNode(att);
        setInterval( sliderPage.sliderEnd, 5000);
    },
    sliderEnd: ()=> {
        let carousel = document.getElementById("carouselExampleIndicators");
        carousel.removeAttribute("data-interval");
    }
};

colorBoxChanger.eventListeners();
sliderPage.sliderEvent();