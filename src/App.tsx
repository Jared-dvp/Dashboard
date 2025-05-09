import { useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/button";
import Input from "./components/ui/Input/input";
import Card from "./components/ui/Card/card";
import Modal from "./components/ui/Modal/modal";
  import DatePicker from "./components/ui/DatePicker/datePicker";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleModalClose = () => setIsModalOpen(false);

  const handleSave = () => {
    console.log("Gasto guardado:", inputValue, "Fecha:", selectedDate);
    setInputValue(""); // Limpia el input
    setSelectedDate(null); // Limpia la fecha
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Card title="Gestión de Gastos">
        <h1>Gestión de Gastos</h1>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingresa un gasto"
        />
        <DatePicker
          label="Selecciona una fecha"
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
        />
        <Button onClick={handleClick}>Guardar Gasto</Button>
      </Card>

      <Modal
        title="Confirmar Gasto"
        open={isModalOpen}
        onClose={handleModalClose}
        actions={
          <>
            <Button onClick={handleSave}>Guardar</Button>
            <Button onClick={handleModalClose}>Cancelar</Button>
          </>
        }
      >
        <p>¿Deseas guardar el gasto: "{inputValue}"?</p>
        <p>Fecha seleccionada: {selectedDate?.toLocaleDateString() || "No seleccionada"}</p>
      </Modal>
    </div>
  );
}

export default App;
