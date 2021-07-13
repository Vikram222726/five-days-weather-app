let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

export function FillDate(){
    let d = new Date();
    let weekday = week[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${weekday} ${date} ${month} ${year}`;
}

export function SetDate1(){
    let date, month, year, presentDay, nextMonth, nextDate, nextYear;
    let d = new Date();
    date = d.getDate();
    month = months[d.getMonth()];
    year = d.getFullYear();
    presentDay = `${month} ${date}, ${year}`;
    var day1 = new Date(presentDay);
    var nextDay = new Date(day1);
    nextDay.setDate(day1.getDate() + 1);
    nextDate = nextDay.getDate();
    nextMonth = months[nextDay.getMonth()];
    nextYear = nextDay.getFullYear();

    return `${nextDate} ${nextMonth} ${nextYear}`;
}

export function SetDate2(){
    let date, month, year, presentDay, nextMonth, nextDate, nextYear, nextDay2;
    let d = new Date();
    date = d.getDate();
    month = months[d.getMonth()];
    year = d.getFullYear();
    presentDay = `${month} ${date}, ${year}`;
    let day1 = new Date(presentDay);
    let nextDay = new Date(day1);
    nextDay.setDate(day1.getDate() + 1);
    nextDay2 = new Date(nextDay);
    nextDay2.setDate(nextDay.getDate() + 1);
    nextDate = nextDay2.getDate();
    nextMonth = months[nextDay2.getMonth()];
    nextYear = nextDay2.getFullYear();

    return `${nextDate} ${nextMonth} ${nextYear}`;
    
}

export function SetDate3(){
    let date, month, year, presentDay, nextMonth, nextDate, nextYear, nextDay2, nextDay3;
    let d = new Date();
    date = d.getDate();
    month = months[d.getMonth()];
    year = d.getFullYear();
    presentDay = `${month} ${date}, ${year}`;
    let day1 = new Date(presentDay);
    let nextDay = new Date(day1);
    nextDay.setDate(day1.getDate() + 1);
    nextDay2 = new Date(nextDay);
    nextDay2.setDate(nextDay.getDate() + 1);
    nextDay3 = new Date(nextDay2);
    nextDay3.setDate(nextDay2.getDate() + 1);
    nextDate = nextDay3.getDate();
    nextMonth = months[nextDay3.getMonth()];
    nextYear = nextDay3.getFullYear();

    return `${nextDate} ${nextMonth} ${nextYear}`;
}

export function SetDate4(){
    let date, month, year, presentDay, nextMonth, nextDate, nextYear, nextDay2, nextDay3,nextDay4;
    let d = new Date();
    date = d.getDate();
    month = months[d.getMonth()];
    year = d.getFullYear();
    presentDay = `${month} ${date}, ${year}`;
    let day1 = new Date(presentDay);
    let nextDay = new Date(day1);
    nextDay.setDate(day1.getDate() + 1);
    nextDay2 = new Date(nextDay);
    nextDay2.setDate(nextDay.getDate() + 1);
    nextDay3 = new Date(nextDay2);
    nextDay3.setDate(nextDay2.getDate() + 1);
    nextDay4 = new Date(nextDay3);
    nextDay4.setDate(nextDay3.getDate() + 1);
    nextDate = nextDay4.getDate();
    nextMonth = months[nextDay4.getMonth()];
    nextYear = nextDay4.getFullYear();

    return `${nextDate} ${nextMonth} ${nextYear}`;
}

export function SetDate5(){
    let date, month, year, presentDay, nextMonth, nextDate, nextYear, nextDay2, nextDay3,nextDay4, nextDay5;
    let d = new Date();
    date = d.getDate();
    month = months[d.getMonth()];
    year = d.getFullYear();
    presentDay = `${month} ${date}, ${year}`;
    let day1 = new Date(presentDay);
    let nextDay = new Date(day1);
    nextDay.setDate(day1.getDate() + 1);
    nextDay2 = new Date(nextDay);
    nextDay2.setDate(nextDay.getDate() + 1);
    nextDay3 = new Date(nextDay2);
    nextDay3.setDate(nextDay2.getDate() + 1);
    nextDay4 = new Date(nextDay3);
    nextDay4.setDate(nextDay3.getDate() + 1);
    nextDay5 = new Date(nextDay4);
    nextDay5.setDate(nextDay4.getDate() + 1);
    nextDate = nextDay5.getDate();
    nextMonth = months[nextDay5.getMonth()];
    nextYear = nextDay5.getFullYear();

    return `${nextDate} ${nextMonth} ${nextYear}`;
}