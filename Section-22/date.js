
function getCurrentDate() {
    return new Date();
}

function getLocaleStringOfDate(date, locale, options) {
    return date.toLocaleString(locale,options)
}

function getToday(){
    const date = getCurrentDate();
    const options = { weekday: 'long', month: 'long', day: 'numeric'};
    return getLocaleStringOfDate(date, 'en-US',options);
}

exports.today = getToday

exports.day = function () {
    const date = getCurrentDate();
    const options = {day: 'numeric'};
    return getLocaleStringOfDate(date, 'en-US',options);
}