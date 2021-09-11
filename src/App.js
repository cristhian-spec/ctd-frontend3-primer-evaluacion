import React from "react";
import Historia from "./components/Historia";
import Opcion from "./components/Opcion";
import casos from "./components/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      historiaList: [],
      currentHistoria: null,
    };
  }

  componentDidMount() {
    this.setState({ historiaList: casos });
  }

  handlerSelectOption = (id) => {
    const currentHistoria = this.state.historiaList.filter(
      (caso) => caso.id === id
    );
    this.setState({ currentHistoria: currentHistoria[0] });
  };

  render() {
    console.log("historia", this.state.currentHistoria);
    return (
      <div className="App">
        <Historia caso={this.state.currentHistoria} />
        <Opcion
          historia={this.state.historiaList}
          onSelectOption={this.handlerSelectOption}
        />
      </div>
    );
  }
}

export default App;
