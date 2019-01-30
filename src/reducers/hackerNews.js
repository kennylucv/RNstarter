import { types as actionTypes } from "../actions/hackerNews";

const INITAL_STATE = {
  story_ids: [], //holds all the story ids
  topStoriesLoading: false,
  storiesLoaded: 0,
  loadedStories: [], //holds all the story data
  loadingMoreStories: false,
  storyType: 0 // 0=TOP, 1=NEW, 2=BEST
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TOP_STORIES:
      return {
        ...state,
        story_ids: INITAL_STATE.topStoriesLoading,
        loadedStories: INITAL_STATE.loadedStories,
        storiesLoaded: INITAL_STATE.storiesLoaded,
        topStoriesLoading: true,
        loadingMoreStories: true
      };
    case actionTypes.UPDATE_STORIES:
      return { ...state, story_ids: action.payload };
    case actionTypes.LOAD_50_ITEMS:
      return { ...state, loadingMoreStories: true };
    case actionTypes.UPDATE_STORY_ITEMS:
      return {
        ...state,
        loadedStories: action.payload,
        loadingMoreStories: false,
        topStoriesLoading: false,
        storiesLoaded: action.payload.length
      };
    case actionTypes.CHANGE_STORY_TYPE:
      return { ...state, storyType: action.payload };
    default:
      return state;
  }
};
