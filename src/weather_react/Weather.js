import React,{Component} from 'react';

class Weather extends Component{
  constructor(props){
    super(props);
    this.state = {
      weather: null
    }
  }

  componentDidMount() {
    /*
      fetch认为只要服务器返回一个合法的 HTTP 响应就算成功，
      就会调用 then提供的回调函数，即使这个HTTP响应的状态码是表示出错了的400或者500。
      正 因为 fetch 的这个特点，所以我们在 then 中，要做的第一件事就是检查传人参数 response
        的 status 字段，只有 status 是代表成功的 200 的时候才继续，否则以错误处理 。
    当 response.status 为 200 时，也不能直接读取 response 中的内容，
    因为 fetch 在接收 到 HTTP 响应的报头部分就会调用 then，不会等到整个 HTTP 响应完成 。
    所以这时候也 不保准能读到整个 HTTP 报文的 JSON 格式数据 。
    所以， response.body 函数执行并不是 返回 JSON 内容，而是返回 一个新的 Promise，
    又要接着用 then 和 catch来处理成功和失 败的情况。
    如果返回 HTTP 报文内容是一个完整的 JSON格式数据就会成功，如果返回
      结果不是一个 JSON格式，比如是一堆 HTML代码，那就会失败
      */
    const api = `/data/cityinfo/101280101.html`;
    fetch(api).then((response)=>{
      console.log(response,'response');
      if (response.status !== 200){
        throw new Error('Fail to get response with status' + response.status);
      }
      response.json().then((responseJson)=>{
        console.log(responseJson,'responseJson');
        this.setState({
          weather: responseJson ? responseJson.weatherinfo || null : null
        });
      }).catch((error)=>{
        this.setState({weather: null});
      })
    }).catch((error)=>{

    });
  }

  render(){
    if (!this.state.weather){
      return(
        <div>暂无数据</div>
      )
    }
    const {city,temp1,temp2,weather} = this.state.weather;
    return(
      <div>
        {city} {temp1}到{temp2} {weather}
      </div>
    )
  }
}


export default Weather;