import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import './Login.css'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulación de autenticación
    // En producción, harías una llamada a tu API
    try {
      if (!email || !password) {
        setError('Por favor completa todos los campos')
        setLoading(false)
        return
      }

      if (!email.includes('@')) {
        setError('Por favor ingresa un email válido')
        setLoading(false)
        return
      }

      // Simulación de delay de servidor
      await new Promise(resolve => setTimeout(resolve, 500))

      // Guardamos un token simulado
      localStorage.setItem('userToken', 'token_' + Date.now())
      localStorage.setItem('userEmail', email)

      onLogin()
      navigate('/home', { replace: true })
    } catch (err) {
      setError('Error al iniciar sesión. Intenta nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <LogIn size={48} className="login-icon" />
          <h1>Comida</h1>
          <p>Evita el desperdicio de alimentos</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>

        <div className="login-footer">
          <p>¿No tienes cuenta? <a href="#signup">Regístrate aquí</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login
