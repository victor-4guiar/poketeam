import logo from './logo.svg';
import './index.css';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
		<Team 
		names={["Raichu", "Gyarados", "Dragonite", "Charizard", "Vinepulme", "Butterfree"]} 
		/>
    </div>
  );
}

export default App;
