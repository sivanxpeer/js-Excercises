function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log("It is indeed a leap year");
    }
    else if (year % 400 == 0) {
        console.log("It is indeed a leap year");
    }
    else
        console.log("This is not a leap year.");
}

//tests: 
leapYear(2012);
leapYear(2100);
leapYear(2400);