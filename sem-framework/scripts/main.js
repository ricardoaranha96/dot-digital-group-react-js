document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".accordion").forEach(function (accordion) {
        accordion
            .querySelectorAll(".accordion__item")
            .forEach(function (accordionItem) {
                accordionItem
                    .querySelector(".accordion__item__head")
                    .addEventListener("click", function (e) {
                        accordion
                            .querySelectorAll(".accordion__item")
                            .forEach((otherAccordionItem) => {
                                if (otherAccordionItem != accordionItem)
                                    otherAccordionItem.classList.remove(
                                        "accordion__item--active"
                                    );
                            });
                        if (
                            accordionItem.classList.contains(
                                "accordion__item--active"
                            )
                        ) {
                            accordionItem.classList.remove(
                                "accordion__item--active"
                            );
                        } else {
                            accordionItem.classList.add(
                                "accordion__item--active"
                            );
                        }
                    });
            });
    });

    document.querySelectorAll(".carousel").forEach(function (carousel) {
        carousel
            .querySelectorAll(".carousel__controls__control")
            .forEach(function (carouselControl, i) {
                carouselControl.addEventListener("click", function (e) {
                    carousel
                        .querySelectorAll(
                            ".carousel__controls__control:not(:nth-child(" +
                                (i + 1) +
                                "))"
                        )
                        .forEach(function (inactiveCarouselControl) {
                            inactiveCarouselControl.classList.remove(
                                "carousel__controls__control--active"
                            );
                        });
                    carouselControl.classList.add(
                        "carousel__controls__control--active"
                    );

                    carousel
                        .querySelectorAll(
                            ".carousel__inner__item:not(:nth-child(" +
                                (i + 1) +
                                "))"
                        )
                        .forEach(function (inactiveCarouselControl) {
                            inactiveCarouselControl.classList.remove(
                                "carousel__inner__item--active"
                            );
                        });
                    carousel
                        .querySelector(
                            ".carousel__inner__item:nth-child(" + (i + 1) + ")"
                        )
                        .classList.add("carousel__inner__item--active");
                });
            });
    });

    //Referência: https://perishablepress.com/vanilla-javascript-scroll-anchor/
    const links = document.querySelectorAll(".scroll-anchor");
    links.forEach(function (scrollAnchor) {
        scrollAnchor.addEventListener("click", smoothAnchorScroll);
    });

    function smoothAnchorScroll(e, respond = null) {
        const distanceToTop = (el) =>
            Math.floor(el.getBoundingClientRect().top);
        e.preventDefault();
        var targetID = respond
            ? respond.getAttribute("href")
            : this.getAttribute("href");
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);
        window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
        const checkIfDone = setInterval(function () {
            const atBottom =
                window.innerHeight + window.pageYOffset >=
                document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = "-1";
                targetAnchor.focus();
                window.history.pushState("", "", targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }

    document.querySelectorAll(".slider").forEach(function (slider) {
        slider
            .querySelectorAll(".slider__arrows__arrow")
            .forEach(function (sliderArrow) {
                sliderArrow.addEventListener("click", function (e) {
                    let sliderInner = slider.querySelector(".slider__inner");
                    let itemWidth = sliderInner.querySelector(
                        ".slider__inner__track__item"
                    ).offsetWidth;
                    let direction = sliderArrow.getAttribute("data-direction");
                    if (!direction) return;

                    if (direction == "left") {
                        itemWidth = itemWidth * -1;
                    }

                    let scrollSettings = {
                        behavior: "smooth",
                        left: itemWidth,
                    };

                    scrollSettings[direction] = itemWidth;

                    sliderInner.scrollBy(scrollSettings);
                });
            });
    });

    document
        .querySelectorAll(".form-group-textarea")
        .forEach(function (formGroupTextArea) {
            formGroupTextArea
                .querySelector(".form-group-textarea__label")
                .addEventListener("click", function (e) {
                    formGroupTextArea
                        .querySelector(".form-group-textarea__textarea")
                        .focus();
                });
        });

    document.querySelectorAll(".phone-mask").forEach(function (input) {
        input.addEventListener("keyup", function (e) {
            let maskPhone = "(XX) XXXX-XXXX";
            let maskPhoneBig = "(XX) XXXXX-XXXX";

            let inputCleanValue = input.value.replace(/[^\d]/g, "");
            let newValue = "";
            let i = 0;

            let mask = inputCleanValue.length === 11 ? maskPhoneBig : maskPhone;

            mask.split("").forEach(function (char) {
                if (i >= inputCleanValue.length) {
                    return true;
                }

                if (char === "X") {
                    newValue += inputCleanValue.charAt(i);
                    i++;
                } else {
                    newValue += char;
                }
            });

            input.value = newValue;
        });
    });
});
