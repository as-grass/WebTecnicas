import React from 'react';
import { Shield, FileText, Lock, Info, Phone } from 'lucide-react';

export default function LegalPage() {
  const sections = [
    {
      id: 'disclaimer',
      title: 'Disclaimer Médico',
      icon: Shield,
      color: 'red'
    },
    {
      id: 'terms',
      title: 'Términos de Uso',
      icon: FileText,
      color: 'blue'
    },
    {
      id: 'privacy',
      title: 'Política de Privacidad',
      icon: Lock,
      color: 'green'
    },
    {
      id: 'model',
      title: 'Información del Modelo',
      icon: Info,
      color: 'purple'
    },
    {
      id: 'contact',
      title: 'Contacto y Soporte',
      icon: Phone,
      color: 'orange'
    }
  ];

  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case 'disclaimer':
        return (
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">⚠️ IMPORTANTE - LEER ANTES DE USAR</h4>
              <p className="text-red-700">
                Este sistema es ÚNICAMENTE una herramienta de apoyo para decisiones clínicas.
                NO constituye un diagnóstico médico ni reemplaza la evaluación profesional.
              </p>
            </div>
            
            <h4 className="font-semibold text-gray-900">Limitaciones del Sistema</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Los resultados son probabilísticos y deben interpretarse por personal médico calificado</li>
              <li>No considera factores clínicos específicos no incluidos en las 23 variables del modelo</li>
              <li>Requiere supervisión y validación por parte de profesionales en salud mental</li>
              <li>No debe utilizarse como único criterio para tomar decisiones clínicas</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900">Responsabilidad Profesional</h4>
            <p className="text-gray-700">
              El médico tratante mantiene la responsabilidad completa sobre el diagnóstico, 
              tratamiento y seguimiento del paciente. Este sistema proporciona información 
              complementaria que debe ser evaluada en el contexto clínico integral del caso.
            </p>
            
            <h4 className="font-semibold text-gray-900">Situaciones de Emergencia</h4>
            <p className="text-gray-700 font-medium">
              En casos de riesgo inminente o emergencias psiquiátricas, contacte inmediatamente:
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-2">
              <ul className="text-yellow-800 space-y-1">
                <li>• Línea de Crisis: 123 (24 horas)</li>
                <li>• Servicios de Urgencias del hospital más cercano</li>
                <li>• No dependa exclusivamente de este sistema para decisiones urgentes</li>
              </ul>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Condiciones de Uso</h4>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Este sistema está destinado exclusivamente para profesionales de la salud</li>
              <li>Se requiere licencia médica vigente para el uso clínico de los resultados</li>
              <li>Prohibido el uso para propósitos no médicos o de investigación sin autorización</li>
              <li>Los usuarios son responsables de mantener la confidencialidad de los datos del paciente</li>
              <li>Se debe cumplir con todas las normativas locales e internacionales de salud</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900">Limitaciones de Responsabilidad</h4>
            <p className="text-gray-700">
              El sistema se proporciona "tal como está" sin garantías de ningún tipo. 
              No nos hacemos responsables por decisiones clínicas tomadas basándose 
              únicamente en los resultados del sistema.
            </p>
            
            <h4 className="font-semibold text-gray-900">Uso Apropiado</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Utilice como herramienta de apoyo complementaria</li>
              <li>Combine siempre con evaluación clínica integral</li>
              <li>Documente el uso del sistema en la historia clínica</li>
              <li>Mantenga registros de las evaluaciones realizadas</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900">Actualizaciones y Modificaciones</h4>
            <p className="text-gray-700">
              Nos reservamos el derecho de actualizar estos términos y las funcionalidades 
              del sistema. Los usuarios serán notificados de cambios significativos.
            </p>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Manejo de Datos del Paciente</h4>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-700">
                <strong>Compromiso de Privacidad:</strong> Todos los datos ingresados son procesados 
                de forma local y no se almacenan en servidores externos sin consentimiento explícito.
              </p>
            </div>
            
            <h4 className="font-semibold text-gray-900">Recolección de Información</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Solo recolectamos las 23 variables necesarias para el modelo predictivo</li>
              <li>No almacenamos información personal identificable sin autorización</li>
              <li>Los datos se procesan de forma anónima y agregada para estadísticas</li>
              <li>Cumplimos con estándares HIPAA y normativas locales de protección de datos</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900">Derechos del Usuario</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Derecho a conocer qué datos se procesan</li>
              <li>Derecho a solicitar eliminación de datos almacenados</li>
              <li>Derecho a rectificación de información incorrecta</li>
              <li>Derecho a portabilidad de los datos</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900">Seguridad de Datos</h4>
            <p className="text-gray-700">
              Implementamos medidas técnicas y organizacionales para proteger la información:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Encriptación de datos en tránsito y reposo</li>
              <li>Acceso controlado y autenticación de usuarios</li>
              <li>Auditorías regulares de seguridad</li>
              <li>Respaldo y recuperación de datos seguros</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900">Compartir Información</h4>
            <p className="text-gray-700">
              No compartimos datos personales de pacientes con terceros sin consentimiento 
              explícito, excepto cuando sea requerido por ley o para fines de investigación 
              médica aprobados por comités de ética.
            </p>
          </div>
        );

      case 'model':
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Metodología Stacking Classifier</h4>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-700">
                <strong>Técnica Avanzada:</strong> Combina múltiples algoritmos de machine learning 
                para maximizar la precisión predictiva y minimizar errores de clasificación.
              </p>
            </div>
            
            <h4 className="font-semibold text-gray-900">Dataset y Variables</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Datos de Entrenamiento</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 487 casos reales validados</li>
                  <li>• 3 clústeres K-Means optimizados</li>
                  <li>• Validación cruzada 10-fold</li>
                  <li>• Balanceo de clases aplicado</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Variables del Modelo</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 6 variables demográficas</li>
                  <li>• 7 factores sociales/relacionales</li>
                  <li>• 8 condiciones de salud mental</li>
                  <li>• 2 variables de método/historial</li>
                </ul>
              </div>
            </div>
            
            <h4 className="font-semibold text-gray-900">Métricas de Rendimiento</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-xl font-bold text-green-600">96%</div>
                <div className="text-sm text-green-700">F1-Score</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-blue-700">Recall</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-xl font-bold text-purple-600">94%</div>
                <div className="text-sm text-purple-700">Precisión</div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-xl font-bold text-orange-600">0.92</div>
                <div className="text-sm text-orange-700">AUC-ROC</div>
              </div>
            </div>
            
            <h4 className="font-semibold text-gray-900">Limitaciones del Modelo</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Entrenado con población específica (puede requerir calibración para otras poblaciones)</li>
              <li>No incluye variables de neuroimagen o biomarcadores</li>
              <li>Requiere actualización periódica con nuevos datos</li>
              <li>Sensible a calidad y completitud de los datos de entrada</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900">Validación Clínica</h4>
            <p className="text-gray-700">
              El modelo ha sido validado en estudios retrospectivos y requiere validación 
              prospectiva continua. Se recomienda monitoreo regular del rendimiento en 
              condiciones clínicas reales.
            </p>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Información de Contacto</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-semibold text-orange-800 mb-3">Soporte Técnico</h5>
                <div className="space-y-2 text-orange-700">
                  <p><strong>Email:</strong> soporte@prediccionpsiquiatria.com</p>
                  <p><strong>Teléfono:</strong> +57 (1) 234-5678</p>
                  <p><strong>Horario:</strong> Lunes a Viernes, 8:00 AM - 6:00 PM</p>
                  <p><strong>Respuesta:</strong> 24-48 horas</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-blue-800 mb-3">Consultas Clínicas</h5>
                <div className="space-y-2 text-blue-700">
                  <p><strong>Email:</strong> clinico@prediccionpsiquiatria.com</p>
                  <p><strong>Teléfono:</strong> +57 (1) 234-5679</p>
                  <p><strong>Horario:</strong> 24/7 para emergencias</p>
                  <p><strong>Respuesta:</strong> Inmediata para urgencias</p>
                </div>
              </div>
            </div>
            
            <h4 className="font-semibold text-gray-900">Reportar Problemas</h4>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 mb-3">
                <strong>Para reportar problemas técnicos o errores del sistema:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-yellow-700">
                <li>Describa el problema con detalle</li>
                <li>Incluya pasos para reproducir el error</li>
                <li>Adjunte capturas de pantalla si es posible</li>
                <li>Proporcione información del navegador/dispositivo</li>
              </ul>
            </div>
            
            <h4 className="font-semibold text-gray-900">Capacitación y Entrenamiento</h4>
            <p className="text-gray-700">
              Ofrecemos sesiones de capacitación para equipos médicos sobre el uso 
              apropiado del sistema y interpretación de resultados.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Workshops presenciales y virtuales</li>
              <li>Materiales de capacitación descargables</li>
              <li>Certificación en uso del sistema</li>
              <li>Consultoría en implementación</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900">Investigación y Colaboraciones</h4>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-700">
                <strong>Para propuestas de investigación o colaboraciones académicas:</strong><br />
                investigacion@prediccionpsiquiatria.com
              </p>
              <p className="text-sm text-green-600 mt-2">
                Estamos interesados en colaboraciones para mejorar el modelo y 
                expandir su aplicación a diferentes poblaciones.
              </p>
            </div>
            
            <h4 className="font-semibold text-gray-900">Actualizaciones del Sistema</h4>
            <p className="text-gray-700">
              Para recibir notificaciones sobre actualizaciones, nuevas funcionalidades 
              y boletines de investigación, suscríbase a nuestra lista de correos en:
            </p>
            <p className="font-medium text-blue-600">actualizaciones@prediccionpsiquiatria.com</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Información Legal y Soporte</h1>
          <p className="text-gray-600">
            Términos de uso, políticas de privacidad y información importante sobre el sistema
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`flex items-center px-6 py-4 bg-${section.color}-50 border-b border-${section.color}-100`}>
                <section.icon className={`text-${section.color}-600 mr-3`} size={24} />
                <h2 className={`text-xl font-semibold text-${section.color}-800`}>
                  {section.title}
                </h2>
              </div>
              <div className="p-6">
                {renderSection(section.id)}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gray-800 text-white rounded-lg p-6 mt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">
              Sistema de Predicción de Remisión a Psiquiatría
            </h3>
            <p className="text-gray-300 text-sm">
              Modelo Stacking Classifier - F1-Score 96% - Versión 1.0
            </p>
            <p className="text-gray-400 text-xs mt-2">
              © 2025 - Todos los derechos reservados - Uso exclusivo para profesionales de la salud
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}