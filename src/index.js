import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from "react-redux";

import App from './components/App';
import { rootReducer } from './reducers';
import './styles/main.scss';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));




class CanvasExample extends React.Component {
    constructor(props) {
      super(props);
      this.canvas = React.createRef();
      this.time = 0;
    }
    draw() {
      const ctx = this.canvas.current.getContext("2d");
      const { size, rectanglesCount } = this.props;
      ctx.clearRect(0, 0, size, size);
      ctx.fillStyle = "rgba(0, 150, 0, 0.2)";
      ctx.save();
      ctx.translate(size / 2, size / 2);
      const maxRectSize = size / Math.sqrt(2);
      for (let i = 0; i < rectanglesCount; ++i) {
        const ratio = maxRectSize * (i + 1.0);
        const rectSize = ratio / rectanglesCount;
        const angle = ratio;
        ctx.save();
        ctx.rotate(angle + this.time);
        ctx.translate(-rectSize / 2, -rectSize / 2);
        ctx.fillRect(0, 0, rectSize, rectSize);
        ctx.restore();
      }
      ctx.restore();
    }
    update = () => {
      this.time += 0.02;
      this.draw();
      this.animationRequestId = window.requestAnimationFrame(this.update);
    };
    componentDidMount() {
      this.animationRequestId = window.requestAnimationFrame(this.update);
    }
    componentDidUpdate() {}
    componentWillUnmount() {
      window.cancelAnimationFrame(this.animationRequestId);
    }
    render() {
      const { size } = this.props;
      return (
        <canvas
          ref={this.canvas}
          style={{ border: "1px solid gray" }}
          width={size}
          height={size}
        />
      );
    }
  }

  class App2 extends React.Component {
    state = {
      rectanglesCount: 10
    };
    render() {
      return (
        <div className="App">
          <h1>Hello Canvas</h1>
          <button
            onClick={() =>
              this.setState((prevState) => ({
                rectanglesCount: prevState.rectanglesCount + 1
              }))
            }
          >
            +1
          </button>
          <button
            onClick={() =>
              this.setState((prevState) => ({
                rectanglesCount: prevState.rectanglesCount - 1
              }))
            }
          >
            -1
          </button>
          <br />
          <CanvasExample
            size={300}
            rectanglesCount={this.state.rectanglesCount}
          />
        </div>
      );
    }
  }




function KalkUsestate () {
let [n, setN] = useState(7)
let m = 1;
function dodawanie(){
setN(n+5)
}
return (<>
  <h2>{n}</h2>
  <button onClick={dodawanie}>Dodaj</button>


</>
)


}



ReactDOM.render(
<>
<Provider store={store}>
<App /><App2/>
</Provider>
</>,
document.getElementById("root"));