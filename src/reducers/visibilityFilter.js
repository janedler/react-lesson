/**
 * Created by janedler on 2018/7/31.
 */

const visibilityFilter = (state = 'SHOW_ALL' , action) => {

    console.log("reducer>>visibilityFilter"+JSON.stringify(state)+ "  "+JSON.stringify(action))

    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter

        default:
            return state
    }
}

export default visibilityFilter
