import { useState } from "react";
import "./App.css";

import Button from "./components/ui/Button/button";
import Input from "./components/ui/Input/input";
import Card from "./components/ui/Card/card";
import Modal from "./components/ui/Modal/modal";
import DatePicker from "./components/ui/DatePicker/datePicker";
import Navbar from "./components/Dashboard/Navbar/Navbar";
import Sidebar from "./components/Dashboard/Sidebar/Siderbar";


import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import StatsCard from "./components/Dashboard/StatsCard/Statscard";

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
      <Navbar onLogout={handlerLogout} title="Dashboard" userName="" />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h2 className="text-xl font-semibold mb-4">Resumen Financiero</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <StatsCard
              title="Total Gastado"
              value="$1,250"
              icon={<TrendingDownIcon />}
              change="-5%"
              changeColor="negative"
            />
            <StatsCard
              title="Ingresos"
              value="$2,000"
              icon={<TrendingUpIcon />}
              change="+10%"
              changeColor="positive"
            />
            <StatsCard
              title="Balance"
              value="$750"
              icon={<TrendingUpIcon />}
              change="+3%"
              changeColor="positive"
            />
          </div>

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
        </main>
      </div>
    </>
  );
}

export default App;
