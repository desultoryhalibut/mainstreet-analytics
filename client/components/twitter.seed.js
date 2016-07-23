// This is seed data for testing while we get database set up
//

var queries = ['lululemon', 'nike', 'gold', 'unemployment'];
var numQueries = queries.length;
var quantity = 1000;

var entries = [];

for (var i = 0; i < quantity; i++) {
    var rand1 = Math.random();
    var rand2 = Math.random();

    var sentiment = {
        "topic": 'lululemon',
        "volume": (rand2 * 1000) + 100,
        "score": (rand1 * 5) - (rand2 * 5),
        "time": i
    }

    entries.push(sentiment)
}

module.exports = entries;