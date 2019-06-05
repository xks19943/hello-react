import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes';


export const fetchWeatherStarted = () => ({
  type: FETCH_STARTED
});


export const fetchWeatherSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
});


export const fetchWeatherFailure = (error) => ({
  type: FETCH_FAILURE,
  error
});


let nextReqId = 0;

//异步 action构造函数 fetchWeather
//异步 action 构造函数的模式就是函数体内返回一个新的函数，这
// 个新的函数可以有两个参数 dispatch 和 getState
export const fetchWeather = (cityCode)=>{
  return (dispatch,getState) => {
    console.log(getState(),'getState');


    const seqId = ++ nextReqId;
    console.log(seqId,nextReqId,'---');

    const dispatchIfValid = (action)=>{
      if (seqId === nextReqId){
        return dispatch(action);
      }
    };

    const apiUrl = `/data/cityinfo/${cityCode}.html`;
    console.log(cityCode,'cityCode');
    console.log(apiUrl,'apiUrl');
    dispatchIfValid(fetchWeatherStarted());
    return fetch(apiUrl).then((response)=>{
      if (response.status !== 200){
        throw new Error ('Fail to get response with status' + response.status);
      }
      response.json().then((responseJson)=>{
        console.log(responseJson,'responseJson');
        dispatchIfValid(fetchWeatherSuccess(responseJson.weatherinfo));
      }).catch((error)=>{
        throw new Error ('Invalid json response : '  + error);
      })
    }).catch((error)=>{
      dispatchIfValid(fetchWeatherFailure(error));
    })
  }
};