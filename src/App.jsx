import Card from "./components/Card"
import DriverCard from "./components/DriverCard"
import TeamCard from "./components/TeamCard"
import TrackCard from "./components/TrackCard"

function App() {

  // const listDrivers = [
  //   { name: "Max Verstappen", team: "Red Bull Racing" },
  //   { name: "Sergio Pérez", team: "Red Bull Racing" },
  //   { name: "Lewis Hamilton", team: "Mercedes" },
  //   { name: "George Russell", team: "Mercedes" },
  //   { name: "Charles Leclerc", team: "Ferrari" },
  //   { name: "Carlos Sainz", team: "Ferrari" }
  // ];
  // const listCars = [
  //   { name: "Red Bull Racing RB18", price: 500000},
  //   { name: "Mercedes W13", price: 600000},
  //   { name: "Ferrari F1-75", price: 700000},
  //   { name: "McLaren MCL36", price: 550000},
  //   { name: "Alpine A522", price: 450000},
  //   { name: "Alfa Romeo C42",price: 400000}
  // ];
  // const listCircuits = [
  //   { name: "Circuit de Monaco", country: "Monaco" },
  //   { name: "Circuit de Barcelona-Catalunya", country: "Spain" },
  //   { name: "Circuit de Silverstone", country: "United Kingdom" },
  //   { name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  //   { name: "Circuit de Suzuka", country: "Japan" },
  //   { name: "Circuit de Monza", country: "Italy" }
  // ];

  return (
    <>
      <div className="header-test">
        <Card />
        <DriverCard />
      </div>

    </>
  )
}

export default App
