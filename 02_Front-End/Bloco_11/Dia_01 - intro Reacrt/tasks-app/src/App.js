import { Component } from 'react';
import './App.css';



const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const topMangas = ['Berserk', 'JoJo no Kimyou na Bouken Part 7: Steel Ball Run',
  'One Piece', 'Vagabond', 'Monster', 'Fullmetal Alchemist', 'Oyasumi Punpun'];

class App extends Component {
  render() {
    return (
      <ul>{ topMangas.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}

export default App;
