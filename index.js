// add solution here
function theBeatlesPlay (musicians, instruments) {
    var newArray = [];
        for (var i = 0; i < musicians.length; i++) {
          newArray.push(musicians[i] + " plays " + instruments[i])
          }
    return newArray;
}


function johnLennonFacts (facts) {
    var factsLoud = [];
    var i = 0
        while (i < facts.length) {
          factsLoud.push(facts[i] + "!!!")
          i++;
        }
    return factsLoud;
}
