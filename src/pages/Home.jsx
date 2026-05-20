import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Home as HomeIcon, ShoppingCart, Package, User } from 'lucide-react'
import FoodList from '../components/FoodList'
import ShoppingList from '../components/ShoppingList'
import MyProducts from '../components/MyProducts'
import AIRecipes from '../components/AIRecipes'
import './Home.css'

function Home({ onLogout }) {
  const [activeTab, setActiveTab] = useState('home')
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('userEmail')
    onLogout()
    navigate('/login', { replace: true })
  }

  // Datos de ejemplo de alimentos
  const foods = [
    { id: 1, name: 'Leche', expiryDate: '2024-05-20', status: 'expired', quantity: 1 },
    { id: 2, name: 'Pan integral', expiryDate: '2024-05-21', status: 'expired', quantity: 2 },
    { id: 3, name: 'Yogur', expiryDate: '2024-05-22', status: 'expiring', quantity: 3 },
    { id: 4, name: 'Queso', expiryDate: '2024-05-23', status: 'expiring', quantity: 1 },
    { id: 5, name: 'Manzanas', expiryDate: '2024-06-05', status: 'fresh', quantity: 5 },
    { id: 6, name: 'Pollo congelado', expiryDate: '2024-06-20', status: 'fresh', quantity: 2 },
  ]

  return (
    <div className="home-container">
      {/* Header */}
      <header className="home-header">
        <div className="header-content">
          <h1>Comida</h1>
          <button className="logout-btn" onClick={handleLogout} title="Cerrar sesión">
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="home-main">
        {activeTab === 'home' && (
          <>
            <FoodList foods={foods} />
            <AIRecipes />
          </>
        )}
        {activeTab === 'shopping' && <ShoppingList />}
        {activeTab === 'products' && <MyProducts />}
        {activeTab === 'profile' && (
          <div className="tab-content">
            <p className="placeholder-text">Tu perfil estará aquí (próximamente)</p>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <button
          className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
          title="Inicio"
        >
          <HomeIcon size={24} />
          <span>Inicio</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'shopping' ? 'active' : ''}`}
          onClick={() => setActiveTab('shopping')}
          title="Lista de Compras"
        >
          <ShoppingCart size={24} />
          <span>Compras</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
          title="Mis Productos"
        >
          <Package size={24} />
          <span>Productos</span>
        </button>
        <button
          className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
          title="Perfil"
        >
          <User size={24} />
          <span>Perfil</span>
        </button>
      </nav>
    </div>
  )
}

export default Home
