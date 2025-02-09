import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los componentes de Chart.js
Chartjs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Graficocard({ composition }) {
  const [data, setData] = useState({
    title: "",
    name: "",
    fullname: [],
    peso: "",
    grasa: "",
    date: "",
  });

  useEffect(() => {
    // Solo establecer datos si 'composition' no es nulo o indefinido
    if (composition && typeof composition === "object") {
      setData(composition);
    }
  }, [composition]);

  // Desestructurar con valores predeterminados
  const { title = "", name = "", peso = "", grasa = "", date = "" } = data;

  // Verificar que los datos sean arreglos de números
  const pesoData =  peso  ;
  const grasaData = grasa ;

  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  // Configuración de los datos para el gráfico
  const miData = {
    labels: meses,
    datasets: [
      {
        label: "Peso",
        data: pesoData,
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132)",
        tension: 0.5,
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
      {
        label: "Grasa",
        data: grasaData,
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  // Configuración de las opciones del gráfico
  const miOptions = {
    scales: {
      y: {
        min:  0, // Valor mínimo con manejo de datos vacíos
        max:  50, // Valor máximo con manejo de datos vacíos
      },
      x: {
        ticks: { color: "white" },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="bg-black text-white rounded-md border-2 border-green-800 py-4 px-40">
      <header className="flex justify-between">
        <h3 className="text-lg font-bold">Tipo de rutina: {title}</h3>
      </header>
      <div className="flex flex-col items-center gap-y-50">
        <h4 className="text-base">{name}</h4>
        <Line data={miData} options={miOptions} />
        {date && <p>{dayjs(date).format("DD/MM/YYYY")}</p>}
      </div>
    </div>
  );
}

export default Graficocard;

