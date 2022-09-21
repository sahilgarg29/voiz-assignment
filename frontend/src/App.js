import Select from "./Select";
import "./styles.css";

const options = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "yellow", label: "Yellow" },
  { value: "orange", label: "Orange" },
  { value: "black", label: "Black" },
  { value: "white", label: "White" }
];

export default function App() {
  return (
    <div className="App">
      <Select options={options} />
    </div>
  );
}
