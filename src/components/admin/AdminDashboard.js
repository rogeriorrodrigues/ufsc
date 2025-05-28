import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Heart, 
  MessageCircle, 
  FileText, 
  BarChart3, 
  Settings, 
  AlertTriangle, 
  TrendingUp, 
  Activity,
  Clock,
  Shield,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Eye,
  Bell,
  Calendar,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Mock data
  const dashboardStats = {
    totalPatients: 247,
    activeCaregivers: 89,
    criticalAlerts: 12,
    completedTasks: 1847
  };

  const vitalsData = [
    { date: '01/05', pressao: 120, glicemia: 95, temperatura: 36.5 },
    { date: '02/05', pressao: 125, glicemia: 110, temperatura: 36.8 },
    { date: '03/05', pressao: 118, glicemia: 88, temperatura: 36.2 },
    { date: '04/05', pressao: 135, glicemia: 145, temperatura: 37.1 },
    { date: '05/05', pressao: 122, glicemia: 92, temperatura: 36.4 },
    { date: '06/05', pressao: 128, glicemia: 98, temperatura: 36.6 },
    { date: '07/05', pressao: 130, glicemia: 102, temperatura: 36.3 }
  ];

  const alertsDistribution = [
    { name: 'Medicação', value: 45, color: '#ef4444' },
    { name: 'Sinais Vitais', value: 30, color: '#f97316' },
    { name: 'Comunicação', value: 15, color: '#eab308' },
    { name: 'Outros', value: 10, color: '#22c55e' }
  ];

  const taskCompletionData = [
    { mes: 'Jan', concluidas: 1200, pendentes: 200 },
    { mes: 'Fev', concluidas: 1350, pendentes: 180 },
    { mes: 'Mar', concluidas: 1450, pendentes: 150 },
    { mes: 'Abr', concluidas: 1600, pendentes: 120 },
    { mes: 'Mai', concluidas: 1750, pendentes: 100 }
  ];

  const patients = [
    {
      id: 1,
      name: 'João Silva',
      age: 78,
      condition: 'Diabetes + Hipertensão',
      caregiver: 'Maria Helena',
      status: 'stable',
      lastUpdate: '2025-05-28 14:30',
      alerts: 2,
      location: 'São José, SC'
    },
    {
      id: 2,
      name: 'Ana Santos',
      age: 82,
      condition: 'Alzheimer',
      caregiver: 'Carlos Lima',
      status: 'critical',
      lastUpdate: '2025-05-28 16:15',
      alerts: 5,
      location: 'Florianópolis, SC'
    },
    {
      id: 3,
      name: 'Pedro Costa',
      age: 75,
      condition: 'Cardiopatia',
      caregiver: 'Lucia Melo',
      status: 'stable',
      lastUpdate: '2025-05-28 13:45',
      alerts: 0,
      location: 'Palhoça, SC'
    }
  ];

  const caregivers = [
    {
      id: 1,
      name: 'Maria Helena Silva',
      patients: 4,
      experience: '10 anos',
      rating: 4.8,
      status: 'active',
      location: 'São José, SC',
      phone: '(48) 99999-0001',
      email: 'maria.helena@email.com'
    },
    {
      id: 2,
      name: 'Carlos Lima Santos',
      patients: 3,
      experience: '7 anos',
      rating: 4.6,
      status: 'active',
      location: 'Florianópolis, SC',
      phone: '(48) 99999-0002',
      email: 'carlos.lima@email.com'
    },
    {
      id: 3,
      name: 'Lucia Melo Costa',
      patients: 5,
      experience: '12 anos',
      rating: 4.9,
      status: 'busy',
      location: 'Palhoça, SC',
      phone: '(48) 99999-0003',
      email: 'lucia.melo@email.com'
    }
  ];

  const Dashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total de Pacientes</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardStats.totalPatients}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">+12%</span>
            <span className="text-gray-500 ml-1">vs mês anterior</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Cuidadores Ativos</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardStats.activeCaregivers}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">+5%</span>
            <span className="text-gray-500 ml-1">vs mês anterior</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Alertas Críticos</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardStats.criticalAlerts}</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <AlertTriangle className="w-4 h-4 text-red-500 mr-1" />
            <span className="text-red-600 font-medium">Atenção</span>
            <span className="text-gray-500 ml-1">necessária</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tarefas Concluídas</p>
              <p className="text-3xl font-bold text-gray-900">{dashboardStats.completedTasks}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">94%</span>
            <span className="text-gray-500 ml-1">taxa de conclusão</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sinais Vitais */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Tendência de Sinais Vitais</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={vitalsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pressao" stroke="#ef4444" strokeWidth={2} />
              <Line type="monotone" dataKey="glicemia" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Distribuição de Alertas */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">Distribuição de Alertas</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={alertsDistribution}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {alertsDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Task Completion Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Evolução de Tarefas por Mês</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={taskCompletionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="concluidas" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
            <Area type="monotone" dataKey="pendentes" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const PatientsView = () => (
    <div className="space-y-6">
      {/* Header with Search and Actions */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Gestão de Pacientes</h2>
        <div className="flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Novo Paciente
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar pacientes..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </button>
        </div>
      </div>

      {/* Patients Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Paciente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Condição
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cuidador
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Alertas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {patients.map((patient) => (
                <tr key={patient.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                        <div className="text-sm text-gray-500">{patient.age} anos • {patient.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.condition}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{patient.caregiver}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      patient.status === 'stable' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {patient.status === 'stable' ? 'Estável' : 'Crítico'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {patient.alerts > 0 ? (
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                          {patient.alerts} alertas
                        </span>
                      ) : (
                        <span className="text-gray-500 text-sm">Nenhum</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const CaregiversView = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Gestão de Cuidadores</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Novo Cuidador
        </button>
      </div>

      {/* Caregivers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caregivers.map((caregiver) => (
          <div key={caregiver.id} className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-medium">
                  {caregiver.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                caregiver.status === 'active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {caregiver.status === 'active' ? 'Ativo' : 'Ocupado'}
              </span>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{caregiver.name}</h3>
            
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>{caregiver.patients} pacientes</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{caregiver.experience}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{caregiver.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-2">Avaliação:</span>
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="text-sm text-gray-600 ml-1">({caregiver.rating})</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-50 text-blue-600 py-2 px-3 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Ligar
              </button>
              <button className="flex-1 bg-gray-50 text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const AlertsView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Central de Alertas</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Critical Alerts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            Críticos (5)
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-red-800">João Silva</span>
                <span className="text-xs text-red-600">14:30</span>
              </div>
              <p className="text-sm text-red-700">Glicemia > 200 mg/dL</p>
            </div>
            
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-red-800">Ana Santos</span>
                <span className="text-xs text-red-600">13:45</span>
              </div>
              <p className="text-sm text-red-700">Medicação não administrada</p>
            </div>
          </div>
        </div>

        {/* Warning Alerts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-yellow-600 mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            Atenção (8)
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-yellow-800">Pedro Costa</span>
                <span className="text-xs text-yellow-600">12:15</span>
              </div>
              <p className="text-sm text-yellow-700">Pressão levemente elevada</p>
            </div>
          </div>
        </div>

        {/* Info Alerts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold text-blue-600 mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2" />
            Informativos (12)
          </h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium text-blue-800">Sistema</span>
                <span className="text-xs text-blue-600">10:00</span>
              </div>
              <p className="text-sm text-blue-700">Backup realizado com sucesso</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CuidaDigital Admin</h1>
                <p className="text-sm text-gray-500">Plataforma de Gestão Home Care</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-medium text-sm">AD</span>
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
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                    currentView === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <BarChart3 className="w-5 h-5 mr-3" />
                  Dashboard
                </button>
                
                <button
                  onClick={() => setCurrentView('patients')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                    currentView === 'patients' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Users className="w-5 h-5 mr-3" />
                  Pacientes
                </button>
                
                <button
                  onClick={() => setCurrentView('caregivers')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                    currentView === 'caregivers' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Activity className="w-5 h-5 mr-3" />
                  Cuidadores
                </button>
                
                <button
                  onClick={() => setCurrentView('alerts')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                    currentView === 'alerts' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <AlertTriangle className="w-5 h-5 mr-3" />
                  Alertas
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    5
                  </span>
                </button>
                
                <button
                  onClick={() => setCurrentView('reports')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                    currentView === 'reports' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="w-5 h-5 mr-3" />
                  Relatórios
                </button>
                
                <button
                  onClick={() => setCurrentView('settings')}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                    currentView === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Configurações
                </button>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {currentView === 'dashboard' && <Dashboard />}
            {currentView === 'patients' && <PatientsView />}
            {currentView === 'caregivers' && <CaregiversView />}
            {currentView === 'alerts' && <AlertsView />}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;