import React from 'react';
import { BarChart3, Users, AlertTriangle, Activity, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">C</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CuidaDigital Admin</h1>
                <p className="text-sm text-gray-500">Plataforma de Gestão Home Care</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-sm border p-4">
              <div className="space-y-2">
                <button className="w-full flex items-center px-4 py-3 rounded-lg text-left bg-blue-50 text-blue-700">
                  <BarChart3 className="w-5 h-5 mr-3" />
                  Dashboard
                </button>
                
                <button className="w-full flex items-center px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-50">
                  <Users className="w-5 h-5 mr-3" />
                  Pacientes
                </button>
                
                <button className="w-full flex items-center px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-50">
                  <Activity className="w-5 h-5 mr-3" />
                  Cuidadores
                </button>
                
                <button className="w-full flex items-center px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-50">
                  <AlertTriangle className="w-5 h-5 mr-3" />
                  Alertas
                  <span className="ml-auto bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">5</span>
                </button>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Total de Pacientes</p>
                      <p className="text-3xl font-bold text-blue-900">247</p>
                      <p className="text-xs text-blue-600 mt-1">+12.8% este mês</p>
                    </div>
                    <div className="bg-blue-200 p-3 rounded-full">
                      <Users className="w-6 h-6 text-blue-700" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-700">Cuidadores Ativos</p>
                      <p className="text-3xl font-bold text-green-900">89</p>
                      <p className="text-xs text-green-600 mt-1">Satisfação: 4.7★</p>
                    </div>
                    <div className="bg-green-200 p-3 rounded-full">
                      <Activity className="w-6 h-6 text-green-700" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-red-700">Alertas Críticos</p>
                      <p className="text-3xl font-bold text-red-900">12</p>
                      <p className="text-xs text-red-600 mt-1">Resposta média: 3.2 min</p>
                    </div>
                    <div className="bg-red-200 p-3 rounded-full">
                      <AlertTriangle className="w-6 h-6 text-red-700" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-700">Visitas Ativas</p>
                      <p className="text-3xl font-bold text-purple-900">156</p>
                      <p className="text-xs text-purple-600 mt-1">Tarefas: 1847</p>
                    </div>
                    <div className="bg-purple-200 p-3 rounded-full">
                      <TrendingUp className="w-6 h-6 text-purple-700" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  🎉 CuidaDigital Admin Dashboard
                </h2>
                <p className="text-gray-600 mb-6">
                  Sistema de gestão home care funcionando perfeitamente no Azure!
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    ✅ Deploy realizado com sucesso!
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    Aplicação rodando na nuvem Azure
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;