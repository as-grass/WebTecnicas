import React from 'react';
import { Play, TrendingUp, Target, Layers, BarChart } from 'lucide-react';

interface LandingPageProps {
  onStartEvaluation: () => void;
}

export default function LandingPage({ onStartEvaluation }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Sistema de Predicción de Remisión a Psiquiatría
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          Modelo Stacking Classifier con 96% de precisión (F1-Score) para apoyo en decisiones clínicas
        </p>
      </header>

      {/* Hero Section */}
      <section className="text-center py-8 px-6">
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Sistema avanzado que utiliza K-Means con 3 clústeres optimizados para segmentar
            perfiles de riesgo y proporcionar predicciones precisas basadas en 23 variables del dataset real.
          </p>
          <button
            onClick={onStartEvaluation}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            <Play size={20} />
            Iniciar Evaluación
          </button>
        </div>
      </section>

      {/* Metrics Cards */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="text-green-600" size={24} />
                <span className="text-3xl font-bold text-green-600">96%</span>
              </div>
              <p className="text-gray-700 font-semibold">Precisión del Modelo</p>
              <p className="text-sm text-gray-500">(F1-Score)</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-2">
                <Target className="text-blue-600" size={24} />
                <span className="text-3xl font-bold text-blue-600">100%</span>
              </div>
              <p className="text-gray-700 font-semibold">Recall del Sistema</p>
              <p className="text-sm text-gray-500">Detección completa</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-2">
                <Layers className="text-purple-600" size={24} />
                <span className="text-3xl font-bold text-purple-600">3</span>
              </div>
              <p className="text-gray-700 font-semibold">Clústeres K-Means</p>
              <p className="text-sm text-gray-500">Perfiles optimizados</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-2">
                <BarChart className="text-orange-600" size={24} />
                <span className="text-3xl font-bold text-orange-600">23</span>
              </div>
              <p className="text-gray-700 font-semibold">Variables Analizadas</p>
              <p className="text-sm text-gray-500">Dataset completo</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cómo Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Captura de Datos</h3>
              <p className="text-gray-600">
                Recolección de 23 variables del dataset real incluyendo demografía,
                factores de riesgo y condiciones clínicas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Análisis IA</h3>
              <p className="text-gray-600">
                Procesamiento mediante Stacking Classifier entrenado con datos reales
                y segmentación K-Means optimizada.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Resultados</h3>
              <p className="text-gray-600">
                Probabilidad de remisión calculada con recomendaciones específicas
                basadas en el perfil de riesgo identificado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Profiles */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Perfiles de Riesgo K-Means
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              Nuestro sistema utiliza clustering K-Means con 3 clústeres optimizados, 
              superando metodologías como DBSCAN en interpretabilidad y acción clínica:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                <h4 className="font-semibold text-red-800 mb-2">Clúster 1: Alto Riesgo</h4>
                <p className="text-sm text-red-700">
                  Jóvenes con múltiples factores de riesgo, métodos de alta letalidad
                  y bajo apoyo familiar.
                </p>
              </div>
              <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                <h4 className="font-semibold text-yellow-800 mb-2">Clúster 2: Riesgo Moderado</h4>
                <p className="text-sm text-yellow-700">
                  Adultos con comorbilidades médicas y depresión mayor,
                  métodos de baja-media letalidad.
                </p>
              </div>
              <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                <h4 className="font-semibold text-orange-800 mb-2">Clúster 3: Riesgo Específico</h4>
                <p className="text-sm text-orange-700">
                  Adultos mayores con aislamiento social y pérdidas recientes,
                  planificación detallada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}