import { useState } from 'react';

const studentsData = [
  { name: "Aiden Carter", level: 1, score: 88 },
  { name: "Bella Thompson", level: 2, score: 90 },
  { name: "Caleb Johnson", level: 3, score: 91 },
  { name: "Daisy Nguyen", level: 1, score: 85 },
  { name: "Ethan Wright", level: 2, score: 87 },
  { name: "Gavin Lopez", level: 3, score: 92 },
  { name: "Hannah Patel", level: 1, score: 86 },
  { name: "Isaac Chen", level: 2, score: 83 },
];

function App() {
const [levelFilter, setLevelFilter] = useState("All");

const filteredStudents = levelFilter === "All"
  ? studentsData
  : studentsData.filter(student => student.level === parseInt(levelFilter));

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
    <h2>Students Overview</h2>
    <label>
    filter by level:{" "}
    <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
      <option value="All">All Levels</option>
      <option value="1">Level 1</option>
      <option value="2">Level 2</option>
      <option value="3">Level 3</option>
    </select>
    </label>

  <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
    <thead>
      <tr>
        <th style={thStyle}>Name</th>
        <th style={thStyle}>Level</th>
        <th style={thStyle}>Average Score</th>
      </tr>
    </thead>
    <tbody>
      {filteredStudents.map(student => (
        <tr>
          <td style={tdStyle}>{student.name}</td>
          <td style={tdStyle}>{student.level}</td>
          <td style={tdStyle}>{student.score}</td>
        </tr>))}
    </tbody>
  </table>
  </div>
  );
}

const thStyle = {
  borderBottom: "2px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const tdStyle = {
  borderBottom: "1px solid #eee",
  padding: "8px",
};

export default App;
