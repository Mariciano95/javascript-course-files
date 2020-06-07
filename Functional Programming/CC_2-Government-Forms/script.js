const governmentForms = [{
  name: "Plutocracy",
  definition: "Rule by the wealthy"
},
{
  name: "Oligarchy",
  definition: "Rule by a small number of people"
},
{
  name: "Kleptocracy",
  definition: "Rule by the thieves"
},
{
  name: "Theocracy",
  definition: "Rule by a religious elite"
},
{
  name: "Democracy",
  definition: "Rule by the people"
},
{
  name: "Autocracy",
  definition: "Rule by a single person"
}];

const endCy = governmentForms => {
  return governmentForms.map(name => name.name).filter(name => name.endsWith('cy'));
}