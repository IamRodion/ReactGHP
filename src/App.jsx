import { useState, useEffect } from "react";
import Title from "./components/Title";
import Description from "./components/Description";
import MultiProgressBar from "./components/MultiProgressBar";
import ListGroup from "./components/ListGroup";

function App() {
  const [progresses, setProgresses] = useState([]);
  const [workerNames, setWorkerNames] = useState({});
  const [workerCounts, setWorkerCounts] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const [timeEntryResponse, workerResponse] = await Promise.all([
          fetch("https://iamrodion.pythonanywhere.com/api/TimeEntry/"),
          fetch("https://iamrodion.pythonanywhere.com/api/Worker/"),
        ]);

        const timeEntries = await timeEntryResponse.json();
        const workers = await workerResponse.json();

        const counts = timeEntries.reduce((acc, entry) => {
          acc[entry.worker] = (acc[entry.worker] || 0) + 1;
          return acc;
        }, {});

        const totalEntries = timeEntries.length;
        const colors = ["success", "info", "warning", "danger", "primary"];
        const calculatedProgresses = Object.keys(counts).map(
          (workerId, index) => ({
            color: colors[index % colors.length],
            progress: ((counts[workerId] / totalEntries) * 100).toFixed(1),
            workerId: parseInt(workerId),
          })
        );

        const workerNamesMap = workers.reduce((acc, worker) => {
          acc[worker.id] = `${worker.firstname} ${worker.lastname}`;
          return acc;
        }, {});

        setProgresses(calculatedProgresses);
        setWorkerNames(workerNamesMap);
        setWorkerCounts(counts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const workerList = progresses.map((progressItem) => ({
    name: workerNames[progressItem.workerId],
    color: progressItem.color,
    count: workerCounts[progressItem.workerId],
  }));

  return (
    <div>
      <Title text="ReactGHP" />
      <Description text="Esta es una aplicación creada para desplegar en Github Pages una app de React que usa Bootstrap y hacer pruebas en ella." />

      <Title text="TimeFly" level={2} />
      <Description text="Estos son los registros de los usuarios alojados en la aplicación Timefly y sus porcentajes por usuario." />
      <ListGroup workers={workerList} />
      <MultiProgressBar progresses={progresses} />
    </div>
  );
}

export default App;
