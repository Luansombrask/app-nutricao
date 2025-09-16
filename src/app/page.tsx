"use client"

import { useState } from 'react'
import { Home, TrendingUp, Settings, Plus, Search, Footprints, Flame, Droplets, Clock, MapPin, Zap } from 'lucide-react'

export default function NutritionApp() {
  const [activeTab, setActiveTab] = useState('home')
  const [searchQuery, setSearchQuery] = useState('')

  // Dados simulados para demonstração
  const weeklyStatus = [
    { day: 'S', status: 'good' },
    { day: 'M', status: 'good' },
    { day: 'T', status: 'good' },
    { day: 'W', status: 'poor' },
    { day: 'T', status: 'good' },
    { day: 'F', status: 'good' },
    { day: 'S', status: 'good' }
  ]

  const dailyStats = [
    { icon: Footprints, label: 'Passos', value: '8,547', target: '10,000', color: 'from-blue-500 to-cyan-500' },
    { icon: Flame, label: 'Calorias', value: '1,847', target: '2,200', color: 'from-orange-500 to-red-500' },
    { icon: Droplets, label: 'Água', value: '1.8L', target: '2.5L', color: 'from-cyan-400 to-blue-500' }
  ]

  const recentRecords = [
    {
      type: 'food',
      name: 'Salada Caesar',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=100&h=100&fit=crop',
      calories: 320,
      carbs: 15,
      protein: 25,
      fat: 18,
      time: '12:30',
      location: 'Restaurante'
    },
    {
      type: 'activity',
      name: 'Corrida',
      calories: 450,
      intensity: 'Alta',
      duration: '35 min',
      time: '07:00'
    },
    {
      type: 'food',
      name: 'Smoothie de Frutas',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=100&h=100&fit=crop',
      calories: 180,
      carbs: 42,
      protein: 4,
      fat: 2,
      time: '09:15',
      location: 'Casa'
    }
  ]

  const recommendedFoods = [
    {
      name: 'Abacate',
      calories: 160,
      carbs: 9,
      protein: 2,
      fat: 15,
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=100&h=100&fit=crop'
    },
    {
      name: 'Salmão Grelhado',
      calories: 206,
      carbs: 0,
      protein: 22,
      fat: 12,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=100&h=100&fit=crop'
    },
    {
      name: 'Quinoa',
      calories: 222,
      carbs: 39,
      protein: 8,
      fat: 4,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&h=100&fit=crop'
    }
  ]

  const renderHome = () => (
    <div className="space-y-6">
      {/* Barra de Status Semanal */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Esta Semana</h3>
        <div className="flex justify-between items-center">
          {weeklyStatus.map((day, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-600 font-medium">{day.day}</span>
              <div className={`w-3 h-3 rounded-full ${
                day.status === 'good' ? 'bg-green-500' : 'bg-red-400'
              }`} />
            </div>
          ))}
        </div>
      </div>

      {/* Cards de Estatísticas Diárias */}
      <div className="grid grid-cols-1 gap-4">
        {dailyStats.map((stat, index) => {
          const Icon = stat.icon
          const percentage = (parseInt(stat.value.replace(/[^\d]/g, '')) / parseInt(stat.target.replace(/[^\d]/g, ''))) * 100
          
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{stat.label}</h4>
                    <p className="text-sm text-gray-600">{stat.value} / {stat.target}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-800">{Math.round(percentage)}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-gradient-to-r ${stat.color}`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Registros Recentes */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Registros Recentes</h3>
        <div className="space-y-4">
          {recentRecords.map((record, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
              {record.type === 'food' ? (
                <>
                  <img 
                    src={record.image} 
                    alt={record.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{record.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{record.calories} cal</span>
                      <span>C:{record.carbs}g</span>
                      <span>P:{record.protein}g</span>
                      <span>G:{record.fat}g</span>
                    </div>
                    {record.location && (
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{record.location}</span>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{record.time}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{record.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{record.calories} cal</span>
                      <span>{record.intensity}</span>
                      <span>{record.duration}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{record.time}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Campo de Busca */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Buscar Alimentos</h3>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Digite o nome do alimento..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border-0 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-800 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Alimentos Recomendados */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recomendados para Você</h3>
        <div className="space-y-4">
          {recommendedFoods.map((food, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
              <img 
                src={food.image} 
                alt={food.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{food.name}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{food.calories} cal</span>
                  <span>C:{food.carbs}g</span>
                  <span>P:{food.protein}g</span>
                  <span>G:{food.fat}g</span>
                </div>
              </div>
              <Plus className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderProgress = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Progresso Semanal</h3>
        <p className="text-gray-600">Visualização detalhada do seu progresso será implementada aqui.</p>
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Configurações</h3>
        <p className="text-gray-600">Opções de configuração do aplicativo serão implementadas aqui.</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">NutriApp</h1>
          <p className="text-sm text-gray-600">Sua jornada saudável</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 pb-24">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'progress' && renderProgress()}
        {activeTab === 'settings' && renderSettings()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-center justify-around">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeTab === 'home' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeTab === 'progress' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`}
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs font-medium">Progress</span>
          </button>
          
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
              activeTab === 'settings' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`}
          >
            <Settings className="w-6 h-6" />
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-20 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all hover:scale-105">
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}