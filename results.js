window.onload = updateResults; // Execute updateResults function when the window is loaded

function updateResults() {
    var caloriesPerDay = getParameterByName('caloriesPerDay'); // Get calories per day from URL parameters
    var caloriesPerWeek = getParameterByName('caloriesPerWeek'); // Get calories per week from URL parameters
    var protein = getParameterByName('protein'); // Get protein intake from URL parameters
    var proteinCalories = parseFloat(protein * 4).toFixed(1); // Calculate protein calories
    var fat = getParameterByName('fat'); // Get fat intake from URL parameters
    var fatCalories = parseFloat(fat * 9).toFixed(1); // Calculate fat calories
    var carbs = getParameterByName('carbs'); // Get carbohydrate intake from URL parameters
    var carbCalories = parseFloat(carbs * 4).toFixed(1); // Calculate carbohydrate calories
    var bmi = getParameterByName('bmi'); // Get BMI from URL parameters
    var weightStatus = getWeightStatus(bmi); // Determine weight status based on BMI
    var idealWeight = getParameterByName('idealWeight'); // Get ideal weight from URL parameters
    var activityLevel = parseFloat(getParameterByName('activityLevel')); // Get activity level from URL parameters
    var goal = getParameterByName('goal'); // Get fitness goal from URL parameters

    // Update HTML elements with calculated or fetched values
    document.getElementById('caloriesPerDay').textContent = caloriesPerDay;
    document.getElementById('caloriesPerWeek').textContent = caloriesPerWeek;
    document.getElementById('protein').textContent = protein;
    document.getElementById('proteinCalories').textContent = proteinCalories;
    document.getElementById('fat').textContent = fat;
    document.getElementById('fatCalories').textContent = fatCalories;
    document.getElementById('carbs').textContent = carbs;
    document.getElementById('carbCalories').textContent = carbCalories;
    document.getElementById('bmiValue').textContent = bmi; 
    document.getElementById('weightStatus').textContent = weightStatus; 
    document.getElementById('idealWeightValue').textContent = idealWeight;

    // Generate workout plan description based on activity level and goal
    var workoutPlanDescription = generateWorkoutPlan(activityLevel, goal);
    document.getElementById('workoutPlanDescription').innerHTML = workoutPlanDescription;
}

// Function to generate workout plan description
function generateWorkoutPlan(activityLevel, goal) {
    var workoutPlan = '<table border="2">';
    workoutPlan += '<tr bgcolor="green" align="center"><th width="500">Exercise</th><th width="500">Sets/Reps/Duration</th><th width="500" class="description">Description</th></tr>'

    // Determine workout plan based on activity level and goal
    if (activityLevel == 1.2) { 
        if (goal === "lose") {
            workoutPlan += `
            <tr align="center">
                <td><a href="exercises.html#walking"> Walking </a></td>
                <td> 5 minutes </td>
                <td rowspan="6" align="center">
                    <p> Each session can last around 15-20 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm up by gently moving your arms and legs to increase blood flow for 2-3 minutes. </p> <br>
                    <p> Cool down with some gentle stretches targeting major muscle groups for 5-10 minutes. </p> <br>
                    <p> Start slowly and gradually increase the duration and intensity of your workouts as you feel more comfortable and confident.</p> <br>
                    <p> The most important thing is to listen to your body and avoid pushing yourself too hard, especially if youre just starting out. </p> <br>
                    <p> As you become more active, you can explore other forms of exercise and gradually increase the challenge level of your workouts. </p>
                </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#seatedLegRaises"> Seated Leg Raises </td>
                <td> 2 sets of 10 reps per leg </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#seatedArmCircles"> Seated Arm Circles </td>
                <td> 2 sets of 10 reps forward and backward </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#seatedMarching"> Seated Marching </td>
                <td> 2 sets of 30 seconds </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#seatedTorsoTwists"> Seated Torso Twists </td>
                <td> 2 sets of 10 reps per side </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#seatedShoulderPressW"> Seated Shoulder Press (with Water Bottles or Light Weights) </td>
                <td> 2 sets of 10 reps </td>
            </tr>
        `;
        
        } else if (goal === "gain") {
            workoutPlan += `
            <tr align="center">
                <td><a href="exercises.html#chairSquats"> Chair Squats </td>
                <td> 3 sets of 10-15 reps </td>
                <td rowspan="10" align="center">
                    <p> Start with 2-3 sessions per week to allow your muscles time to adapt and recover. </p> <br>
                    <p> Aim for around 20-30 minutes per session, gradually increasing as your fitness level improves. </p> <br>
                    <p> Listen to your body and don't push too hard, especially if you're just starting out. </p> <br>
                    <p> Consistency is key, so try to stick to your schedule and gradually challenge yourself as you progress. Additionally, remember to maintain proper form to prevent injury and maximize effectiveness. </p>
                </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#wallPush-Ups"> Wall Push-ups </td>
                <td> 3 sets of 8-12 reps </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#standingCalfRaises"> Standing Calf Raises </td>
                <td> 3 sets of 12-15 reps </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#seatedLegExtensions"> Seated Leg Extensions </td>
                <td> 3 sets of 10 reps </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#bicepCurlsW"> Bicep Curls with Water Bottles </td>
                <td> 3 sets of 10-12 reps </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#overHeadPressW"> Overhead Press with Water Bottles </td>
                <td> 3 sets of 10-12 reps </td>
            </tr>
        `;
        
        } else {
            workoutPlan += `
            <tr align="center">
                <td><a href="exercises.html#briskWalking"> Brisk Walking </td>
                <td> 10-15 minutes </td>
                <td rowspan="10" align="center">
                    <p> Aim to do this workout routine 3-4 times a week. </p> <br>
                    <p> Each session can last around 20-30 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm up by gently moving your arms and legs to increase blood flow for 2-3 minutes. </p> <br>
                    <p> Cool down with some gentle stretches targeting major muscle groups for 5-10 minutes. </p> <br>
                    <p> This routine provides enough activity to keep your body moving without putting too much strain on your joints or muscles. </p> <br>
                    <p> Its essential to stay consistent with your workouts to maintain your weight and overall health. </p> <br>
                    <p>  Additionally, incorporating other forms of physical activity throughout the day, such as taking short walks or doing household chores, can contribute to your overall activity level and help maintain your weight. </p>
                    </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#seatedLegRaises"> Seated Leg Raises </td>
                <td> 2 sets of 10 reps per leg </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#seatedArmCircles"> Arm Circles </td>
                <td> 2 sets of 10 reps forward and backward </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#seatedMarching"> Seated Marching </td>
                <td> 2 sets of 30 seconds </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#seatedTorsoTwists"> Seated Torso Twists </td>  
                <td> 2 sets of 10 reps per side </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#seatedShoulderPressW"> Seated Shoulder Press (with Water Bottles or Light Weights) </td>
                <td> 2 sets of 10 reps </td>
            </tr>
        `;
            }

    } else if (activityLevel == 1.375) {
        if (goal === "lose") {
            workoutPlan += `
            <tr align="center">
                <td><a href="exercises.html#briskWalking"> Brisk Walking </td>
                <td> 10-15 minutes </td>
                <td rowspan="10" align="center">
                    <p> Aim to do this workout routine 3-4 times a week. </p> <br>
                    <p> Each session can last around 20-30 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm up with light cardio or dynamic stretches for 5-10 minutes before starting the main workout. </p> <br>
                    <p> Cool down with static stretches targeting major muscle groups for 5-10 minutes after completing the main workout. </p> <br>
                    <p> This light workout routine helps to get your body moving, burn some calories, and gradually build strength and endurance. </p> <br>
                    <p> As you progress, you can gradually increase the intensity and duration of your workouts. </p> <br>
                    <p> Remember to listen to your body and adjust the exercises to your fitness level. </p> <br>
                    <p> Consistency is key, so try to stick to your schedule and gradually challenge yourself as you feel more comfortable.  </p>
                </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#bodyWeightSquats"> Bodyweight Squats </td>
                <td> 2 sets of 10-12 reps </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#wallPush-Ups"> Wall Push-Ups </td>
                <td> 2 sets of 8-10 reps </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#standingBicycleCrunches"> Standing Bicycle Crunches </td>
                <td> 2 sets of 10-12 reps per </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#standingForwardLunges"> Standing Forward Lunges </td>
                <td> 2 sets of 10 reps per leg </td>
            </tr>
        
            <tr align="center">
                <td><a href="exercises.html#plank"> Plank </td>
                <td> 2 sets, hold for 20-30 seconds </td>
            </tr>
        `;
        
    } else if (goal === "gain") {
            workoutPlan+= `
            <tr align="center">
                <td><a href="exercises.html#bodyWeightSquats"> Bodyweight Squats </td>
                <td> 3 sets of 10-15 reps </td>
            <td rowspan="10" align="center"> 
                    <p> Aim to do this workout 3-4 times a week. </p> <br>
                    <p> Each session can last around 30-45 minutes, including warm-up and cool-down. </p> <br>
                    <p> Make sure to give your muscles at least 48 hours of rest between sessions to recover and grow. And remember, proper nutrition and sufficient sleep are also crucial for muscle growth and recovery. </p>
                </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#push-Ups"> Push-ups </td>
                <td> 3 sets of 8-12 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbellLunges"> Dumbbell Lunges </td>
                <td> 3 sets of 10 reps per leg </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbellRows"> Dumbbell Rows </td>
                <td> 3 sets of 10 reps per arm </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#plank"> Plank </td>
                <td> 3 sets, hold for 30-60 seconds </td>
            </tr>
        `;

        } else {
            workoutPlan+= `
            <tr align="center">
                <td><a href="exercises.html#briskWalking"> Brisk Walking </td>
                <td> 10-15 minutes </td>
            <td rowspan="10" align="center"> 
                    <p> Aim to do this workout routine 3-4 times a week. </p> <br>
                    <p> Each session can last around 20-30 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm up with light cardio or dynamic stretches for 5-10 minutes before starting the main workout. </p> <br>
                    <p> Cool down with static stretches targeting major muscle groups for 5-10 minutes after completing the main workout. </p> <br>
                    <p> This light workout routine provides enough activity to keep your body moving and maintain your weight without overexerting yourself. </p> <br>
                    <p> Its important to listen to your body and adjust the intensity as needed. </p> <br>
                    <p> Additionally, incorporating other forms of physical activity throughout the day, such as walking, gardening, or playing with pets, can further contribute to maintaining your weight and overall health. </p> 
                </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#bodyWeightSquats"> Bodyweight Squats </td>
                <td> 2 sets of 10-12 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#wallPush-Ups"> Wall Push-Ups </td>
                <td> 2 sets of 8-10 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#standingBicycleCrunches"> Standing Bicycle Crunches </td>
                <td> 2 sets of 10-12 reps per side </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#standingForwardLunges"> Standing Forward Lunges </td>
                <td> 2 sets of 10 reps per leg </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#plank"> Plank </td>
                <td> 2 sets, hold for 20-30 seconds </td>
            </tr>
        `;
        }
        
    } else if (activityLevel == 1.55) {
        if (goal === "lose") {
            workoutPlan+= `
            <tr align="center">
                <td><a href="exercises.html#jogging"> Jogging </td>
                <td> 5-10 minutes </td>
            <td rowspan="10" align="center"> 
                    <p> Aim to do this workout routine 3-4 times a week. </p> <br>
                    <p> Each session can last around 30-45 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm up with light cardio or dynamic stretches for 5-10 minutes before starting the main workout. </p> <br>
                    <p> Cool down with static stretches targeting major muscle groups for 5-10 minutes after completing the main workout. </p> <br>
                    <p> By incorporating both cardiovascular exercises and strength training, youll effectively burn calories during the workout while also building muscle mass, which can help boost your metabolism in the long term. </p> <br>
                    <p> Remember to listen to your body, stay hydrated, and maintain a balanced diet to support your weight loss goals. </p> 
                </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#bodyWeightSquats"> Bodyweight Squats </td>
                <td> 3 sets of 12-15 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#push-Ups"> Push-ups </td>
                <td> 3 sets of 8-12 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#jumpingJacks"> Jumping Jacks </td>
                <td> 3 sets of 30-60 seconds </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#plank"> Plank </td>
                <td> 3 sets, hold for 30-60 seconds </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#bicycleCrunches"> Bicycle Crunches </td>
                <td> 3 sets of 12-15 reps per side </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbellLunges"> Dumbbell Lunges </td>
                <td> 3 sets of 10 reps per leg </td>
            </tr>
        `;

        } else if (goal === "gain") {
            workoutPlan+= `
            <tr align="center">
                <td><a href="exercises.html#bodyWeightSquats"> Bodyweight Squats </td>
                <td> 3 sets of 10-15 reps </td>
            <td rowspan="10" align="center"> 
                    <p> Aim to do this workout routine 3-4 times a week. </p> <br>
                    <p> Each session can last around 45-60 minutes, including warm-up and cool-down. </p> <br>
                    <p> Allocate around 5-10 minutes for warm-up exercises such as light cardio or dynamic stretching, and 5-10 minutes for cool-down stretches at the end of your workout. </p> <br>
                    <p> As you progress, you can gradually increase the intensity by adding more sets, increasing weights, or incorporating more challenging variations of the exercises. </p> <br>
                    <p> And always remember to listen to your body and rest when needed to prevent overtraining and allow for proper recovery. </p> 
                </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#push-Ups"> Push-ups </td>
                <td> 3 sets of 8-12 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbellLunges"> Dumbbell Lunges </td>
                <td> 3 sets of 10 reps per leg </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbellChestPress"> Dumbbell Chest Press </td>
                <td> 3 sets of 8-12 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbellRows"> Dumbbell Rows </td>
                <td> 3 sets of 10 reps per arm </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#plank"> Plank </td>
                <td> 3 sets, hold for 30-60 seconds </td>
            </tr>
        `;

        }else{
            workoutPlan+= `
            <tr align="center">
                <td><a href="exercises.html#jogging"> Jogging </td>
                <td> 10-15 minutes </td>
            <td rowspan="10" align="center"> 
                    <p> Aim to do this workout routine 3-4 times a week. </p> <br>
                    <p> Each session can last around 30-45 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm up with light cardio or dynamic stretches for 5-10 minutes before starting the main workout. </p> <br>
                    <p> Cool down with static stretches targeting major muscle groups for 5-10 minutes after completing the main workout. </p> <br>
                    <p> This moderate workout routine provides enough activity to maintain your weight by keeping your metabolism up and your muscles engaged. </p> <br>
                    <p> Its important to challenge yourself without overexerting, so listen to your body and adjust the intensity as needed. </p> <br>
                    <p>  Additionally, staying consistent with your workouts and incorporating other forms of physical activity throughout the week, such as walking, cycling, or yoga, can further support weight maintenance and overall health. </p> 
                </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#bodyWeightSquats"> Bodyweight Squats </td>
                <td> 3 sets of 10-12 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#push-Ups"> Push-ups </td>
                <td> 3 sets of 8-10 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#standingForwardLunges"> Standing Forward Lunges </td>
                <td> 2 sets of 12 reps per leg </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#bicycleCrunches"> Bicycle Crunches </td>
                <td> 3 sets of 12-15 reps per side </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbellRows"> Dumbbell Rows </td>
                <td> 3 sets of 10 reps per arm </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#plank"> Plank </td>
                <td> 2 sets, hold for 30-45 seconds </td>
            </tr>
        `;
        }

    } else if (activityLevel == 1.725) {
        if (goal === "lose") {
            workoutPlan+= `
            <tr align="center">
                <td><a href="exercises.html#jumpingJacks"> Jumping Jacks </td>
                <td> 1 minute </td>
            <td rowspan="10" align="center"> 
                    <p> Perform each exercise consecutively with minimal rest between exercises. </p> <br>
                    <p> Complete the entire circuit, then rest for 1-2 minutes and repeat for a total of 3-4 rounds. </p> <br>
                    <p> Aim to do this HIIT workout routine 4-5 times a week. </p> <br>
                    <p> Each session can last around 20-30 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm up with dynamic stretches and mobility exercises for 5-10 minutes. </p> <br>
                    <p> Cool down with static stretches targeting major muscle groups for 5-10 minutes after completing the main workout. </p> <br>
                    <p> This workout structure will effectively elevate your heart rate and keep it elevated throughout the session, promoting calorie burn and fat loss. </p> <br>
                    <p> However, remember that weight loss also heavily relies on nutrition, so maintain a balanced diet and stay hydrated to support your workout efforts. </p> <br>
                    <p> Always listen to your body and modify exercises as needed to prevent injury. </p> 
                </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#burpees"> Burpees </td>
                <td> 45 seconds </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#mountainClimbers"> Mountain Climbers </td>
                <td> 45 seconds </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#highKnees"> High Knees </td>
                <td> 1 minute </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#jumpSquats"> Jump Squats </td>
                <td> 45 seconds </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#plank"> Plank </td>
                <td> 1 minute </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#standingForwardLunges"> Standing Forward Lunges </td>
                <td> 45 seconds per leg </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#push-Ups"> Push-ups </td>
                <td> 45 seconds </td>
            </tr>
        `;

        } else if (goal === "gain") {
            workoutPlan+= `
            <tr align="center">
                <td><a href="exercises.html#dumbbellGobletSquats"> Dumbbell Goblet Squats </td>
                <td> 4 sets of 8-12 reps </td>
            <td rowspan="10" align="center"> 
                    <p> Aim to do this workout routine 4-5 times a week with at least one rest day between sessions. </p> <br>
                    <p> Each session can last around 60-75 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm-up with dynamic stretches and mobility exercises for 10-15 minutes before starting the main workout. </p> <br>
                    <p> Cool down with static stretches targeting major muscle groups for 10-15 minutes after completing the main workout. </p> <br>
                    <p> Ensure proper form and technique throughout each exercise to maximize effectiveness and minimize the risk of injury. </p> <br>
                    <p> Additionally, progressively overload by increasing weights or resistance as you become stronger. </p> <br>
                    <p> Finally, prioritize nutrition, hydration, and adequate rest to support muscle growth and recovery. </p> 
                </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#weightedPush-Ups"> Weighted Push-ups </td>
                <td> 4 sets of 8-12 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbellBulgarianSplitSquats"> Dumbbell Bulgarian Split Squats </td>
                <td> 4 sets of 8-12 reps per leg </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#chin-Ups"> Chin-ups </td>
                <td> 4 sets to failure or assisted variations if needed </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbelDeadlifts"> Dumbbell Deadlifts </td>
                <td> 4 sets of 8-12 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbellShoulderPress"> Dumbbell Shoulder Press </td>
                <td> 4 sets of 8-12 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#plank"> Plank </td>
                <td> 3 sets, hold for 45-60 seconds </td>
            </tr>
        `;

        } else {
            workoutPlan+= `
            <tr align="center">
                <td><a href="exercises.html#jumpingJacks"> Jumping Jacks </td>
                <td> 3 sets of 1 minute </td>
            <td rowspan="10" align="center"> 
                    <p> Aim to do this workout routine 3-4 times a week. </p> <br>
                    <p> Each session can last around 30-45 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm up with dynamic stretches and mobility exercises for 5-10 minutes before starting the main workout. </p> <br>
                    <p> Cool down with static stretches targeting major muscle groups for 5-10 minutes after completing the main workout. </p> <br>
                    <p> This intense workout routine will help you maintain your weight by keeping your metabolism elevated and burning calories efficiently. </p> <br>
                    <p> However, it's important to listen to your body and not push yourself too hard, especially if you're just starting out or if you're feeling fatigued. </p> <br>
                    <p>  Additionally, maintaining a balanced diet and staying hydrated are crucial for supporting your workout efforts and overall health. </p> 
                </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#burpees"> Burpees </td>
                <td> 3 sets of 10 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#mountainClimbers"> Mountain Climbers </td>
                <td> 3 sets of 30 seconds </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#highKnees"> High Knees </td>
                <td> 3 sets of 1 minute </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#jumpSquats"> Jump Squats </td>
                <td> 3 sets of 15 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#plank"> Plank </td>
                <td> 3 sets, hold for 45-60 seconds </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#push-Ups"> Push-ups </td>
                <td> 3 sets of 12 reps </td>
            </tr>
        `;
        }

    } else if (activityLevel == 1.9) {
        if (goal === "lose") {
            workoutPlan+= `
            <tr align="center">
                <td><a href="exercises.html#jumpingJacks"> Jumping Jacks </td>
                <td> 5 sets of 1 minute </td>
            <td rowspan="10" align="center"> 
                    <p> Perform this workout routine 5-6 times a week, allowing at least one full rest day. </p> <br>
                    <p> Each session can last around 45-60 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm up with dynamic stretches and mobility exercises for 10-15 minutes. </p> <br>
                    <p> Cool down with static stretches targeting major muscle groups for 10-15 minutes after completing the main workout. </p> <br>
                    <p> This workout will elevate your heart rate and keep it elevated, facilitating calorie burn even after the workout is over due to the high-intensity nature of the exercises. </p> <br>
                    <p> Combine this workout with a balanced diet focused on whole foods and adequate hydration for effective weight loss results. </p> <br>
                    <p> Remember to listen to your body and modify exercises as needed to prevent injury. </p> 
                </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#burpees"> Burpees </td>
                <td> 5 sets of 10 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#mountainClimbers"> Mountain Climbers </td>
                <td> 5 sets of 30 seconds </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#highKnees"> High Knees </td>
                <td> 5 sets of 1 minute </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#jumpSquats"> Jump Squats </td>
                <td> 5 sets of 15 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#plankWithShoulderTaps"> Plank with Shoulder Taps </td>
                <td> 4 sets of 30 seconds </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#push-Ups"> Push-up </td>
                <td> 4 sets of 12 reps </td>
            </tr>
        `;

        } else if (goal === "gain") {
            workoutPlan+= `
            <tr align="center">
                <td><a href="exercises.html#barbellSquats"> Barbell Squats </td>
                <td> 5 sets of 6-8 reps </td>
            <td rowspan="10" align="center"> 
                    <p> Perform this workout routine 5-6 times a week, with at least one full rest day. </p> <br>
                    <p> Each session can last around 75-90 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm up with dynamic stretches and mobility exercises for 15-20 minutes. </p> <br>
                    <p> Cool down with static stretches targeting major muscle groups for 15-20 minutes after completing the main workout. </p> <br>
                    <p> Ensure proper form and technique throughout each exercise, and progressively increase weights or resistance as you become stronger. </p> <br>
                    <p> However, be cautious not to sacrifice form for heavier weights, as it increases the risk of injury. </p> <br>
                    <p>  Proper nutrition, hydration, and sleep are crucial to support recovery and muscle growth with such an intense workout regimen. </p> <br>
                    <p>  Listen to your body and adjust the intensity as needed to prevent overtraining. </p>
                </td>
            </tr>


            <tr align="center">
                <td><a href="exercises.html#deadlifts"> Deadlifts </td>
                <td> 5 sets of 6-8 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#pull-Ups"> Pull-ups </td>
                <td> 4 sets to failure </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#barbellBenchPress"> Barbell Bench Press </td>
                <td> 5 sets of 6-8 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#barbellBentOverRows"> Barbell Bent Over Rows </td>
                <td> 5 sets of 6-8 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbellLunges"> Dumbbell Lunges </td>
                <td> 4 sets of 8-10 reps per leg </td>
            </tr>
        `;

        } else {
            workoutPlan+= `
            <tr align="center">
                <td><a href="exercises.html#jumpSquats"> Jump Squats </td>
                <td> 4 sets of 15 reps </td>
            <td rowspan="10" align="center"> 
                    <p> Aim to do this extra intense workout routine 4-5 times a week. </p> <br>
                    <p> Each session can last around 45-60 minutes, including warm-up and cool-down. </p> <br>
                    <p> Warm up with dynamic stretches and mobility exercises for 10-15 minutes before starting the main workout. </p> <br>
                    <p> Cool down with static stretches targeting major muscle groups for 10-15 minutes after completing the main workout. </p> <br>
                    <p> This extra intense workout routine will help you maintain your weight by keeping your metabolism elevated and burning calories efficiently. </p> <br>
                    <p> However, its crucial to listen to your body and not push yourself beyond your limits to avoid overtraining and potential injury. </p> <br>
                    <p>  Additionally, prioritize proper nutrition, hydration, and adequate rest to support your workout efforts and overall health. </p> 
                </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#burpees"> Burpees </td>
                <td> 4 sets of 10 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#mountainClimbers"> Mountain Climbers </td>
                <td> 4 sets of 30 seconds </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#highKnees"> High Knees </td>
                <td> 4 sets of 1 minute </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#plankWithShoulderTaps"> Plank with Shoulder Taps </td>
                <td> 4 sets, hold for 45 seconds </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#dumbbellThrusters"> Dumbbell Thrusters </td>
                <td> 4 sets of 12 reps </td>
            </tr>

            <tr align="center">
                <td><a href="exercises.html#push-UpsToRenegadeRow"> Push-up to Renegade Row </td>
                <td> 4 sets of 10 reps per arm </td>
            </tr>
        `;
    }
}
    workoutPlan += '</table>';
    return workoutPlan; // Return the generated workout plan
}

// Function to determine weight status based on BMI
function getWeightStatus(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

// Function to get URL parameter by name
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
