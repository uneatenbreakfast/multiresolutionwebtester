// come up with a better name than container state

interface ContainerState {
  isDragged: boolean;
}

export const state: ContainerState = {
  isDragged: false
};

export const getters = {
  getIsBeginDragged: (state: ContainerState) => {
    return state.isDragged;
  }
};

export const mutations = {
  setDraggedState: (state: ContainerState, dragState: boolean) => {
    state.isDragged = dragState;
  }
};

export const actions = {
  setDraggedState(commit: any, dragState: boolean) {
    const { mutations } = containerState;
    commit(mutations.setDraggedState, dragState);
  }
};

const containerState = {
  state,
  getters,
  mutations,
  actions
};
export default containerState;
