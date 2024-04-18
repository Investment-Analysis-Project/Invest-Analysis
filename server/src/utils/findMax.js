function findMax(data) {
    let maxValue = Number.MIN_VALUE;
    let maxKeys = [];

    for (let i = 1; i < data.length; i++) {
        const value = parseInt(data[i][1]);
        if (value > maxValue) {
            maxValue = value;
            maxKeys = [data[i][0]];
        } else if (value === maxValue) {
            maxKeys.push(data[i][0]);
        }
    }
    result = {
        "maxKeys" : maxKeys,
        "maxValue": maxValue
    }
    return result;
    
}

module.exports =  findMax;