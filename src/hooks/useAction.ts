import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UserActionCreators  from "../store/action-creators/userActionCreators"
import * as TodoActionCreators  from "../store/action-creators/todoActionCreators"

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(UserActionCreators, dispatch)
}

export const useTodoActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(TodoActionCreators, dispatch)
}
