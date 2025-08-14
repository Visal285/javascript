function returnDay(num) {
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    if (num < 1 || num > 7) {
        return null;
    }
    return days[num - 1];
}


 console.log(returnDay(1)); 
 console.log(returnDay(7)); 
 console.log(returnDay(4)); 
 console.log(returnDay(0));  