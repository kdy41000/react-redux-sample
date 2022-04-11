import { FETCH_COMMENTS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCESS } from "./type";

export const fetchCommentRequest = () => {
    return {
        type: FETCH_COMMENTS_REQUEST
    }
}

export const fetchCommentSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchCommentFail = (error) => {
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: error
    }
}

export const fetchComments = () => {
    return (dispatch) => {
        dispatch(fetchCommentRequest())
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(comments => dispatch(fetchCommentSuccess(comments)))
        .catch(error => dispatch(fetchCommentFail(error)))
    }
}