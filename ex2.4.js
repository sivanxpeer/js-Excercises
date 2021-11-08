let current_date = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
function printDate() {
    return days[current_date.getDay()];
}

function printCurrentDate() {
    return current_date.getDate();
}

function printMonth(){
    return monthNames[current_date.getMonth()];
}
function printYear(){
    return current_date.getFullYear();
}

console.log(`Today is ${printDate()} the ${printCurrentDate()} of ${printMonth()}, ${printYear()}`)