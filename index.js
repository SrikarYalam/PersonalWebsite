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
                for (const hl of highlights)
                {
                    if (hl.className == highlight.className)
                    {
                        hl.style.animation = 'wiggle .1s infinite';
                    }
                }
            }
        })
        highlight.addEventListener("mouseout", () => {
            for (const hiddenSkillsLetter of hiddenLetters) {
                hiddenSkillsLetter.style.display = "none";
            }
        })
    }
}
