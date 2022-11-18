import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Image from './Components/Image/Image';
import Task1 from './Components/Tasks/Task1';
import Task2 from './Components/Tasks/Task2';

function App() {
  return (
    <div className="conteiner">
      <Header/>
      <Content/>
      <Image/>
      <Task1/>
      <Task2/>
    </div>
  );
}

export default App;
