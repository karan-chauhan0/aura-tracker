import React from 'react';
import './Chart.css';
import { Bar } from 'react-chartjs-2';  // Import the Bar chart component from react-chartjs-2
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';


export const timetableFirst = [
    {
        day: "Monday",
        slots: [
            { time: "08:00 - 09:00", subject: "" },
            { time: "09:00 - 10:00", subject: "Shell Lab (A)", colSpan: 3 },
            { time: "10:00 - 11:00", subject: "" },
            { time: "11:00 - 12:00", subject: "C Class, GS5, AMB" },
            { time: "12:00 - 01:00", subject: "DCO Lab, L1 (A)", colSpan: 3 },
        ],
    },
    {
        day: "Tuesday",
        slots: [
            { time: "08:00 - 09:00", subject: "DCO, RT, GS7 (A)" },
            { time: "09:00 - 10:00", subject: "C Class, GS7, AMB" },
            { time: "10:00 - 11:00", subject: "IT Management, GS8" },
            { time: "11:00 - 12:00", subject: "" },
            { time: "12:00 - 01:00", subject: "" },
            { time: "01:00 - 02:00", subject: "FOL, SSH, GS7" },
            { time: "02:00 - 05:00", subject: "C Programming Lab, L1 (A)", colSpan: 3 },
        ],
    },
    {
        day: "Wednesday",
        slots: [
            { time: "08:00 - 09:00", subject: "" },
            { time: "09:00 - 12:00", subject: "C Programming Lab, L1 (B)", colSpan: 3 },
            { time: "08:00 - 09:00", subject: "" },
            { time: "12:00 - 01:00", subject: "FOL, SSH, GS8", colSpan: 2 },
            { time: "02:00 - 03:00", subject: "DCO Class, RT, GS8" },
            { time: "03:00 - 04:00", subject: "C Class, AMB, GS8" },
        ],
    },
    {
        day: "Thursday",
        slots: [
            { time: "08:00 - 11:00", subject: "Shell Lab, L1 (B)", colSpan: 3 },
            { time: "11:00 - 12:00", subject: "C Class, GS8, AMB" },
            { time: "12:00 - 01:00", subject: ""},
            { time: "12:00 - 01:00", subject: ""},
            { time: "02:00 - 05:00", subject: "DCO Lab, L1 (B)", colSpan: 3 },
        ],
    },
    {
        day: "Friday",
        slots: [
            { time: "08:00 - 09:00", subject: "IT Management, GS8" },
            { time: "09:00 - 10:00", subject: "FOL, SSH, GS8" },
            { time: "11:00 - 12:00", subject: ""},
            { time: "12:00 - 01:00", subject: ""},
            { time: "01:00 - 02:00", subject: ""},
            { time: "02:00 - 03:00", subject: ""},
            { time: "03:00 - 04:00", subject: ""},
            { time: "04:00 - 05:00", subject: "DCO Class, GS8, RT", colSpan: 2 },
        ],
    },
];

// Register the necessary chart components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Chart = () => {
  // Example data for students' statistics in each subject
  const studentData = {
    labels: ['C Programming', 'DCO', 'FOL', 'Shell Programming', 'IT Management'],
    datasets: [
      {
        label: 'Number of Students',
        data: [50, 40, 60, 30, 70],  // Example student count for each subject
        backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Light green bars
        borderColor: 'rgba(75, 192, 192, 1)',  // Darker green border
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Student Statistics per Subject',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Students: ${tooltipItem.raw}`,  // Customize tooltip
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,  // Ensure the Y-axis starts at 0
      }
    }
  };

  return (
    <div className="chart-container">
        <div className="chart-section">
            <h2>Student Statistics</h2>
            <Bar className='bar'
            data={studentData} 
            options={options} 
            height={400}  // Set the height of the chart
            width={400}   // Set the width of the chart
            />

        </div>
        <div className="timetable-section">
            <h2>Weekly Timetable</h2>
            <table className='dashboard--table'>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>08:00 - 09:00</th>
                        <th>09:00 - 10:00</th>
                        <th>10:00 - 11:00</th>
                        <th>11:00 - 12:00</th>
                        <th>12:00 - 01:00</th>
                        <th>01:00 - 02:00</th>
                        <th>02:00 - 03:00</th>
                        <th>03:00 - 04:00</th>
                        <th>04:00 - 05:00</th>
                    </tr>
                </thead>
                <tbody>
                    {timetableFirst.map(({ day, slots }) => (
                        <tr key={day}>
                            <td className="days">{day}</td>
                            {slots.map((slot, index) => (
                                <td
                                    key={index}
                                    colSpan={slot.colSpan || 1}
                                    className={slot.subject.includes("Lab") ? "labs" : ""}
                                >
                                    {slot.subject}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Chart;
