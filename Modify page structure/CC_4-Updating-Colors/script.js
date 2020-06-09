// The following HTML content defines three paragraphs. Write a program that takes new text color, 
// and a new background color and updates the page accordingly.

const changeColor = (bgColor, textColor) => {
  const div = Array.from(document.querySelector('div'));
  div.forEach(para => {
    para.style.color = textColor;
    para.style.backgroundColor = bgColor;
  });
}

changeColor('red', 'white');