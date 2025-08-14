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

function EjerciciosApp() {
  try {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [selectedAnswers, setSelectedAnswers] = React.useState({});
    const [showResults, setShowResults] = React.useState(false);

    const preguntas = [
      {
        pregunta: "¿Cuál es el símbolo químico del oro?",
        opciones: ["Au", "Ag", "Go", "Or"],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Cuántos protones tiene el carbono?",
        opciones: ["4", "6", "8", "12"],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué gas es más abundante en la atmósfera?",
        opciones: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Argón"],
        respuestaCorrecta: 2
      },
      {
        pregunta: "¿Cuál es la fórmula química del agua?",
        opciones: ["H₂O", "CO₂", "NaCl", "CH₄"],
        respuestaCorrecta: 0
      },
      {
        pregunta: "¿Qué tipo de enlace une los átomos en una molécula de sal (NaCl)?",
        opciones: ["Covalente", "Iónico", "Metálico", "Van der Waals"],
        respuestaCorrecta: 1
      }
    ];

    const handleAnswerSelect = (questionIndex, answerIndex) => {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: answerIndex
      });
    };

    const calculateScore = () => {
      let correct = 0;
      preguntas.forEach((pregunta, index) => {
        if (selectedAnswers[index] === pregunta.respuestaCorrecta) {
          correct++;
        }
      });
      return correct;
    };

    const getAnswerClass = (questionIndex, answerIndex) => {
      if (!showResults) {
        return selectedAnswers[questionIndex] === answerIndex ? 'answer-correct' : 'answer-default';
      }
      
      const pregunta = preguntas[questionIndex];
      if (answerIndex === pregunta.respuestaCorrecta) {
        return 'answer-correct';
      }
      if (selectedAnswers[questionIndex] === answerIndex && answerIndex !== pregunta.respuestaCorrecta) {
        return 'answer-incorrect';
      }
      return 'answer-default';
    };

    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="p-4 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-purple-400">Ejercicios de Química</h1>
            <div className="flex space-x-4">
              <a href="index.html" className="nav-link">Inicio</a>
              <a href="tabla.html" className="nav-link">Tabla Periódica</a>
              <a href="conceptos.html" className="nav-link">Conceptos</a>
              <a href="registro.html" className="nav-link">Registro</a>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Pon a Prueba tus Conocimientos</h2>
            <p className="text-xl text-gray-300">Responde las siguientes preguntas sobre química</p>
          </div>

          {!showResults ? (
            <div className="max-w-4xl mx-auto">
              {preguntas.map((pregunta, questionIndex) => (
                <div key={questionIndex} className="exercise-card mb-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">
                    Pregunta {questionIndex + 1}: {pregunta.pregunta}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pregunta.opciones.map((opcion, answerIndex) => (
                      <button
                        key={answerIndex}
                        onClick={() => handleAnswerSelect(questionIndex, answerIndex)}
                        className={`answer-btn ${getAnswerClass(questionIndex, answerIndex)}`}
                      >
                        {opcion}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowResults(true)}
                  className="px-8 py-4 bg-purple-600 text-white rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
                  disabled={Object.keys(selectedAnswers).length < preguntas.length}
                >
                  Ver Resultados
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="exercise-card">
                <h3 className="text-3xl font-bold mb-6 text-green-400">¡Resultados!</h3>
                <div className="text-6xl font-bold mb-4 text-blue-400">
                  {calculateScore()}/{preguntas.length}
                </div>
                <p className="text-xl text-gray-300 mb-6">
                  {calculateScore() === preguntas.length ? '¡Perfecto! Dominas la química.' :
                   calculateScore() >= preguntas.length * 0.7 ? '¡Muy bien! Tienes buen conocimiento.' :
                   '¡Sigue estudiando! Puedes mejorar.'}
                </p>
                <button
                  onClick={() => {
                    setSelectedAnswers({});
                    setShowResults(false);
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Intentar de Nuevo
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  } catch (error) {
    console.error('EjerciciosApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <EjerciciosApp />
  </ErrorBoundary>
);