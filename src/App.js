import Nav from "./components/Nav/Nav";
import './App.scss'
import Day from "./components/Day/Day";
import DiaryImage from "./components/Images/DiaryImage";

function App() {
  return (
    <div className="App">
      <Nav/>
      <DiaryImage/>
      <Day/>
    </div>
  );
}

export default App;
