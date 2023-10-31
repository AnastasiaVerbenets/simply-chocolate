function benefits() {
    const white = document.getElementsByClassName("ingredients__hover-benefit");
    const orange = document.getElementsByClassName("ingredients__hover-text");

    if(white.style.display === "none") {
        white.style.display="inline";
        orange.style.display="none";
    } else {
        white.style.display="none";
        orange.style.display="inline"
    }
}