import React, { useState } from 'react';
import { Heart, MessageCircle, FileText, Bell, Clock } from 'lucide-react';

const HomeCareApp = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [notifications] = useState(3);
  const [currentPatient] = useState({
    name: 'Sr. João Silva',
    age: 78,
    condition: 'Diabetes + Hipertensão',
    photo: '👴'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-gray-800">CuidaDigital</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-medium text-sm">MH</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-6">
        <div className="space-y-6">
          {/* Patient Info */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{currentPatient.photo}</div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{currentPatient.name}</h2>
                <p className="text-gray-600">{currentPatient.age} anos • {currentPatient.condition}</p>
              </div>
              <div className="ml-auto">
                <button className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  🚨 Emergência
                </button>
              </div>
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white rounded-xl shadow-sm border p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-600" />
              Plano do Dia
            </h3>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-green-50 border-green-200 rounded-lg border-2">
                <div className="mr-3 w-6 h-6 rounded-full bg-green-500 border-green-500 flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Verificar pressão arterial</p>
                  <p className="text-sm text-gray-600">08:00</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-red-50 border-red-200 rounded-lg border-2">
                <div className="mr-3 w-6 h-6 rounded-full border-2 border-gray-300"></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Verificar glicemia</p>
                  <p className="text-sm text-gray-600">12:00</p>
                </div>
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                  Urgente
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="px-4">
          <div className="flex justify-around py-2">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className={`flex flex-col items-center py-2 px-3 rounded-lg ${
                currentView === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              }`}
            >
              <FileText className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Início</span>
            </button>
            
            <button 
              onClick={() => setCurrentView('vitals')}
              className={`flex flex-col items-center py-2 px-3 rounded-lg ${
                currentView === 'vitals' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              }`}
            >
              <Heart className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Sinais</span>
            </button>
            
            <button 
              onClick={() => setCurrentView('communication')}
              className={`flex flex-col items-center py-2 px-3 rounded-lg ${
                currentView === 'communication' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              }`}
            >
              <MessageCircle className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Chat</span>
            </button>
            
            <button 
              onClick={() => setCurrentView('ai')}
              className={`flex flex-col items-center py-2 px-3 rounded-lg ${
                currentView === 'ai' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              }`}
            >
              <span className="text-lg mb-1">🤖</span>
              <span className="text-xs font-medium">IA</span>
            </button>
          </div>
        </div>
      </nav>
      
      <div className="h-20"></div>
    </div>
  );
};

export default HomeCareApp;