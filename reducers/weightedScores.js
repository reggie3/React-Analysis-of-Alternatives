import utilities from "../utilities/utilities";

export default function scores(weightedScores = [[]], action) {
    let newWeightedScores = weightedScores;
    switch (action.type) {

        // confirm that every alternative has a default entry for every scores
        // and if it doesn't then create it
        case "COMPLETE_WEIGHTED_SCORE_GRID":
            newWeightedScores = weightedScores.map(function (arr) {
                return arr.slice();
            });

            action.scores.forEach((scoreAlternativeRow, alternativeRowIndex)=>{
                if (newWeightedScores[alternativeRowIndex] === undefined) {
                    newWeightedScores[alternativeRowIndex] = [];
                }
                scoreAlternativeRow.forEach((scoreForAlternativeCriteria, alternativeCriteriaIndex) =>{
                    let criteriaWeight = utilities.getCriteriaByID(action.criteria, alternativeCriteriaIndex).weight;
                    let weightedScore = scoreForAlternativeCriteria * criteriaWeight;
                    newWeightedScores[alternativeRowIndex][alternativeCriteriaIndex] = Number(weightedScore);
                })
            })

            return newWeightedScores;

        case "DELETE_FROM_WEIGHTED_SCORE_GRID":
            newWeightedScores = weightedScores.map(function (arr) {
                return arr.slice();
            });
            console.log("deleting weighted scores");
            if (action.deleteType === "alternative") {
                newWeightedScores[action.id] = [];
            }
            else if (action.deleteType === "criterion") {
                newWeightedScores.forEach((criteriaScores) => {
                    criteriaScores[action.id] = undefined;
                });
            }
            else {
                console.error("ERROR: you shouldn't be here.");
            }
            return newWeightedScores;

        case "UPDATE_WEIGHTED_SCORE":
            newScores = scores.map(function (arr) {
                return arr.slice();
            });
            newScores[action.altID][action.critID] = action.score;
            return newScores;
        default:
            return weightedScores;
    }
}