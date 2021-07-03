/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
const createEmployeeRecord = ([firstName, familyName, title, payPerHour, timeInEvents ]) => {
let obj = {};
obj.firstName = firstName;
obj.familyName = familyName;
obj.title = title;
obj.payPerHour = payPerHour;
obj.timeInEvents = [];
obj.timeOutEvents = [];
return obj
}


const createEmployeeRecords = (arrayOfArrays) => {
    const result = arrayOfArrays.map(arr => {
        return createEmployeeRecord(arr)
    });
    return result;
}
const createTimeInEvent = (date) => {
    // let dateArr = date.split(' ')
    // let obj = {};
    // obj.type = "TimeIn";
    // obj.hour = parseInt(dateArr[1]);
    // obj.date = dateArr[0];

    // this.timeInEvents.push(obj)
    // return this;

    let [d, hour] = date.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: d
    })
    return this
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

