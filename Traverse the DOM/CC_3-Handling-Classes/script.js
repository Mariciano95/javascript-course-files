// Improve the previous program to add a has() function that tests if an element designated
// by its ID has a class. The function shows true, false or an error message ID not found 
// if the element can’t be found.

const has = (id, someClass) => {
    if (!document.getElementById(id)) {
        return 'ID not found';
    } else if (!document.querySelector(`#${id}`).classList.contains(someClass)) {
        return false;
    }
    return true;
}