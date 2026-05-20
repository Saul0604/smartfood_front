import { Sparkles, Clock, Users, ChefHat } from 'lucide-react'
import './AIRecipes.css'

function AIRecipes() {
  // Datos hardcodeados de recetas sugeridas basadas en alimentos próximos a vencer
  const suggestedRecipes = [
    {
      id: 1,
      name: 'Yogur Parfait con Frutas',
      description: 'Un desayuno delicioso y saludable con yogur antes de que venza',
      ingredients: ['Yogur', 'Manzanas', 'Granola'],
      time: 5,
      servings: 2,
      difficulty: 'Fácil',
      image: '🥛',
    },
    {
      id: 2,
      name: 'Quesadillas de Queso y Pan',
      description: 'Aprovecha el queso y pan antes de que expiren',
      ingredients: ['Queso', 'Pan integral', 'Mantequilla'],
      time: 10,
      servings: 2,
      difficulty: 'Fácil',
      image: '🧀',
    },
    {
      id: 3,
      name: 'Ensalada Fresca de Verduras',
      description: 'Una opción ligera y nutritiva para aprovechar tus verduras',
      ingredients: ['Verduras Varias', 'Limón', 'Aceite'],
      time: 15,
      servings: 3,
      difficulty: 'Muy Fácil',
      image: '🥗',
    },
    {
      id: 4,
      name: 'Omelette de Queso',
      description: 'Usa el queso y huevos antes de que caduquen',
      ingredients: ['Huevos', 'Queso', 'Pan'],
      time: 10,
      servings: 1,
      difficulty: 'Fácil',
      image: '🍳',
    },
    {
      id: 5,
      name: 'Smoothie Proteínico',
      description: 'Aprovecha el yogur y frutas para un smoothie nutritivo',
      ingredients: ['Yogur', 'Manzanas', 'Leche'],
      time: 5,
      servings: 1,
      difficulty: 'Muy Fácil',
      image: '🥤',
    },
    {
      id: 6,
      name: 'Sándwich Especial',
      description: 'Combina queso, verduras y pan para un sándwich delicioso',
      ingredients: ['Pan', 'Queso', 'Verduras', 'Tomate'],
      time: 8,
      servings: 1,
      difficulty: 'Muy Fácil',
      image: '🥪',
    },
  ]

  return (
    <div className="ai-recipes">
      <div className="recipes-header">
        <div className="header-title">
          <Sparkles size={28} className="sparkles-icon" />
          <div>
            <h2>Recetas Sugeridas por IA</h2>
            <p>Basadas en tus alimentos próximos a vencer</p>
          </div>
        </div>
      </div>

      <div className="recipes-grid">
        {suggestedRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image">
              <span className="emoji">{recipe.image}</span>
            </div>

            <div className="recipe-content">
              <h3>{recipe.name}</h3>
              <p className="recipe-description">{recipe.description}</p>

              <div className="recipe-meta">
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{recipe.time} min</span>
                </div>
                <div className="meta-item">
                  <Users size={16} />
                  <span>{recipe.servings} {recipe.servings === 1 ? 'persona' : 'personas'}</span>
                </div>
                <div className="meta-item">
                  <ChefHat size={16} />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>

              <div className="ingredients-list">
                <strong>Ingredientes:</strong>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <button className="view-recipe-btn">
                Ver Receta Completa
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="ai-info">
        <div className="info-box">
          <Sparkles size={24} />
          <div>
            <h4>Potenciado por IA</h4>
            <p>Estas recetas se generan automáticamente basadas en los alimentos que tienes y sus fechas de vencimiento. Pronto podrás obtener recetas personalizadas y detalladas.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIRecipes
