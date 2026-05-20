import { useState } from 'react'
import { X, Plus } from 'lucide-react'
import './ProductForm.css'

function ProductForm({ category, onAddProduct, onClose }) {
  const [productName, setProductName] = useState('')
  const [quantity, setQuantity] = useState('1')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!productName.trim()) {
      alert('Por favor ingresa el nombre del producto')
      return
    }

    setLoading(true)
    
    // Simulación de delay
    await new Promise(resolve => setTimeout(resolve, 300))

    const newProduct = {
      id: Date.now(),
      name: productName,
      category: category.id,
      categoryName: category.name,
      categoryColor: category.color,
      quantity: parseInt(quantity) || 1,
      notes: notes,
      createdAt: new Date().toISOString(),
      purchased: false,
    }

    onAddProduct(newProduct)
    setLoading(false)
    onClose()
  }

  return (
    <div className="product-form-overlay">
      <div className="product-form-container">
        <div className="form-header">
          <h2>Agregar {category.name}</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label htmlFor="productName">Nombre del producto</label>
            <input
              id="productName"
              type="text"
              placeholder="Ej: Manzanas, Leche, Pollo..."
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              disabled={loading}
              autoFocus
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantity">Cantidad</label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label>Categoría</label>
              <div className="category-badge" style={{ backgroundColor: category.color }}>
                {category.name}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notas (opcional)</label>
            <textarea
              id="notes"
              placeholder="Ej: Preferencia de marca, cantidad, etc."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              disabled={loading}
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            <Plus size={18} />
            {loading ? 'Agregando...' : 'Agregar a la lista'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
