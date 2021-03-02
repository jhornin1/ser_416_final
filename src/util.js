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

module.exports = {
    validateTime
}