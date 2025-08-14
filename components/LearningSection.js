function LearningSection() {
  try {
    const [selectedTopic, setSelectedTopic] = React.useState('basics');

    const topics = {
      basics: {
        title: '🌟 Lo Básico',
        icon: 'star',
        content: [
          { title: '⚛️ ¿Qué son los Átomos?', description: '¡Los átomos son como pequeños bloques de construcción mágicos! Todo lo que ves está hecho de estos bloques súper pequeños.' },
          { title: '🔢 Números Especiales', description: 'Cada elemento tiene un número especial que lo hace único, ¡como tu edad te hace especial a ti!' },
          { title: '⚖️ ¿Cuánto Pesan?', description: 'Los átomos tienen peso, pero son tan pequeños que necesitamos números especiales para medirlos.' }
        ]
      },
      groups: {
        title: '👨‍👩‍👧‍👦 Familias',
        icon: 'heart',
        content: [
          { title: '🔥 Metales Súper Activos', description: '¡Estos elementos son como niños muy enérgicos! Les encanta jugar y hacer reacciones divertidas.' },
          { title: '😴 Gases Tranquilos', description: 'Estos gases son como niños muy tranquilos. Les gusta estar solos y no molestan a nadie.' },
          { title: '🏊 Amantes del Agua', description: '¡A estos elementos les encanta nadar! Los encuentras en piscinas y en la sal del mar.' }
        ]
      },
      properties: {
        title: '🎨 Características',
        icon: 'palette',
        content: [
          { title: '📏 Tamaños Diferentes', description: '¡Los átomos vienen en diferentes tamaños! Algunos son grandes como pelotas de basketball, otros pequeños como canicas.' },
          { title: '🧲 Poder de Atracción', description: 'Algunos átomos son como imanes súper fuertes que atraen a otros átomos hacia ellos.' },
          { title: '⚡ Energía Mágica', description: 'Los átomos necesitan energía especial para cambiar, ¡como cuando necesitas energía para correr!' }
        ]
      }
    };

    return (
      <div className="space-y-6" data-name="learning-section" data-file="components/LearningSection.js">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 text-[var(--primary-color)]">
            🎓 ¡Aventura de Aprendizaje! 🚀
          </h2>
          <p className="text-xl text-[var(--text-secondary)] font-medium">
            ¡Descubre los secretos mágicos de la química! ✨🧪
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {Object.entries(topics).map(([key, topic]) => (
            <button
              key={key}
              onClick={() => setSelectedTopic(key)}
              className={`nav-button ${selectedTopic === key ? 'nav-button-active' : 'nav-button-inactive'}`}
            >
              <div className="flex items-center space-x-2">
                <div className={`icon-${topic.icon} text-lg`}></div>
                <span>{topic.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="fun-card">
          <h3 className="text-3xl font-bold mb-6 flex items-center justify-center space-x-3 text-[var(--primary-color)]">
            <div className={`icon-${topics[selectedTopic].icon} text-2xl`}></div>
            <span>{topics[selectedTopic].title}</span>
          </h3>

          <div className="grid gap-6">
            {topics[selectedTopic].content.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-bold mb-3 text-[var(--primary-color)]">{item.title}</h4>
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 rounded-2xl p-6 border-4 border-yellow-300 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center space-x-3 text-orange-600">
            <div className="icon-lightbulb text-2xl bounce-animation"></div>
            <span>🤯 ¡Dato Súper Increíble! 🤯</span>
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            💧 ¡El hidrógeno es como el elemento más popular del universo! 🌟 
            Está en todas partes: en el agua que bebes, en las estrellas que brillan, 
            ¡y hasta en tu cuerpo! Es como el mejor amigo de todos los demás elementos. 
            ¡Sin él, no habría agua ni estrellas brillantes en el cielo! ✨🌟
          </p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LearningSection component error:', error);
    return null;
  }
}