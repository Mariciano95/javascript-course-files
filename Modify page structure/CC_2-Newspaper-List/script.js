// Write a program that shows on the page a list of newspapers defined in the given array. 
// Each link must be clickable.
const newspapers = [
    "https://www.nytimes.com",
    "https://www.washingtonpost.com",
    "http://www.economist.com"
  ];

  const p = document.getElementById('content');
  const list = document.createElement('ul');

  for (let i = 0; i < newspapers.length; i++) {
      let a = document.createElement('a');
      let li = document.createElement('li');
      a.href = newspapers[i];
      li.appendChild(a);
      list.appendChild(li);
  }

  p.appendChild(list);