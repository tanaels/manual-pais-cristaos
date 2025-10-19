"use client";

import { useState } from 'react';
import { Heart, BookOpen, Users, Shield, Star, Download, CheckCircle, Gift, Clock, ArrowRight, Upload, Link } from 'lucide-react';

export default function SalesPage() {
  const [showFAQ, setShowFAQ] = useState<number | null>(null);
  // Configurações pré-definidas conforme solicitado
  const [productImage] = useState<string>('https://i.ibb.co/dYF31XH/image.png');
  const [salesPageLink] = useState<string>('https://pay.cakto.com.br/wzihpgi_613322');

  const toggleFAQ = (index: number) => {
    setShowFAQ(showFAQ === index ? null : index);
  };

  const handleActionClick = () => {
    if (salesPageLink) {
      window.open(salesPageLink, '_blank');
    } else {
      alert('Link de vendas não configurado!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              🏠 Manual dos Pais Cristãos:<br />
              <span className="text-yellow-300">Criando Filhos para o Reino</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              O guia definitivo baseado na Palavra de Deus para formar o caráter cristão dos seus filhos 
              e prepará-los para uma vida de propósito e fé inabalável
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg italic text-yellow-200">
              "Instrui o menino no caminho em que deve andar, e até quando envelhecer não se desviará dele."
            </p>
            <p className="text-sm mt-2 text-blue-200">- Provérbios 22:6</p>
          </div>

          <div className="mb-8">
            <div className="bg-white/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src={productImage} 
                    alt="Manual dos Pais Cristãos" 
                    className="w-32 h-40 mx-auto rounded-lg shadow-2xl object-cover border-4 border-white/30"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden">
                    <BookOpen className="w-20 h-20 mx-auto mb-4 text-yellow-300" />
                  </div>
                </div>
                <p className="text-lg font-semibold">E-book Digital</p>
                <p className="text-blue-200">Download Imediato</p>
              </div>
            </div>
          </div>

          <button 
            onClick={handleActionClick}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xl px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4"
          >
            ✨ QUERO TRANSFORMAR MINHA FAMÍLIA AGORA
          </button>
          <p className="text-sm text-blue-200">Acesso imediato • Garantia de 15 dias • Bônus exclusivos</p>
        </div>
      </section>

      {/* Seção do Problema */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            💔 Você Sente Que Está Perdendo Seus Filhos Para o Mundo?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-600 mb-4">😰 Os Medos Que Te Assombram:</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li>• Seus filhos estão absorvendo valores mundanos na escola e redes sociais</li>
                <li>• Você não sabe como competir com a influência negativa dos amigos</li>
                <li>• Sente que não tem autoridade espiritual suficiente para guiá-los</li>
                <li>• Tem medo de que eles se afastem da fé quando crescerem</li>
                <li>• Não sabe como abordar temas difíceis de forma bíblica</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-red-600 mb-4">😔 A Realidade Dolorosa:</h3>
              <ul className="text-left space-y-3 text-gray-700">
                <li>• Você se sente inadequado(a) como pai/mãe cristão(ã)</li>
                <li>• As birras e rebeldia parecem estar fora de controle</li>
                <li>• Não consegue estabelecer disciplina com amor cristão</li>
                <li>• Seus filhos questionam tudo sobre a fé</li>
                <li>• Você repete os mesmos erros dos seus pais</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg">
            <p className="text-lg text-red-800 font-semibold">
              <strong>A verdade é:</strong> Sem um plano bíblico sólido, você está navegando às cegas na missão mais importante da sua vida - 
              formar o caráter eterno dos seus filhos. 😢
            </p>
          </div>
        </div>
      </section>

      {/* Seção da Solução */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            ✨ A Resposta Que Deus Preparou Para Você
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-green-700 mb-6">
              🙏 Este NÃO é apenas mais um guia de paternidade...
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              É um <strong>manual divino</strong> baseado integralmente na Palavra de Deus, 
              testado por famílias cristãs e aprovado por pastores e educadores cristãos.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <h4 className="font-semibold text-gray-800">Relacionamento Restaurado</h4>
                <p className="text-sm text-gray-600">Reconecte-se com seus filhos através do amor de Cristo</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h4 className="font-semibold text-gray-800">Proteção Espiritual</h4>
                <p className="text-sm text-gray-600">Blindagem bíblica contra as influências do mundo</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <h4 className="font-semibold text-gray-800">Legado Eterno</h4>
                <p className="text-sm text-gray-600">Filhos que honram a Deus e impactam gerações</p>
              </div>
            </div>
          </div>

          <button 
            onClick={handleActionClick}
            className="bg-green-600 hover:bg-green-500 text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            🎯 SIM, QUERO CRIAR FILHOS PARA O REINO
          </button>
        </div>
      </section>

      {/* Detalhes do Produto */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            📖 O Que Você Está Recebendo
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Manual dos Pais Cristãos</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />E-book em PDF de alta qualidade</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />60 páginas de conteúdo prático</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Download imediato após a compra</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Acesso vitalício ao material</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-3" />Compatível com todos os dispositivos</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                  <img 
                    src={productImage} 
                    alt="Manual dos Pais Cristãos" 
                    className="w-32 h-40 mx-auto mb-4 rounded-lg shadow-2xl object-cover border-4 border-white/30"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden">
                    <BookOpen className="w-20 h-20 mx-auto mb-4" />
                  </div>
                  <p className="text-lg font-semibold">Para Pais, Mães e</p>
                  <p className="text-lg font-semibold">Educadores Cristãos</p>
                  <p className="text-sm mt-2 opacity-90">Que desejam criar filhos temente a Deus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo do E-book */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            📚 O Que Você Vai Descobrir Dentro do Manual
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                <h3 className="text-lg font-semibold text-gray-800">O Fundamento Bíblico da Paternidade</h3>
              </div>
              <p className="text-gray-600">Descubra o plano original de Deus para a família e como aplicar os princípios eternos na criação dos seus filhos.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center mb-3">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                <h3 className="text-lg font-semibold text-gray-800">Disciplina com Amor e Firmeza</h3>
              </div>
              <p className="text-gray-600">Aprenda a corrigir com amor cristão, estabelecendo limites claros sem quebrar o espírito dos seus filhos.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-3">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                <h3 className="text-lg font-semibold text-gray-800">Ensinando Valores Cristãos no Dia a Dia</h3>
              </div>
              <p className="text-gray-600">Estratégias práticas para transmitir valores bíblicos através de situações cotidianas e momentos de ensino.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-3">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                <h3 className="text-lg font-semibold text-gray-800">Protegendo Contra Influências Negativas</h3>
              </div>
              <p className="text-gray-600">Como blindar seus filhos espiritualmente contra as pressões do mundo moderno e da cultura secular.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
              <div className="flex items-center mb-3">
                <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                <h3 className="text-lg font-semibold text-gray-800">Desenvolvendo a Vida Devocional em Família</h3>
              </div>
              <p className="text-gray-600">Métodos eficazes para estabelecer momentos de oração, leitura bíblica e adoração que seus filhos vão amar.</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-lg border-l-4 border-rose-500">
              <div className="flex items-center mb-3">
                <span className="bg-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                <h3 className="text-lg font-semibold text-gray-800">Comunicação que Conecta Corações</h3>
              </div>
              <p className="text-gray-600">Técnicas bíblicas para criar diálogo aberto, resolver conflitos e fortalecer os laços familiares.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <div className="flex items-center mb-3">
                <span className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">7</span>
                <h3 className="text-lg font-semibold text-gray-800">Preparando para a Adolescência</h3>
              </div>
              <p className="text-gray-600">Estratégias preventivas para navegar pelos desafios da adolescência mantendo a fé e o relacionamento.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <div className="flex items-center mb-3">
                <span className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">8</span>
                <h3 className="text-lg font-semibold text-gray-800">Lidando com Comportamentos Desafiadores</h3>
              </div>
              <p className="text-gray-600">Soluções bíblicas para birras, desobediência, mentiras e outros comportamentos que testam sua paciência.</p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-lg border-l-4 border-violet-500">
              <div className="flex items-center mb-3">
                <span className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">9</span>
                <h3 className="text-lg font-semibold text-gray-800">Construindo Autoestima Baseada em Cristo</h3>
              </div>
              <p className="text-gray-600">Como ajudar seus filhos a encontrarem sua identidade em Cristo e desenvolverem confiança saudável.</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-center mb-3">
                <span className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">10</span>
                <h3 className="text-lg font-semibold text-gray-800">Criando um Legado de Fé</h3>
              </div>
              <p className="text-gray-600">Estratégias para garantir que seus filhos transmitam a fé para as próximas gerações.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus Exclusivos */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            🎁 Bônus Exclusivos (Por Tempo Limitado!)
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-yellow-300">
              <Gift className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">BÔNUS #1</h3>
              <h4 className="text-lg font-semibold text-yellow-600 mb-3">Guia de Orações Poderosas</h4>
              <p className="text-gray-600 mb-4">30 orações específicas para diferentes situações na vida dos seus filhos</p>
              <p className="text-sm text-gray-500">Valor: R$ 47,00</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-green-300">
              <Gift className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">BÔNUS #2</h3>
              <h4 className="text-lg font-semibold text-green-600 mb-3">Plano de Devocionais Familiares</h4>
              <p className="text-gray-600 mb-4">52 devocionais semanais prontos para usar com toda a família</p>
              <p className="text-sm text-gray-500">Valor: R$ 67,00</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-300">
              <Gift className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">BÔNUS #3</h3>
              <h4 className="text-lg font-semibold text-blue-600 mb-3">Checklist do Pai/Mãe Cristão</h4>
              <p className="text-gray-600 mb-4">Lista prática para acompanhar o desenvolvimento espiritual dos filhos</p>
              <p className="text-sm text-gray-500">Valor: R$ 37,00</p>
            </div>
          </div>

          <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6 mb-8">
            <Clock className="w-8 h-8 mx-auto mb-3 text-red-600" />
            <p className="text-lg font-bold text-red-700">
              ⚠️ ATENÇÃO: Estes bônus são por tempo limitado!
            </p>
            <p className="text-red-600">
              Após o lançamento, eles serão vendidos separadamente por R$ 151,00
            </p>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            🎯 Para Quem É Este Manual
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">✅ ESTE MANUAL É PARA VOCÊ SE:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />Você é pai, mãe ou responsável por crianças/adolescentes</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />Deseja criar filhos com valores cristãos sólidos</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />Quer métodos práticos baseados na Bíblia</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />Busca melhorar a comunicação familiar</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />Quer proteger seus filhos das influências mundanas</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />É educador cristão ou líder de ministério infantil</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />Está disposto(a) a aplicar princípios bíblicos</li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-2xl border-2 border-red-200">
              <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">❌ NÃO É PARA VOCÊ SE:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1 flex-shrink-0">✗</span>Você busca métodos seculares de educação</li>
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1 flex-shrink-0">✗</span>Não acredita na autoridade da Bíblia</li>
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1 flex-shrink-0">✗</span>Quer soluções mágicas sem esforço</li>
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1 flex-shrink-0">✗</span>Não está disposto(a) a mudar seus hábitos</li>
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1 flex-shrink-0">✗</span>Prefere métodos permissivos sem limites</li>
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1 flex-shrink-0">✗</span>Busca apenas teoria sem aplicação prática</li>
                <li className="flex items-start"><span className="text-red-500 mr-3 mt-1 flex-shrink-0">✗</span>Não tem tempo para se dedicar à família</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            💬 O Que Famílias Cristãs Estão Dizendo
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Este manual transformou completamente nossa família! Meus filhos agora obedecem com alegria e nossa casa se tornou um verdadeiro lar cristão. As estratégias são práticas e realmente funcionam!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Mariana Santos</p>
                  <p className="text-sm text-gray-600">Mãe de 3 filhos, São Paulo</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Como pastor, recomendo este manual para todas as famílias da nossa igreja. É biblicamente sólido e extremamente prático. Já vi várias famílias sendo restauradas através destes princípios."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  P
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Pastor Roberto Lima</p>
                  <p className="text-sm text-gray-600">Igreja Batista Central, RJ</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Estava perdendo meu filho adolescente para o mundo. Depois de aplicar os ensinamentos deste manual, nosso relacionamento foi restaurado e ele voltou a frequentar a igreja conosco!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  C
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Carlos Mendes</p>
                  <p className="text-sm text-gray-600">Pai de 2 filhos, Brasília</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Finalmente encontrei um guia que une amor e disciplina de forma bíblica. Meus filhos estão mais obedientes e nossa família mais unida. Recomendo de coração!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Ana Paula Costa</p>
                  <p className="text-sm text-gray-600">Mãe de 4 filhos, Minas Gerais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🛡️ Garantia Incondicional de 15 Dias
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-4">100% Livre de Riscos</h3>
            <p className="text-lg mb-6">
              Estamos tão confiantes na qualidade e eficácia do nosso manual que oferecemos uma 
              <strong> garantia incondicional de 15 dias</strong>.
            </p>
            <p className="text-blue-100 mb-6">
              Se por qualquer motivo você não ficar completamente satisfeito(a) com o conteúdo, 
              basta enviar um e-mail e devolvemos 100% do seu investimento, sem perguntas, sem burocracia.
            </p>
            <div className="bg-yellow-400 text-black p-4 rounded-lg inline-block">
              <p className="font-bold">O risco é todo nosso. A transformação é toda sua!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            ⏰ Sua Família Não Pode Esperar Mais!
          </h2>
          
          <p className="text-xl mb-8 text-green-100">
            Cada dia que passa é uma oportunidade perdida de moldar o caráter eterno dos seus filhos. 
            <strong>A hora de agir é AGORA!</strong>
          </p>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">🎁 Oferta Completa por Tempo Limitado:</h3>
            <div className="text-left space-y-2 mb-6">
              <p>✅ Manual dos Pais Cristãos - R$ 97,00</p>
              <p>✅ Bônus #1: Guia de Orações Poderosas - R$ 47,00</p>
              <p>✅ Bônus #2: Plano de Devocionais Familiares - R$ 67,00</p>
              <p>✅ Bônus #3: Checklist do Pai/Mãe Cristão - R$ 37,00</p>
              <hr className="border-white/30 my-4" />
              <p className="text-lg"><span className="line-through opacity-60">Valor Total: R$ 248,00</span></p>
              <p className="text-3xl font-bold text-yellow-300">HOJE APENAS: R$ 17,00</p>
            </div>
          </div>

          <button 
            onClick={handleActionClick}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-2xl px-16 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 mb-6"
          >
            🚀 TRANSFORMAR MINHA FAMÍLIA AGORA
          </button>

          <div className="flex items-center justify-center space-x-4 text-sm text-green-100">
            <div className="flex items-center">
              <Download className="w-4 h-4 mr-2" />
              <span>Download Imediato</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>Garantia 15 Dias</span>
            </div>
            <div className="flex items-center">
              <Gift className="w-4 h-4 mr-2" />
              <span>Bônus Inclusos</span>
            </div>
          </div>

          <p className="text-sm mt-6 text-blue-100">
            ⚠️ Esta oferta especial pode ser retirada do ar a qualquer momento
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            ❓ Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "Como recebo o e-book após a compra?",
                answer: "Após a confirmação do pagamento, você receberá imediatamente um e-mail com o link para download do e-book e todos os bônus. O acesso é instantâneo e vitalício."
              },
              {
                question: "O conteúdo funciona para filhos de todas as idades?",
                answer: "Sim! O manual aborda princípios bíblicos atemporais que se aplicam desde a primeira infância até a adolescência, com estratégias específicas para cada fase do desenvolvimento."
              },
              {
                question: "E se eu não conseguir aplicar os métodos?",
                answer: "O manual foi criado para ser extremamente prático e fácil de aplicar. Além disso, você tem 15 dias de garantia incondicional para testar todos os métodos sem riscos."
              },
              {
                question: "Posso imprimir o e-book?",
                answer: "Sim! O e-book vem em formato PDF de alta qualidade, permitindo impressão completa ou parcial para sua comodidade e estudo."
              },
              {
                question: "Os bônus são realmente gratuitos?",
                answer: "Sim! Durante este período promocional, todos os 3 bônus (no valor de R$ 151,00) estão inclusos gratuitamente. Após o lançamento, eles serão vendidos separadamente."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <ArrowRight className={`w-5 h-5 text-gray-500 transform transition-transform ${showFAQ === index ? 'rotate-90' : ''}`} />
                </button>
                {showFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 bg-gray-800 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">🙏 Que Deus Abençoe Sua Família</h3>
        <p className="text-gray-300 mb-6">
          "Porque eu sei os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro." - Jeremias 29:11
        </p>
        <button 
          onClick={handleActionClick}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          ✨ COMEÇAR MINHA TRANSFORMAÇÃO FAMILIAR
        </button>
      </section>
    </div>
  );
}