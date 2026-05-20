import { useState } from 'react'
import { Plus, Trash2, CheckCircle, Circle } from 'lucide-react'
import CategoryCard, { CATEGORIES } from './CategoryCard'
import ProductForm from './ProductForm'
import './ShoppingList.css'

function ShoppingList() {
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

  const handleTogglePurchased = (productId) => {
    setProducts(products.map(p =>
      p.id === productId ? { ...p, purchased: !p.purchased } : p
    ))
  }

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter(p => p.id !== productId))
  }

  const unpurchasedProducts = products.filter(p => !p.purchased)
  const purchasedProducts = products.filter(p => p.purchased)

  return (
    <div className="shopping-list">
      {!showForm ? (
        <>
          <div className="shopping-header">
            <h2>Mi Lista de Compras</h2>
            <button
              className="add-list-btn"
              onClick={() => setShowForm(true)}
              title="Agregar producto"
            >
              <Plus size={20} />
              Agregar
            </button>
          </div>

          {products.length === 0 ? (
            <div className="empty-shopping">
              <p>Tu lista de compras está vacía</p>
              <p className="subtitle">Presiona "Agregar" para comenzar</p>
            </div>
          ) : (
            <>
              {/* PRODUCTOS NO COMPRADOS */}
              {unpurchasedProducts.length > 0 && (
                <section className="products-section">
                  <h3>Por Comprar ({unpurchasedProducts.length})</h3>
                  <div className="products-list">
                    {unpurchasedProducts.map(product => (
                      <div
                        key={product.id}
                        className="product-item"
                        style={{ borderLeftColor: product.categoryColor }}
                      >
                        <button
                          className="checkbox-btn"
                          onClick={() => handleTogglePurchased(product.id)}
                        >
                          <Circle size={24} />
                        </button>
                        <div className="product-info">
                          <h4>{product.name}</h4>
                          <div className="product-meta">
                            <span className="product-quantity">Cantidad: {product.quantity}</span>
                            <span
                              className="product-category"
                              style={{ backgroundColor: product.categoryColor }}
                            >
                              {product.categoryName}
                            </span>
                          </div>
                          {product.notes && <p className="product-notes">{product.notes}</p>}
                        </div>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* PRODUCTOS COMPRADOS */}
              {purchasedProducts.length > 0 && (
                <section className="products-section completed">
                  <h3>Comprados ({purchasedProducts.length})</h3>
                  <div className="products-list">
                    {purchasedProducts.map(product => (
                      <div
                        key={product.id}
                        className="product-item completed"
                        style={{ borderLeftColor: product.categoryColor }}
                      >
                        <button
                          className="checkbox-btn active"
                          onClick={() => handleTogglePurchased(product.id)}
                        >
                          <CheckCircle size={24} />
                        </button>
                        <div className="product-info">
                          <h4>{product.name}</h4>
                          <div className="product-meta">
                            <span className="product-quantity">Cantidad: {product.quantity}</span>
                            <span
                              className="product-category"
                              style={{ backgroundColor: product.categoryColor }}
                            >
                              {product.categoryName}
                            </span>
                          </div>
                        </div>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </>
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

export default ShoppingList
