import { useState } from 'react';
import './App.css';

export default function App() {
  const studentName = 'Ушаков Данил Иванович';
  const groupName = '11.1/-РПО-/24.3';
  const skills = ['HTML', 'CSS', 'JavaScript'];

  const [showSkills, setShowSkills] = useState(false);

  return (
    <section id="center">
      <h1>Карточка студента</h1>
      <p>Имя: {studentName}</p>
      <p>Группа: {groupName}</p>
      <p>Изучаю React</p>

      <button className="counter" onClick={() => setShowSkills(!showSkills)}>
        {showSkills ? 'Скрыть навыки' : 'Показать навыки'}
      </button>

      {showSkills && (
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      )}
    </section>
  );
}