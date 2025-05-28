import React, { useState, useEffect } from 'react';
import { User, Heart, MessageCircle, FileText, Clock, AlertTriangle, Check, Phone, Camera, Plus, Bell } from 'lucide-react';

const HomeCareApp = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [notifications, setNotifications] = useState(3);
  const [currentPatient, setCurrentPatient] = useState({
    name: 'Sr. João Silva',
    age: 78,
    condition: 'Diabetes + Hipertensão',
    photo: '👴'
  });

  const [dailyTasks, setDailyTasks] = useState([
    { id: 1, task: 'Verificar pressão arterial', time: '08:00', completed: true, urgent: false },
    { id: 2, task: 'Administrar insulina', time: '08:30', completed: true, urgent: true },
    { id: 3, task: 'Verificar glicemia', time: '12:00', completed: false, urgent: true },
    { id: 4, task: 'Fisioterapia respiratória', time: '14:00', completed: false, urgent: false },
    { id: 5, task: 'Medicação hipertensão', time: '18:00', completed: false, urgent: true }
  ]);

  const [vitals, setVitals] = useState({
    pressure: '',
    glucose: '',
    temperature: '',
    heartRate: ''
  });

  const toggleTask = (id) => {
    setDailyTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const Dashboard = () => (
    <div className="space-y-6">
      {/* Header do paciente */}
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

      {/* Alertas */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
        <div className="flex items-center">
          <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
          <span className="text-orange-800 font-medium">Glicemia em atraso - Verificar às 12:00</span>
        </div>
      </div>

      {/* Tarefas do dia */}
      <div className="bg-white rounded-xl shadow-sm border p-4">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-blue-600" />
          Plano do Dia
        </h3>
        <div className="space-y-3">
          {dailyTasks.map(task => (
            <div key={task.id} className={`flex items-center p-3 rounded-lg border-2 transition-all ${
              task.completed 
                ? 'bg-green-50 border-green-200' 
                : task.urgent 
                  ? 'bg-red-50 border-red-200' 
                  : 'bg-gray-50 border-gray-200'
            }`}>
              <button 
                onClick={() => toggleTask(task.id)}
                className={`mr-3 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  task.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'
                }`}
              >
                {task.completed && <Check className="w-3 h-3 text-white" />}
              </button>
              <div className="flex-1">
                <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {task.task}
                </p>
                <p className="text-sm text-gray-600">{task.time}</p>
              </div>
              {task.urgent && !task.completed && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                  Urgente
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const VitalsForm = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Heart className="w-5 h-5 mr-2 text-red-500" />
          Sinais Vitais
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pressão Arterial (mmHg)
            </label>
            <input 
              type="text" 
              placeholder="Ex: 120/80"
              value={vitals.pressure}
              onChange={(e) => setVitals(prev => ({...prev, pressure: e.target.value}))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Glicemia (mg/dL)
            </label>
            <input 
              type="number" 
              placeholder="Ex: 95"
              value={vitals.glucose}
              onChange={(e) => setVitals(prev => ({...prev, glucose: e.target.value}))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Temperatura (°C)
            </label>
            <input 
              type="number" 
              step="0.1"
              placeholder="Ex: 36.5"
              value={vitals.temperature}
              onChange={(e) => setVitals(prev => ({...prev, temperature: e.target.value}))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frequência Cardíaca (bpm)
            </label>
            <input 
              type="number" 
              placeholder="Ex: 72"
              value={vitals.heartRate}
              onChange={(e) => setVitals(prev => ({...prev, heartRate: e.target.value}))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="mt-6 flex space-x-3">
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Salvar Registros
          </button>
          <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Camera className="w-5 h-5" />
          </button>
        </div>
        
        {/* Alertas baseados em IA */}
        {vitals.glucose && parseInt(vitals.glucose) > 140 && (
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
              <p className="text-yellow-800 font-medium">
                🤖 IA Detectou: Glicemia elevada. Considere contatar a equipe médica.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const CommunicationPanel = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
          Comunicação Rápida
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button className="p-4 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
            <Phone className="w-6 h-6 text-red-600 mx-auto mb-2" />
            <p className="text-red-800 font-medium">Emergência</p>
            <p className="text-sm text-red-600">Dr. Silva</p>
          </button>
          
          <button className="p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
            <MessageCircle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-blue-800 font-medium">Enfermeira</p>
            <p className="text-sm text-blue-600">Ana Costa</p>
          </button>
          
          <button className="p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors">
            <User className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-purple-800 font-medium">Família</p>
            <p className="text-sm text-purple-600">Maria Silva</p>
          </button>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-800 mb-3">Mensagens Recentes</h4>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-gray-800">Dr. Silva</span>
                <span className="text-xs text-gray-500">10:30</span>
              </div>
              <p className="text-gray-700 text-sm">Atenção para glicemia. Se > 150, me contate imediatamente.</p>
            </div>
            
            <div className="bg-white p-3 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-gray-800">Ana Costa (Enfermeira)</span>
                <span className="text-xs text-gray-500">09:15</span>
              </div>
              <p className="text-gray-700 text-sm">Maria, lembre-se da fisioterapia às 14h. Qualquer dúvida, me chame!</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <textarea 
            placeholder="Digite sua mensagem ou dúvida..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="3"
          />
          <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Enviar Mensagem
          </button>
        </div>
      </div>
    </div>
  );

  const AIAssistant = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <span className="text-2xl mr-2">🤖</span>
          Assistente IA - CuidaBot
        </h3>
        
        <div className="bg-white rounded-lg p-4 mb-4">
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 rounded-full p-2">
              <span className="text-purple-600 font-bold">IA</span>
            </div>
            <div className="flex-1">
              <p className="text-gray-800 mb-2">
                <strong>Análise do Dia:</strong> Baseado nos dados de hoje, Sr. João está com glicemia ligeiramente elevada. Recomendo:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• Verificar se tomou a medicação da manhã</li>
                <li>• Monitorar alimentação nas próximas 2 horas</li>
                <li>• Considerar contato com Dr. Silva se glicemia > 180</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <button className="w-full p-3 bg-blue-50 border border-blue-200 rounded-lg text-left hover:bg-blue-100 transition-colors">
            <span className="font-medium text-blue-800">💊 "Que medicações devo dar agora?"</span>
          </button>
          
          <button className="w-full p-3 bg-green-50 border border-green-200 rounded-lg text-left hover:bg-green-100 transition-colors">
            <span className="font-medium text-green-800">🍽️ "O que Sr. João pode comer?"</span>
          </button>
          
          <button className="w-full p-3 bg-orange-50 border border-orange-200 rounded-lg text-left hover:bg-orange-100 transition-colors">
            <span className="font-medium text-orange-800">⚠️ "Como devo agir em emergência?"</span>
          </button>
          
          <button className="w-full p-3 bg-purple-50 border border-purple-200 rounded-lg text-left hover:bg-purple-100 transition-colors">
            <span className="font-medium text-purple-800">📊 "Interpretar resultado de exame"</span>
          </button>
        </div>
        
        <div className="mt-4">
          <input 
            type="text" 
            placeholder="Faça uma pergunta ao CuidaBot..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
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
      <main className="max-w-md mx-auto px-4 py-6">
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'vitals' && <VitalsForm />}
        {currentView === 'communication' && <CommunicationPanel />}
        {currentView === 'ai' && <AIAssistant />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-md mx-auto px-4">
          <div className="flex justify-around py-2">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                currentView === 'dashboard' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
              }`}
            >
              <FileText className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Início</span>
            </button>
            
            <button
              onClick={() => setCurrentView('vitals')}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                currentView === 'vitals' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
              }`}
            >
              <Heart className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Sinais</span>
            </button>
            
            <button
              onClick={() => setCurrentView('communication')}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                currentView === 'communication' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
              }`}
            >
              <MessageCircle className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">Chat</span>
            </button>
            
            <button
              onClick={() => setCurrentView('ai')}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                currentView === 'ai' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
              }`}
            >
              <span className="text-lg mb-1">🤖</span>
              <span className="text-xs font-medium">IA</span>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Spacing for fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
};

export default HomeCareApp;