document.getElementById('git').addEventListener('mouseover', () => {
    console.log('Its hovered!')
})
const textElement = document.getElementById("text");
const text = "Hello, this is a self-writing and self-deleting text effect!";
const speed = 100; // Milliseconds per character (adjust to control typing speed)
   
let index = 0;
let direction = 1;

function typeWriter() {
  textElement.textContent = text.slice(0, index);
  if (direction === 1) {
    index++;
    if (index > text.length) {
      direction = -1;
      setTimeout(typeWriter, 1000); // Wait for 1 second after completing typing
    } else {
      setTimeout(typeWriter, speed);
    }
  } else {
    index--;
    if (index === 0) {
      direction = 1;
      setTimeout(typeWriter, 1000); // Wait for 1 second after completing deleting
    } else {
      setTimeout(typeWriter, speed / 2);
    }
  }
}

typeWriter();

document.querySelector('#container-box').addEventListener('mouseenter', (e) => {
  console.log(e);
  document.querySelector('#container-box').style.backgroundColor = `rgb(0, ${e.offsetX}, ${e.offsetY})`
})
document.querySelector('#container-box').addEventListener('mouseleave', (e) => {
  document.querySelector('#container-box').style.backgroundColor = `rgb(100, ${e.offsetX}, ${e.offsetY})`   
})


