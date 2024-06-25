import './assets/css/style.css'

function App() {
  return (
    <>
      <header class="header">
        {/* Logo */}
        <div class="logo-box">
          <img src="src/assets/img/logo.png" alt="logo" class="logo" />
        </div>

        {/* Hero Content */}
        <div class="text-box">
          <h1 class="heading-primary">
            <span className="heading-primary-main">FitTrackr</span>
            <span className="heading-primary-sub">Empower your fitness journey</span>
          </h1>
        </div>

      </header>
    </>
  )
}

export default App
