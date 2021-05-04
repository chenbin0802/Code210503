import { take, call, put, select, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FETCH_RESTAURNATS, FETCH_RESTAURNATS_SUCCESS, LOADING, FETCH_RESTAURNATS_FAILED } from "./constants";

export function* fetch(data) {
  if(!data){
    return
  }
  try {
    yield put({ type: LOADING });
    const result = yield call(() => {
      return axios({
        method: "GET",
        url: `https://uk.api.just-eat.io/restaurants/bypostcode/${data.payload}`,
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.data;
        })
        .catch(error => {
          console.log(error);
        });
    });

    yield put({ type: FETCH_RESTAURNATS_SUCCESS, result });
  } catch (err) {
    yield put({ type: FETCH_RESTAURNATS_FAILED, err });
    console.log(err);
  }
}

export default function* loadRestaurantsSaga() {
  yield takeLatest(FETCH_RESTAURNATS, fetch);
}
