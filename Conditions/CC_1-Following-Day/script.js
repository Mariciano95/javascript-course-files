let day = prompt("Enter day: ");

/* 
if (day === "Monday") {
    console.log("Following day: Tuesday");
} else if (day === "Tuesday") {
    console.log("Following day: Wednesday");
} else if (day === "Wednesday") {
    console.log("Following day: Thursday");
} else if (day === "Thursday") {
    console.log("Following day: Friday");
} else if (day === "Friday") {
    console.log("Following day: Saturday");
} else if (day === "Saturday") {
    console.log("Following day: Sunday");
} else if (day === "Sunday") {
    console.log("Following day: Monday");
} else {
    console.log("Enter the name of the day!");
}
*/

switch (day) {
    case "Monday":
        console.log("Following day: Tuesday");
        break;
    case "Tuesday":
        console.log("Following day: Wednesday");
        break;
    case "Wednesday":
        console.log("Following day: Thursday");
        break;
    case "Thursday":
        console.log("Following day: Friday");
        break;
    case "Friday":
        console.log("Following day: Saturday");
        break;
    case "Saturday":
        console.log("Following day: Sunday");
        break;
    case "Sunday":
        console.log("Following day: Monday");
        break;
    default: 
        console.log("Enter the name of the day!");
}