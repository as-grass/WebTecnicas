import React, { useState } from 'react';
import { Filter, Users, TrendingUp, Layers, BarChart3, PieChart, MapPin, Calendar } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('profiles');
  const [selectedPeriod, setSelectedPeriod] = useState('1y');
  const [selectedRegion, setSelectedRegion] = useState('Todas');

  const tabs = [
    { id: 'profiles', label: 'Perfiles de Riesgo', icon: Users },
    { id: 'trends', label: 'Tendencias', icon: TrendingUp },
    { id: 'demographics', label: 'Demografía', icon: PieChart },
    { id: 'geography', label: 'Geografía', icon: MapPin }
  ];

  const clusterData = [
    {
      id: 1,
      title: 'Jóvenes con Múltiples Factores de Riesgo',
      size: 198,
      avgAge: 24,
      remissionRate: 89,
      avgStay: 7.2,
      color: 'red',
      characteristics: [
        'Consumo de alcohol/drogas',
        'Desempleo frecuente',
        'Métodos de alta letalidad',
        'Intentos previos múltiples',
        'Bajo apoyo familiar',
        'Problemas legales'
      ]
    },
    {
      id: 2,
      title: 'Adultos con Comorbilidades Médicas',
      size: 164,
      avgAge: 45,
      remissionRate: 67,
      avgStay: 4.8,
      color: 'yellow',
      characteristics: [
        'Enfermedades crónicas',
        'Depresión mayor',
        'Dolor crónico persistente',
        'Limitaciones funcionales',
        'Métodos baja-media letalidad',
        'Aislamiento social moderado'
      ]
    },
    {
      id: 3,
      title: 'Adultos Mayores con Aislamiento Social',
      size: 125,
      avgAge: 68,
      remissionRate: 78,
      avgStay: 9.1,
      color: 'orange',
      characteristics: [
        'Pérdidas recientes significativas',
        'Aislamiento social severo',
        'Deterioro cognitivo incipiente',
        'Métodos altamente letales',
        'Planificación detallada',
        'Pérdida de autonomía'
      ]
    }
  ];

  const renderProfilesTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {clusterData.map((cluster) => (
          <div key={cluster.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Clúster {cluster.id}: {cluster.title}
              </h3>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                cluster.color === 'red' ? 'bg-red-100 text-red-800' :
                cluster.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                Riesgo {cluster.color === 'red' ? 'Alto' : cluster.color === 'yellow' ? 'Moderado' : 'Específico'}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{cluster.size}</div>
                <div className="text-sm text-gray-600">Casos</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{cluster.avgAge}</div>
                <div className="text-sm text-blue-700">Edad promedio</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{cluster.remissionRate}%</div>
                <div className="text-sm text-green-700">Tasa remisión</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{cluster.avgStay}</div>
                <div className="text-sm text-purple-700">Días estancia</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
              <ul className="space-y-1">
                {cluster.characteristics.map((char, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2" />
                    {char}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTrendsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Evolución Casos vs Remisiones (6 meses)</h3>
          <div className="h-64 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp size={48} className="text-blue-500 mx-auto mb-2" />
              <p className="text-gray-600">Gráfico de tendencias temporales</p>
              <p className="text-sm text-gray-500 mt-2">
                Tendencia creciente en detección temprana (+12% últimos 3 meses)
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Factores Desencadenantes Más Comunes</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Problemas familiares</span>
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-200 rounded mr-2">
                  <div className="w-3/4 h-2 bg-red-500 rounded" />
                </div>
                <span className="text-sm font-medium">75%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Trastorno depresivo</span>
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-200 rounded mr-2">
                  <div className="w-16 h-2 bg-yellow-500 rounded" />
                </div>
                <span className="text-sm font-medium">67%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Consumo de SPA</span>
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-200 rounded mr-2">
                  <div className="w-14 h-2 bg-orange-500 rounded" />
                </div>
                <span className="text-sm font-medium">58%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Problemas económicos</span>
              <div className="flex items-center">
                <div className="w-24 h-2 bg-gray-200 rounded mr-2">
                  <div className="w-12 h-2 bg-blue-500 rounded" />
                </div>
                <span className="text-sm font-medium">45%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDemographicsTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Distribución por Edad</h3>
          <div className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart size={48} className="text-purple-500 mx-auto mb-2" />
              <p className="text-gray-600">Gráfico circular de grupos etarios</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-red-400 rounded" />
                  <span>18-25 años: 40.5%</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-yellow-400 rounded" />
                  <span>26-45 años: 33.7%</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="w-3 h-3 bg-orange-400 rounded" />
                  <span>45+ años: 25.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Métodos por Género</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-blue-700 mb-2">Femenino (62%)</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Intoxicaciones</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Arma cortopunzante</span>
                  <span className="font-medium">32%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Otros métodos</span>
                  <span className="font-medium">23%</span>
                </div>
              </div>
            </div>
            <div className="border-t pt-4">
              <h4 className="font-medium text-green-700 mb-2">Masculino (38%)</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Ahorcamiento</span>
                  <span className="font-medium">38%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Arma de fuego</span>
                  <span className="font-medium">27%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Lanzamiento al vacío</span>
                  <span className="font-medium">35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGeographyTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Casos por Región</h3>
        <div className="space-y-3">
          {[
            { region: 'Región Central', cases: 145, risk: 'Alto' },
            { region: 'Región Norte', cases: 98, risk: 'Moderado' },
            { region: 'Región Sur', cases: 127, risk: 'Alto' },
            { region: 'Región Oriental', cases: 73, risk: 'Moderado' },
            { region: 'Región Occidental', cases: 44, risk: 'Bajo' }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <MapPin size={16} className="text-gray-500 mr-3" />
                <span className="font-medium">{item.region}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">{item.cases} casos</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.risk === 'Alto' ? 'bg-red-100 text-red-700' :
                  item.risk === 'Moderado' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {item.risk}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Correlación Ubicación-Riesgo</h3>
        <div className="h-48 bg-gradient-to-r from-green-50 to-red-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 size={48} className="text-green-500 mx-auto mb-2" />
            <p className="text-gray-600">Mapa de correlación geográfica</p>
            <p className="text-sm text-gray-500 mt-2">
              Mayor concentración de casos en zonas urbanas centrales
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard de Análisis</h1>
              <p className="text-gray-600">Estadísticas y perfiles de riesgo basados en K-Means</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-500" />
                <select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1m">1 mes</option>
                  <option value="3m">3 meses</option>
                  <option value="6m">6 meses</option>
                  <option value="1y">1 año</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-gray-500" />
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Todas">Todas</option>
                  <option value="Urbana">Urbana</option>
                  <option value="Rural">Rural</option>
                  <option value="Suburbana">Suburbana</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <Users className="text-blue-600" size={24} />
              <span className="text-2xl font-bold text-blue-600">487</span>
            </div>
            <p className="text-gray-700 font-semibold">Total Casos</p>
            <p className="text-sm text-gray-500">Suma de los 3 clústeres</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="text-green-600" size={24} />
              <span className="text-2xl font-bold text-green-600">78%</span>
            </div>
            <p className="text-gray-700 font-semibold">Remisión Promedio</p>
            <p className="text-sm text-gray-500">Promedio entre clústeres</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <Layers className="text-purple-600" size={24} />
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <p className="text-gray-700 font-semibold">Clústeres K-Means</p>
            <p className="text-sm text-gray-500">Perfiles optimizados</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="text-orange-600" size={24} />
              <span className="text-2xl font-bold text-orange-600">96%</span>
            </div>
            <p className="text-gray-700 font-semibold">Precisión IA</p>
            <p className="text-sm text-gray-500">F1-Score Stacking</p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-all ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon size={16} className="mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-6">
            {activeTab === 'profiles' && renderProfilesTab()}
            {activeTab === 'trends' && renderTrendsTab()}
            {activeTab === 'demographics' && renderDemographicsTab()}
            {activeTab === 'geography' && renderGeographyTab()}
          </div>
        </div>
      </div>
    </div>
  );
}