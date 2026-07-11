import React from 'react';
import { Download, Share2, RotateCcw, BarChart3, Clock, AlertTriangle, CheckCircle, Target } from 'lucide-react';
import { useLang } from '../hooks/useLang';

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

interface ResultsPageProps {
  formData: FormData;
  onNewEvaluation: () => void;
  onViewDashboard: () => void;
}

export default function ResultsPage({ formData, onNewEvaluation, onViewDashboard }: ResultsPageProps) {
  const { lang, t, tv } = useLang();

  // Calculate prediction based on form data.
  // Internal risk-level values ('Alto' | 'Moderado' | 'Bajo') are kept in
  // Spanish because they drive the logic; only labels are translated.
  const calculatePrediction = () => {
    let score = 0;
    const riskFactors = [];

    // Age factor
    const age = parseInt(formData.edad);
    if (age < 25) {
      score += 15;
      riskFactors.push(t.results.factorYoungAge);
    }

    // Previous attempts
    const attempts = parseInt(formData.intentosPrevios);
    if (attempts > 0) {
      score += 20;
      riskFactors.push(t.results.factorPreviousAttempts);
    }

    // Mental health conditions
    if (formData.trastornoDepresivo === 'SI') {
      score += 15;
      riskFactors.push(t.results.factorDepressive);
    }
    if (formData.ideacionSuicida === 'SI') {
      score += 18;
      riskFactors.push(t.results.factorSuicidalIdeation);
    }
    if (formData.consumoSPA === 'SI') {
      score += 12;
      riskFactors.push(t.results.factorSubstanceUse);
    }
    if (formData.antecedentesFamiliares === 'SI') {
      score += 10;
      riskFactors.push(t.results.factorFamilyHistory);
    }

    // Social factors
    if (formData.problemasFamiliares === 'SI') {
      score += 8;
      riskFactors.push(t.results.factorFamilyProblems);
    }
    if (formData.conflictoPareja === 'SI') {
      score += 7;
      riskFactors.push(t.results.factorPartnerConflict);
    }
    if (formData.antecedenteViolencia === 'SI') {
      score += 10;
      riskFactors.push(t.results.factorViolenceHistory);
    }

    // High lethality methods
    const highLethalityMethods = ['AHORCAMIENTO', 'ARMA DE FUEGO', 'LANZAMIENTO AL VACIO'];
    if (highLethalityMethods.includes(formData.metodoSuicidio)) {
      score += 15;
    }

    return {
      probability: Math.min(Math.max(score, 15), 95),
      riskFactors,
      riskLevel: score > 60 ? 'Alto' : score > 35 ? 'Moderado' : 'Bajo'
    };
  };

  const result = calculatePrediction();
  const currentTime = new Date().toLocaleString(lang === 'es' ? 'es-ES' : 'en-US');

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Alto': return 'text-red-600 bg-red-50';
      case 'Moderado': return 'text-yellow-600 bg-yellow-50';
      case 'Bajo': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getRiskRecommendation = (level: string, probability: number) => {
    if (level === 'Alto' || probability > 70) {
      return t.results.recommendationHigh;
    } else if (level === 'Moderado' || probability > 40) {
      return t.results.recommendationModerate;
    } else {
      return t.results.recommendationLow;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.results.title}</h1>
              <div className="flex items-center text-gray-600">
                <Clock size={16} className="mr-2" />
                <span>{currentTime}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all">
                <Download size={16} className="mr-2" />
                {t.results.export}
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all">
                <Share2 size={16} className="mr-2" />
                {t.results.share}
              </button>
            </div>
          </div>
        </div>

        {/* Main Result Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-blue-600 mb-4">
              {result.probability}%
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {t.results.probabilityTitle}
            </h2>
            <div className={`inline-block px-4 py-2 rounded-full text-lg font-medium ${getRiskColor(result.riskLevel)}`}>
              {t.results.riskLevelLabel} {t.riskLevels[result.riskLevel]}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`h-4 rounded-full transition-all duration-1000 ${
                  result.riskLevel === 'Alto' ? 'bg-red-500' :
                  result.riskLevel === 'Moderado' ? 'bg-yellow-500' : 'bg-green-500'
                }`}
                style={{ width: `${result.probability}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Recommendation Alert */}
          <div className={`border-l-4 p-4 rounded-r-lg ${
            result.riskLevel === 'Alto' ? 'border-red-500 bg-red-50' :
            result.riskLevel === 'Moderado' ? 'border-yellow-500 bg-yellow-50' : 'border-green-500 bg-green-50'
          }`}>
            <div className="flex items-start">
              <AlertTriangle className={`mr-3 mt-1 ${
                result.riskLevel === 'Alto' ? 'text-red-600' :
                result.riskLevel === 'Moderado' ? 'text-yellow-600' : 'text-green-600'
              }`} size={20} />
              <div>
                <h4 className="font-semibold mb-1">{t.results.recommendationTitle}</h4>
                <p className="text-sm">{getRiskRecommendation(result.riskLevel, result.probability)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Model Metrics */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Target className="mr-2 text-blue-600" size={24} />
              {t.results.modelMetricsTitle}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">96%</div>
                <div className="text-sm text-green-700">{t.results.f1Score}</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-blue-700">{t.results.recall}</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              {t.results.modelMetricsText}
            </p>
          </div>

          {/* Risk Factors */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertTriangle className="mr-2 text-red-600" size={24} />
              {t.results.riskFactorsTitle}
            </h3>
            <div className="space-y-2">
              {result.riskFactors.length > 0 ? (
                result.riskFactors.map((factor, index) => (
                  <div key={index} className="flex items-center text-red-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    {factor}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">{t.results.noRiskFactors}</p>
              )}
            </div>
          </div>
        </div>

        {/* Case Summary */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={24} />
            {t.results.caseSummaryTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-blue-700 mb-3">{t.results.demographics}</h4>
              <div className="space-y-2 text-sm">
                <p><strong>{t.shortLabels.edad}:</strong> {formData.edad} {t.common.years}</p>
                <p><strong>{t.shortLabels.sexo}:</strong> {tv(formData.sexo)}</p>
                <p><strong>{t.shortLabels.estrato}:</strong> {formData.estrato}</p>
                <p><strong>{t.shortLabels.estadoCivil}:</strong> {tv(formData.estadoCivil)}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-3">{t.results.clinical}</h4>
              <div className="space-y-2 text-sm">
                <p><strong>{t.shortLabels.metodo}:</strong> {tv(formData.metodoSuicidio)}</p>
                <p><strong>{t.shortLabels.intentosPrevios}:</strong> {formData.intentosPrevios}</p>
                <p><strong>{t.shortLabels.trastornoDepresivo}:</strong> {tv(formData.trastornoDepresivo)}</p>
                <p><strong>{t.shortLabels.ideacionSuicida}:</strong> {tv(formData.ideacionSuicida)}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-3">{t.results.riskFactors}</h4>
              <div className="space-y-2 text-sm">
                <p><strong>{t.shortLabels.consumoSPA}:</strong> {tv(formData.consumoSPA)}</p>
                <p><strong>{t.shortLabels.problemasFamiliares}:</strong> {tv(formData.problemasFamiliares)}</p>
                <p><strong>{t.shortLabels.conflictoPareja}:</strong> {tv(formData.conflictoPareja)}</p>
                <p><strong>{t.shortLabels.antecedenteViolencia}:</strong> {tv(formData.antecedenteViolencia)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Variables Grid */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold mb-6">{t.results.variablesTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.entries(formData).map(([key, value]) => (
              <div
                key={key}
                className={`p-3 rounded-lg text-sm ${
                  value === 'SI' ? 'bg-red-100 text-red-800 font-medium' : 'bg-gray-100 text-gray-700'
                }`}
              >
                <div className="font-medium">
                  {t.fields[key] ?? key}
                </div>
                <div className="text-xs mt-1">{value ? tv(value) : t.common.notSpecified}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={onNewEvaluation}
            className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
          >
            <RotateCcw size={20} className="mr-2" />
            {t.results.newEvaluation}
          </button>
          <button
            onClick={onViewDashboard}
            className="flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
          >
            <BarChart3 size={20} className="mr-2" />
            {t.results.viewDashboard}
          </button>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-2">{t.results.disclaimerTitle}</h4>
          <p className="text-sm text-yellow-700">
            {t.results.disclaimerText}
          </p>
        </div>
      </div>
    </div>
  );
}
