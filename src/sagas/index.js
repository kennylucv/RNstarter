import { call, takeLatest, put, all, select } from "redux-saga/effects";

import { types as actionsTypes, actions } from "../actions/actions";
import * as hackerNewsServices from "../api/services";

function* testSaga() {
  //  fetches all the cars from the backend
  let testId = 0;
  try {
    const resp = yield call(hackerNewsServices.getTopStories);
    console.log("testService Res", resp["0"], resp.length);
    const itemResp = yield call(hackerNewsServices.getItem, resp["0"]);
    console.log("item = ", itemResp);
  } catch (e) {
    console.log("error", e);
  }
}

export default function* root() {
  yield takeLatest(actionsTypes.TEST_ACTION, testSaga);
}
