import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Image from './Components/Image/Image';
import Task1 from './Components/Tasks/Task1';
import Task2 from './Components/Tasks/Task2';
import Card from './Components/Cards/Card';
import CardData from './Components/Cards/CardData';

function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Image/>
      <Task1/>
      <Task2/>
      <div className='Cards container'>
        <Card details = {CardData} />
      </div>
    </div>
  );
}

export default App;
