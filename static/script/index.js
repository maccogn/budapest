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


let mover;

mover = {
        showBoards: () => {
        let sideBoard = document.getElementById("sideBoard");
        let allBoard =`<div class="container1" id="right-section">
                  <div class="d4">
                    <img src="static/img/asset2%20(1).png" class="image2">
                      <div class="middle2">
                        <div class="text2">Welcome to Budapest!</div>
                      </div>
                  </div>
                  <div class="d3">
                    <img src="static/img/asset1%20(1).png" class="image1">
                      <div class="middle1">
                        <div class="text1">Welcome to Budapest!</div>
                      </div>
                  </div>
                </div>
              </div>`;
        mover.appendToElement(sideBoard, allBoard);
    },
    appendToElement: function (elementToExtend, textToAppend, prepend = false) {
        // function to append new DOM elements (represented by a string) to an existing DOM element
        let fakeDiv = document.createElement('div');
        fakeDiv.innerHTML = textToAppend.trim();

        for (childNode of fakeDiv.childNodes) {
            if (prepend) {
                elementToExtend.prependChild(childNode);
            } else {
                elementToExtend.appendChild(childNode);
            }
        }
        return elementToExtend.lastChild;
    },
    deleteBoards: () => {
            let rightSection = document.getElementById('right-section');
            rightSection.parentNode.removeChild(rightSection);
    },
    deleteCollapseExample: () => {
        let rightSection = document.getElementById('collapseExample');
        rightSection.parentNode.removeChild(rightSection);
    },
    moverEventListeners: () => {
        let beginBtn = document.getElementById('moverBtn');
        beginBtn.addEventListener("click", mover.deleteBoards);
        let secondScreen = document.getElementById('collapseExample');
        secondScreen.addEventListener('click', mover.showBoards);
    }
};


colorBoxChanger.eventListeners();
sliderPage.sliderEvent();
mover.moverEventListeners();