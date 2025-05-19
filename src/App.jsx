import Card from "./components/Card"
import List from "./components/List"
import DriverCard from "./components/DriverCard"
import CarCard from "./components/CarCard"
import TrackCard from "./components/TrackCard"

function App() {

  const listDrivers = [
    { name: "Max Verstappen", team: "Red Bull Racing" },
    { name: "Sergio Pérez", team: "Red Bull Racing" },
    { name: "Charles Leclerc", team: "Ferrari" },
    { name: "Carlos Sainz", team: "Ferrari" }
  ];
  const listCars = [
    { name: "Red Bull Racing RB18", price: 500000},
    { name: "Ferrari F1-75", price: 700000},
    { name: "McLaren MCL36", price: 550000},
    { name: "Alpine A522", price: 450000},
  ];
  const listCircuits = [
    { name: "Circuit de Monaco", country: "Monaco" },
    { name: "Circuit de Barcelona-Catalunya", country: "Spain" },
    { name: "Circuit de Silverstone", country: "United Kingdom" },
    { name: "Circuit de Suzuka", country: "Japan" },
  ];

  return (
    <>
      <h1>F1 Driver Cards</h1>
      <List items={listDrivers} CardComponent={DriverCard} />

      <h1>F1 Car Cards</h1>
      <List items={listCars} CardComponent={CarCard} />
      <h1>F1 Track Cards</h1>
      <List items={listCircuits} CardComponent={TrackCard} />
    </>
  )
}

export default App
