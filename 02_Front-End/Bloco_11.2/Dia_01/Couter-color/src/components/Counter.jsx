import React from 'react';
class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.getButtonColor = this.getButtonColor.bind(this);
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'black' : 'green'
  }
  render() {
    const { numeroDeCliques } = this.state
    return (
      <>
        <button 
          onClick={this.handleClick}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques) }}
        >
          Magia Negra!
        </button>
        <span> {numeroDeCliques || ''}</span>
      </>
    )
  }
}

export default Counter;