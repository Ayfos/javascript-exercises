const contains = function (object, value) {

    for (const key in object) {
        const currentValue = object[key];
        if(Object.is(currentValue, value)) {
            return true;
        }
        if(typeof currentValue === 'object' && currentValue !== null) {
            if(contains(currentValue, value)) {
                return true;
            }
        }
    }
    return false;
};

// Do not edit below this line
module.exports = contains;
