let utilities = {

    getCriteriaByID(criteria, id) {
        let found = criteria.filter((criterion) => {
            return criterion.id === id;
        });
        return found[0];
    },

    getAlternativeByID(alternatives, id) {
        return alternatives.filter((alternative) => {
            return alternative.id === id;
        })[0];
    },
    getAlternativeCriteriaScore(scores, altID, critID) {
        return scores[altID][critID];
    },
    getNormalizedNumber(num, arrayOfNums) {
        let min = Math.min.apply(Math, arrayOfNums);
        let max = Math.max.apply(Math, arrayOfNums);
        if (max !== min) {
           return (num - min) / (max - min);
        }
        else {
            return 1;
        }
    }
}

export default utilities;