import { postServerData } from '../helper/helper'
import * as Action from '../redux/result_reducer'

// 1. Redux Thunk Action to push the answer
export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}

// 2. Redux Thunk Action to update the result at a specific index
export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}


export const publishResult = async (resultData) => { 
    const { result, username } = resultData;
    

    if (result.length === 0 || !username) {
        return console.error("Couldn't publish Result: Missing result data or username");
    }

    try {
        await postServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, resultData, data => data)
        console.log("Result published successfully.")
    } catch (error) {
        console.log("Error publishing result:", error)
    }
}