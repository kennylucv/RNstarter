import { call, takeLatest, put, all, select } from "redux-saga/effects";

import { types, actions } from "../actions/hackerNews";
import * as hackerNewsServices from "../api/services";
import { STORY_TYPES } from "../utils/enums";
import { BUFFER_VALUE } from "../config/config";

function* loadTopStories() {
  //  fetches the top/new/best stories from hackerNews

  const { storyType } = yield select(state => state.data);

  try {
    let stories;
    if (storyType === STORY_TYPES.NEW) {
      stories = yield call(hackerNewsServices.getNewStories);
    } else if (storyType === STORY_TYPES.BEST) {
      stories = yield call(hackerNewsServices.getBestStories);
    } else {
      stories = yield call(hackerNewsServices.getTopStories);
    }

    if (stories) {
      // if stories exist, it will store the ids and dispatch action to load some items
      yield put(actions.updateStories(stories));
      yield put(actions.loadFiftyStoryItems());
    }
  } catch (e) {
    console.log("error", e);
  }
}

function* fetchNextFiftyItems() {
  const { storiesLoaded, story_ids, loadedStories } = yield select(
    state => state.data
  );

  //create a new array from the existing loadedstories
  const newArray = loadedStories.map(e => {
    return e;
  });

  // tries to setup based on the buffer size (set in cofig) the max index of stories to load,
  // if smaller than the number of story_ids, then sets to the length of story_ids
  let maxIndex = storiesLoaded + BUFFER_VALUE;

  if (maxIndex > story_ids.length) {
    maxIndex = story_ids.length;
  }

  // for each loaded story_id in the range of the current stories loaded to the max buffer,
  // make the api call for the story data and push it to the new array to be stored.
  for (let i = storiesLoaded; i < maxIndex; i++) {
    const id = story_ids[`${i}`];
    try {
      const storyItem = yield call(fetchItem, id);
      if (storyItem) {
        newArray.push(storyItem);
      }
    } catch (e) {
      console.log("error", e);
    }
  }
  yield put(actions.updateStoryItems(newArray));
}

function* fetchItem(id) {
  try {
    const storyItem = yield call(hackerNewsServices.getItem, id);
    return storyItem;
  } catch (e) {
    console.log("error", e);
  }
}

function* changeStoryType() {
  try {
    yield put(actions.loadTopStories());
  } catch (e) {
    console.log("error", e);
  }
}

export default function* root() {
  yield takeLatest(types.LOAD_TOP_STORIES, loadTopStories);
  yield takeLatest(types.LOAD_50_ITEMS, fetchNextFiftyItems);
  yield takeLatest(types.CHANGE_STORY_TYPE, changeStoryType);
}
