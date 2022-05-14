import "./App.css";
import Cart from "./Cart";

//Step 2: Create an Array of object containing data
const items = [
  { id: 1, name: "Sizzlers", price: 10.18, qty: 2 },
  { id: 2, name: "Pizza", price: 11.18, qty: 3 },
  { id: 3, name: "Burger", price: 14.17, qty: 4 },
];

function App() {
  return (
    <div className="App">
      {/* Step 4: Data passed through props */}
      <Cart initialItems={items} />
    </div>
  );
}

export default App;
