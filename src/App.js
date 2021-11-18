import './App.css';
import Header from './components/Header';
import PlanillaCard from './components/PlanillaCard';
import PropuestasList from './components/PropuestasList';
import AllIntegrantesCards from './integrantes/AllIntegrantesCards';

const App = () => {

  return (
    <div className="App">
      <Header />
      <PlanillaCard />
      <AllIntegrantesCards />
      <PropuestasList />
    </div>
  );
}

export default App;
