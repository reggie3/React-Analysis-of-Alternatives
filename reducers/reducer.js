import Update from 'react/lib/update';
import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import alternatives from './alternatives';
import criteria from './criteria';
import scores from './scores';
import weightedScores from './weightedScores';

/*
export default reduceReducers(
    combineReducers({
        criteria,
        alternatives

    })
);*/
const reducer =  combineReducers({
        criteria,
        alternatives,
        scores,
        weightedScores
});
export default reducer;

/*
function getAlternativeId(alternatives) {
    let max = alternatives.reduce((maxId, alternative) => {
        return Math.max(alternative.id, maxId)
    }, -1);
    return max + 1;
}

function getCriteriaId(criteria) {
    let max = criteria.reduce((maxId, criterion) => {
        return Math.max(criterion.id, maxId)
    }, -1);
    return max + 1;
}


let reducer = function (state, action) {
    // create two empty objects to keep track of stuff
    let changingObject = {}, newState = {};
    switch (action.type) {

        case "ADD_ALTERNATIVE":
            console.log("reducer add alternative called");

            // go through all the current criteria in the state and build
            // a criteriaScores Object to hold this alternative's scores for
            // the criteria
            let criteriaScores =  {};
            state.criteria.forEach(function(criterion) {
                criteriaScores[criterion.id] = -1;
            }, this);


            return Object.assign({}, state, {
                alternatives: [{
                    name: action.name,
                    description: action.description,
                    id: getAlternativeId(state.alternatives),
                    criteriaScores: criteriaScores // holds the scores
                }, ...state.alternatives]
            });
        case "DELETE_ALTERNATIVE":
            return Object.assign({}, state, {
                alternatives: state.alternatives.filter((item) => {
                    return item.id !== action.id;
                })
            });
        case "UPDATE_ALTERNATIVE_DESCRIPTION":
            changingObject = Object.assign({}, state.alternatives.filter((item) => {
                return item.id === action.id;
            })[0], { description: action.description });
            newState = Object.assign({}, state, {
                alternatives: state.alternatives.filter((item) => {
                    return item.id !== action.id;
                }).concat(changingObject)
            });
            return newState;
        case "UPDATE_ALTERNATIVE_NAME":
            changingObject = Object.assign({}, state.alternatives.filter((item) => {
                return item.id === action.id;
            })[0], { name: action.name });
            newState = Object.assign({}, state, {
                alternatives: state.alternatives.filter((item) => {
                    return item.id !== action.id;
                }).concat(changingObject)
            });
            return newState;

        case "ADD_CRITERION":
            let newCriteriaObject = {
                name: action.name,
                description: action.description,
                weight: action.weight,
                id: getCriteriaId(state.criteria)
            }

            return Object.assign({}, state, {
                criteria: [newCriteriaObject, ...state.criteria]
            });

        case "ADD_CRITERION_TO_ALTERNATIVES":
            // add a entry for this criterion in all the alternatives' "scoring" lists
            // set the default score to -1

            // for every alternative
            let updatedAlternatives = Object.assign({},
                action.alternatives,
                action.alternatives.map((alternative) => {  // iterate through each alternative
                    // find all the criteria that are missing
                    let missingCriteria = state.criteria.filter((criterion) => {
                        if (!alternative.criteriaScores.hasOwnProperty(criterion.id)) {
                            return true;
                        }
                    });

                    // only want the id of the missing criteria, 
                    // and want them directly in an object
                    let missingCriteriaScoreObject = {};
                    for (var i = 0; i < missingCriteria.length; i++) {
                        missingCriteriaScoreObject[missingCriteria[i].id] = -1;
                    }


                    // create the updated alternative
                    let updatedAlternative = Object.assign({},
                        alternative,
                        {
                            // keep the previous information in the criteria score
                            // object and add the new info to it
                            criteriaScores: Object.assign({},
                                alternative.criteriaScores,
                                missingCriteriaScoreObject)
                        });

                    // return the now updated alternative
                    return updatedAlternative;
                }));

            // build the new alternatives array
            let newAlternativesArray = Object.
                keys(updatedAlternatives).map(function (key) {
                    return updatedAlternatives[key]
                });

            // build the new state and return it
            newState = Object.assign({}, state, { alternatives: newAlternativesArray });
            return newState;

        case "DELETE_CRITERION":
            //TODO: remove all entries for this criterion from all the alternatives' "scoring" lists
            // set the default score to 0
            return Object.assign({}, state, {
                criteria: state.criteria.filter((item) => {
                    return item.id !== action.id;
                })
            });
        case "UPDATE_CRITERION_NAME":
            changingObject = Object.assign({}, state.criteria.filter((item) => {
                return item.id === action.id;
            })[0], { name: action.name });
            newState = Object.assign({}, state, {
                criteria: state.criteria.filter((item) => {
                    return item.id !== action.id;
                }).concat(changingObject)
            });
            return newState;

        case "UPDATE_CRITERION_WEIGHT":
            // create a new object from the old object by using filter to return and
            // array of matching objects
            // there is only one match so grab the first item in the returned array
            // and change the desired property in that new object
            changingObject = Object.assign({}, state.criteria.filter((item) => {
                return item.id === action.id;
            })[0], { weight: action.weight });

            // create a new object that has the old object filtered out
            // and the new object concated to the same array array
            newState = Object.assign({}, state, {
                criteria: state.criteria.filter((item) => {
                    return item.id !== action.id;
                }).concat(changingObject)
            });

            return newState;
        case "UPDATE_CRITERION_DESCRIPTION":
            changingObject = Object.assign({}, state.criteria.filter((item) => {
                return item.id === action.id;
            })[0], { description: action.description });
            newState = Object.assign({}, state, {
                criteria: state.criteria.filter((item) => {
                    return item.id !== action.id;
                }).concat(changingObject)
            });
            return newState;

        case "UPDATE_CRITERION_NAME":
            changingObject = Object.assign({}, state.criteria.filter((item) => {
                return item.id === action.id;
            })[0], { name: action.name });
            newState = Object.assign({}, state, {
                criteria: state.criteria.filter((item) => {
                    return item.id !== action.id;
                }).concat(changingObject)
            });
            return newState;


        default:
            return state;
    }


}

export default reducer;
*/