#Get the yesterdayDate
function getYesterdaysDate(date) {
    var yesterday = new Date((new Date(date)).valueOf() - 1000*60*60*24);
    return yesterday.getFullYear()  + '-' + (yesterday.getMonth()+1) + '-' + yesterday.getDate();
}
