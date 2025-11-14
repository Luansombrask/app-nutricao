"use client"

import { useState } from 'react'
import { ChevronRight, Target, Clock, Zap, Camera, CheckCircle, User, Mail, Phone, Sparkles, Crown, Trophy, Gift, Check, Scale, Ruler, Calendar, TrendingDown, TrendingUp, Minus, Heart, Star, Award, Flame, ArrowRight } from 'lucide-react'

// Componente separado para o Scanner Tutorial
function ScannerTutorial() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 space-y-6">
      {/* Simulação Visual do Scanner */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 min-h-[300px] flex items-center justify-center overflow-hidden">
        {/* Efeito de Scanner */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          activeStep === 1 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl opacity-80 animate-pulse" />
              <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white animate-bounce" />
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white font-bold text-lg">📸 Tire uma foto do prato</p>
          </div>
        </div>

        {/* IA Analisando */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          activeStep === 2 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white text-sm font-semibold">Frango detectado</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white text-sm font-semibold">Salada detectada</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                    <span className="text-white text-sm font-semibold">Analisando...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white font-bold text-lg">🤖 IA identificando alimentos</p>
          </div>
        </div>

        {/* Resultado */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          activeStep === 3 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="bg-white rounded-2xl p-6 w-full max-w-xs space-y-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Resultado</h3>
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                  420 kcal
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Proteínas</span>
                  <span className="text-cyan-600 font-bold">35g</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Carboidratos</span>
                  <span className="text-blue-600 font-bold">28g</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <span className="text-gray-700 font-semibold">Gorduras</span>
                  <span className="text-purple-600 font-bold">18g</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white font-bold text-lg">📊 Informações completas!</p>
          </div>
        </div>
      </div>

      {/* Controles de Navegação */}
      <div className="flex justify-center space-x-3">
        {[1, 2, 3].map((step) => (
          <button
            key={step}
            onClick={() => setActiveStep(step)}
            className={`transition-all ${
              activeStep === step
                ? 'w-12 h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full'
                : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Descrição dos Passos */}
      <div className="space-y-3">
        <div className={`flex items-start space-x-3 p-3 rounded-xl transition-all ${
          activeStep === 1 ? 'bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-300' : 'bg-gray-50'
        }`}>
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">1</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Tire uma Foto</h3>
            <p className="text-gray-600 text-sm">Aponte a câmera para seu prato</p>
          </div>
        </div>

        <div className={`flex items-start space-x-3 p-3 rounded-xl transition-all ${
          activeStep === 2 ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300' : 'bg-gray-50'
        }`}>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">2</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">IA Analisa</h3>
            <p className="text-gray-600 text-sm">Identificação automática dos alimentos</p>
          </div>
        </div>

        <div className={`flex items-start space-x-3 p-3 rounded-xl transition-all ${
          activeStep === 3 ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300' : 'bg-gray-50'
        }`}>
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">3</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Resultado Instantâneo</h3>
            <p className="text-gray-600 text-sm">Calorias e nutrientes calculados</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OnboardingQuiz() {
  const [currentStep, setCurrentStep] = useState(0) // Começar na tela de boas-vindas
  const [quizData, setQuizData] = useState({
    goal: '',
    timeframe: '',
    name: '',
    email: '',
    phone: '',
    weight: '',
    height: '',
    age: '',
    mainGoal: '', // emagrecer, ganhar peso, manter peso
    targetWeight: '',
    idealTime: '',
    weeklyGoal: ''
  })

  // Tela de Boas-Vindas Única
  const renderWelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-bounce">
            <Sparkles className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-6xl font-bold text-white">Bem-vindo ao FitScan! 🎉</h1>
          <p className="text-white/90 text-2xl leading-relaxed">
            Sua jornada para uma vida mais saudável começa agora
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Vamos começar!</h2>
            <p className="text-gray-600 text-lg">Em 2 minutos você terá seu plano personalizado</p>
          </div>

          <div className="space-y-5">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Scanner Inteligente</h3>
                <p className="text-gray-600">Tire foto da comida e saiba as calorias instantaneamente</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Planos Personalizados</h3>
                <p className="text-gray-600">Metas adaptadas ao seu estilo de vida</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">Acompanhamento Diário</h3>
                <p className="text-gray-600">Veja seu progresso em tempo real</p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setCurrentStep(1)}
          className="w-full bg-white text-purple-600 py-6 rounded-2xl font-bold text-2xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center space-x-3"
        >
          <span>Começar Minha Jornada</span>
          <ArrowRight className="w-7 h-7" />
        </button>
      </div>
    </div>
  )

  // Etapa 1: Nome
  const renderNameStep = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Como podemos te chamar?</h1>
          <p className="text-white/90 text-lg">Digite seu nome ou apelido</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8">
          <label className="block text-gray-700 font-semibold mb-3">Seu Nome</label>
          <input
            type="text"
            value={quizData.name}
            onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
            placeholder="Ex: Maria Silva"
            className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all text-gray-800 text-lg"
          />
        </div>

        <button
          onClick={() => quizData.name && setCurrentStep(2)}
          disabled={!quizData.name}
          className={`w-full py-5 rounded-2xl font-bold text-xl transition-all ${
            quizData.name
              ? 'bg-white text-purple-600 hover:shadow-2xl hover:scale-105'
              : 'bg-white/40 text-white/60 cursor-not-allowed'
          }`}
        >
          Continuar
        </button>

        <div className="flex justify-center space-x-2 pt-4">
          {Array.from({ length: 15 }).map((_, dot) => (
            <div
              key={dot}
              className={`h-2 rounded-full transition-all ${
                dot === 0 ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  // Etapa 2: Idade
  const renderAgeStep = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-red-500 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Qual é a sua idade?</h1>
          <p className="text-white/90 text-lg">Isso nos ajuda a personalizar seu metabolismo</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8">
          <label className="block text-gray-700 font-semibold mb-3">Idade (anos)</label>
          <input
            type="number"
            value={quizData.age}
            onChange={(e) => setQuizData({ ...quizData, age: e.target.value })}
            placeholder="Ex: 28"
            className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all text-gray-800 text-lg"
          />
        </div>

        <button
          onClick={() => quizData.age && setCurrentStep(3)}
          disabled={!quizData.age}
          className={`w-full py-5 rounded-2xl font-bold text-xl transition-all ${
            quizData.age
              ? 'bg-white text-orange-600 hover:shadow-2xl hover:scale-105'
              : 'bg-white/40 text-white/60 cursor-not-allowed'
          }`}
        >
          Continuar
        </button>

        <div className="flex justify-center space-x-2 pt-4">
          {Array.from({ length: 15 }).map((_, dot) => (
            <div
              key={dot}
              className={`h-2 rounded-full transition-all ${
                dot === 1 ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  // Etapa 3: Peso Atual
  const renderWeightStep = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Scale className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Qual é o seu peso atual?</h1>
          <p className="text-white/90 text-lg">Seja honesto, isso nos ajuda a personalizar seu plano</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8">
          <label className="block text-gray-700 font-semibold mb-3">Peso Atual (kg)</label>
          <input
            type="number"
            value={quizData.weight}
            onChange={(e) => setQuizData({ ...quizData, weight: e.target.value })}
            placeholder="Ex: 75"
            className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all text-gray-800 text-lg"
          />
        </div>

        <button
          onClick={() => quizData.weight && setCurrentStep(4)}
          disabled={!quizData.weight}
          className={`w-full py-5 rounded-2xl font-bold text-xl transition-all ${
            quizData.weight
              ? 'bg-white text-purple-600 hover:shadow-2xl hover:scale-105'
              : 'bg-white/40 text-white/60 cursor-not-allowed'
          }`}
        >
          Continuar
        </button>

        <div className="flex justify-center space-x-2 pt-4">
          {Array.from({ length: 15 }).map((_, dot) => (
            <div
              key={dot}
              className={`h-2 rounded-full transition-all ${
                dot === 2 ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  // Etapa 4: Altura
  const renderHeightStep = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Ruler className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Qual é a sua altura?</h1>
          <p className="text-white/90 text-lg">Vamos calcular seu IMC ideal</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8">
          <label className="block text-gray-700 font-semibold mb-3">Altura (cm)</label>
          <input
            type="number"
            value={quizData.height}
            onChange={(e) => setQuizData({ ...quizData, height: e.target.value })}
            placeholder="Ex: 170"
            className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-200 transition-all text-gray-800 text-lg"
          />
        </div>

        <button
          onClick={() => quizData.height && setCurrentStep(5)}
          disabled={!quizData.height}
          className={`w-full py-5 rounded-2xl font-bold text-xl transition-all ${
            quizData.height
              ? 'bg-white text-green-600 hover:shadow-2xl hover:scale-105'
              : 'bg-white/40 text-white/60 cursor-not-allowed'
          }`}
        >
          Continuar
        </button>

        <div className="flex justify-center space-x-2 pt-4">
          {Array.from({ length: 15 }).map((_, dot) => (
            <div
              key={dot}
              className={`h-2 rounded-full transition-all ${
                dot === 3 ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  // Etapa 5: Objetivo Principal (emagrecer, ganhar, manter)
  const renderMainGoalStep = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Qual é o seu objetivo?</h1>
          <p className="text-white/90 text-lg">Escolha o que melhor descreve sua meta</p>
        </div>

        <div className="space-y-4">
          {[
            { id: 'lose', label: 'Perder Peso', desc: 'Quero emagrecer de forma saudável', icon: TrendingDown, gradient: 'from-red-500 to-orange-500' },
            { id: 'maintain', label: 'Manter Peso', desc: 'Quero manter meu peso atual', icon: Minus, gradient: 'from-blue-500 to-cyan-500' },
            { id: 'gain', label: 'Ganhar Peso', desc: 'Quero ganhar massa muscular', icon: TrendingUp, gradient: 'from-green-500 to-emerald-500' }
          ].map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.id}
                onClick={() => {
                  setQuizData({ ...quizData, mainGoal: option.id })
                  setCurrentStep(6)
                }}
                className="w-full bg-white/95 backdrop-blur-sm rounded-3xl p-6 hover:bg-white transition-all hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 bg-gradient-to-r ${option.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-gray-800">{option.label}</h3>
                    <p className="text-gray-600 text-sm">{option.desc}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            )
          })}
        </div>

        <div className="flex justify-center space-x-2 pt-4">
          {Array.from({ length: 15 }).map((_, dot) => (
            <div
              key={dot}
              className={`h-2 rounded-full transition-all ${
                dot === 4 ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  // Etapa 6: Motivação Intermediária
  const renderMotivationStep1 = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4 animate-pulse">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white">Você está indo muito bem! 🎉</h1>
          <p className="text-white/90 text-xl leading-relaxed">
            Já estamos montando um plano perfeito para você. Continue, falta pouco!
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <Check className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Dados Coletados</h3>
              <p className="text-gray-600">Peso, altura e idade registrados</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">IA Analisando</h3>
              <p className="text-gray-600">Criando seu plano personalizado</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
              <Flame className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Próximo Passo</h3>
              <p className="text-gray-600">Definir sua meta de peso</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setCurrentStep(7)}
          className="w-full bg-white text-orange-600 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105"
        >
          Continuar Minha Jornada
        </button>

        <div className="flex justify-center space-x-2 pt-4">
          {Array.from({ length: 15 }).map((_, dot) => (
            <div
              key={dot}
              className={`h-2 rounded-full transition-all ${
                dot === 5 ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  // Etapa 7: Peso Alvo
  const renderTargetWeightStep = () => {
    const currentWeight = parseFloat(quizData.weight) || 0
    const goalText = quizData.mainGoal === 'lose' ? 'alcançar' : quizData.mainGoal === 'gain' ? 'alcançar' : 'manter'
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Qual é o seu peso ideal?</h1>
            <p className="text-white/90 text-lg">
              Você está em {currentWeight}kg. Qual peso deseja {goalText}?
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8">
            <label className="block text-gray-700 font-semibold mb-3">Peso Alvo (kg)</label>
            <input
              type="number"
              value={quizData.targetWeight}
              onChange={(e) => setQuizData({ ...quizData, targetWeight: e.target.value })}
              placeholder="Ex: 68"
              className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all text-gray-800 text-lg"
            />
            
            {quizData.targetWeight && (
              <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
                <p className="text-gray-700 font-semibold">
                  {quizData.mainGoal === 'lose' && `Você quer perder ${(currentWeight - parseFloat(quizData.targetWeight)).toFixed(1)}kg`}
                  {quizData.mainGoal === 'gain' && `Você quer ganhar ${(parseFloat(quizData.targetWeight) - currentWeight).toFixed(1)}kg`}
                  {quizData.mainGoal === 'maintain' && `Você quer manter seu peso atual`}
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => quizData.targetWeight && setCurrentStep(8)}
            disabled={!quizData.targetWeight}
            className={`w-full py-5 rounded-2xl font-bold text-xl transition-all ${
              quizData.targetWeight
                ? 'bg-white text-purple-600 hover:shadow-2xl hover:scale-105'
                : 'bg-white/40 text-white/60 cursor-not-allowed'
            }`}
          >
            Continuar
          </button>

          <div className="flex justify-center space-x-2 pt-4">
            {Array.from({ length: 15 }).map((_, dot) => (
              <div
                key={dot}
                className={`h-2 rounded-full transition-all ${
                  dot === 6 ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Etapa 8: Tempo Ideal para Alcançar Meta
  const renderIdealTimeStep = () => {
    const currentWeight = parseFloat(quizData.weight) || 0
    const targetWeight = parseFloat(quizData.targetWeight) || 0
    const difference = Math.abs(currentWeight - targetWeight)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-600 via-blue-500 to-purple-600 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Em quanto tempo?</h1>
            <p className="text-white/90 text-lg">
              Escolha o prazo ideal para {quizData.mainGoal === 'lose' ? 'perder' : quizData.mainGoal === 'gain' ? 'ganhar' : 'manter'} {difference.toFixed(1)}kg
            </p>
          </div>

          <div className="space-y-4">
            {[
              { id: '1-month', label: '1 Mês', desc: 'Ritmo acelerado', recommended: difference <= 4 },
              { id: '2-months', label: '2 Meses', desc: 'Equilíbrio ideal', recommended: difference > 4 && difference <= 8 },
              { id: '3-months', label: '3 Meses', desc: 'Sustentável e saudável', recommended: difference > 8 && difference <= 12 },
              { id: '6-months', label: '6 Meses', desc: 'Transformação gradual', recommended: difference > 12 && difference <= 20 },
              { id: '1-year', label: '1 Ano', desc: 'Mudança de estilo de vida', recommended: difference > 20 }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setQuizData({ ...quizData, idealTime: option.id })
                  setCurrentStep(9)
                }}
                className={`w-full bg-white/95 backdrop-blur-sm rounded-3xl p-6 hover:bg-white transition-all hover:scale-105 hover:shadow-2xl group relative ${
                  option.recommended ? 'border-4 border-yellow-400' : ''
                }`}
              >
                {option.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-bl-2xl rounded-tr-2xl font-bold text-xs">
                    RECOMENDADO
                  </div>
                )}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-gray-800">{option.label}</h3>
                    <p className="text-gray-600 text-sm">{option.desc}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-center space-x-2 pt-4">
            {Array.from({ length: 15 }).map((_, dot) => (
              <div
                key={dot}
                className={`h-2 rounded-full transition-all ${
                  dot === 7 ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Etapa 9: Meta Semanal
  const renderWeeklyGoalStep = () => {
    const currentWeight = parseFloat(quizData.weight) || 0
    const targetWeight = parseFloat(quizData.targetWeight) || 0
    const difference = Math.abs(currentWeight - targetWeight)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <TrendingDown className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Meta Semanal</h1>
            <p className="text-white/90 text-lg">
              Quantos quilos por semana você quer {quizData.mainGoal === 'lose' ? 'perder' : quizData.mainGoal === 'gain' ? 'ganhar' : 'manter'}?
            </p>
          </div>

          <div className="space-y-4">
            {[
              { id: '0.25', label: '0,25 kg/semana', desc: 'Muito gradual e sustentável', recommended: difference <= 5 },
              { id: '0.5', label: '0,5 kg/semana', desc: 'Ritmo saudável recomendado', recommended: difference > 5 && difference <= 10 },
              { id: '0.75', label: '0,75 kg/semana', desc: 'Moderado e eficaz', recommended: difference > 10 && difference <= 15 },
              { id: '1', label: '1 kg/semana', desc: 'Acelerado mas seguro', recommended: difference > 15 }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setQuizData({ ...quizData, weeklyGoal: option.id })
                  setCurrentStep(10)
                }}
                className={`w-full bg-white/95 backdrop-blur-sm rounded-3xl p-6 hover:bg-white transition-all hover:scale-105 hover:shadow-2xl group relative ${
                  option.recommended ? 'border-4 border-yellow-400' : ''
                }`}
              >
                {option.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-bl-2xl rounded-tr-2xl font-bold text-xs">
                    IDEAL PARA VOCÊ
                  </div>
                )}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Scale className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-gray-800">{option.label}</h3>
                    <p className="text-gray-600 text-sm">{option.desc}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-center space-x-2 pt-4">
            {Array.from({ length: 15 }).map((_, dot) => (
              <div
                key={dot}
                className={`h-2 rounded-full transition-all ${
                  dot === 8 ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Etapa 10: Motivação Intermediária 2
  const renderMotivationStep2 = () => {
    const currentWeight = parseFloat(quizData.weight) || 0
    const targetWeight = parseFloat(quizData.targetWeight) || 0
    const difference = Math.abs(currentWeight - targetWeight)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-600 via-purple-500 to-indigo-600 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4 animate-bounce">
              <Star className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white">Incrível! 🌟</h1>
            <p className="text-white/90 text-xl leading-relaxed">
              Seu plano está quase pronto. Você está no caminho certo para alcançar seus objetivos!
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 space-y-6">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Seu Resumo</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                <span className="text-gray-700 font-semibold">Peso Atual</span>
                <span className="text-2xl font-bold text-purple-600">{currentWeight}kg</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl">
                <span className="text-gray-700 font-semibold">Peso Alvo</span>
                <span className="text-2xl font-bold text-indigo-600">{targetWeight}kg</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl">
                <span className="text-gray-700 font-semibold">
                  {quizData.mainGoal === 'lose' ? 'Perder' : quizData.mainGoal === 'gain' ? 'Ganhar' : 'Manter'}
                </span>
                <span className="text-2xl font-bold text-blue-600">{difference.toFixed(1)}kg</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
                <span className="text-gray-700 font-semibold">Meta Semanal</span>
                <span className="text-2xl font-bold text-cyan-600">{quizData.weeklyGoal}kg</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentStep(11)}
            className="w-full bg-white text-purple-600 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Continuar para Finalizar
          </button>

          <div className="flex justify-center space-x-2 pt-4">
            {Array.from({ length: 15 }).map((_, dot) => (
              <div
                key={dot}
                className={`h-2 rounded-full transition-all ${
                  dot === 9 ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Etapa 11: Objetivo de Emagrecimento
  const renderGoalStep = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Qual é o seu foco principal?</h1>
          <p className="text-white/90 text-lg">Escolha o que mais se alinha com você</p>
        </div>

        <div className="space-y-4">
          {[
            { id: 'lose-weight', label: 'Perder Peso', desc: 'Quero emagrecer de forma saudável', icon: Target },
            { id: 'maintain', label: 'Manter Peso', desc: 'Quero manter meu peso atual', icon: CheckCircle },
            { id: 'gain-muscle', label: 'Ganhar Massa', desc: 'Quero ganhar músculos', icon: Zap },
            { id: 'healthy-life', label: 'Vida Saudável', desc: 'Quero ter hábitos mais saudáveis', icon: Sparkles }
          ].map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.id}
                onClick={() => {
                  setQuizData({ ...quizData, goal: option.id })
                  setCurrentStep(12)
                }}
                className="w-full bg-white/95 backdrop-blur-sm rounded-3xl p-6 hover:bg-white transition-all hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-gray-800">{option.label}</h3>
                    <p className="text-gray-600 text-sm">{option.desc}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            )
          })}
        </div>

        <div className="flex justify-center space-x-2 pt-4">
          {Array.from({ length: 15 }).map((_, dot) => (
            <div
              key={dot}
              className={`h-2 rounded-full transition-all ${
                dot === 10 ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  // Etapa 12: Tempo disponível
  const renderTimeframeStep = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Clock className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Quanto tempo você tem por dia?</h1>
          <p className="text-white/90 text-lg">Para dedicar aos seus objetivos</p>
        </div>

        <div className="space-y-4">
          {[
            { id: '15-min', label: '15 minutos', desc: 'Rotina rápida e eficiente' },
            { id: '30-min', label: '30 minutos', desc: 'Equilíbrio perfeito' },
            { id: '45-min', label: '45 minutos', desc: 'Dedicação moderada' },
            { id: '1-hour', label: '1 hora ou mais', desc: 'Comprometimento total' }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => {
                setQuizData({ ...quizData, timeframe: option.id })
                setCurrentStep(13)
              }}
              className="w-full bg-white/95 backdrop-blur-sm rounded-3xl p-6 hover:bg-white transition-all hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold text-gray-800">{option.label}</h3>
                  <p className="text-gray-600 text-sm">{option.desc}</p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-center space-x-2 pt-4">
          {Array.from({ length: 15 }).map((_, dot) => (
            <div
              key={dot}
              className={`h-2 rounded-full transition-all ${
                dot === 11 ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  // Etapa 13: Tutorial do Scanner com Imagem Interativa
  const renderScannerTutorial = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4 animate-pulse">
              <Camera className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">Scanner Inteligente</h1>
            <p className="text-white/90 text-lg">Veja como é simples medir suas calorias</p>
          </div>

          {/* Componente Scanner Tutorial */}
          <ScannerTutorial />

          <button
            onClick={() => setCurrentStep(14)}
            className="w-full bg-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Entendi, Continuar
            </span>
          </button>

          <div className="flex justify-center space-x-2 pt-4">
            {Array.from({ length: 15 }).map((_, dot) => (
              <div
                key={dot}
                className={`h-2 rounded-full transition-all ${
                  dot === 12 ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Etapa 14: Email e Telefone
  const renderContactStep = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Seus Dados de Contato</h1>
          <p className="text-white/90 text-lg">Para manter você conectado</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-3 flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </label>
            <input
              type="email"
              value={quizData.email}
              onChange={(e) => setQuizData({ ...quizData, email: e.target.value })}
              placeholder="seu@email.com"
              className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all text-gray-800 text-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-3 flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Telefone</span>
            </label>
            <input
              type="tel"
              value={quizData.phone}
              onChange={(e) => setQuizData({ ...quizData, phone: e.target.value })}
              placeholder="(11) 99999-9999"
              className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all text-gray-800 text-lg"
            />
          </div>
        </div>

        <button
          onClick={() => quizData.email && quizData.phone && setCurrentStep(15)}
          disabled={!quizData.email || !quizData.phone}
          className={`w-full py-5 rounded-2xl font-bold text-xl transition-all ${
            quizData.email && quizData.phone
              ? 'bg-white text-purple-600 hover:shadow-2xl hover:scale-105'
              : 'bg-white/40 text-white/60 cursor-not-allowed'
          }`}
        >
          Continuar
        </button>

        <div className="flex justify-center space-x-2 pt-4">
          {Array.from({ length: 15 }).map((_, dot) => (
            <div
              key={dot}
              className={`h-2 rounded-full transition-all ${
                dot === 13 ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  // Etapa 15: Oferta de Assinatura
  const renderOfferStep = () => (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full mb-4 animate-bounce">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white">Parabéns, {quizData.name}! 🎉</h1>
          <p className="text-white/90 text-xl">Você está pronto para transformar sua vida!</p>
        </div>

        <div className="space-y-4">
          {/* Plano Anual */}
          <div className="bg-white rounded-3xl p-6 shadow-2xl border-4 border-yellow-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-bl-2xl font-bold text-sm">
              MELHOR OFERTA
            </div>
            <div className="pt-4">
              <div className="flex items-center space-x-3 mb-4">
                <Crown className="w-8 h-8 text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-800">Plano Anual</h3>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">R$ 299</span>
                  <span className="text-gray-500 line-through text-xl">R$ 599</span>
                </div>
                <p className="text-gray-600 mt-1">Apenas R$ 24,90/mês</p>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  'Scanner ilimitado de alimentos',
                  'Planos personalizados de nutrição',
                  'Acompanhamento de progresso',
                  'Suporte prioritário 24/7',
                  'Acesso a receitas exclusivas'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
                Assinar Plano Anual
              </button>
            </div>
          </div>

          {/* Plano Mensal */}
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="w-7 h-7 text-purple-500" />
              <h3 className="text-xl font-bold text-gray-800">Plano Mensal</h3>
            </div>
            <div className="mb-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold text-gray-800">R$ 49,90</span>
                <span className="text-gray-500">/mês</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                'Scanner ilimitado de alimentos',
                'Planos personalizados',
                'Acompanhamento básico'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all hover:scale-105">
              Assinar Plano Mensal
            </button>
          </div>

          {/* Trial Gratuito */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-6 border-2 border-cyan-200">
            <div className="flex items-center space-x-3 mb-3">
              <Gift className="w-7 h-7 text-cyan-600" />
              <h3 className="text-lg font-bold text-gray-800">Teste Grátis por 3 Dias</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              Experimente todos os recursos premium sem compromisso. Cancele quando quiser!
            </p>
            <button className="w-full bg-white text-cyan-600 border-2 border-cyan-500 py-4 rounded-2xl font-bold hover:bg-cyan-50 transition-all">
              Começar Teste Grátis
            </button>
          </div>
        </div>

        <div className="flex justify-center space-x-2 pt-4">
          {Array.from({ length: 15 }).map((_, dot) => (
            <div
              key={dot}
              className={`h-2 rounded-full transition-all ${
                dot === 14 ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )

  // Renderizar etapa atual
  const renderCurrentStep = () => {
    switch(currentStep) {
      case 0: return renderWelcomeScreen()
      case 1: return renderNameStep()
      case 2: return renderAgeStep()
      case 3: return renderWeightStep()
      case 4: return renderHeightStep()
      case 5: return renderMainGoalStep()
      case 6: return renderMotivationStep1()
      case 7: return renderTargetWeightStep()
      case 8: return renderIdealTimeStep()
      case 9: return renderWeeklyGoalStep()
      case 10: return renderMotivationStep2()
      case 11: return renderGoalStep()
      case 12: return renderTimeframeStep()
      case 13: return renderScannerTutorial()
      case 14: return renderContactStep()
      case 15: return renderOfferStep()
      default: return renderWelcomeScreen()
    }
  }

  return renderCurrentStep()
}
