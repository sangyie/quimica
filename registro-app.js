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
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-600 rounded">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function RegistroApp() {
  try {
    const [formData, setFormData] = React.useState({
      nombre: '',
      apellido: '',
      email: '',
      edad: '',
      institucion: '',
      nivel: '',
      interes: ''
    });
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error al registrar:', error);
      }
    };

    if (isSubmitted) {
      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="icon-check text-3xl text-white"></div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-green-400">¡Registro Exitoso!</h2>
            <p className="text-gray-300 mb-6">
              {formData.nombre}. Tu cuenta ha sido creada exitosamente.
            </p>
            <button
              onClick={() => window.location.href = 'index.html'}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Comenzar Aprendizaje
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="p-4 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-orange-400">Registro de Estudiante</h1>
            <div className="flex space-x-4">
              <a href="index.html" className="nav-link">Inicio</a>
              <a href="tabla.html" className="nav-link">Tabla Periódica</a>
              <a href="conceptos.html" className="nav-link">Conceptos</a>
              <a href="ejercicios.html" className="nav-link">Ejercicios</a>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 text-orange-400">Registro Estudiantes</h2>
              <p className="text-xl text-gray-300">Completa tu registro para comenzar tu aventura química</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Nombre *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Apellido *</label>
                    <input
                      type="text"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Tu apellido"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Correo Electrónico *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Edad *</label>
                    <input
                      type="number"
                      name="edad"
                      value={formData.edad}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Tu edad"
                      min="10"
                      max="100"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Nivel Educativo *</label>
                    <select
                      name="nivel"
                      value={formData.nivel}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Selecciona tu nivel</option>
                      <option value="secundaria">Secundaria</option>
                      <option value="preparatoria">Preparatoria</option>
                      <option value="universidad">Universidad</option>
                      <option value="posgrado">Posgrado</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Institución Educativa</label>
                  <input
                    type="text"
                    name="institucion"
                    value={formData.institucion}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Nombre de tu escuela o universidad"
                  />
                </div>

                <div>
                  <label className="form-label">¿Por qué te interesa la química?</label>
                  <textarea
                    name="interes"
                    value={formData.interes}
                    onChange={handleInputChange}
                    className="form-input h-24 resize-none"
                    placeholder="Cuéntanos qué te motiva a aprender química..."
                  />
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-orange-600 text-white rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg"
                  >
                    Crear Mi Cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('RegistroApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <RegistroApp />
  </ErrorBoundary>
);
