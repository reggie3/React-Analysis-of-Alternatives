import utilities from "../utilities/utilities";

export default function normalizedScores(normalizedScores = [[]], action) {
    let newNormalizedScores = [[]];
    switch (action.type) {

        // confirm that every alternative has a default entry for every scores
        // and if it doesn't then create it
        case "UPDATE_NORMALIZED_SCORES":
            action.criteria.forEach((criterion) => {
                let critID = criterion.id;
                let critScores = [];
                action.alternatives.forEach((alternative) => {
                    let altID = alternative.id;
                    critScores.push(action.scores[altID][critID])
                });
                action.alternatives.forEach((alternative) => {
                    let altID = alternative.id;
                    if(newNormalizedScores[altID] === undefined){
                        newNormalizedScores[altID] = [];
                    }
                    newNormalizedScores[altID][critID] =
                        utilities.getNormalizedNumber(action.scores[altID][critID], critScores)
                });
            });
            /*newNormalizedScores = normalizedScores.map(function (arr) {
                return arr.slice();
            });

            action.scores.forEach((scoresRow, rowIndex) => {
                if (newNormalizedScores[rowIndex] === undefined) {
                    newNormalizedScores[rowIndex] = [];
                }
                scoresRow.forEach((score, scoreIndex) => {
                   newNormalizedScores[rowIndex][scoreIndex] = 
                    utilities.getNormalizedNumber(score, scoresRow)
                })
            })*/
            return newNormalizedScores;

        default:
            return normalizedScores;
    }
}