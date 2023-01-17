import './App.css';
import About from './Components/About__project/About';
import Address from './Components/Address/Address';
import Direction from './Components/Direction/Direction';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Project from './Components/Project-2/Project';
import Registration from './Components/Registration/Registration';
import Results from './Components/Results/Results';
import Tasks from './Components/Tasks/Tasks';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Direction/>
      <Project/>
      <Tasks/>
      <Registration/>
      <Results/>
      <Address/>
      <Footer/>
    </div>
  );
}

export default App;
