document.addEventListener('click', (e) => {
    let elementId = e.target.id;
    let classNameOfSvg = e.target.className.baseVal;


    if (elementId === KZ_SVG_ID ||
        elementId === KZ_SVG_TITLE_ID ||
        classNameOfSvg === ALL_SVG_ICON_CLASS ||
        classNameOfSvg === KZ_ITEM ||
        classNameOfSvg === KZ_DETAIL_CLASS) {
        worldSvg.classList.add("zoom");
        kzSvgMap.classList.add("hide");
        kzSvgTitle.classList.add("hide");
        kzSvgDetails.classList.add("zoom");

        for (var i = 0; i < allIcons.length; i++) {
            allIcons[i].classList.add("hide");
        }
        for (var i = 0; i < allTitles.length; i++) {
            allTitles[i].classList.add("hide");
        }
        for (var i=0, max = allKzSvgItems.length; i < max; i++) {
            allKzSvgItems[i].classList.add("kzItem");
        }
        console.log("zoom to kz");
    }
    else if (classNameOfSvg === ATYRAU_ICON_CLASS || elementId === ATYRAU_REGION_ID) {
        worldSvg.classList.add("zoomToAtyrau")
        console.log("zoom to atyrau");
    }
    else {
        worldSvg.classList.remove("zoomToAtyrau");
        worldSvg.classList.remove("zoom");
        kzSvgMap.classList.remove("hide");
        kzSvgTitle.classList.remove("hide");
        kzSvgDetails.classList.remove("zoom");

        for (var i = 0; i < allIcons.length; i++) {
            allIcons[i].classList.remove("hide");
        }
        for (var i = 0; i < allTitles.length; i++) {
            allTitles[i].classList.remove("hide");
        }
        for (var i=0, max = allKzSvgItems.length; i < max; i++) {
            allKzSvgItems[i].classList.remove("kzItem");
        }
        console.log("zoom out");
    }
    // console.log(elementId);
    // console.log(classNameOfSvg);
});




