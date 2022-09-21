document.addEventListener('click', (e) => {
    let elementId = e.target.id;
    let classNameOfSvg = e.target.className.baseVal;

    if (elementId === KZ_SVG_ID || elementId === KZ_SVG_TITLE_ID || classNameOfSvg === KZ_SVG_ICON_CLASS) {
        worldSvg.classList.add("zoom");
        kzSvgMap.classList.add("hide");
        kzSvgTitle.classList.add("hide");

        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("hide");
        }
    } else {
        worldSvg.classList.remove("zoom");
        kzSvgMap.classList.remove("hide");
        kzSvgTitle.classList.remove("hide");

        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("hide");
        }
    }
});

