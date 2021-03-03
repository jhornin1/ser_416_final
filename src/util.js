/**
 * Function takes a body containing checkboxes representing a time-range selection from 9am to 6pm
 * and validates that it follows the validity rules. These are that 1.) at least one checkbox must be selected and
 * 2.) the checkboxes must be selected in a continuous range without gaps.
 *
 * @param checkboxes A Json Object in which the timeslots are indexed in the range: [0,10)
 */
const validateTime = (checkboxes) => {
    let exists = false
    let rangeOver = false

    for (let i = 0; i < 10; i++) {
        if (checkboxes[i] !== undefined) { // If it has a value
            if (rangeOver) { // and there is a gap between time entries
                return 'Time slot entries must be an unbroken range.' // return error message.
            }

            if (exists === false) { // and it is the first value
                exists = true  // set it as the first value
            }

        } else { // If the item is undefined
            if (exists === true) { // and a box has been checked
                rangeOver = true // note that the acceptable range is over
            }
        }
    }

    // Verify that an entry was selected
    return exists ? '' : 'Time slot must be selected.'
}

/**
 * Function takes a set of checkboxes representing a time-range selection from 9am to 6pm
 * and gets the first time box checked.
 *
 * @param checkboxes An object in which time selections are represented with indexes.
 * @returns {number} The index of the first selected time box.
 */
const timeStart = (checkboxes) => {
    let counter = 0
    while (true) {
        if (checkboxes[counter++] !== undefined) {
            return counter - 1
        }
    }
}

/**
 * Function takes an object in which a number of time boxes are selected and the number of extraneous properties in the
 * object. Returns the duration of time selected.
 *
 * @param request An object with checkbox information.
 * @param nonTime The number of extraneous properties in the object.
 */
const getDur = (request, nonTime) => {
    return Object.values(request).length - nonTime
}

/**
 * Function takes a string version of a date and converts it to a more readable version.
 *
 * @param dateStr The date string to be parsed.
 * @returns {string} A readable version of the date string.
 */
const getDate = (dateStr) => {
    let date = new Date(Date.parse(dateStr))
    date.setDate(date.getDate() + 1) // adjust for date indexing.
    return date.toDateString() // get the date in string form.
    // And interpret the selected time.
}

/**
 * Function takes a string in military time and converts it to standard time.
 *
 * @param time
 */
const convertTime = (milTime) => {
    let time = milTime.split(':')
    // Format the time
    time[0] = Number(time[0])
    let am = time[0] > 12 ? 'PM' : 'AM'
    time[0] = am === 'AM' ? time[0] : time[0] - 12
    return time[0] + ':' + time[1] + ' ' + am
}

module.exports = {
    validateTime,
    timeStart,
    getDur,
    getDate,
    convertTime
}