'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, CircleHelp, Download, ExternalLink, Feather, Gauge, Globe2, LockKeyhole, Menu, Plus, Search, ShieldCheck, ShieldX, Sparkles, X, Zap } from 'lucide-react'

const quickLinks = [
  { label: 'Notícias', detail: 'As principais do dia', icon: 'N', color: '#e6f1ff', url: 'https://news.google.com' },
  { label: 'YouTube', detail: 'Vídeos para assistir', icon: '▶', color: '#ffe8e7', url: 'https://youtube.com' },
  { label: 'Wikipedia', detail: 'Explore e aprenda', icon: 'W', color: '#eeece9', url: 'https://wikipedia.org' },
  { label: 'GitHub', detail: 'Código aberto', icon: '◉', color: '#e9edf0', url: 'https://github.com' },
]

export default function Home() {
  const [address, setAddress] = useState('')
  const [activeTab, setActiveTab] = useState('Nova aba')
  const [showMenu, setShowMenu] = useState(false)
  const [notice, setNotice] = useState(false)

  function navigate(value = address) {
    const input = value.trim()
    if (!input) return

    const looksLikeUrl = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/.*)?$/i.test(input)
    const destination = looksLikeUrl
      ? (input.startsWith('http') ? input : `https://${input}`)
      : `https://www.google.com/search?q=${encodeURIComponent(input)}`

    setActiveTab(input.replace(/^https?:\/\//, '').split('/')[0])
    setNotice(true)
    window.setTimeout(() => {
      window.location.href = destination
    }, 250)
  }

  return (
    <main className="min-h-screen bg-[#f7faf9]">
      <header className="flex h-16 items-center justify-between border-b border-[#e4ecec] bg-white px-5 md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-[#102b3f] text-white shadow-sm"><Feather size={19} strokeWidth={2.5} /></div>
          <span className="font-['Space_Grotesk'] text-[17px] font-bold tracking-[-0.03em] text-[#102b3f]">feather<span className="text-[#12a594]">.</span></span>
          <span className="hidden rounded-full bg-[#e7f6f2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0b877a] sm:inline">Beta</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button aria-label="Ajuda" className="flex size-9 items-center justify-center rounded-lg text-[#718494] transition hover:bg-[#f1f6f5] hover:text-[#102b3f]"><CircleHelp size={18} /></button>
          <div className="relative">
            <button onClick={() => setShowMenu(!showMenu)} aria-label="Abrir menu" className="flex size-9 items-center justify-center rounded-lg text-[#718494] transition hover:bg-[#f1f6f5] hover:text-[#102b3f]"><Menu size={19} /></button>
            {showMenu && <div className="absolute right-0 top-11 z-10 w-52 rounded-xl border border-[#e4ecec] bg-white p-2 shadow-lg"><button className="w-full rounded-lg px-3 py-2 text-left text-sm text-[#183042] hover:bg-[#f1f6f5]">Configurações</button><button className="w-full rounded-lg px-3 py-2 text-left text-sm text-[#183042] hover:bg-[#f1f6f5]">Atalhos do teclado</button><button className="w-full rounded-lg px-3 py-2 text-left text-sm text-[#183042] hover:bg-[#f1f6f5]">Sobre o Feather</button></div>}
          </div>
          <button aria-label="Perfil" className="ml-1 flex size-9 items-center justify-center rounded-full bg-[#dff5ef] text-xs font-bold text-[#087e75]">LR</button>
        </div>
      </header>

      <section className="border-b border-[#e4ecec] bg-white px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-5xl items-center gap-2">
          <div className="flex min-w-0 flex-1 items-center rounded-xl border border-[#dce7e6] bg-[#f7faf9] px-3 transition focus-within:border-[#12a594] focus-within:ring-4 focus-within:ring-[#dff5ef]">
            <LockKeyhole className="mr-2 shrink-0 text-[#12a594]" size={15} />
            <input value={address} onChange={e => setAddress(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) navigate() }} placeholder="Pesquise ou digite um endereço" aria-label="Barra de endereço" className="h-11 min-w-0 flex-1 bg-transparent text-sm text-[#183042] outline-none placeholder:text-[#92a1aa]" />
            {address && <button onClick={() => setAddress('')} aria-label="Limpar endereço" className="p-1 text-[#718494]"><X size={15} /></button>}
            <button onClick={navigate} aria-label="Pesquisar" className="flex size-8 items-center justify-center rounded-lg bg-[#102b3f] text-white transition hover:bg-[#19435d]"><Search size={15} /></button>
          </div>
          <button aria-label="Nova aba" className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#dce7e6] bg-white text-[#718494] transition hover:border-[#12a594] hover:text-[#12a594]"><Plus size={19} /></button>
        </div>
        <div className="mx-auto mt-2 flex max-w-5xl items-center gap-1.5 text-xs text-[#718494]"><div className="h-1.5 w-1.5 rounded-full bg-[#12a594]" /> <span>Proteção Feather ativa</span><span className="mx-1 text-[#c5d1d1]">·</span><span>Modo leve</span></div>
      </section>

      <section className="mx-auto flex max-w-5xl flex-col px-5 pb-16 pt-12 md:px-8 md:pt-16">
        <div className="flex items-start justify-between">
          <div><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cfece5] bg-[#eaf8f4] px-3 py-1.5 text-xs font-semibold text-[#087e75]"><Sparkles size={13} /> Bom dia, Lucas</div><h1 className="max-w-xl font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.06em] text-[#102b3f] md:text-6xl">Navegue leve.<br /><span className="text-[#12a594]">Fique protegido.</span></h1><p className="mt-5 max-w-md text-base leading-7 text-[#718494]">Um navegador enxuto, privado e feito para deixar o que importa mais perto.</p></div>
          <div className="hidden rounded-2xl border border-[#d8ece8] bg-[#edf9f6] p-4 text-[#0b877a] md:block"><Feather size={42} strokeWidth={1.4} /></div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map(link => <button key={link.label} onClick={() => navigate(link.url)} className="group flex items-center gap-3 rounded-2xl border border-[#e4ecec] bg-white p-4 text-left shadow-[0_2px_8px_rgba(16,43,63,0.02)] transition hover:-translate-y-0.5 hover:border-[#b8ded7] hover:shadow-md"><div className="flex size-10 items-center justify-center rounded-xl text-sm font-bold text-[#52646e]" style={{backgroundColor: link.color}}>{link.icon}</div><div className="min-w-0"><p className="font-semibold text-[#183042]">{link.label}</p><p className="mt-0.5 truncate text-xs text-[#8a9aa2]">{link.detail}</p></div><ArrowRight className="ml-auto text-[#b8c6c9] transition group-hover:translate-x-0.5 group-hover:text-[#12a594]" size={16} /></button>)}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-[#dce9e6] bg-white p-6"><div className="flex items-start justify-between"><div><div className="flex items-center gap-2 text-sm font-semibold text-[#183042]"><ShieldCheck size={18} className="text-[#12a594]" /> Proteção Feather</div><p className="mt-2 max-w-sm text-sm leading-6 text-[#718494]">Conteúdo explícito é bloqueado automaticamente antes de carregar.</p></div><span className="rounded-full bg-[#e7f6f2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0b877a]">Ativa</span></div><div className="mt-6 flex flex-wrap gap-2"><span className="rounded-lg bg-[#f3f8f7] px-3 py-2 text-xs font-medium text-[#52646e]">Sites adultos</span><span className="rounded-lg bg-[#f3f8f7] px-3 py-2 text-xs font-medium text-[#52646e]">Imagens explícitas</span><span className="rounded-lg bg-[#f3f8f7] px-3 py-2 text-xs font-medium text-[#52646e]">Vídeos adultos</span></div></div>
          <div className="rounded-2xl bg-[#102b3f] p-6 text-white"><div className="flex items-center gap-2 text-sm font-semibold"><Gauge size={18} className="text-[#6ee5d3]" /> Desempenho</div><div className="mt-5 flex items-end justify-between"><div><p className="font-['Space_Grotesk'] text-3xl font-bold">68<span className="text-lg text-[#9bb5bd]">%</span></p><p className="mt-1 text-xs text-[#aac0c5]">menos memória que a média</p></div><Zap size={31} className="text-[#6ee5d3]" strokeWidth={1.5} /></div><div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[#2d5263]"><div className="h-full w-[68%] rounded-full bg-[#6ee5d3]" /></div></div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#e4ecec] pt-6 text-xs text-[#8a9aa2] sm:flex-row"><div className="flex items-center gap-5"><span className="flex items-center gap-1.5"><Globe2 size={14} /> Navegação privada</span><span className="flex items-center gap-1.5"><Download size={14} /> Sem rastreadores</span></div><span>Feather Browser v0.9.4</span></div>
      </section>
      {notice && <div className="fixed bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#102b3f] px-4 py-3 text-sm text-white shadow-xl"><ShieldX size={16} className="text-[#6ee5d3]" /> A proteção Feather está verificando este endereço.</div>}
    </main>
  )
}
