// Write a program that shows on the page a list of 
// terms and definitions defined in a JavaScript array

const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];

  const list = document.createElement('dl');

  for (let i = 0; i < words.length; i++) {
      const definitionTerm = document.createElement('dt');
      const definition = document.createElement('dd');
      definitionTerm.textContent = `${words[i].term}`;
      definition.textContent = `${words[i].definition}`;
      list.appendChild(definitionTerm);
      list.appendChild(definition);
  }

  document.querySelector('#content').appendChild(list);