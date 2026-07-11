import React from 'react';
import { Play, TrendingUp, Target, Layers, BarChart } from 'lucide-react';
import { useLang } from '../hooks/useLang';

interface LandingPageProps {
  onStartEvaluation: () => void;
}

export default function LandingPage({ onStartEvaluation }: LandingPageProps) {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t.landing.title}
        </h1>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto">
          {t.landing.subtitle}
        </p>
      </header>

      {/* Hero Section */}
      <section className="text-center py-8 px-6">
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg text-gray-700 mb-6">
            {t.landing.heroText}
          </p>
          <button
            onClick={onStartEvaluation}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            <Play size={20} />
            {t.landing.startButton}
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
              <p className="text-gray-700 font-semibold">{t.landing.metricAccuracy}</p>
              <p className="text-sm text-gray-500">{t.landing.metricAccuracySub}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-2">
                <Target className="text-blue-600" size={24} />
                <span className="text-3xl font-bold text-blue-600">100%</span>
              </div>
              <p className="text-gray-700 font-semibold">{t.landing.metricRecall}</p>
              <p className="text-sm text-gray-500">{t.landing.metricRecallSub}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-2">
                <Layers className="text-purple-600" size={24} />
                <span className="text-3xl font-bold text-purple-600">3</span>
              </div>
              <p className="text-gray-700 font-semibold">{t.landing.metricClusters}</p>
              <p className="text-sm text-gray-500">{t.landing.metricClustersSub}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-2">
                <BarChart className="text-orange-600" size={24} />
                <span className="text-3xl font-bold text-orange-600">23</span>
              </div>
              <p className="text-gray-700 font-semibold">{t.landing.metricVariables}</p>
              <p className="text-sm text-gray-500">{t.landing.metricVariablesSub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.landing.howItWorks}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.landing.step1Title}</h3>
              <p className="text-gray-600">
                {t.landing.step1Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.landing.step2Title}</h3>
              <p className="text-gray-600">
                {t.landing.step2Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.landing.step3Title}</h3>
              <p className="text-gray-600">
                {t.landing.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Profiles */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t.landing.riskProfilesTitle}
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              {t.landing.riskProfilesIntro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                <h4 className="font-semibold text-red-800 mb-2">{t.landing.cluster1Title}</h4>
                <p className="text-sm text-red-700">
                  {t.landing.cluster1Desc}
                </p>
              </div>
              <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                <h4 className="font-semibold text-yellow-800 mb-2">{t.landing.cluster2Title}</h4>
                <p className="text-sm text-yellow-700">
                  {t.landing.cluster2Desc}
                </p>
              </div>
              <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                <h4 className="font-semibold text-orange-800 mb-2">{t.landing.cluster3Title}</h4>
                <p className="text-sm text-orange-700">
                  {t.landing.cluster3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
