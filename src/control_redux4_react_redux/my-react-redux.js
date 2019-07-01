import React,{Component} from 'react';
import PropTypes from 'prop-types';

const doNothing = () => ({});
function connect(mapStateToProps=doNothing, mapDispatchToProps=doNothing) {
  return function (WrapperComponent) {
    return class ConnectComponent extends Component {

      static contextTypes = {
        store: PropTypes.object
      };

      constructor(props,context){
        super(props,context);
        this.onChange = this.onChange.bind(this);
      }

      componentDidMount() {
        this.context.store.subscribe(this.onChange);
      }

      componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
      }

      onChange() {
        this.setState({});
      }

      render() {
        const store = this.context.store;
        const newProps = {
          ...this.props,
          ...mapStateToProps(store.getState(), this.props),
          ...mapDispatchToProps(store.dispatch, this.props)
        };

        return <WrapperComponent {...newProps} />;
      }
    }
  }
}

class Provider extends Component{
  //使用context的时候父类必须定义 childContextTypes的类型和 getChildContext 方法
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext(){
    return {
      store: this.props.store
    }
  }

  render(){
    return this.props.children
  }
}


export {Provider,connect}




