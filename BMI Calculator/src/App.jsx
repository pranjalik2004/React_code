
import React, { useState } from 'react';
import './index.css'; // Import your CSS file where you define styles

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(null);

  const handleHeightChange = () => {
    setHeight(prevHeight => prevHeight + 5); // Increase height by 10 (or any other value)
  };

  const handleWeightChange = () => {
    setWeight(prevWeight => prevWeight + 1); // Increase weight by 5 (or any other value)
  };

  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  return (
    <div className="blueBox">
      <h2>BMI Calculator</h2>
      <div className="progressBars">
        <label>Height (cm): {height} cm</label>
        <progress value={height} max="300" onClick={handleHeightChange}></progress>
<br></br>
        <label>Weight (kg): {weight} kg</label>
        <progress value={weight} max="200" onClick={handleWeightChange}></progress>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          {/* Implement logic to display BMI category based on the calculated BMI */}
          {/* For example: Underweight, Normal weight, Overweight, Obese */}
        </div>
      )}
    </div>
  );
}

export default App;
