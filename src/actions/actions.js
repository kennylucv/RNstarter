export const types = {
  TEST_ACTION: "TEST/ACTION"
};

export const actions = {
  testAction: param => ({ type: types.TEST_ACTION, payload: param })
};
