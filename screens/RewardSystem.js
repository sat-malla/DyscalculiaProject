import { createGlobalState } from "react-hooks-global-state";

const initialState = { starCount: 0, game1Fruit: '', registered: false, userId: '' };
const { useGlobalState } = createGlobalState(initialState);

export { initialState, useGlobalState };
