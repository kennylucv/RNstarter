import { call, takeLatest, put, all, select } from "redux-saga/effects";

import { types as actionsTypes, actions } from "../actions/actions";
import { testService } from "../api/services";

function* testSaga() {
  //  fetches all the cars from the backend
  let testId = 0;
  try {
    const resp = yield call(testService, testId);
    console.log("testService Res", resp);
  } catch (e) {
    console.log("error", e);
  }
}

export default function* root() {
  yield takeLatest(actionsTypes.TEST_ACTION, testSaga);
}
