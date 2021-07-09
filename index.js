/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord ([firstName, familyName, title, payPerHour]) {
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
function createTimeInEvent(date) {
    let dateArr = date.split(' ')
    let obj = {};
    obj.type = "TimeIn";
    obj.hour = parseInt(dateArr[1]);
    obj.date = dateArr[0];

    this.timeInEvents.push(obj)
    return this;


}
function createTimeOutEvent (date) {
    let dateArr = date.split(' ')
    let obj = {};
    obj.type = "TimeOut";
    obj.hour = parseInt(dateArr[1]);
    obj.date = dateArr[0];

    this.timeOutEvents.push(obj)
    return this;
}

function hoursWorkedOnDate(date) {
    let resultIn = this.timeInEvents.filter(obj => {
        return obj.date === date;
    })
    let resultOut = this.timeOutEvents.filter(obj => {
        return obj.date === date;
    })
    //console.log('result', resultIn)
    //console.log(resultOut)
    let finalResult;
    let hourKey = resultIn[0].hour;
    let hourOutKey = resultOut[0].hour;
    // console.log(parseInt(hourOutKey- hourKey, 10))
    // let result = (hourOutKey - hourKey).toString().split('');
    // if (parseInt(result[2]) > 0) {
    //    finalResult = parseInt(result[0] + result[1])
    // } else {
    //    finalResult = parseInt(result[0])
    // }
    // console.log(finalResult);

    return (hourOutKey- hourKey)/100;

}

function wagesEarnedOnDate (date) {
   let result =  hoursWorkedOnDate.call(this, date)
   console.log('wage', result * (this.payPerHour));
   return result * (this.payPerHour);
}
function findEmployeeByFirstName (arr, name) {
let result = arr.filter(obj => {
    return obj.firstName === name
})
if (result) {
    return result[0]
}else {
    return undefined;
}
}

const allWagesFor = function () {
    // console.log(this)
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(arrayOfObs) {
    console.log('arrayOfObs', arrayOfObs);
    let result = arrayOfObs.reduce((accumulator, obj) => {
        console.log('accumulator', accumulator);
        return allWagesFor.call(obj)+ accumulator
    }, 0)

    return result;
}

