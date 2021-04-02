// add solution here
function theBeatlesPlay (musicians, instruments) {
    var newArray = [];
        for (var i = 0; i < musicians.length; i++) {
          newArray.push(musicians[i] + " plays " + instruments[i])
          }
    return newArray;
}


function johnLennonFacts () {
    var facts = ["He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"];
    var factsLoud = [];
    var i = 0
        while (i < facts.length) {
          factsLoud.push(facts[i] + "!!!")
          i++;
        }
    return factsLoud;
}
