export const types = {
  LOAD_TOP_STORIES: "LOAD_TOP_STORIES",
  UPDATE_STORIES: "UPDATE_STORIES",
  LOAD_50_ITEMS: "LOAD_50_ITEMS",
  UPDATE_STORY_ITEMS: "UPDATE_STORY_ITEMS",
  CHANGE_STORY_TYPE: "CHANGE_STORY_TYPE"
};

// all of the hackerNews actions that can be dispatched

export const actions = {
  changeStoryType: type => ({ type: types.CHANGE_STORY_TYPE, payload: type }),
  loadTopStories: () => ({ type: types.LOAD_TOP_STORIES }),
  updateStories: stories => ({ type: types.UPDATE_STORIES, payload: stories }),
  loadFiftyStoryItems: () => ({ type: types.LOAD_50_ITEMS }),
  updateStoryItems: storyObjs => ({
    type: types.UPDATE_STORY_ITEMS,
    payload: storyObjs
  })
};
