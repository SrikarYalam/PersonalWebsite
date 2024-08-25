const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const skillsView = () => {

}

const experienceView = () => {

}

const projectsView = () => {

}


/* Event Listeners */
const allPossibleHighlights = ["skills", "experiences", "projects"];

for (const possibleHighlight of allPossibleHighlights) {
    const hiddenLetters = document.getElementsByClassName(`hidden-letter ${possibleHighlight}-highlight`);
    const highlights = document.getElementsByClassName(`${possibleHighlight}-highlight`);

    for (const highlight of highlights) {
        highlight.addEventListener("mouseover", () => {
            for (const hiddenSkillsLetter of hiddenLetters) {
                hiddenSkillsLetter.style.display = "inline-block";
            }
            const innerHiddenLetters = document.getElementsByClassName("inner-hidden-letter");
        })
        highlight.addEventListener("mouseout", () => {
            for (const hiddenSkillsLetter of hiddenLetters) {
                hiddenSkillsLetter.style.display = "none";
            }
        })
    }
}

const gallery = document.querySelector(".cards");

window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
  gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}
