import Update from 'react/lib/update';
import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';
import alternatives from './alternatives';
import criteria from './criteria';
import scores from './scores';
import normalizedScores from './normalizedScores';
import weightedScores from './weightedScores';
import graphs from './graphs';

const reducer =  combineReducers({
        criteria,
        alternatives,
        scores,
        normalizedScores,
        weightedScores,
        graphs
});
export default reducer;
