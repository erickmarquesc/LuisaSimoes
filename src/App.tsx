import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logoLuisa from './assets/logo branca.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <img src={logoLuisa} className="logo" alt="Vite logo" />
      </div>

      <h1>Projeto Luiza Simões </h1>

      <div className="card">
        <p>
          Faltam <code>2 meses</code> para entrega do projeto
        </p>
      </div>
      <p className="read-the-docs">
        Entre em contato com o desenvolvedor em caso de dúvidas
      </p>
    </>
  )
}

export default App
