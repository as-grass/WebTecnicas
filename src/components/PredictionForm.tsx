import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
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

interface PredictionFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onComplete: () => void;
  onBack: () => void;
}

// Enum values expected by the prediction model — NEVER translated.
const ESTADO_CIVIL_VALUES = ['SOLTERO(A)', 'UNION LIBRE', 'CASADO(A)', 'DIVORCIADO(A)', 'VIUDO(A)'];
const ESCOLARIDAD_VALUES = [
  'PREESCOLAR',
  'BASICA PRIMARIA',
  'BASICA SECUNDARIA',
  'MEDIA TECNICA',
  'TECNICA O TECNOLOGICA',
  'PROFESIONAL',
  'ESPECIALIZACION',
  'MAESTRIA'
];
const METODO_VALUES = [
  'INTOXICACIONES',
  'ARMA CORTOPUNZANTE',
  'AHORCAMIENTO',
  'LANZAMIENTO AL VACIO',
  'LANZAMIENTO A VEHICULO',
  'ARMA DE FUEGO',
  'INMOLACION',
  'OTROS'
];

export default function PredictionForm({ formData, setFormData, onComplete, onBack }: PredictionFormProps) {
  const { t, tv } = useLang();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      onBack();
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.edad && formData.sexo && formData.estrato && formData.gestante && formData.estadoCivil && formData.escolaridad;
      case 2:
        return formData.conflictoPareja && formData.problemasFamiliares && formData.problemasLaborales &&
               formData.problemasJuridicos && formData.problemasEconomicos && formData.muerteFamiliar && formData.antecedenteViolencia;
      case 3:
        return formData.trastornoDepresivo && formData.trastornoBipolar && formData.trastornoPersonalidad &&
               formData.esquizofrenia && formData.ideacionSuicida && formData.antecedentesFamiliares &&
               formData.consumoSPA && formData.enfermedadCronica;
      case 4:
        return formData.metodoSuicidio && formData.intentosPrevios;
      case 5:
        return true;
      default:
        return false;
    }
  };

  const renderYesNoSelect = (field: keyof FormData) => (
    <div key={field}>
      <label className="block text-sm font-medium text-gray-700 mb-2">{t.fields[field]}</label>
      <select
        value={formData[field]}
        onChange={(e) => updateFormData(field, e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">{t.common.select}</option>
        <option value="NO">{tv('NO')}</option>
        <option value="SI">{tv('SI')}</option>
      </select>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.form.step1Title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.fields.edad}</label>
                <input
                  type="number"
                  min="0"
                  max="120"
                  value={formData.edad}
                  onChange={(e) => updateFormData('edad', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t.form.agePlaceholder}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.fields.sexo}</label>
                <select
                  value={formData.sexo}
                  onChange={(e) => updateFormData('sexo', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">{t.common.select}</option>
                  <option value="FEMENINO">{tv('FEMENINO')}</option>
                  <option value="MASCULINO">{tv('MASCULINO')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.fields.estrato}</label>
                <select
                  value={formData.estrato}
                  onChange={(e) => updateFormData('estrato', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">{t.common.select}</option>
                  {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.fields.gestante}</label>
                <select
                  value={formData.gestante}
                  onChange={(e) => updateFormData('gestante', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">{t.common.select}</option>
                  <option value="NO">{tv('NO')}</option>
                  <option value="SI">{tv('SI')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.fields.estadoCivil}</label>
                <select
                  value={formData.estadoCivil}
                  onChange={(e) => updateFormData('estadoCivil', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">{t.common.select}</option>
                  {ESTADO_CIVIL_VALUES.map(v => (
                    <option key={v} value={v}>{tv(v)}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.fields.escolaridad}</label>
                <select
                  value={formData.escolaridad}
                  onChange={(e) => updateFormData('escolaridad', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">{t.common.select}</option>
                  {ESCOLARIDAD_VALUES.map(v => (
                    <option key={v} value={v}>{tv(v)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.form.step2Title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {([
                'conflictoPareja',
                'problemasFamiliares',
                'problemasLaborales',
                'problemasJuridicos',
                'problemasEconomicos',
                'muerteFamiliar',
                'antecedenteViolencia'
              ] as (keyof FormData)[]).map(renderYesNoSelect)}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.form.step3Title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {([
                'trastornoDepresivo',
                'trastornoBipolar',
                'trastornoPersonalidad',
                'esquizofrenia',
                'ideacionSuicida',
                'antecedentesFamiliares',
                'consumoSPA',
                'enfermedadCronica'
              ] as (keyof FormData)[]).map(renderYesNoSelect)}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.form.step4Title}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.fields.metodoSuicidio}</label>
                <select
                  value={formData.metodoSuicidio}
                  onChange={(e) => updateFormData('metodoSuicidio', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">{t.common.select}</option>
                  {METODO_VALUES.map(v => (
                    <option key={v} value={v}>{tv(v)}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.fields.intentosPrevios}</label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={formData.intentosPrevios}
                  onChange={(e) => updateFormData('intentosPrevios', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t.form.attemptsPlaceholder}
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.form.step5Title}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Demographics */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-4">{t.form.reviewDemographics}</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>{t.shortLabels.edad}:</strong> {formData.edad} {t.common.years}</p>
                  <p><strong>{t.shortLabels.sexo}:</strong> {tv(formData.sexo)}</p>
                  <p><strong>{t.shortLabels.estrato}:</strong> {formData.estrato}</p>
                  <p><strong>{t.shortLabels.estadoCivil}:</strong> {tv(formData.estadoCivil)}</p>
                  <p><strong>{t.shortLabels.escolaridad}:</strong> {tv(formData.escolaridad)}</p>
                </div>
              </div>

              {/* Clinical Conditions */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-4">{t.form.reviewClinical}</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>{t.shortLabels.metodo}:</strong> {tv(formData.metodoSuicidio)}</p>
                  <p><strong>{t.shortLabels.intentosPrevios}:</strong> {formData.intentosPrevios}</p>
                  <p><strong>{t.shortLabels.trastornoDepresivo}:</strong> {tv(formData.trastornoDepresivo)}</p>
                  <p><strong>{t.shortLabels.ideacionSuicida}:</strong> {tv(formData.ideacionSuicida)}</p>
                  <p><strong>{t.shortLabels.consumoSPA}:</strong> {tv(formData.consumoSPA)}</p>
                </div>
              </div>

              {/* Risk Factors */}
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-4">{t.form.reviewRiskFactors}</h3>
                <div className="space-y-1 text-sm">
                  {Object.entries(formData).map(([key, value]) => {
                    if (value === 'SI') {
                      const labels: Record<string, string> = {
                        conflictoPareja: t.shortLabels.conflictoPareja,
                        problemasFamiliares: t.shortLabels.problemasFamiliares,
                        problemasLaborales: t.shortLabels.problemasLaborales,
                        trastornoDepresivo: t.shortLabels.trastornoDepresivo,
                        ideacionSuicida: t.shortLabels.ideacionSuicida,
                        consumoSPA: t.shortLabels.consumoSPA,
                        antecedentesFamiliares: t.shortLabels.antecedentesFamiliares,
                        antecedenteViolencia: t.shortLabels.antecedenteViolencia
                      };
                      return labels[key] ? (
                        <p key={key} className="text-red-700">• {labels[key]}</p>
                      ) : null;
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">{t.form.modelInfoTitle}</h4>
              <p className="text-sm text-yellow-700">
                {t.form.modelInfoText}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              {t.form.stepOf(currentStep, totalSteps)}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {t.form.completed(Math.round((currentStep / totalSteps) * 100))}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
          >
            <ChevronLeft size={20} className="mr-2" />
            {currentStep === 1 ? t.form.backToHome : t.form.previous}
          </button>

          {currentStep < totalSteps ? (
            <button
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`flex items-center px-6 py-3 rounded-lg text-white transition-all ${
                isStepValid()
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {t.form.next}
              <ChevronRight size={20} className="ml-2" />
            </button>
          ) : (
            <button
              onClick={onComplete}
              className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all"
            >
              <CheckCircle size={20} className="mr-2" />
              {t.form.generate}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
