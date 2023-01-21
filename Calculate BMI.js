// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


function bmi(weight, height) {
    const bmiResult = weight / Math.pow(height, 2);
    return bmiResult <= 18.5 ? "Underweight" : bmiResult <= 25 ? 'Normal' : bmiResult <= 30 ? 'Overweight' : 'Obese';
}
console.log(bmi(70, 176));