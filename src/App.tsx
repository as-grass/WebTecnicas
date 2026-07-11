import React, { useState } from 'react';
import { Home, Brain, Shield, BarChart3, FileText, Globe } from 'lucide-react';
import { useLang } from './hooks/useLang';
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
  const { lang, setLang, t } = useLang();
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
      
      {/* Language Toggle */}
      <button
        onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
        aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a español'}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white border border-gray-200 shadow-lg rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:shadow-xl transition-all"
      >
        <Globe size={16} className="text-blue-600" />
        <span className={lang === 'es' ? 'text-blue-600' : 'text-gray-400'}>ES</span>
        <span className="text-gray-300">|</span>
        <span className={lang === 'en' ? 'text-blue-600' : 'text-gray-400'}>EN</span>
      </button>

      {/* Navigation Tabs */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around py-2">
          {([
            { page: 'landing' as Page, icon: Home, label: t.nav.home },
            { page: 'prediction' as Page, icon: Brain, label: t.nav.prediction },
            { page: 'results' as Page, icon: Shield, label: t.nav.results },
            { page: 'dashboard' as Page, icon: BarChart3, label: t.nav.dashboard },
            { page: 'legal' as Page, icon: FileText, label: t.nav.legal }
          ]).map(({ page, icon: Icon, label }) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all ${
                currentPage === page
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;