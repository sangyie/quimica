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

function ConceptosApp() {
  try {
    const conceptos = [
      {
        titulo: "Química",
        definicion: "Ciencia que estudia la composición, estructura, propiedades y transformaciones de la materia.",
        ejemplo: "El estudio de cómo se forman las moléculas de agua (H₂O)."
      },
      {
        titulo: "Átomo",
        definicion: "Unidad básica de la materia, compuesta por un núcleo con protones y neutrones, rodeado de electrones.",
        ejemplo: "Un átomo de carbono tiene 6 protones, 6 neutrones y 6 electrones."
      },
      {
        titulo: "Elemento",
        definicion: "Sustancia pura formada por átomos del mismo tipo, caracterizada por su número atómico.",
        ejemplo: "El oxígeno (O) es un elemento con número atómico 8."
      },
      {
        titulo: "Molécula",
        definicion: "Agrupación de dos o más átomos unidos por enlaces químicos.",
        ejemplo: "La molécula de agua (H₂O) está formada por 2 átomos de hidrógeno y 1 de oxígeno."
      },
      {
        titulo: "Enlace Químico",
        definicion: "Fuerza que mantiene unidos a los átomos en compuestos químicos.",
        ejemplo: "El enlace covalente en la molécula de metano (CH₄)."
      },
      {
        titulo: "Ion",
        definicion: "Átomo o molécula que ha ganado o perdido electrones, adquiriendo carga eléctrica.",
        ejemplo: "El ion sodio (Na⁺) ha perdido un electrón."
      },
      {
        titulo: "Compuesto",
        definicion: "Sustancia formada por la combinación química de dos o más elementos diferentes.",
        ejemplo: "El cloruro de sodio (NaCl) es un compuesto de sodio y cloro."
      },
      {
        titulo: "Reacción Química",
        definicion: "Proceso en el que las sustancias se transforman en otras con propiedades diferentes.",
        ejemplo: "La combustión: CH₄ + 2O₂ → CO₂ + 2H₂O"
      },
      {
        titulo: "Número Atómico",
        definicion: "Número de protones en el núcleo de un átomo, que define el elemento.",
        ejemplo: "El hidrógeno tiene número atómico 1 (un protón)."
      },
      {
        titulo: "Masa Atómica",
        definicion: "Masa promedio de los átomos de un elemento, expresada en unidades de masa atómica.",
        ejemplo: "La masa atómica del carbono es aproximadamente 12.01 u."
      }
    ];

    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="p-4 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-green-400">Conceptos Químicos</h1>
            <div className="flex space-x-4">
              <a href="index.html" className="nav-link">Inicio</a>
              <a href="tabla.html" className="nav-link">Tabla Periódica</a>
              <a href="ejercicios.html" className="nav-link">Ejercicios</a>
              <a href="registro.html" className="nav-link">Registro</a>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-green-400">Conceptos Fundamentales</h2>
            <p className="text-xl text-gray-300">Domina los conceptos básicos de la química</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conceptos.map((concepto, index) => (
              <div key={index} className="concept-card">
                <h3 className="text-xl font-bold mb-3 text-blue-400">{concepto.titulo}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{concepto.definicion}</p>
                <div className="bg-gray-700 p-3 rounded-lg">
                  <p className="text-sm text-green-400 font-semibold mb-1">Ejemplo:</p>
                  <p className="text-sm text-gray-200">{concepto.ejemplo}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('ConceptosApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ConceptosApp />
  </ErrorBoundary>
);