import React, { useState, useEffect } from "react";
import axios from "axios";

const CronJob = () => {
  const [cronJobStatus, setCronJobStatus] = useState(null);

  useEffect(() => {
    const fetchCronJobStatus = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/irrigation-log/status-cron",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCronJobStatus(response.data.status);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCronJobStatus();
  }, []);

  const startCronJob = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/irrigation-log/start-cron",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      setCronJobStatus("running");
    } catch (error) {
      console.error(error);
    }
  };

  const stopCronJob = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/irrigation-log/stop-cron",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      setCronJobStatus("stopped");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <section className="flex flex-col items-center py-8 md:py-10 mb-10">
        <h1 className="text-3xl font-bold mb-4">Cron Job</h1>
        <div className="flex gap-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={startCronJob}
          >
            Start
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={stopCronJob}
          >
            Stop
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2 text-center">Status</h2>
          <p className="text-white-600">
            The cron job is currently{" "}
            <span className="font-bold">{cronJobStatus}</span>. You can click
            the button above to start it.
          </p>
        </div>
      </section>
    </>
  );
};

export default CronJob;
