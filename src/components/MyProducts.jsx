import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import CategoryCard from './CategoryCard'
import ProductForm from './ProductForm'
import './MyProducts.css'

function MyProducts() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
    setShowForm(true)
  }

  const handleAddProduct = (product) => {
    setProducts([...products, product])
  }

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId))
  }

  // Agrupar productos por categoría
  const groupedProducts = {}
  products.forEach(product => {
    if (!groupedProducts[product.categoryName]) {
      groupedProducts[product.categoryName] = []
    }
    groupedProducts[product.categoryName].push(product)
  })

  return (
    <div className="my-products">
      {!showForm ? (
        <>
          <div className="products-header">
            <h2>Mis Productos</h2>
            <button
              className="add-product-btn"
              onClick={() => setShowForm(true)}
              title="Agregar producto"
            >
              <Plus size={20} />
              Agregar
            </button>
          </div>

          {products.length === 0 ? (
            <div className="empty-products">
              <p>No tienes productos agregados</p>
              <p className="subtitle">Presiona "Agregar" para empezar</p>
            </div>
          ) : (
            <div className="products-by-category">
              {Object.entries(groupedProducts).map(([categoryName, items]) => (
                <section key={categoryName} className="category-section">
                  <h3 className="category-title">{categoryName} ({items.length})</h3>
                  <div className="category-products">
                    {items.map(product => (
                      <div key={product.id} className="product-card">
                        <div className="card-header">
                          <div className="product-name-box">
                            <h4>{product.name}</h4>
                            <span
                              className="category-badge"
                              style={{ backgroundColor: product.categoryColor }}
                            >
                              {product.categoryName}
                            </span>
                          </div>
                          <button
                            className="delete-btn"
                            onClick={() => handleDeleteProduct(product.id)}
                            title="Eliminar"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <div className="card-body">
                          <div className="product-detail">
                            <span className="detail-label">Cantidad:</span>
                            <span className="detail-value">{product.quantity}</span>
                          </div>
                          {product.notes && (
                            <div className="product-detail">
                              <span className="detail-label">Notas:</span>
                              <span className="detail-value">{product.notes}</span>
                            </div>
                          )}
                          <div className="product-detail">
                            <span className="detail-label">Agregado:</span>
                            <span className="detail-value">
                              {new Date(product.createdAt).toLocaleDateString('es-ES')}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="back-header">
            <button
              className="back-btn"
              onClick={() => setShowForm(false)}
            >
              ← Atrás
            </button>
            <h2>Selecciona una categoría</h2>
          </div>
          <CategoryCard onSelectCategory={handleSelectCategory} />
        </>
      )}

      {showForm && selectedCategory && (
        <ProductForm
          category={selectedCategory}
          onAddProduct={handleAddProduct}
          onClose={() => {
            setShowForm(false)
            setSelectedCategory(null)
          }}
        />
      )}
    </div>
  )
}

export default MyProducts
