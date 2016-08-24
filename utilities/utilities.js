let utilities ={
    getCriteriaByID(criteria, id){
        let found =  criteria.filter((criterion)=>{
            return criterion.id === id;
        });
        return found[0];
    },

    getAlternativeByID(alternatives, id){
        return alternatives.filter((alternative)=>{
            return alternative.id === id;
        })[0];
    },
    getAlternativeCriteriaScore(scores, altID, critID){
        return scores[altID][critID];
    }
}

export default utilities;