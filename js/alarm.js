function Alarm() {
    //Input - Get the month, day of the months, and day of the week from the computer.
    let now = new Date
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    let toDo;

    //Processing - Use If/Else and Logic to determine whether to sleep or to wake up.
    if (dayOfMonth == 1 && month == 0 || dayOfMonth == 4 && month == 6 || dayOfMonth == 25 && month == 11 || dayOfMonth == 25 && month == 11 || dayOfWeek == 0 || dayOfWeek == 6) {
        toDo = "sleep in."
    }
    else {
        toDo = "wake up!"
    };

    //Output = Tell the user what they should do that day.
    document.getElementById('output').innerHTML = `For today, you will ${toDo}.`;
}