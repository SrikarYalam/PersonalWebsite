const follower = document.querySelector(".circle");

const mousePosition = {x: 0, y: 0};
const circlePosition = {x: 0, y: 0};
const circleSize = 25;
const pointerSize = 2.5;

window.addEventListener("mousemove", (event) => {
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
});

const updateCirclePosition = () => {
    const dx = mousePosition.x - circlePosition.x;
    const dy = mousePosition.y - circlePosition.y;

    circlePosition.x += dx / 15;
    circlePosition.y += dy / 15;
}

const render = () => {
    follower.style.left = `${circlePosition.x - circleSize/2 + pointerSize/2}px`;
    follower.style.top = `${circlePosition.y - circleSize/2 + pointerSize/2}px`;
    requestAnimationFrame(render);
}

render();
setInterval(updateCirclePosition, 1000/60);

