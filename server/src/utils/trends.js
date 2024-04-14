const { ExploreTrendRequest } = require('g-trends')
const findMax = require( './findMax' )

function csvTimeFrame(timeframeKey, query) {
    const explorer = new ExploreTrendRequest()

    console.log(timeframeKey);
    switch (timeframeKey) {
        case "1-H":
            return explorer.pastHour().addKeyword(query).download();
        case "4-H":
            return explorer.pastFourHours().addKeyword(query).download();
        case "1-d":
            return explorer.pastDay().addKeyword(query).download();
        case "7-d":
            return explorer.past7Days().addKeyword(query).download();
        case "1-m":
            return explorer.past30Days().addKeyword(query).download();
        default:
            throw new Error("Invalid time frame");
    }
}

const getTrends = async(query,timeframeKey) =>{


    data = await csvTimeFrame(timeframeKey, query);
    let max = findMax(data);
    return max;
}

module.exports = getTrends;