import store from "./store";
import * as actions from "./actionTypes";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("bug1sd"));
store.dispatch(bugAdded("bug23d"));
store.dispatch(bugAdded("bug33d"));
store.dispatch(bugAdded("bug4"));

console.log(actions.BUG_ADDED, store.getState());

store.dispatch(bugRemoved(1));

console.log(actions.BUG_REMOVED, store.getState());

store.dispatch(bugResolved(2));

console.log(actions.BUG_RESOLVED, store.getState());

unsubscribe();

console.log("store", store.getState());
