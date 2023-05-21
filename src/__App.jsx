// import React, { useState } from "react";
// import clsx from "clsx";

// const TaskItem = ({ label, done, onClick }) => {
//   return (
//     <div className="py-2 border-b-[1px] mb-2 cursor-pointer" onClick={onClick}>
//       <span className="mr-2">
//         <input type="checkbox" defaultChecked={done} onChange={onClick} />
//       </span>
//       <span
//         className={clsx({
//           "line-through text-slate-300": done,
//           "text-black": !done,
//         })}
//       >
//         {label}
//       </span>
//     </div>
//   );
// };

// const App = () => {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([
//     { id: 0, label: "wash the car", done: false },
//     { id: 1, label: "wash the cat", done: false },
//     { id: 2, label: "read html", done: true },
//     { id: 3, label: "sleep", done: false },
//   ]);

//   const toggleTask = (taskId) => {
//     const selectedTask = tasks.find(({ id }) => id === taskId);
//     selectedTask.done = !selectedTask.done;
//     setTasks([...tasks, selectedTask]);
//   };

//   // Add a new task
//   // Delete Item From Tasks
//   // Edit task item
//   // Filter task items (done, !done, all)

//   // Store tasks -> localStorage

//   const handleAddTask = (e) => {
//     if (e.code === "Enter") {
//       setTasks((prevTasks) => [
//         ...prevTasks,
//         { id: Math.floor(Math.random() * 1000), label: task, done: false },
//       ]);
//     }
//   };

//   return (
//     <div>
//       <div className="mx-auto mt-10 p-4 rounded-lg shadow-lg bg-white w-96">
//         <input
//           className="w-full h-8 shadow border-[1px] mb-4 rounded px-2"
//           value={task}
//           placeholder="Enter your task"
//           onChange={({ target }) => setTask(target.value)}
//           onKeyUp={handleAddTask}
//         />
//         {tasks.map(({ done, label, id }, i) => (
//           <TaskItem
//             key={`task-${i}`}
//             label={label}
//             done={done}
//             onClick={() => !done && toggleTask(id)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// // Atomic Design
// // Atom
// // Molocule
// // Organism
// // Page
// // Template

import React, { useState } from "react";

// List -> item
// input -> term
// filter ->

const names = [
  "reyhane",
  "sepehr",
  "sajjad",
  "hossein",
  "hesan",
  "melika",
  "arash",
  "zabih",
  "hossein",
  "hassan",
  "amir",
  "soheil",
  "mohammad",
];

const App = () => {
  const [term, setTerm] = useState("");

  const handleSearchInput = ({ target }) => setTerm(target.value);

  return (
    <div>
      <input value={term} onChange={handleSearchInput} />
      <div>
        <ul>
          {names
            .filter((name) => name.startsWith(term))
            .map((name, i) => (
              <li key={`n-${i}`}>{name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
