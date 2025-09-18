import React, { useState } from 'react';
import { Home, Brain, Shield, BarChart3, FileText } from 'lucide-react';
import LandingPage from './components/LandingPage';
import PredictionForm from './components/PredictionForm';
import ResultsPage from './components/ResultsPage';
import Dashboard from './components/Dashboard';
import LegalPage from './components/LegalPage';

type Page = 'landing' | 'prediction' | 'results' | 'dashboard' | 'legal';

interface FormData {
  edad: string;
  sexo: string;
  estrato: string;
  gestante: string;
  estadoCivil: string;
  escolaridad: string;
  conflictoPareja: string;
  problemasFamiliares: string;
  problemasLaborales: string;
  problemasJuridicos: string;
  problemasEconomicos: string;
  muerteFamiliar: string;
  antecedenteViolencia: string;
  trastornoDepresivo: string;
  trastornoBipolar: string;
  trastornoPersonalidad: string;
  esquizofrenia: string;
  ideacionSuicida: string;
  antecedentesFamiliares: string;
  consumoSPA: string;
  enfermedadCronica: string;
  metodoSuicidio: string;
  intentosPrevios: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [formData, setFormData] = useState<FormData>({
    edad: '',
    sexo: '',
    estrato: '',
    gestante: '',
    estadoCivil: '',
    escolaridad: '',
    conflictoPareja: '',
    problemasFamiliares: '',
    problemasLaborales: '',
    problemasJuridicos: '',
    problemasEconomicos: '',
    muerteFamiliar: '',
    antecedenteViolencia: '',
    trastornoDepresivo: '',
    trastornoBipolar: '',
    trastornoPersonalidad: '',
    esquizofrenia: '',
    ideacionSuicida: '',
    antecedentesFamiliares: '',
    consumoSPA: '',
    enfermedadCronica: '',
    metodoSuicidio: '',
    intentosPrevios: ''
  });

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onStartEvaluation={() => setCurrentPage('prediction')} />;
      case 'prediction':
        return (
          <PredictionForm
            formData={formData}
            setFormData={setFormData}
            onComplete={() => setCurrentPage('results')}
            onBack={() => setCurrentPage('landing')}
          />
        );
      case 'results':
        return (
          <ResultsPage
            formData={formData}
            onNewEvaluation={() => setCurrentPage('prediction')}
            onViewDashboard={() => setCurrentPage('dashboard')}
          />
        );
      case 'dashboard':
        return <Dashboard />;
      case 'legal':
        return <LegalPage />;
      default:
        return <LandingPage onStartEvaluation={() => setCurrentPage('prediction')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {renderCurrentPage()}
      
      {/* Navigation Tabs */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around py-2">
          <button
            onClick={() => setCurrentPage('landing')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
              currentPage === 'landing'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Home size={20} />
            <span className="text-xs mt-1">Inicio</span>
          </button>
          <button
            onClick={() => setCurrentPage('prediction')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
              currentPage === 'prediction'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Brain size={20} />
            <span className="text-xs mt-1">Predicción</span>
          </button>
          <button
            onClick={() => setCurrentPage('results')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
              currentPage === 'results'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <Shield size={20} />
            <span className="text-xs mt-1">Resultados</span>
          </button>
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
              currentPage === 'dashboard'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <BarChart3 size={20} />
            <span className="text-xs mt-1">Dashboard</span>
          </button>
          <button
            onClick={() => setCurrentPage('legal')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
              currentPage === 'legal'
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <FileText size={20} />
            <span className="text-xs mt-1">Legal</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;