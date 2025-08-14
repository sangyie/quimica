function Header({ activeSection, setActiveSection }) {
  try {
    return (
      <header className="bg-[var(--card-background)] shadow-sm border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] rounded-full flex items-center justify-center bounce-animation shadow-lg">
                <div className="icon-atom text-2xl text-white"></div>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                🧪 QuímiKids 🌟
              </h1>
            </div>
            
            <nav className="flex space-x-4">
              <button
                onClick={() => setActiveSection('periodic-table')}
                className={`nav-button ${activeSection === 'periodic-table' ? 'nav-button-active' : 'nav-button-inactive'}`}
              >
                <div className="flex items-center space-x-2">
                  <div className="icon-grid-3x3 text-lg"></div>
                  <span>Tabla Periódica</span>
                </div>
              </button>
              
              <button
                onClick={() => setActiveSection('learning')}
                className={`nav-button ${activeSection === 'learning' ? 'nav-button-active' : 'nav-button-inactive'}`}
              >
                <div className="flex items-center space-x-2">
                  <div className="icon-book-open text-lg"></div>
                  <span>Aprendizaje</span>
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}