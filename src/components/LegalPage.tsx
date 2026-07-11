import React from 'react';
import { Shield, FileText, Lock, Info, Phone } from 'lucide-react';
import { useLang } from '../hooks/useLang';

export default function LegalPage() {
  const { t } = useLang();

  const sections = [
    {
      id: 'disclaimer',
      title: t.legal.sectionDisclaimer,
      icon: Shield,
      color: 'red'
    },
    {
      id: 'terms',
      title: t.legal.sectionTerms,
      icon: FileText,
      color: 'blue'
    },
    {
      id: 'privacy',
      title: t.legal.sectionPrivacy,
      icon: Lock,
      color: 'green'
    },
    {
      id: 'model',
      title: t.legal.sectionModel,
      icon: Info,
      color: 'purple'
    },
    {
      id: 'contact',
      title: t.legal.sectionContact,
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
              <h4 className="font-semibold text-red-800 mb-2">{t.legal.importantTitle}</h4>
              <p className="text-red-700">
                {t.legal.importantText}
              </p>
            </div>

            <h4 className="font-semibold text-gray-900">{t.legal.limitationsTitle}</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t.legal.limitation1}</li>
              <li>{t.legal.limitation2}</li>
              <li>{t.legal.limitation3}</li>
              <li>{t.legal.limitation4}</li>
            </ul>

            <h4 className="font-semibold text-gray-900">{t.legal.responsibilityTitle}</h4>
            <p className="text-gray-700">
              {t.legal.responsibilityText}
            </p>

            <h4 className="font-semibold text-gray-900">{t.legal.emergencyTitle}</h4>
            <p className="text-gray-700 font-medium">
              {t.legal.emergencyText}
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-2">
              <ul className="text-yellow-800 space-y-1">
                <li>{t.legal.emergencyLine1}</li>
                <li>{t.legal.emergencyLine2}</li>
                <li>{t.legal.emergencyLine3}</li>
              </ul>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">{t.legal.conditionsTitle}</h4>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>{t.legal.condition1}</li>
              <li>{t.legal.condition2}</li>
              <li>{t.legal.condition3}</li>
              <li>{t.legal.condition4}</li>
              <li>{t.legal.condition5}</li>
            </ul>

            <h4 className="font-semibold text-gray-900">{t.legal.liabilityTitle}</h4>
            <p className="text-gray-700">
              {t.legal.liabilityText}
            </p>

            <h4 className="font-semibold text-gray-900">{t.legal.appropriateUseTitle}</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t.legal.appropriateUse1}</li>
              <li>{t.legal.appropriateUse2}</li>
              <li>{t.legal.appropriateUse3}</li>
              <li>{t.legal.appropriateUse4}</li>
            </ul>

            <h4 className="font-semibold text-gray-900">{t.legal.updatesTitle}</h4>
            <p className="text-gray-700">
              {t.legal.updatesText}
            </p>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">{t.legal.dataHandlingTitle}</h4>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-700">
                <strong>{t.legal.privacyCommitmentLabel}</strong>{t.legal.privacyCommitmentText}
              </p>
            </div>

            <h4 className="font-semibold text-gray-900">{t.legal.dataCollectionTitle}</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t.legal.dataCollection1}</li>
              <li>{t.legal.dataCollection2}</li>
              <li>{t.legal.dataCollection3}</li>
              <li>{t.legal.dataCollection4}</li>
            </ul>

            <h4 className="font-semibold text-gray-900">{t.legal.userRightsTitle}</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t.legal.userRight1}</li>
              <li>{t.legal.userRight2}</li>
              <li>{t.legal.userRight3}</li>
              <li>{t.legal.userRight4}</li>
            </ul>

            <h4 className="font-semibold text-gray-900">{t.legal.dataSecurityTitle}</h4>
            <p className="text-gray-700">
              {t.legal.dataSecurityIntro}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>{t.legal.security1}</li>
              <li>{t.legal.security2}</li>
              <li>{t.legal.security3}</li>
              <li>{t.legal.security4}</li>
            </ul>

            <h4 className="font-semibold text-gray-900">{t.legal.sharingTitle}</h4>
            <p className="text-gray-700">
              {t.legal.sharingText}
            </p>
          </div>
        );

      case 'model':
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">{t.legal.methodologyTitle}</h4>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-700">
                <strong>{t.legal.advancedTechniqueLabel}</strong>{t.legal.advancedTechniqueText}
              </p>
            </div>

            <h4 className="font-semibold text-gray-900">{t.legal.datasetTitle}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">{t.legal.trainingDataTitle}</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>{t.legal.trainingData1}</li>
                  <li>{t.legal.trainingData2}</li>
                  <li>{t.legal.trainingData3}</li>
                  <li>{t.legal.trainingData4}</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">{t.legal.modelVariablesTitle}</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>{t.legal.modelVariables1}</li>
                  <li>{t.legal.modelVariables2}</li>
                  <li>{t.legal.modelVariables3}</li>
                  <li>{t.legal.modelVariables4}</li>
                </ul>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900">{t.legal.performanceTitle}</h4>
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
                <div className="text-sm text-purple-700">{t.legal.precisionLabel}</div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-xl font-bold text-orange-600">0.92</div>
                <div className="text-sm text-orange-700">AUC-ROC</div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900">{t.legal.modelLimitationsTitle}</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t.legal.modelLimitation1}</li>
              <li>{t.legal.modelLimitation2}</li>
              <li>{t.legal.modelLimitation3}</li>
              <li>{t.legal.modelLimitation4}</li>
            </ul>

            <h4 className="font-semibold text-gray-900">{t.legal.clinicalValidationTitle}</h4>
            <p className="text-gray-700">
              {t.legal.clinicalValidationText}
            </p>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">{t.legal.contactInfoTitle}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-semibold text-orange-800 mb-3">{t.legal.techSupportTitle}</h5>
                <div className="space-y-2 text-orange-700">
                  <p><strong>{t.legal.emailLabel}</strong> soporte@prediccionpsiquiatria.com</p>
                  <p><strong>{t.legal.phoneLabel}</strong> +57 (1) 234-5678</p>
                  <p><strong>{t.legal.scheduleLabel}</strong> {t.legal.techSchedule}</p>
                  <p><strong>{t.legal.responseLabel}</strong> {t.legal.techResponse}</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-blue-800 mb-3">{t.legal.clinicalInquiriesTitle}</h5>
                <div className="space-y-2 text-blue-700">
                  <p><strong>{t.legal.emailLabel}</strong> clinico@prediccionpsiquiatria.com</p>
                  <p><strong>{t.legal.phoneLabel}</strong> +57 (1) 234-5679</p>
                  <p><strong>{t.legal.scheduleLabel}</strong> {t.legal.clinicalSchedule}</p>
                  <p><strong>{t.legal.responseLabel}</strong> {t.legal.clinicalResponse}</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-gray-900">{t.legal.reportProblemsTitle}</h4>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 mb-3">
                <strong>{t.legal.reportProblemsIntro}</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-yellow-700">
                <li>{t.legal.report1}</li>
                <li>{t.legal.report2}</li>
                <li>{t.legal.report3}</li>
                <li>{t.legal.report4}</li>
              </ul>
            </div>

            <h4 className="font-semibold text-gray-900">{t.legal.trainingTitle}</h4>
            <p className="text-gray-700">
              {t.legal.trainingText}
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{t.legal.training1}</li>
              <li>{t.legal.training2}</li>
              <li>{t.legal.training3}</li>
              <li>{t.legal.training4}</li>
            </ul>

            <h4 className="font-semibold text-gray-900">{t.legal.researchTitle}</h4>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-700">
                <strong>{t.legal.researchIntro}</strong><br />
                investigacion@prediccionpsiquiatria.com
              </p>
              <p className="text-sm text-green-600 mt-2">
                {t.legal.researchNote}
              </p>
            </div>

            <h4 className="font-semibold text-gray-900">{t.legal.systemUpdatesTitle}</h4>
            <p className="text-gray-700">
              {t.legal.systemUpdatesText}
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.legal.title}</h1>
          <p className="text-gray-600">
            {t.legal.subtitle}
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
              {t.legal.footerTitle}
            </h3>
            <p className="text-gray-300 text-sm">
              {t.legal.footerModel}
            </p>
            <p className="text-gray-400 text-xs mt-2">
              {t.legal.footerCopyright}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
