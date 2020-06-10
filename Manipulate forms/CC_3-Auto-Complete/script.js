// In this exercise, you’ll have to assist the user in selecting a country. 
// As he enters the country name in an input box, the page shows a list of 
// corresponding countries. Clicking on a suggested country replaces the value
// in the input box. To keep things simple, only countries starting with a “A”
// letter are taken into account.

const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];

const suggestions = document.querySelector('#suggestions');
const countryInput = document.querySelector('#country');

countryInput.addEventListener('input', e => {
    suggestions.innerHTML = '';

    countryList.forEach(country => {
        let p = document.createElement('p');
        if (country.startsWith(e.target.value)) {
            p.innerText = country;
            p.addEventListener('click', () => {
                countryInput.value = p.innerText;
                suggestions.innerHTML = '';
            });
        }
        suggestions.appendChild(p);
    });
});