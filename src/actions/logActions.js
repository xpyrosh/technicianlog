import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

// export const getLogs = () => {
// 	// Need thunk for async calls
// 	return async (dispatch) => {
// 		setLoading();

// 		const res = await fetch("/logs");
// 		const data = await res.json();

// 		dispatch({
// 			type: GET_LOGS,
// 			payload: data,
// 		});
// 	};
// };

// Refactoring above
// Get logs from the server
export const getLogs = () => async (dispatch) => {
	// Need thunk for async calls

	try {
		setLoading();

		const res = await fetch("/logs");
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: LOGS_ERROR,
			payload: error.response.data,
		});
	}
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
