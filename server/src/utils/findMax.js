function findMax(data) {
    let maxValue = Number.MIN_VALUE;
    let maxKeys = [];

    for (let i = 1; i < data.length; i++) {
        const value = parseInt(data[i][1]);
        if (value > maxValue) {
            maxValue = value;
            maxKeys = [data[i][0]]; // Reset maxKeys to contain only the current key
        } else if (value === maxValue) {
            maxKeys.push(data[i][0]); // Add the current key to maxKeys if its value is equal to maxValue
        }
    }
    result = {
        "maxKeys" : maxKeys,
        "maxValue": maxValue
    }
    return result;
    
}

module.exports =  findMax;