function validateAndCalculate() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseFloat(document.getElementById("age").value);
    var genderButtons = document.getElementsByName("gender");
    var gender;
    for (var i = 0; i < genderButtons.length; i++) {
        if (genderButtons[i].checked) {
            gender = genderButtons[i].value;
            break;
        }
    }
    var activityLevel = parseFloat(document.getElementById("activityLevel").value);
    var goal = document.getElementById("goal").value;

    // Check if any of the required fields are empty
    if (!weight || !height || !age || !gender || !activityLevel || !goal) {
        // Display error message
        document.getElementById("errorMessage").style.display = "block";
        return false; // Prevent form submission
    }

    // Hide error message if all required fields are filled out
    document.getElementById("errorMessage").style.display = "none";

    // Calculate TDEE
    var bmr = (gender === "male") ? (10 * weight + 6.25 * height - 5 * age + 5) : (10 * weight + 6.25 * height - 5 * age - 161);
    var tdee = bmr * activityLevel;

    if (goal === "lose") {
        tdee -= 500; // Deficit of 500 calories per day for weight loss
    } else if (goal === "gain") {
        tdee += 250; // Surplus of 250 calories per day for muscle gain
    }

    // Calculate macronutrients
    var protein = (weight * 2.2).toFixed(1);
    var fat = (tdee * 0.25 / 9).toFixed(1);
    var carbs = ((tdee - (protein * 4) - (fat * 9)) / 4).toFixed(1);

    // Calculate calorie breakdown
    var proteinCalories = (protein * 4).toFixed(1);
    var fatCalories = (fat * 9).toFixed(1);
    var carbCalories = (carbs * 4).toFixed(1);
    var totalCalories = (parseFloat(proteinCalories) + parseFloat(fatCalories) + parseFloat(carbCalories)).toFixed(2);

    // Calculate BMI and ideal weight
    var bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    var idealWeight = (gender === "male") ? (22 * Math.pow(height / 100, 2)).toFixed(1) : (21 * Math.pow(height / 100, 2)).toFixed(1);

    // Redirect to results page with parameters
    window.location.href = "results.html?caloriesPerDay=" + tdee.toFixed(2) + "&caloriesPerWeek=" + (tdee * 7).toFixed(2) + "&protein=" + protein + "&fat=" + fat + "&carbs=" + carbs + "&bmi=" + bmi + "&idealWeight=" + idealWeight + "&activityLevel=" + activityLevel + "&goal=" + goal;

    return false; // Prevent form submission
}
