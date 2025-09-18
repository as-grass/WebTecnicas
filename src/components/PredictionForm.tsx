import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

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

export default function PredictionForm({ formData, setFormData, onComplete, onBack }: PredictionFormProps) {
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Información Demográfica</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Edad de la Víctima</label>
                <input
                  type="number"
                  min="0"
                  max="120"
                  value={formData.edad}
                  onChange={(e) => updateFormData('edad', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0-120 años"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sexo</label>
                <select
                  value={formData.sexo}
                  onChange={(e) => updateFormData('sexo', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Seleccionar</option>
                  <option value="FEMENINO">Femenino</option>
                  <option value="MASCULINO">Masculino</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estrato Socioeconómico</label>
                <select
                  value={formData.estrato}
                  onChange={(e) => updateFormData('estrato', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Seleccionar</option>
                  {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gestante</label>
                <select
                  value={formData.gestante}
                  onChange={(e) => updateFormData('gestante', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Seleccionar</option>
                  <option value="NO">No</option>
                  <option value="SI">Sí</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estado Civil</label>
                <select
                  value={formData.estadoCivil}
                  onChange={(e) => updateFormData('estadoCivil', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Seleccionar</option>
                  <option value="SOLTERO(A)">Soltero(a)</option>
                  <option value="UNION LIBRE">Unión Libre</option>
                  <option value="CASADO(A)">Casado(a)</option>
                  <option value="DIVORCIADO(A)">Divorciado(a)</option>
                  <option value="VIUDO(A)">Viudo(a)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Escolaridad</label>
                <select
                  value={formData.escolaridad}
                  onChange={(e) => updateFormData('escolaridad', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Seleccionar</option>
                  <option value="PREESCOLAR">Preescolar</option>
                  <option value="BASICA PRIMARIA">Básica Primaria</option>
                  <option value="BASICA SECUNDARIA">Básica Secundaria</option>
                  <option value="MEDIA TECNICA">Media Técnica</option>
                  <option value="TECNICA O TECNOLOGICA">Técnica o Tecnológica</option>
                  <option value="PROFESIONAL">Profesional</option>
                  <option value="ESPECIALIZACION">Especialización</option>
                  <option value="MAESTRIA">Maestría</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Factores Sociales y Relacionales</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { field: 'conflictoPareja', label: 'Conflicto con Pareja o Ex Pareja' },
                { field: 'problemasFamiliares', label: 'Problemas Familiares' },
                { field: 'problemasLaborales', label: 'Problemas Laborales' },
                { field: 'problemasJuridicos', label: 'Problemas Jurídicos' },
                { field: 'problemasEconomicos', label: 'Problemas Económicos' },
                { field: 'muerteFamiliar', label: 'Muerte de un Familiar' },
                { field: 'antecedenteViolencia', label: 'Antecedente de Violencia o Abuso' }
              ].map(({ field, label }) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                  <select
                    value={formData[field as keyof FormData]}
                    onChange={(e) => updateFormData(field as keyof FormData, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="NO">No</option>
                    <option value="SI">Sí</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Condiciones de Salud Mental</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { field: 'trastornoDepresivo', label: 'Trastorno Depresivo' },
                { field: 'trastornoBipolar', label: 'Trastorno Bipolar' },
                { field: 'trastornoPersonalidad', label: 'Trastorno de Personalidad' },
                { field: 'esquizofrenia', label: 'Esquizofrenia' },
                { field: 'ideacionSuicida', label: 'Ideación Suicida Persistente' },
                { field: 'antecedentesFamiliares', label: 'Antecedentes Familiares de Conducta Suicida' },
                { field: 'consumoSPA', label: 'Consumo de SPA (Sustancias Psicoactivas)' },
                { field: 'enfermedadCronica', label: 'Enfermedad Crónica Dolorosa o Discapacitante' }
              ].map(({ field, label }) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                  <select
                    value={formData[field as keyof FormData]}
                    onChange={(e) => updateFormData(field as keyof FormData, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="NO">No</option>
                    <option value="SI">Sí</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Método e Historial de Intentos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Método de Suicidio</label>
                <select
                  value={formData.metodoSuicidio}
                  onChange={(e) => updateFormData('metodoSuicidio', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Seleccionar</option>
                  <option value="INTOXICACIONES">Intoxicaciones</option>
                  <option value="ARMA CORTOPUNZANTE">Arma Cortopunzante</option>
                  <option value="AHORCAMIENTO">Ahorcamiento</option>
                  <option value="LANZAMIENTO AL VACIO">Lanzamiento al Vacío</option>
                  <option value="LANZAMIENTO A VEHICULO">Lanzamiento a Vehículo</option>
                  <option value="ARMA DE FUEGO">Arma de Fuego</option>
                  <option value="INMOLACION">Inmolación</option>
                  <option value="OTROS">Otros</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Número de Intentos Previos</label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={formData.intentosPrevios}
                  onChange={(e) => updateFormData('intentosPrevios', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0-20"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Revisión Final</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Demografía */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-4">Panel Demografía</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Edad:</strong> {formData.edad} años</p>
                  <p><strong>Sexo:</strong> {formData.sexo}</p>
                  <p><strong>Estrato:</strong> {formData.estrato}</p>
                  <p><strong>Estado Civil:</strong> {formData.estadoCivil}</p>
                  <p><strong>Escolaridad:</strong> {formData.escolaridad}</p>
                </div>
              </div>
              
              {/* Condiciones Clínicas */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-4">Panel Condiciones Clínicas</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Método:</strong> {formData.metodoSuicidio}</p>
                  <p><strong>Intentos Previos:</strong> {formData.intentosPrevios}</p>
                  <p><strong>Trastorno Depresivo:</strong> {formData.trastornoDepresivo}</p>
                  <p><strong>Ideación Suicida:</strong> {formData.ideacionSuicida}</p>
                  <p><strong>Consumo SPA:</strong> {formData.consumoSPA}</p>
                </div>
              </div>
              
              {/* Factores de Riesgo */}
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-4">Panel Factores de Riesgo</h3>
                <div className="space-y-1 text-sm">
                  {Object.entries(formData).map(([key, value]) => {
                    if (value === 'SI') {
                      const labels: Record<string, string> = {
                        conflictoPareja: 'Conflicto pareja',
                        problemasFamiliares: 'Problemas familiares',
                        problemasLaborales: 'Problemas laborales',
                        trastornoDepresivo: 'Trastorno depresivo',
                        ideacionSuicida: 'Ideación suicida',
                        consumoSPA: 'Consumo SPA',
                        antecedentesFamiliares: 'Antecedentes familiares',
                        antecedenteViolencia: 'Antecedentes violencia'
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
              <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Información del Modelo</h4>
              <p className="text-sm text-yellow-700">
                Este análisis utiliza un Stacking Classifier entrenado con 23 variables del dataset real,
                logrando un F1-Score del 96% y un Recall del 100%. Los resultados son una herramienta
                de apoyo para decisiones clínicas y requieren supervisión profesional.
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
              Paso {currentStep} de {totalSteps}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round((currentStep / totalSteps) * 100)}% completado
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
            {currentStep === 1 ? 'Volver al Inicio' : 'Anterior'}
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
              Siguiente
              <ChevronRight size={20} className="ml-2" />
            </button>
          ) : (
            <button
              onClick={onComplete}
              className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all"
            >
              <CheckCircle size={20} className="mr-2" />
              Generar Predicción
            </button>
          )}
        </div>
      </div>
    </div>
  );
}