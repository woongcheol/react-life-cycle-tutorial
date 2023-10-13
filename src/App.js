import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={1}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  const [number, setNumber] = useState(props.initNumber);

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
    </div>
  );
}

const classStyle = "color:red";
class ClassComp extends React.Component {
  // 1. 초기 마운트 시
  // 1-1. 클래스 생성
  constructor(props) {
    console.log("%cclass => constructor", classStyle);
    super(props);

    // state 초기화
    this.state = {
      number: props.initNumber,
    };
  }

  // 1-2. 초기 렌더링 시
  componentDidMount() {
    console.log("%cclass => componentDidMount", classStyle);
  }

  // 마운트 & 업데이트) props를 state에 동기화 시
  static getDerivedStateFromProps() {
    console.log("%cclass => getDerivedStateFromProps", classStyle);
    return null;
  }

  // 2. 업데이트 시

  // 2-1. 업데이트 및 리렌더링 전, 여부 결정 시
  shouldComponentUpdate(nextProps, nextState) {
    console.log("%cclass => shouldComponentUpdate", classStyle);

    // 특정 조건을 기반으로 리렌더링 여부 결정
    // if (nextProps.someProp === this.props.someProp) {
    //   return false;
    // }

    return true;
  }

  // 2-2. 업데이트 완료 시
  componentDidUpdate(prevProps, prevState) {
    console.log("%cclass => componentDidUpdate", classStyle);
    console.log("Previous props:", prevProps);
    console.log("Previous state:", prevState);
  }

  // 3. 언마운트 시
  componentWillUnmount() {
    console.log("%cclass => componentWillUnmount", classStyle);
    // 여기에서 정리 작업 수행
  }

  // 마운트 & 업데이트) 랜더링 시
  render() {
    console.log("%cclass => render", classStyle);
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <input
          type="button"
          value="random"
          onClick={() => {
            this.setState({ number: Math.random() });
          }}
        ></input>
      </div>
    );
  }
}

export default App;
