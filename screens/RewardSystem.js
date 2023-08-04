import { createGlobalState } from "react-hooks-global-state";

const initialState = { starCount: 0 };
const { useGlobalState } = createGlobalState(initialState);

export { initialState, useGlobalState };
