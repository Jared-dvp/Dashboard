import { useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/button";
import Input from "./components/ui/Input/input";
import Card from "./components/ui/Card/card";
import Modal from "./components/ui/Modal/modal";
import DatePicker from "./components/ui/DatePicker/datePicker";
import Navbar from "./components/Dashboard/Navbar/Navbar";
import Sidebar from "./components/Dashboard/Sidebar/Siderbar";
import StatsCard from "./components/Dashboard/StatsCard/Statscard";
import ProgressChart from "./components/Dashboard/ProgressChart/ProgressChart";


function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handlerLogout = () => {
    console.log("Logout clicked");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleModalClose = () => setIsModalOpen(false);

  const handleSave = () => {
    console.log("Gasto guardado:", inputValue, "Fecha:", selectedDate);
    setInputValue("");
    setSelectedDate(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar onLogout={handlerLogout} title="Dashboard" userName="Josimar" />
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <StatsCard title="Gastos del mes" value="$1,250" change="+12%" changeColor="positive" />
            <StatsCard title="Ingresos" value="$2,500" change="-5%" changeColor="negative" />
            <StatsCard title="Ahorro" value="$500" />
          </div>

          <ProgressChart
            title="Progreso del presupuesto mensual"
            progress={10}
            amount={750}
            target={1000}
            color="bg-blue-500"
          />

          <Card title="Gestión de Gastos">
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
        </div>
      </div>

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
        <p>
          Fecha seleccionada:{" "}
          {selectedDate?.toLocaleDateString() || "No seleccionada"}
        </p>
      </Modal>
    </>
  );
}

export default App;
