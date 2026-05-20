import { AlertCircle, Clock, CheckCircle, Trash2 } from 'lucide-react'
import './FoodList.css'

function FoodList({ foods }) {
  // Categorizar alimentos
  const expiredFoods = foods.filter(f => f.status === 'expired')
  const expiringFoods = foods.filter(f => f.status === 'expiring')
  const freshFoods = foods.filter(f => f.status === 'fresh')

  const handleDelete = (id) => {
    alert(`Alimento ${id} eliminado (funcionalidad en desarrollo)`)
  }

  const FoodCard = ({ food, statusColor, icon: Icon }) => (
    <div className="food-card">
      <div className="food-card-header">
        <div className="food-info">
          <Icon size={20} className="food-icon" style={{ color: statusColor }} />
          <div>
            <h4>{food.name}</h4>
            <p className="food-date">{new Date(food.expiryDate).toLocaleDateString('es-ES')}</p>
          </div>
        </div>
        <span className="food-quantity">{food.quantity}</span>
      </div>
      <button
        className="delete-btn"
        onClick={() => handleDelete(food.id)}
        title="Eliminar"
      >
        <Trash2 size={16} />
      </button>
    </div>
  )

  return (
    <div className="food-list">
      {/* CADUCADOS */}
      {expiredFoods.length > 0 && (
        <section className="food-section">
          <div className="section-header">
            <AlertCircle size={20} className="section-icon expired" />
            <h2>Caducados ({expiredFoods.length})</h2>
          </div>
          <div className="foods-container">
            {expiredFoods.map(food => (
              <FoodCard
                key={food.id}
                food={food}
                statusColor="#ef4444"
                icon={AlertCircle}
              />
            ))}
          </div>
        </section>
      )}

      {/* PRÓXIMOS A CADUCAR */}
      {expiringFoods.length > 0 && (
        <section className="food-section">
          <div className="section-header">
            <Clock size={20} className="section-icon expiring" />
            <h2>Próximos a caducar ({expiringFoods.length})</h2>
          </div>
          <div className="foods-container">
            {expiringFoods.map(food => (
              <FoodCard
                key={food.id}
                food={food}
                statusColor="#f59e0b"
                icon={Clock}
              />
            ))}
          </div>
        </section>
      )}

      {/* CON TIEMPO */}
      {freshFoods.length > 0 && (
        <section className="food-section">
          <div className="section-header">
            <CheckCircle size={20} className="section-icon fresh" />
            <h2>Con tiempo ({freshFoods.length})</h2>
          </div>
          <div className="foods-container">
            {freshFoods.map(food => (
              <FoodCard
                key={food.id}
                food={food}
                statusColor="#10b981"
                icon={CheckCircle}
              />
            ))}
          </div>
        </section>
      )}

      {/* VACÍO */}
      {foods.length === 0 && (
        <div className="empty-state">
          <p>No tienes alimentos registrados</p>
          <button className="add-food-btn">+ Agregar alimento</button>
        </div>
      )}
    </div>
  )
}

export default FoodList
