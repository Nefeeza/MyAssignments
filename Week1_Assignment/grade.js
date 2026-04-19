// Function to calculate grade based on score

function calculateGrade(score) {

  // Declare and initialize the grade variable
  let grade;

  switch (true) {
    case (score >= 90 && score <= 100):
      grade = "A";
      break;
    case (score >= 80 && score < 90):
      grade = "B";
      break;
    case (score >= 70 && score < 80):
      grade = "C";
      break;
    case (score >= 60 && score < 70):
      grade = "D+";
      break;
    case (score >= 50 && score < 60):
      grade = "D";
      break;
    case (score >= 0 && score < 50):
      grade = "F";
      break;
    default:
      grade = "Invalid Score";
      break;
  }

  return grade;
}

// Call the function and print the results
console.log("Score 95 -> Grade: " + calculateGrade(95));   // A
console.log("Score 83 -> Grade: " + calculateGrade(83));   // B
console.log("Score 74 -> Grade: " + calculateGrade(74));   // C
console.log("Score 65 -> Grade: " + calculateGrade(65));   // D+
console.log("Score 55 -> Grade: " + calculateGrade(55));   // D
console.log("Score 45 -> Grade: " + calculateGrade(45));   // D
console.log("Score 105 -> Grade: " + calculateGrade(105)); // Invalid Score