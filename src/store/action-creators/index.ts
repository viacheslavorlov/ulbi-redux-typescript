import * as UserActionCreator from "./userActionCreators";
import * as TodoActionCreator from "./todoActionCreators";

export default {
    ...UserActionCreator,
    ...TodoActionCreator
}