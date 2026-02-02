'use client';

import { useState, useEffect, useRef } from 'react';
import {
  resources,
  categoryMeta,
  stats,
  type Resource,
  type ResourceCategory,
} from '@/data/resources';

/* ── helpers ── */
const catOrder: ResourceCategory[] = [
  'official',
  'cloud-deploy',
  'getting-started',
  'channel-integration',
  'skill-dev',
  'video',
  'deep-dive',
  'tools',
];

const catDescriptions: Record<ResourceCategory, string> = {
  official: '来自 OpenClaw 团队的第一手资料',
  'cloud-deploy': '主流云平台一键部署方案',
  'getting-started': '从零开始的保姆级教程',
  'channel-integration': '飞书、钉钉、Telegram、企业微信等平台接入',
  'skill-dev': '创建和发布自定义技能',
  video: '看得见的教程更好学',
  'deep-dive': '架构分析、行业评论和进阶内容',
  tools: '社区开发的辅助工具和插件',
};

const borderColors: Record<string, string> = {
  blue: '#3b82f6',
  green: '#10b981',
  purple: '#8b5cf6',
  orange: '#f97316',
  red: '#f43f5e',
  indigo: '#6366f1',
  teal: '#14b8a6',
  sky: '#0ea5e9',
};

const bgColors: Record<string, string> = {
  blue: 'rgba(59,130,246,0.04)',
  green: 'rgba(16,185,129,0.04)',
  purple: 'rgba(139,92,246,0.04)',
  orange: 'rgba(249,115,22,0.04)',
  red: 'rgba(244,63,94,0.04)',
  indigo: 'rgba(99,102,241,0.04)',
  teal: 'rgba(20,184,166,0.04)',
  sky: 'rgba(14,165,233,0.04)',
};

/* source color dots */
const sourceDots: Record<string, string> = {
  '阿里云': '#ff6a00',
  '腾讯云': '#0052d9',
  'DigitalOcean': '#0069ff',
  'Hostinger': '#6c47ff',
  'IBM': '#0f62fe',
  'Codecademy': '#1557ff',
  'Bilibili': '#fb7299',
  'MiniMax': '#7c3aed',
  'GitHub': '#24292f',
  'OpenClaw': '#2563eb',
  'OpenClaw Docs': '#2563eb',
  'ClawHub': '#10b981',
  'Discord': '#5865f2',
  'Wikipedia': '#636466',
  'Apifox': '#e8432a',
  '博客园': '#3b82f6',
  'CSDN': '#fc5531',
  '53AI': '#6366f1',
  '实在智能': '#059669',
  '腾讯新闻': '#0052d9',
  'Reddit': '#ff4500',
  'Substack': '#ff6719',
  'OpenClaw 101': '#2563eb',
  'Creator Economy': '#7c3aed',
  'NxCode': '#0ea5e9',
};

/* ── card ── */
function Card({ r, color }: { r: Resource; color: string }) {
  const dotColor = sourceDots[r.source] || '#9ca3af';
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-xl p-5 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
      style={{
        background: r.featured ? 'linear-gradient(135deg, #fffbeb 0%, #ffffff 40%)' : '#fff',
        borderLeft: `3px solid ${borderColors[color] || '#e5e7eb'}`,
      }}
    >
      {/* featured star */}
      {r.featured && (
        <div className="absolute top-3 right-3">
          <span className="text-amber-400 text-sm">⭐</span>
        </div>
      )}

      <h3 className="text-[15px] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 mb-2 pr-6">
        {r.title}
      </h3>
      <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2 mb-3">{r.desc}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: dotColor }} />
          <span className="text-xs text-gray-400">{r.source}</span>
          <span className={`ml-1 text-[10px] px-1.5 py-0.5 rounded font-medium ${
            r.lang === 'zh'
              ? 'bg-red-50 text-red-500'
              : 'bg-blue-50 text-blue-500'
          }`}>
            {r.lang === 'zh' ? '中文' : 'EN'}
          </span>
        </div>
        <span className="text-xs text-blue-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          打开 →
        </span>
      </div>
    </a>
  );
}

/* ── section per category ── */
function CategorySection({ cat, index }: { cat: ResourceCategory; index: number }) {
  const meta = categoryMeta[cat];
  const color = meta.color;
  const items = resources.filter((r) => r.category === cat);
  if (items.length === 0) return null;
  const isAlt = index % 2 === 1;

  return (
    <section
      className="reveal py-10 -mx-4 px-4 md:-mx-8 md:px-8 rounded-2xl"
      style={{
        transitionDelay: `${index * 80}ms`,
        background: isAlt ? bgColors[color] || 'rgba(0,0,0,0.02)' : 'transparent',
      }}
    >
      {/* section header */}
      <div className="flex items-center gap-4 mb-2">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-sm"
          style={{ background: `${borderColors[color]}15`, border: `1px solid ${borderColors[color]}25` }}
        >
          {meta.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-gray-900">{meta.label}</h2>
            <span
              className="text-[11px] px-2 py-0.5 rounded-full font-medium"
              style={{ background: `${borderColors[color]}15`, color: borderColors[color] }}
            >
              {items.length} 篇
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-0.5">{catDescriptions[cat]}</p>
        </div>
      </div>

      {/* divider */}
      <div className="h-px mb-6 mt-4" style={{ background: `linear-gradient(to right, ${borderColors[color]}30, transparent)` }} />

      {/* cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((r) => (
          <Card key={r.url} r={r} color={color} />
        ))}
      </div>
    </section>
  );
}

/* ── page ── */
export default function ResourcesPage() {
  const [search, setSearch] = useState('');
  const mainRef = useRef<HTMLDivElement>(null);

  const searchResults = search
    ? resources.filter((r) => {
        const q = search.toLowerCase();
        return (
          r.title.toLowerCase().includes(q) ||
          r.desc.toLowerCase().includes(q) ||
          r.source.toLowerCase().includes(q) ||
          r.tags?.some((t) => t.toLowerCase().includes(q))
        );
      })
    : [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );
    const elements = mainRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── hero header ── */}
      <header className="hero-glow relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(37, 99, 235, 0.12)' }} />
        <div className="absolute bottom-0 left-20 w-48 h-48 rounded-full blur-3xl" style={{ background: 'rgba(16, 185, 129, 0.1)' }} />

        <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-14">
          <a href="/" className="inline-flex items-center gap-1.5 text-sm mb-8 hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            返回首页
          </a>

          <div className="flex items-start gap-8">
            {/* Left */}
            <div className="flex-1 min-w-0">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: '#fff' }}>
                全网资源聚合
              </h1>
              <p className="text-base md:text-lg max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                阿里云、腾讯云、DigitalOcean、B站、Codecademy、IBM……
                <br />
                一站式获取 OpenClaw 最佳教程，开源共享，持续更新。
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { n: stats.totalResources + '+', l: '篇资源' },
                  { n: stats.zhResources, l: '中文' },
                  { n: stats.enResources, l: '英文' },
                  { n: stats.totalCategories, l: '大分类' },
                ].map((s) => (
                  <div key={s.l} className="px-4 py-2 rounded-full backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="text-sm font-bold" style={{ color: '#fff' }}>{s.n}</span>
                    <span className="text-xs ml-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.l}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 max-w-md">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'rgba(255,255,255,0.3)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="搜索教程、平台、关键词…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400/40 transition-all"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                  />
                </div>
              </div>
            </div>

            {/* Right: floating cards */}
            <div className="hidden lg:block relative w-80 h-72 shrink-0">
              <div className="absolute top-2 right-0 w-56 rounded-xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(255, 106, 0, 0.2)' }}>☁️</div>
                  <span className="text-sm font-semibold" style={{ color: '#fff' }}>阿里云</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>一键部署 OpenClaw，构建钉钉 AI 助理</p>
              </div>

              <div className="absolute top-20 left-0 w-52 rounded-xl p-4 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(0, 130, 255, 0.2)' }}>🔷</div>
                  <span className="text-sm font-semibold" style={{ color: '#fff' }}>腾讯云</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>Lighthouse 部署 + 飞书接入教程</p>
              </div>

              <div className="absolute bottom-4 right-4 w-48 rounded-xl p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(12px)' }}>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(0, 105, 255, 0.2)' }}>🌊</div>
                  <span className="text-sm font-semibold" style={{ color: '#fff' }}>DigitalOcean</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>One-Click Deploy Guide</p>
              </div>

              <div className="absolute top-0 left-8 px-2.5 py-1 rounded-full text-[10px] font-medium animate-bounce" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7', border: '1px solid rgba(16, 185, 129, 0.3)', animationDuration: '3s' }}>B站</div>
              <div className="absolute bottom-16 left-2 px-2.5 py-1 rounded-full text-[10px] font-medium animate-bounce" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5', border: '1px solid rgba(239, 68, 68, 0.3)', animationDuration: '4s', animationDelay: '1s' }}>IBM Think</div>
              <div className="absolute top-14 right-4 px-2.5 py-1 rounded-full text-[10px] font-medium animate-bounce" style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#c4b5fd', border: '1px solid rgba(168, 85, 247, 0.3)', animationDuration: '3.5s', animationDelay: '0.5s' }}>Codecademy</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── source logos ── */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center gap-2 text-xs text-gray-400">
          <span className="font-medium text-gray-500 mr-1">收录来源</span>
          {[
            { name: '阿里云', color: '#ff6a00' },
            { name: '腾讯云', color: '#0052d9' },
            { name: 'DigitalOcean', color: '#0069ff' },
            { name: 'Hostinger', color: '#6c47ff' },
            { name: 'IBM', color: '#0f62fe' },
            { name: 'Codecademy', color: '#1557ff' },
            { name: 'B站', color: '#fb7299' },
            { name: 'MiniMax', color: '#7c3aed' },
            { name: '博客园', color: '#3b82f6' },
            { name: 'CSDN', color: '#fc5531' },
            { name: 'Reddit', color: '#ff4500' },
            { name: 'Substack', color: '#ff6719' },
          ].map((s) => (
            <span key={s.name} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-md text-gray-600 border border-gray-100">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: s.color }} />
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── main content ── */}
      <div ref={mainRef} className="max-w-5xl mx-auto px-4 md:px-8 py-10">
        {search ? (
          <>
            <p className="text-sm text-gray-500 mb-6">
              搜索 &ldquo;<span className="text-gray-900 font-medium">{search}</span>&rdquo; · 找到 <b className="text-gray-900">{searchResults.length}</b> 条
            </p>
            {searchResults.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <p className="text-3xl mb-3">🔍</p>
                <p>没有匹配的资源</p>
                <button onClick={() => setSearch('')} className="mt-3 text-sm text-blue-600 hover:underline">清除搜索</button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((r) => <Card key={r.url} r={r} color="blue" />)}
              </div>
            )}
          </>
        ) : (
          catOrder.map((cat, i) => (
            <CategorySection key={cat} cat={cat} index={i} />
          ))
        )}

        {/* ── contribute CTA ── */}
        <div className="reveal mt-12 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
          {/* decorative */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl" style={{ background: 'rgba(37, 99, 235, 0.15)' }} />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-3xl" style={{ background: 'rgba(16, 185, 129, 0.1)' }} />

          <div className="flex-1 relative">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#fff' }}>🤝 发现好资源？</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              这是一个开源项目。编辑 <code className="px-1.5 py-0.5 rounded text-xs" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)' }}>src/data/resources.ts</code>，提一个 PR，就能帮助更多人。
            </p>
          </div>
          <a
            href="https://github.com/mengjian-github/openclaw101"
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            提交 PR
          </a>
        </div>
      </div>

      {/* ── footer ── */}
      <footer className="hero-glow py-8 mt-4">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Made with 🐈‍⬛ by <span style={{ color: 'rgba(255,255,255,0.7)' }}>小墨</span> · <a href="/" className="hover:underline" style={{ color: 'rgba(255,255,255,0.6)' }}>OpenClaw 101</a> · <a href="https://github.com/mengjian-github/openclaw101" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'rgba(255,255,255,0.6)' }}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}
