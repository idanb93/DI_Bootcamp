let todayDetails = new Date();

let todayString = `${todayDetails.getDate()}/${todayDetails.getMonth()}/${todayDetails.getUTCFullYear()}`;

module.exports = {
    todayString,
};