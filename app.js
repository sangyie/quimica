class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden" data-name="app" data-file="app.js">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-blue-500 opacity-20 atom-animation"></div>
          <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-green-500 opacity-30 molecule-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-purple-500 opacity-15 atom-animation"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-yellow-500 opacity-25 molecule-bounce"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 p-6">
          <div className="flex justify-center space-x-6">
            <button 
              onClick={() => window.location.href = 'tabla.html'}
              className="hero-button bg-blue-600 text-white border-blue-600 hover:bg-blue-700 glow-effect"
            >
              <div className="flex items-center space-x-2">
                <div className="icon-grid-3x3 text-xl"></div>
                <span>Tabla Periódica</span>
              </div>
            </button>
            <button 
              onClick={() => window.location.href = 'conceptos.html'}
              className="hero-button bg-green-600 text-white border-green-600 hover:bg-green-700 glow-effect"
            >
              <div className="flex items-center space-x-2">
                <div className="icon-book-open text-xl"></div>
                <span>Conceptos</span>
              </div>
            </button>
            <button 
              onClick={() => window.location.href = 'ejercicios.html'}
              className="hero-button bg-purple-600 text-white border-purple-600 hover:bg-purple-700 glow-effect"
            >
              <div className="flex items-center space-x-2">
                <div className="icon-brain text-xl"></div>
                <span>Ejercicios</span>
              </div>
            </button>
            <button 
              onClick={() => window.location.href = 'registro.html'}
              className="hero-button bg-orange-600 text-white border-orange-600 hover:bg-orange-700 glow-effect"
            >
              <div className="flex items-center space-x-2">
                <div className="icon-user-plus text-xl"></div>
                <span>Registro</span>
              </div>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
              Quimikids
            </h1>
            <p className="text-2xl mb-8 text-gray-300">
              Una forma más divertida de aprender Química
            </p>
            <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
              Descubre el fascinante mundo de la química a través de nuestra plataforma interactiva. 
              Explora elementos, aprende conceptos fundamentales y practica con ejercicios diseñados para tu éxito académico.
            </p>
          </div>

          {/* Animated Chemistry Elements */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="atom-animation">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg glow-effect">
                <div className="icon-atom text-3xl text-white"></div>
              </div>
            </div>
            <div className="molecule-bounce">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg glow-effect">
                <div className="icon-flask-conical text-2xl text-white"></div>
              </div>
            </div>
            <div className="atom-animation" style={{ animationDelay: '1s' }}>
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg glow-effect">
                <div className="icon-microscope text-3xl text-white"></div>
              </div>
            </div>
            <div className="molecule-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="w-22 h-22 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg glow-effect">
                <div className="icon-beaker text-2xl text-white"></div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <button 
            onClick={() => window.location.href = 'tabla.html'}
            className="hero-button bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent hover:from-blue-700 hover:to-purple-700 text-xl px-12 py-5 glow-effect"
          >
            Comenzar Aprendizaje
          </button>
        </main>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);