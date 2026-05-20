import { Apple, Milk, Egg, Fish, Leaf, Utensils } from 'lucide-react'
import './CategoryCard.css'

const CATEGORIES = [
  { id: 'vegetables', name: 'Verduras', icon: Leaf, color: '#10b981' },
  { id: 'fruits', name: 'Frutas', icon: Apple, color: '#f59e0b' },
  { id: 'dairy', name: 'Lácteos', icon: Milk, color: '#3b82f6' },
  { id: 'proteins', name: 'Proteínas', icon: Fish, color: '#ef4444' },
  { id: 'eggs', name: 'Huevos', icon: Egg, color: '#f59e0b' },
  { id: 'others', name: 'Otros', icon: Utensils, color: '#8b5cf6' },
]

function CategoryCard({ onSelectCategory }) {
  return (
    <div className="category-grid">
      {CATEGORIES.map(category => {
        const IconComponent = category.icon
        return (
          <button
            key={category.id}
            className="category-card"
            onClick={() => onSelectCategory(category)}
            style={{ '--category-color': category.color }}
          >
            <IconComponent size={32} className="category-icon" />
            <span className="category-name">{category.name}</span>
          </button>
        )
      })}
    </div>
  )
}

export { CATEGORIES }
export default CategoryCard
