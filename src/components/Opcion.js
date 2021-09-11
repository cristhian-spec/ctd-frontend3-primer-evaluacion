import React from "react";

class Opcion extends React.Component {
  render() {
    return (
      <div>
        {this.props.historia.map((caso) => (
            <button key={`caso_${caso.id}`} onClick={() => {
                this.props.onSelectOption(caso.id)
            }}>
            {caso.opciones.a}
          </button>
        ))}
        {this.props.historia.map((caso) => (
            <button key={`caso_${caso.id}`} onClick={() => {
                this.props.onSelectOption(caso.id)
            }}>
            {caso.opciones.b}
          </button>
        ))}
      </div>
    );
  }
}

export default Opcion;
