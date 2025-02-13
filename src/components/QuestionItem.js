import React, { useState } from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  const [selectedIndex, setSelectedIndex] = useState(correctIndex);

  function handleSelectChange(event) {
    setSelectedIndex(parseInt(event.target.value)); // Update selectedIndex when the dropdown changes
  }

  function handleDeleteClick() {
    onDelete(id); // Trigger the onDelete function passed from the parent
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={selectedIndex} onChange={handleSelectChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
