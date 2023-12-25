
function date(){

    let date = new Date()

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    year = String(year).slice(-2)

    let hour = date.getHours()
    let minutes = date.getMinutes();

    return [`${getMonth(month)} ${day} - ${year}`, properTime(hour, minutes)]

}

function properTime(hour, minutes){
    
    let timeOfDay = hour % 24 < 12 ? "AM" : "PM";
    hour = hour % 12 === 0 ? hour : hour % 12

    // hour = hour < 10 ? `0${hour}`: hour
    hour = hour % 12 || 12
    minutes = minutes < 10 ? `0${minutes}` : minutes
    return `${hour}:${minutes} ${timeOfDay}`
}

function getMonth(month){
    switch(month){
        case 1 : {
            return 'Jan'
        } case 2 : {
            return "Feb"
        } case 3 : {
            return "Mar"
        } case 4 : {
            return "Apr"
        } case 5: {
            return "May"
        } case 6: {
            return "Jun"
        } case 7: {
            return "Jul"
        } case 8 : {
            return "Aug"
        } case 9 : {
            return "Sep"
        } case 10: {
            return "Oct"
        } case 11: {
            return "Nov"
        } case 12 : {
            return "Dec"
        }
        default:{
            return ""
        }
    }
}

export default date