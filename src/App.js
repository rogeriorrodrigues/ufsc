import React, { useState } from 'react';
import HomeCareApp from './components/mobile/HomeCareApp';
import AdminDashboard from './components/admin/AdminDashboard';
import { Monitor, Smartphone } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('mobile');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toggle Header */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CuidaDigital</h1>
              <p className="text-sm text-gray-500">Sistema Completo de Home Care</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setCurrentView('mobile')}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                currentView === 'mobile' 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Smartphone className="w-4 h-4 mr-2" />
              App Mobile
            </button>
            <button
              onClick={() => setCurrentView('admin')}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                currentView === 'admin' 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Monitor className="w-4 h-4 mr-2" />
              Painel Admin
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={currentView === 'mobile' ? 'flex justify-center bg-gray-200 py-8' : ''}>
        {currentView === 'mobile' ? (
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden" style={{height: '800px'}}>
            <HomeCareApp />
          </div>
        ) : (
          <AdminDashboard />
        )}
      </div>
    </div>
  );
}

export default App;