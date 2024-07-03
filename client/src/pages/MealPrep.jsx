import '../assets/scss/_dashboardCard.scss';
import MealPrepGuide from '../assets/components/MealPrepGuide';
import MealPrepPlan from '../assets/components/MealPrepPlan';
import MealPrepRecipe from '../assets/components/MealPrepRecipe';
import MealPrepTool from '../assets/components/MealPrepTool';
import MealPrepFAQ from '../assets/components/MealPrepFAQ';

function MealPrep() {
  return (
    <div className="mealprep-page">
      <header className="mealprep-header">
        <h1>Meal Prep</h1>
        <p>Custom meal plans to fuel your fitness journey</p>
      </header>
      <MealPrepGuide />
      <MealPrepPlan />
      <MealPrepRecipe />
      <MealPrepTool />
      <MealPrepFAQ />
    </div>
  )
  
}

export default MealPrep;
