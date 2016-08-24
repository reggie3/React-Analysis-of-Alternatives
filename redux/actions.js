let actions = {
    /*addAlternativeCritieriaCombintiationToScoreGrid: function (alternatives, criteria) {
        return {
            type: 'COMPLETE_SCORE_GRID',
            criteria: criteria,
            alternatives: alternatives
        };
    },
    */

    /*
     addAlternative: function (newAlternative, alternatives) {
         console.log("addAlternative called");
         return {
             type: 'ADD_ALTERNATIVE',
             name: newAlternative.name,
             description: newAlternative.description,
             alternatives: alternatives
         }
     },*/


    updateAlternativeDescription: function (id, description) {
        return {
            type: 'UPDATE_ALTERNATIVE_DESCRIPTION',
            description: description,
            id: id
        }
    },
    updateAlternativeName: function (id, name) {
        return {
            type: 'UPDATE_ALTERNATIVE_NAME',
            name: name,
            id: id
        }
    },
    updateCriterionWeight: function (id, weight) {
        return (dispatch, getState) => {
            dispatch({
                type: 'UPDATE_CRITERION_WEIGHT',
                weight: weight,
                id: id
            });

            // enter the weighted score
            const secondState = getState();
            dispatch({
                type: "COMPLETE_WEIGHTED_SCORE_GRID",
                criteria: secondState.criteria,
                scores: secondState.scores
            });
        }
    },
    updateCriterionDescription: function (id, description) {
        return {
            type: 'UPDATE_CRITERION_DESCRIPTION',
            description: description,
            id: id
        }
    },
    updateCriterionName: function (id, name) {
        return {
            type: 'UPDATE_CRITERION_NAME',
            name: name,
            id: id
        }
    },
    /******************************
     * addCriterionAndAddAlternativeCritieriaCombintiationToScoreGrid and
     * addAlternativeAndAddAlternativeCritieriaCombintiationToScoreGrid
     * both dispatch two two different actions; one to add a new criterion or alternative, 
     * and one to make the appropriate entry into the score grid
     */
    addCriterionAndAddAlternativeCritieriaCombintiationToScoreGrid: function (newCriterion, alternatives, criteria) {
        return (dispatch, getState) => {
            // const firstState = getState(); ** don't need this since both values are received as arguments **
            dispatch({
                type: "ADD_CRITERION",
                criterion: newCriterion,
                criteria: criteria
            });

            // this is where the magic happens thaks to redux-thunk
            // here we get the updated state to pass into the next action that is dispatched
            const secondState = getState();
            dispatch({
                type: "COMPLETE_SCORE_GRID",
                criteria: secondState.criteria,
                alternatives: alternatives
            });

            // enter the weighted score
            const thirdState = getState();
            dispatch({
                type: "COMPLETE_WEIGHTED_SCORE_GRID",
                criteria: thirdState.criteria,
                scores: thirdState.scores
            });
        }
    },
    addAlternativeAndAddAlternativeCritieriaCombintiationToScoreGrid: function (newAlternative, alternatives, criteria) {
        return (dispatch, getState) => {
            // const firstState = getState();
            dispatch({
                type: "ADD_ALTERNATIVE",
                alternative: newAlternative,
                alternatives: alternatives
            });

            // get the updated state to pass into the next step
            const secondState = getState();
            dispatch({
                type: "COMPLETE_SCORE_GRID",
                criteria: criteria,
                alternatives: secondState.alternatives
            });

            // enter the weighted score
            const thirdState = getState();
            dispatch({
                type: "COMPLETE_WEIGHTED_SCORE_GRID",
                criteria: thirdState.criteria,
                scores: thirdState.scores
            });
        }
    },


    /*deleteCriterion: function (id) {
        return {
            type: 'DELETE_CRITERION',
            id: id
        }
    },
    deleteAlternative: function (id) {
        return {
            type: 'DELETE_ALTERNATIVE',
            id: id
        }
    },
    deleteScoreFromGrid: function(deleteType, id){
        return{
            type: "DELETE_FROM_SCORE_GRID",
                deleteType: "criterion",
                id: id
        }
    }*/
    /******************************
     * delete criteria and relavent alternative/criteria score combinations
     */
    deleteCriterionAndDeleteAlternativeCritieriaCombintiationToScoreGrid: function (id) {
        return (dispatch, getState) => {
            // const firstState = getState(); ** don't need this since both values are received as arguments **
            dispatch({
                type: "DELETE_CRITERION",
                id: id
            });

            // delete the scores
            dispatch({
                type: "DELETE_FROM_WEIGHTED_SCORE_GRID",
                deleteType: "criterion",
                id: id
            });
        }
    },

    /******************************
     * delete alternative and relavent alternative/criteria score combinations
     */
    deleteAlternativeAndDeleteAlternativeCritieriaCombintiationToScoreGrid: function (id) {
        return (dispatch, getState) => {
            // const firstState = getState(); ** don't need this since both values are received as arguments **
            dispatch({
                type: "DELETE_ALTERNATIVE",
                id: id
            });

            // delete the scores
            dispatch({
                type: "DELETE_FROM_SCORE_GRID",
                deleteType: "alternative",
                id: id
            });

            // delete the scores
            dispatch({
                type: "DELETE_FROM_WEIGHTED_SCORE_GRID",
                deleteType: "alternative",
                id: id
            });
        }
    },

    updateScore(altID, critID, score) {
        return (dispatch, getState) => {
            dispatch({
                type: "UPDATE_SCORE",
                altID: altID,
                critID: critID,
                score: score
            });

            // enter the weighted score
            const secondState = getState();
            dispatch({
                type: "COMPLETE_WEIGHTED_SCORE_GRID",
                criteria: secondState.criteria,
                scores: secondState.scores
            });
        }
    },

    completeScoreGrid(alternatives, criteria) {
        return (dispatch, getState) => {
            dispatch({
            type: "COMPLETE_SCORE_GRID",
            criteria: criteria,
            alternatives: alternatives
         });
          // enter the weighted score
            const secondState = getState();
            dispatch({
                type: "COMPLETE_WEIGHTED_SCORE_GRID",
                criteria: secondState.criteria,
                scores: secondState.scores
            });
        }
    }
    /* 
    The following two actions are a test of sequential action calling using the 
    technique described by Reddit user cyex here:
    https://www.reddit.com/r/reduxjs/comments/4yg9jj/calling_state_altering_reducer_functions/d6oxh7h
    This test is accompanied by two commented out function calls in the AddCriteria.js component

    completeScoreGrid: function (alternatives, criteria){
        console.log("here");
    },
        addCriterion: function (newCriterion, criteria) {
        console.log("addCriterion");
        return {
            type: 'ADD_CRITERION',
            name: newCriterion.name,
            description: newCriterion.description,
            weight: newCriterion.weight,
        };
    },
        */

}

export default actions;