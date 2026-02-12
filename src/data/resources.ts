export interface Resource {
  title: string;
  desc: string;
  url: string;
  source: string;
  sourceIcon?: string;
  lang: 'zh' | 'en';
  category: ResourceCategory;
  featured?: boolean;
  tags?: string[];
}

export type ResourceCategory =
  | 'official'
  | 'getting-started'
  | 'channel-integration'
  | 'skill-dev'
  | 'video'
  | 'deep-dive'
  | 'tools'
  | 'cloud-deploy';

export const categoryMeta: Record<
  ResourceCategory,
  { icon: string; label: string; labelEn: string; color: string }
> = {
  official: {
    icon: '📖',
    label: '官方资源',
    labelEn: 'Official',
    color: 'blue',
  },
  'getting-started': {
    icon: '🏁',
    label: '入门部署',
    labelEn: 'Getting Started',
    color: 'green',
  },
  'channel-integration': {
    icon: '📱',
    label: '平台接入',
    labelEn: 'Channels',
    color: 'purple',
  },
  'skill-dev': {
    icon: '🧩',
    label: '技能开发',
    labelEn: 'Skills',
    color: 'orange',
  },
  video: {
    icon: '📹',
    label: '视频教程',
    labelEn: 'Videos',
    color: 'red',
  },
  'deep-dive': {
    icon: '🔬',
    label: '深度文章',
    labelEn: 'Deep Dives',
    color: 'indigo',
  },
  tools: {
    icon: '🔧',
    label: '工具与插件',
    labelEn: 'Tools',
    color: 'teal',
  },
  'cloud-deploy': {
    icon: '☁️',
    label: '云平台部署',
    labelEn: 'Cloud Deploy',
    color: 'sky',
  },
};

export const resources: Resource[] = [
  // ============ Official Resources ============
  {
    title: 'OpenClaw 官方文档',
    desc: '完整的 API 参考、配置指南和架构说明',
    url: 'https://docs.openclaw.ai',
    source: 'OpenClaw',
    lang: 'en',
    category: 'official',
    featured: true,
    tags: ['文档', '必读'],
  },
  {
    title: 'GitHub — openclaw/openclaw',
    desc: '源代码、Issue 跟踪和社区贡献指南 (150k+ ⭐)',
    url: 'https://github.com/openclaw/openclaw',
    source: 'GitHub',
    lang: 'en',
    category: 'official',
    featured: true,
    tags: ['源码', '开源'],
  },
  {
    title: 'ClawHub 技能市场',
    desc: '发现、安装和分享 AI 技能插件',
    url: 'https://clawhub.com',
    source: 'ClawHub',
    lang: 'en',
    category: 'official',
    featured: true,
    tags: ['技能', '市场'],
  },
  {
    title: 'Getting Started — 官方入门指南',
    desc: '从零到第一次对话的最快路径',
    url: 'https://docs.openclaw.ai/start/getting-started',
    source: 'OpenClaw Docs',
    lang: 'en',
    category: 'official',
    tags: ['入门', '必读'],
  },
  {
    title: 'Discord 社区',
    desc: '与数万开发者和用户实时交流',
    url: 'https://discord.com/invite/clawd',
    source: 'Discord',
    lang: 'en',
    category: 'official',
    tags: ['社区', '讨论'],
  },
  {
    title: 'OpenClaw — Wikipedia',
    desc: '维基百科词条，了解 OpenClaw 的历史和影响',
    url: 'https://en.wikipedia.org/wiki/OpenClaw',
    source: 'Wikipedia',
    lang: 'en',
    category: 'official',
    tags: ['百科'],
  },
  {
    title: 'ClawHub Skills 仓库',
    desc: '所有已发布技能的源码归档',
    url: 'https://github.com/openclaw/skills',
    source: 'GitHub',
    lang: 'en',
    category: 'official',
    tags: ['技能', '源码'],
  },

  // ============ Cloud Deploy (云平台) ============
  {
    title: '阿里云 — 部署 OpenClaw 构建钉钉 AI 助理',
    desc: '轻量应用服务器一键部署，可视化配置面板接入钉钉',
    url: 'https://help.aliyun.com/zh/simple-application-server/use-cases/quickly-deploy-and-use-openclaw',
    source: '阿里云',
    lang: 'zh',
    category: 'cloud-deploy',
    featured: true,
    tags: ['阿里云', '钉钉', '一键部署'],
  },
  {
    title: '阿里云 — AppFlow 集成企业微信',
    desc: '通过应用连接器将 OpenClaw 与企业微信集成，群聊直接交互',
    url: 'https://help.aliyun.com/zh/simple-application-server/use-cases/openclaw-enterprise-wechat-integration',
    source: '阿里云',
    lang: 'zh',
    category: 'cloud-deploy',
    tags: ['阿里云', '企业微信', 'AppFlow'],
  },
  {
    title: '腾讯云 — OpenClaw 接入飞书保姆级教程',
    desc: 'Lighthouse 一键部署 + 飞书机器人全流程配置',
    url: 'https://cloud.tencent.com/developer/article/2625073',
    source: '腾讯云',
    lang: 'zh',
    category: 'cloud-deploy',
    featured: true,
    tags: ['腾讯云', '飞书', 'Lighthouse'],
  },
  {
    title: '腾讯云 — OpenClaw 接入企业微信完全指南',
    desc: '可视化配置面板，几步完成企业微信接入',
    url: 'https://cloud.tencent.com/developer/article/2625147',
    source: '腾讯云',
    lang: 'zh',
    category: 'cloud-deploy',
    tags: ['腾讯云', '企业微信'],
  },
  {
    title: 'DigitalOcean — One-Click Deploy OpenClaw',
    desc: 'Learn how to deploy OpenClaw using DigitalOcean\'s 1-Click solution',
    url: 'https://www.digitalocean.com/community/tutorials/how-to-run-openclaw',
    source: 'DigitalOcean',
    lang: 'en',
    category: 'cloud-deploy',
    featured: true,
    tags: ['DigitalOcean', '一键部署'],
  },
  {
    title: 'Hostinger — How to Set Up OpenClaw on a Private Server',
    desc: 'Step-by-step guide for Hostinger VPS deployment',
    url: 'https://www.hostinger.com/tutorials/how-to-set-up-openclaw',
    source: 'Hostinger',
    lang: 'en',
    category: 'cloud-deploy',
    tags: ['Hostinger', 'VPS'],
  },

  // ============ Getting Started (入门部署) ============
  {
    title: 'OpenClaw 下载安装使用 — 详细图文教程',
    desc: '系统要求、多种安装方式对比、常见问题排查、Web/终端两种界面入门',
    url: 'https://apifox.com/apiskills/openclaw-installation-and-usage-guide/',
    source: 'Apifox',
    lang: 'zh',
    category: 'getting-started',
    featured: true,
    tags: ['图文', '新手友好'],
  },
  {
    title: '小白零基础教程 — 安装 OpenClaw',
    desc: '零基础也能看懂，Telegram 连接详细步骤',
    url: 'https://www.cnblogs.com/gyc567/p/19561281',
    source: '博客园',
    lang: 'zh',
    category: 'getting-started',
    tags: ['零基础', 'Telegram'],
  },
  {
    title: 'ClawdBot 火爆全网 — 手把手部署 + 钉钉操作',
    desc: '国内用户部署指南，包含踩坑经验和钉钉接入',
    url: 'https://www.53ai.com/news/OpenSourceLLM/2026012862704.html',
    source: '53AI',
    lang: 'zh',
    category: 'getting-started',
    tags: ['部署', '钉钉', '踩坑'],
  },
  {
    title: '怎么用上一夜爆火的 Clawdbot — 详细配置教程',
    desc: '实测踩了三个大坑，分享避坑指南',
    url: 'https://news.qq.com/rain/a/20260127A05EEN00',
    source: '腾讯新闻',
    lang: 'zh',
    category: 'getting-started',
    tags: ['避坑', '实测'],
  },
  {
    title: 'Openclaw 安装部署一文详解 + 国产平替方案',
    desc: '产品介绍、官网资源、本地/云端部署四维度全面解析',
    url: 'https://www.ai-indeed.com/article/15272.html',
    source: '实在智能',
    lang: 'zh',
    category: 'getting-started',
    tags: ['全面', '平替'],
  },
  {
    title: 'Codecademy — OpenClaw Installation to First Chat',
    desc: 'Structured tutorial from installation to your first conversation',
    url: 'https://www.codecademy.com/article/open-claw-tutorial-installation-to-first-chat-setup',
    source: 'Codecademy',
    lang: 'en',
    category: 'getting-started',
    tags: ['Codecademy', '结构化'],
  },
  {
    title: 'Full Tutorial: Set Up Your 24/7 AI Employee in 20 Minutes',
    desc: 'From zero to a running AI agent in 20 minutes flat',
    url: 'https://creatoreconomy.so/p/full-tutorial-set-up-your-247-ai-employee-clawd-molt',
    source: 'Creator Economy',
    lang: 'en',
    category: 'getting-started',
    tags: ['快速', '20分钟'],
  },
  {
    title: 'How to Get OpenClaw Set Up in an Afternoon',
    desc: 'Practical guide from the AI Product Playbook newsletter',
    url: 'https://amankhan1.substack.com/p/how-to-get-clawdbotmoltbotopenclaw',
    source: 'Substack',
    lang: 'en',
    category: 'getting-started',
    tags: ['实用'],
  },

  // ============ Channel Integration (平台接入) ============
  {
    title: '保姆级飞书对接教程 — 手把手搭建 AI 助手',
    desc: 'Linux 下安装 OpenClaw 并对接飞书机器人，打造专属智能助理',
    url: 'https://www.cnblogs.com/catchadmin/p/19556552',
    source: '博客园',
    lang: 'zh',
    category: 'channel-integration',
    featured: true,
    tags: ['飞书', '保姆级'],
  },
  {
    title: '飞书对接教程 — CSDN 版',
    desc: '详细的 OpenClaw 飞书机器人配置指南',
    url: 'https://blog.csdn.net/qq_31470439/article/details/157578441',
    source: 'CSDN',
    lang: 'zh',
    category: 'channel-integration',
    tags: ['飞书', 'CSDN'],
  },
  {
    title: 'MiniMax — Build AI Assistant on Telegram',
    desc: 'Connect MiniMax M2.1 to Telegram via OpenClaw',
    url: 'https://platform.minimax.io/docs/solutions/moltbot',
    source: 'MiniMax',
    lang: 'en',
    category: 'channel-integration',
    tags: ['Telegram', 'MiniMax'],
  },

  // ============ Skill Development ============
  {
    title: 'ClawHub 技能开发文档',
    desc: '如何创建、发布和管理自定义技能',
    url: 'https://docs.openclaw.ai/tools/clawhub',
    source: 'OpenClaw Docs',
    lang: 'en',
    category: 'skill-dev',
    featured: true,
    tags: ['技能', '开发'],
  },
  {
    title: 'OpenClaw Skills 在 Claude Code 中使用',
    desc: 'Reddit 社区分享：在 Claude Code 中运行 OpenClaw 的提示词和技能',
    url: 'https://www.reddit.com/r/ClaudeAI/comments/1qs49hw/',
    source: 'Reddit',
    lang: 'en',
    category: 'skill-dev',
    tags: ['Claude Code', 'Reddit'],
  },
  {
    title: 'ClawHub Skill Directory 源码',
    desc: 'ClawHub 的 GitHub 仓库，了解技能目录结构',
    url: 'https://github.com/openclaw/clawhub',
    source: 'GitHub',
    lang: 'en',
    category: 'skill-dev',
    tags: ['源码', '参考'],
  },

  // ============ Video Tutorials ============
  {
    title: 'OpenClaw 海量全玩法攻略 — 国内网络使用 + 本地部署',
    desc: 'B站详细视频教程，涵盖所有主要功能和配置',
    url: 'https://www.bilibili.com/video/BV1kH6nBFEPq/',
    source: 'Bilibili',
    lang: 'zh',
    category: 'video',
    featured: true,
    tags: ['B站', '全面'],
  },

  // ============ Deep Dive Articles ============
  {
    title: 'IBM Think — OpenClaw: The Viral "Space Lobster" Agent',
    desc: 'IBM 深度分析 OpenClaw 的架构创新和垂直集成策略',
    url: 'https://www.ibm.com/think/news/clawdbot-ai-agent-testing-limits-vertical-integration',
    source: 'IBM',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['IBM', '深度分析'],
  },
  {
    title: 'DigitalOcean — What is OpenClaw?',
    desc: '全面介绍 OpenClaw 的功能、架构和使用场景',
    url: 'https://www.digitalocean.com/resources/articles/what-is-openclaw',
    source: 'DigitalOcean',
    lang: 'en',
    category: 'deep-dive',
    tags: ['概览', '入门'],
  },
  {
    title: 'Reddit — The Ultimate Guide to OpenClaw',
    desc: '从功能到安全风险的全面指南，不回避争议话题',
    url: 'https://www.reddit.com/r/ThinkingDeeplyAI/comments/1qsoq4h/',
    source: 'Reddit',
    lang: 'en',
    category: 'deep-dive',
    tags: ['Reddit', '全面', '安全'],
  },
  {
    title: 'NxCode — OpenClaw Complete Guide 2026',
    desc: 'Clawdbot → Moltbot → OpenClaw 完整演进指南',
    url: 'https://www.nxcode.io/resources/news/openclaw-complete-guide-2026',
    source: 'NxCode',
    lang: 'en',
    category: 'deep-dive',
    tags: ['历史', '完整'],
  },

  // ============ Tools & Plugins ============
  {
    title: 'ClawdBot 一键部署工具',
    desc: 'Mac/Linux 一键安装脚本，自动化环境配置',
    url: 'https://github.com/miaoxworld/ClawdBotInstaller',
    source: 'GitHub',
    lang: 'zh',
    category: 'tools',
    tags: ['一键', '脚本'],
  },
  {
    title: 'Clawdbot 中文文档',
    desc: '社区翻译的中文 README 和使用指南',
    url: 'https://github.com/bbylw/clawdbot-cn',
    source: 'GitHub',
    lang: 'zh',
    category: 'tools',
    tags: ['中文', '文档'],
  },

  // ============ New — Week of 2026-02-03 ============

  // -- Cloud Deploy --
  {
    title: '阿里云开发者社区 — 2026年 OpenClaw 部署教程及常见问题解答',
    desc: '百炼模型配置、通义千问接入，含高频问题 FAQ 和完整 JSON 示例',
    url: 'https://developer.aliyun.com/article/1709761',
    source: '阿里云开发者社区',
    lang: 'zh',
    category: 'cloud-deploy',
    tags: ['阿里云', '百炼', '通义千问', 'FAQ'],
  },

  // -- Getting Started --
  {
    title: 'DataCamp — OpenClaw Tutorial: Control Your PC from WhatsApp',
    desc: 'WhatsApp 远程控制电脑实操教程，涵盖 Skill 开发与 AgentSkills 标准',
    url: 'https://www.datacamp.com/tutorial/moltbot-clawdbot-tutorial',
    source: 'DataCamp',
    lang: 'en',
    category: 'getting-started',
    featured: true,
    tags: ['DataCamp', 'WhatsApp', 'Skill'],
  },
  {
    title: 'OpenClaw + Ollama 本地 AI Agent 搭建指南',
    desc: '全面的 Ollama 本地模型 + OpenClaw 集成指南，含模型选型对比和性能基准',
    url: 'https://codersera.com/blog/openclaw-ollama-setup-guide-run-local-ai-agents-2026',
    source: 'CoderSera',
    lang: 'en',
    category: 'getting-started',
    tags: ['Ollama', '本地模型', '性能对比'],
  },
  {
    title: '掘金 — OpenClaw 安装教程：从 0 搭建本地 AI 助手完整记录',
    desc: '掘金社区原创，从零到跑通的详实记录，含架构理解和踩坑笔记',
    url: 'https://juejin.cn/post/7600752623068102666',
    source: '掘金',
    lang: 'zh',
    category: 'getting-started',
    tags: ['掘金', '实战记录', '本地部署'],
  },
  {
    title: '至顶AI — OpenClaw 完整部署指南（全网最详细版）',
    desc: '从环境准备到飞书插件配置、十大经典应用场景推荐，亲测有效',
    url: 'https://news.qq.com/rain/a/20260202A04NT600',
    source: '腾讯新闻',
    lang: 'zh',
    category: 'getting-started',
    tags: ['至顶AI', '全面', '飞书插件'],
  },
  {
    title: 'CSDN — OpenClaw 史上最全保姆级安装配置教程',
    desc: '多平台接入、Docker 沙箱安全配置、Ollama 本地模型对接',
    url: 'https://blog.csdn.net/liwang0113/article/details/157579187',
    source: 'CSDN',
    lang: 'zh',
    category: 'getting-started',
    tags: ['CSDN', '保姆级', '安全配置'],
  },

  // -- Deep Dive --
  {
    title: 'DEV Community — Unleashing OpenClaw: Ultimate Guide for Developers',
    desc: '开发者视角深度解析：Gateway 架构、Brain 模型层、自定义 Skill 编写',
    url: 'https://dev.to/mechcloud_academy/unleashing-openclaw-the-ultimate-guide-to-local-ai-agents-for-developers-in-2026-3k0h',
    source: 'DEV Community',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['DEV', '架构', 'Skill开发'],
  },
  {
    title: 'The Hacker News — 341 个恶意 ClawHub 技能窃取用户数据',
    desc: 'Koi Security 审计发现 ClawHavoc 供应链攻击，OpenClaw 用户必读安全警示',
    url: 'https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html',
    source: 'The Hacker News',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['安全', 'ClawHub', '供应链攻击'],
  },
  {
    title: 'CNBC — From Clawdbot to OpenClaw: The AI Agent Generating Buzz and Fear',
    desc: 'CNBC 深度报道 OpenClaw 的崛起、145k+ GitHub Stars 背后的争议与风险',
    url: 'https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html',
    source: 'CNBC',
    lang: 'en',
    category: 'deep-dive',
    tags: ['CNBC', '媒体', '争议'],
  },
  {
    title: 'Medium — Stop Watching Install Tutorials, This Is How You Actually Tame It',
    desc: '跳过安装，直接讲如何驾驭 OpenClaw：工作流设计、提示词策略和安全边界',
    url: 'https://medium.com/activated-thinker/stop-watching-openclaw-install-tutorials-this-is-how-you-actually-tame-it-f3416f5d80bc',
    source: 'Medium',
    lang: 'en',
    category: 'deep-dive',
    tags: ['Medium', '进阶', '工作流'],
  },

  // -- Skill Dev --
  {
    title: 'Apiyi — OpenClaw 扩展生态全解析：50+ 官方集成',
    desc: '700+ Skills 库、12 大平台集成总览，ClawHub 技能商店使用指南',
    url: 'https://help.apiyi.com/en/openclaw-extensions-ecosystem-guide-en.html',
    source: 'Apiyi',
    lang: 'en',
    category: 'skill-dev',
    tags: ['生态', '集成', 'ClawHub'],
  },

  // -- Video --
  {
    title: 'YouTube — OpenClaw Tutorial For Beginners (2026)',
    desc: '英文入门视频教程，从安装到主要功能和自动化任务演示',
    url: 'https://www.youtube.com/watch?v=Gc4fyY0_8Rc',
    source: 'YouTube',
    lang: 'en',
    category: 'video',
    tags: ['YouTube', '入门', '英文'],
  },
  {
    title: 'B站 — OpenClaw 是什么？Skills/MCP/RAG/Memory/AI Agent 全解析',
    desc: '架构科普视频：拆解 OpenClaw 与技能系统、MCP 协议、RAG、记忆系统的关系',
    url: 'https://www.bilibili.com/video/BV1Bm6bB5EJ3/',
    source: 'Bilibili',
    lang: 'zh',
    category: 'video',
    tags: ['B站', '架构', 'MCP', 'RAG'],
  },
  {
    title: 'B站 — Clawdbot 为什么能记住你说过的话？AI 记忆系统拆解',
    desc: '深入分析 OpenClaw 的记忆机制：日记文件、长期记忆、上下文窗口管理',
    url: 'https://www.bilibili.com/video/BV1fv61B4EQ5/',
    source: 'Bilibili',
    lang: 'zh',
    category: 'video',
    tags: ['B站', '记忆系统', '深度'],
  },
  {
    title: 'B站 — OpenClaw 爆火 AI 自动化神器！本地部署教程 | 零度解说',
    desc: '零度解说出品，本地部署 + 聊天软件对接全流程演示',
    url: 'https://www.bilibili.com/video/BV1vz6nBmEA3/',
    source: 'Bilibili',
    lang: 'zh',
    category: 'video',
    tags: ['B站', '零度解说', '部署'],
  },

  // ============ Major Media Coverage (2026-02) ============
  {
    title: 'Scientific American — OpenClaw is an open-source AI agent that runs your computer',
    desc: 'This open-source agent installs software, makes calls and runs your digital life—redefining what "digital assistants" are supposed to do',
    url: 'https://www.scientificamerican.com/article/moltbot-is-an-open-source-ai-agent-that-runs-your-computer/',
    source: 'Scientific American',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['科普', '主流媒体', '深度'],
  },
  {
    title: 'Cisco Blogs — Personal AI Agents like OpenClaw Are a Security Nightmare',
    desc: 'Security analysis of open-source personal AI agents: risks, attack vectors, and enterprise implications',
    url: 'https://blogs.cisco.com/ai/personal-ai-agents-like-openclaw-are-a-security-nightmare',
    source: 'Cisco',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['安全', '企业', '风险分析'],
  },
  {
    title: 'TechCrunch — OpenClaw\'s AI assistants are now building their own social network',
    desc: 'The viral personal AI assistant has a new shell — again. Coverage of the Clawdbot → Moltbot → OpenClaw evolution',
    url: 'https://techcrunch.com/2026/01/30/openclaws-ai-assistants-are-now-building-their-own-social-network/',
    source: 'TechCrunch',
    lang: 'en',
    category: 'deep-dive',
    tags: ['TechCrunch', 'AI社交', '品牌演变'],
  },
  {
    title: 'CNET — From Clawdbot to Moltbot to OpenClaw: The Wild Ride',
    desc: 'How OpenClaw routes messages to AI servers and the LLM selection flexibility (Claude, ChatGPT, Gemini)',
    url: 'https://www.cnet.com/tech/services-and-software/from-clawdbot-to-moltbot-to-openclaw/',
    source: 'CNET',
    lang: 'en',
    category: 'deep-dive',
    tags: ['CNET', '架构', 'LLM选择'],
  },
  {
    title: 'The Verge — OpenClaw: all the news about the trending AI agent',
    desc: 'Comprehensive news hub tracking the AI agent that "actually does things" — reminders, forms, flight check-ins, and more',
    url: 'https://www.theverge.com/news/872091/openclaw-moltbot-clawdbot-ai-agent-news',
    source: 'The Verge',
    lang: 'en',
    category: 'official',
    featured: true,
    tags: ['新闻聚合', '权威', 'The Verge'],
  },
  {
    title: 'The Guardian — Viral AI personal assistant seen as step change',
    desc: 'OpenClaw runs as a layer atop LLMs and can operate autonomously depending on permissions granted',
    url: 'https://www.theguardian.com/technology/2026/feb/02/openclaw-viral-ai-agent-personal-assistant-artificial-intelligence',
    source: 'The Guardian',
    lang: 'en',
    category: 'deep-dive',
    tags: ['The Guardian', '英国媒体', '分析'],
  },

  // ============ New — Week of 2026-02-04 ============

  // -- Cloud Deploy --
  {
    title: 'AWS 中国博客 — 基于 Mac 实例部署 OpenClaw',
    desc: '亚马逊云科技 Mac 实例部署指南，深度苹果生态自动化的最佳选择',
    url: 'https://aws.amazon.com/cn/blogs/china/openclaw-deployment-aws-mac/',
    source: 'AWS',
    lang: 'zh',
    category: 'cloud-deploy',
    featured: true,
    tags: ['AWS', 'Mac', '苹果生态'],
  },

  // -- Getting Started --
  {
    title: '菜鸟教程 — OpenClaw (Clawdbot) 完整教程',
    desc: '从 git clone 到 pnpm build，含 onboard 和 gateway:watch 开发模式',
    url: 'https://www.runoob.com/ai-agent/openclaw-clawdbot-tutorial.html',
    source: '菜鸟教程',
    lang: 'zh',
    category: 'getting-started',
    featured: true,
    tags: ['菜鸟教程', '源码编译', '开发模式'],
  },
  {
    title: '痴者工良 — 手把手教你部署 OpenClaw',
    desc: '博客园原创，openclaw configure 配置飞书全流程',
    url: 'https://www.cnblogs.com/whuanle/p/19558535',
    source: '博客园',
    lang: 'zh',
    category: 'getting-started',
    tags: ['博客园', '飞书', '配置向导'],
  },
  {
    title: 'DAMO 开发者矩阵 — Mac mini 接入国产大模型与飞书',
    desc: '命令行安装 + DeepSeek 配置 + 飞书插件全流程',
    url: 'https://damodev.csdn.net/697dff7b7c1d88441d90f0e4.html',
    source: 'CSDN DAMO',
    lang: 'zh',
    category: 'getting-started',
    tags: ['Mac mini', 'DeepSeek', '飞书插件'],
  },
  {
    title: 'Adven Boost — OpenClaw: 10 Steps to Set Up Your Personal AI Agent',
    desc: 'Structured 10-step playbook from installation to optimization',
    url: 'https://advenboost.com/en/openclaw-setup-10-steps-guide/',
    source: 'Adven Boost',
    lang: 'en',
    category: 'getting-started',
    tags: ['10步', '结构化', 'ROI分析'],
  },

  // -- Deep Dive --
  {
    title: '知乎 — 一文读懂 OpenClaw 分析与教程',
    desc: '完整目录结构解析：AGENTS.md / SOUL.md / MEMORY.md / Skills 全拆解',
    url: 'https://zhuanlan.zhihu.com/p/2000850539936765122',
    source: '知乎',
    lang: 'zh',
    category: 'deep-dive',
    featured: true,
    tags: ['知乎', '架构', '目录结构'],
  },
  {
    title: 'Turing College — The AI Assistant That Actually Does Things',
    desc: '深度解析 OpenClaw 三大核心能力：电脑控制、持久记忆、心跳机制',
    url: 'https://www.turingcollege.com/blog/openclaw',
    source: 'Turing College',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['深度', '心跳机制', '记忆系统'],
  },

  // ============ Our Own ============
  {
    title: 'OpenClaw 7天入门指南 — 飞书知识库',
    desc: '从认识到进阶，每天一个主题的系统化学习路径',
    url: 'https://my.feishu.cn/wiki/YkWgwqSchi9xW3kEuZscAm0lnFf',
    source: 'OpenClaw 101',
    lang: 'zh',
    category: 'getting-started',
    featured: true,
    tags: ['7天', '系统化', '飞书'],
  },

  // ============ New — Week of 2026-02-05 ============

  // -- Tools (Chinese Localization) --
  {
    title: 'OpenClaw 汉化版 — CLI + Dashboard 全中文',
    desc: '每小时自动同步官方仓库，含完整中文 README、全流程搭建教程和排错指南',
    url: 'https://github.com/1186258278/OpenClawChineseTranslation',
    source: 'GitHub',
    lang: 'zh',
    category: 'tools',
    featured: true,
    tags: ['汉化', '中文', '同步'],
  },

  // -- Getting Started (Chinese) --
  {
    title: '搬主题 — 一键安装部署超详细图文教程',
    desc: '含钉钉/飞书/微信/Web 四种集成方法，国内用户首选参考',
    url: 'https://www.banzhuti.com/openclaw-moltbot-clawdbot-tutorial.html',
    source: '搬主题',
    lang: 'zh',
    category: 'getting-started',
    featured: true,
    tags: ['钉钉', '飞书', '微信', 'Web'],
  },

  // -- Deep Dive (Chinese - Official Feishu) --
  {
    title: '飞书官方 — 一文完全搞懂 Clawd Bot 附飞书对接指南',
    desc: '来自飞书安全团队，Gateway-Node 架构深度解析、Canvas 画布、部署方案与成本分析',
    url: 'https://www.feishu.cn/content/article/7602519239445974205',
    source: '飞书官网',
    lang: 'zh',
    category: 'deep-dive',
    featured: true,
    tags: ['飞书官方', '架构', '安全'],
  },

  // -- Getting Started (English) --
  {
    title: 'PromptLayer — How to Install OpenClaw: Step-by-Step Guide',
    desc: 'From the agentic AI tracking team, covers installation, configuration, and first chat',
    url: 'https://blog.promptlayer.com/how-to-install-openclaw-step-by-step-guide-formerly-clawdbot-moltbot/',
    source: 'PromptLayer',
    lang: 'en',
    category: 'getting-started',
    tags: ['PromptLayer', 'Agent追踪', '最新'],
  },
  {
    title: 'Medium — What is OpenClaw: Open-Source AI Agent in 2026',
    desc: 'Covers Home Assistant integration, agent social networks, and privacy-first local deployment',
    url: 'https://medium.com/@gemQueenx/what-is-openclaw-open-source-ai-agent-in-2026-setup-features-8e020db20e5e',
    source: 'Medium',
    lang: 'en',
    category: 'getting-started',
    tags: ['Medium', 'Home Assistant', '隐私'],
  },

  // -- Getting Started --
  {
    title: 'AIML API — OpenClaw Tutorial: Installation to First Chat Setup',
    desc: 'Step-by-step guide: installation, model setup, Telegram connection, skills, web search, and safety tips',
    url: 'https://aimlapi.com/blog/openclaw-tutorial-installation-to-first-chat-setup',
    source: 'AIML API',
    lang: 'en',
    category: 'getting-started',
    tags: ['Telegram', 'Skills', '安全'],
  },
  {
    title: 'BoostedHost — How to Install OpenClaw (For Beginner)',
    desc: 'Plain language guide explaining gateways, tokens, VPS setup, and common errors from zero',
    url: 'https://boostedhost.com/blog/en/how-to-install-openclaw-get-started-guide/',
    source: 'BoostedHost',
    lang: 'en',
    category: 'getting-started',
    tags: ['新手友好', 'VPS', '排错'],
  },

  // -- Deep Dive --
  {
    title: 'AIML API — OpenClaw Tutorial: Real Automation Use (Step by Step)',
    desc: 'Practical guide on connecting email, files, websites, and APIs for real task execution on VPS',
    url: 'https://aimlapi.com/blog/openclaw-full-tutorial-installation-setup-real-automation-use-step-by-step',
    source: 'AIML API',
    lang: 'en',
    category: 'deep-dive',
    tags: ['自动化', 'API集成', 'VPS'],
  },

  // -- Video --
  {
    title: 'YouTube — Full OpenClaw Setup Tutorial: Step-by-Step Walkthrough',
    desc: 'Complete video walkthrough for installing and configuring OpenClaw AI assistant',
    url: 'https://www.youtube.com/watch?v=fcZMmP5dsl4',
    source: 'YouTube',
    lang: 'en',
    category: 'video',
    featured: true,
    tags: ['YouTube', '完整教程', '最新'],
  },
  {
    title: 'YouTube — OpenClaw Tutorial: How to Run a Local AI Agent (2026)',
    desc: 'Self-hosted, local-first AI assistant setup guide with practical demonstrations',
    url: 'https://www.youtube.com/watch?v=StKBpXSf08E',
    source: 'YouTube',
    lang: 'en',
    category: 'video',
    tags: ['YouTube', '本地部署', '2026'],
  },

  // ============ New — Week of 2026-02-08 ============

  // -- Getting Started (Major) --
  {
    title: 'freeCodeCamp — OpenClaw Full Tutorial for Beginners',
    desc: '从被动聊天到主动 Agent 的转变，freeCodeCamp 出品的全面入门教程',
    url: 'https://www.freecodecamp.org/news/openclaw-full-tutorial-for-beginners/',
    source: 'freeCodeCamp',
    lang: 'en',
    category: 'getting-started',
    featured: true,
    tags: ['freeCodeCamp', '入门', '权威'],
  },
  {
    title: 'AI Free API — OpenClaw 安装与集成完全指南 2026',
    desc: '一条命令安装 + onboard 向导 + WhatsApp/Telegram/Discord/Browser Relay 全平台集成',
    url: 'https://www.aifreeapi.com/en/posts/openclaw-installation-guide',
    source: 'AI Free API',
    lang: 'en',
    category: 'getting-started',
    tags: ['多平台', 'Browser Relay', '排错'],
  },
  {
    title: 'Marc0.dev — OpenClaw Mac Mini M4 Pro 完全指南',
    desc: 'M4 Pro 64GB Mac Mini 零云端部署，本地 Ollama 集成实测',
    url: 'https://www.marc0.dev/en/blog/openclaw-mac-mini-the-complete-guide-to-running-your-own-ai-agent-in-2026-1770057455419',
    source: 'Marc0.dev',
    lang: 'en',
    category: 'getting-started',
    tags: ['Mac Mini', 'M4 Pro', '本地部署', 'Ollama'],
  },

  // -- Cloud Deploy --
  {
    title: 'AMD Developer Cloud — OpenClaw + vLLM 免费运行指南',
    desc: '使用 MI300X 192GB 企业级 GPU 免费运行本地大模型，连接 OpenClaw',
    url: 'https://www.amd.com/en/developer/resources/technical-articles/2026/openclaw-with-vllm-running-for-free-on-amd-developer-cloud-.html',
    source: 'AMD',
    lang: 'en',
    category: 'cloud-deploy',
    featured: true,
    tags: ['AMD', 'vLLM', '免费GPU', 'MI300X'],
  },

  // -- Deep Dive --
  {
    title: 'Clawctl Blog — OpenClaw + 本地 LLM 完全指南',
    desc: '零 API 费用，Ollama/vLLM/LM Studio 三种本地方案全覆盖',
    url: 'https://clawctl.com/blog/openclaw-local-llm-complete-guide',
    source: 'Clawctl',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['本地LLM', 'Ollama', 'vLLM', 'LM Studio'],
  },
  {
    title: 'ZDNet — From Clawdbot to OpenClaw: Nightmare Fuel for Security Pros',
    desc: '34 个安全相关 commit，一键 RCE 修复，安全加固进展深度报道',
    url: 'https://www.zdnet.com/article/clawdbot-moltbot-openclaw-security-nightmare/',
    source: 'ZDNet',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['ZDNet', '安全', 'RCE修复'],
  },
  {
    title: 'CyberSecurity News — OpenClaw v2026.2.6 发布：Safety Scanner + Opus 4.6',
    desc: '新版本支持 Opus 4.6/GPT-5.3-Codex，内置代码安全扫描器',
    url: 'https://cybersecuritynews.com/openclaw-v2026-2-6-released/',
    source: 'CyberSecurity News',
    lang: 'en',
    category: 'deep-dive',
    tags: ['版本更新', '安全扫描', 'v2026.2.6'],
  },
  {
    title: 'Yahoo Finance — OpenClaw: What Is Clawdbot and Why It\'s Taking Over',
    desc: 'WhatsApp 集成吸引非技术用户，从聊天到执行真实任务的范式转变',
    url: 'https://finance.yahoo.com/news/openclaw-clawdbot-why-taking-over-130000159.html',
    source: 'Yahoo Finance',
    lang: 'en',
    category: 'deep-dive',
    tags: ['Yahoo', '主流媒体', 'WhatsApp'],
  },
  {
    title: 'Medium — From Moltbot to OpenClaw: Multi-Agent AI with Qwen3 and Matrix',
    desc: '私有多 Agent 架构：vLLM + Qwen3 + Matrix 协议，跨平台统一会话',
    url: 'https://medium.com/@dorangao/from-moltbot-to-openclaw-upgrading-your-private-multi-agent-ai-with-qwen3-and-matrix-91a814833ae5',
    source: 'Medium',
    lang: 'en',
    category: 'deep-dive',
    tags: ['Multi-Agent', 'Qwen3', 'Matrix', 'vLLM'],
  },

  // -- Video --
  {
    title: 'YouTube — OpenClaw Tutorial for Beginners: Full VPS + Docker Setup',
    desc: 'VPS Docker 部署全流程视频，从零到运行',
    url: 'https://www.youtube.com/watch?v=Zo7Putdga_4',
    source: 'YouTube',
    lang: 'en',
    category: 'video',
    tags: ['YouTube', 'VPS', 'Docker', '最新'],
  },
  {
    title: 'B站 — 超详细的最强AI部署教程，小白友好',
    desc: '2026 年最新版部署教程，面向零基础用户的保姆级讲解',
    url: 'https://www.bilibili.com/video/BV1fMfZBuEMj/',
    source: 'Bilibili',
    lang: 'zh',
    category: 'video',
    featured: true,
    tags: ['B站', '小白友好', '最新'],
  },

  // ============ New — Week of 2026-02-07 ============

  // -- Getting Started (English) --
  {
    title: 'Medium — How to Install & Secure Your Personal AI Bot',
    desc: 'Security-focused setup guide: installation plus hardening to prevent strangers accessing your machine',
    url: 'https://medium.com/@proflead/openclaw-tutorial-how-to-install-secure-your-personal-ai-bot-0dde8dc71624',
    source: 'Medium',
    lang: 'en',
    category: 'getting-started',
    tags: ['Medium', '安全', '加固'],
  },
  {
    title: 'Habr — Don\'t Launch Your Bot Before Reading This',
    desc: 'Russian tech community\'s security-first setup guide, covers securing OpenClaw before exposing it',
    url: 'https://habr.com/en/articles/992720/',
    source: 'Habr',
    lang: 'en',
    category: 'getting-started',
    tags: ['Habr', '安全', '俄罗斯社区'],
  },
  {
    title: 'Contabo — What is OpenClaw: Self-Hosted AI Agent Guide',
    desc: 'VPS hosting provider guide: OpenClaw vs n8n comparison, setup tips for self-hosted deployment',
    url: 'https://contabo.com/blog/what-is-openclaw-self-hosted-ai-agent-guide/',
    source: 'Contabo',
    lang: 'en',
    category: 'getting-started',
    tags: ['Contabo', 'VPS', 'n8n对比'],
  },
  {
    title: 'Hostinger — How to Install OpenClaw on Hostinger VPS',
    desc: 'One-click Docker template deployment on Hostinger VPS, official help center guide',
    url: 'https://www.hostinger.com/support/how-to-install-openclaw-on-hostinger-vps/',
    source: 'Hostinger',
    lang: 'en',
    category: 'getting-started',
    tags: ['Hostinger', 'Docker', '一键部署'],
  },

  // -- Getting Started (Chinese) --
  {
    title: '阿里云 — 2026年 OpenClaw 极速部署教程（更新版）',
    desc: '预置镜像一键部署全流程、多渠道集成方法、高频问题解决方案，适配最新版本',
    url: 'https://developer.aliyun.com/article/1710373',
    source: '阿里云开发者社区',
    lang: 'zh',
    category: 'cloud-deploy',
    tags: ['阿里云', '一键部署', '最新版'],
  },
  {
    title: '阿里云 — OpenClaw 一键秒级部署全攻略指南',
    desc: '轻量应用服务器专属页面直接部署，含实例配置和服务协议说明',
    url: 'https://developer.aliyun.com/article/1710471',
    source: '阿里云开发者社区',
    lang: 'zh',
    category: 'cloud-deploy',
    tags: ['阿里云', '秒级部署', '轻量服务器'],
  },
  {
    title: '阿里云 — OpenClaw 部署保姆级教程：接入微信/飞书/钉钉/QQ',
    desc: '四大通讯平台全覆盖，App Key/Token 获取全流程详解',
    url: 'https://developer.aliyun.com/article/1710679',
    source: '阿里云开发者社区',
    lang: 'zh',
    category: 'cloud-deploy',
    tags: ['阿里云', '微信', '飞书', '钉钉', 'QQ'],
  },

  // -- Deep Dive (Security) --
  {
    title: 'Adversa AI — OpenClaw Security 101: CVEs, Moltbook Breach & Hardening',
    desc: 'Comprehensive security analysis: known CVEs, supply chain risks, and hardening recommendations',
    url: 'https://adversa.ai/blog/openclaw-security-101-vulnerabilities-hardening-2026/',
    source: 'Adversa AI',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['安全', 'CVE', '加固指南'],
  },
  {
    title: 'Snyk — From SKILL.md to Shell Access in Three Lines of Markdown',
    desc: 'Snyk threat modeling of agent skills: how malicious SKILL.md files can gain shell access',
    url: 'https://snyk.io/articles/skill-md-shell-access/',
    source: 'Snyk',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['Snyk', '安全', '供应链', '威胁建模'],
  },
  {
    title: 'Snyk — ToxicSkills: 1467 Malicious Payloads in ClawHub Study',
    desc: '36% of skills contain prompt injection, comprehensive supply chain compromise analysis',
    url: 'https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/',
    source: 'Snyk',
    lang: 'en',
    category: 'deep-dive',
    tags: ['Snyk', '安全研究', '恶意Skill'],
  },
  {
    title: 'AuthMind — OpenClaw\'s 230 Malicious Skills: Agentic AI Supply Chains',
    desc: 'Identity security perspective on agent supply chain threats and credential exposure risks',
    url: 'https://www.authmind.com/post/openclaw-malicious-skills-agentic-ai-supply-chain',
    source: 'AuthMind',
    lang: 'en',
    category: 'deep-dive',
    tags: ['身份安全', '供应链', '凭证风险'],
  },

  // -- Deep Dive (Reviews & Analysis) --
  {
    title: 'Substack — Is OpenClaw Worth the Hype? I Spent 10 Days Finding Out',
    desc: 'Honest 10-day review with real cost analysis, VPS setup guide, and practical verdict',
    url: 'https://aimaker.substack.com/p/openclaw-review-setup-guide',
    source: 'Substack',
    lang: 'en',
    category: 'deep-dive',
    tags: ['评测', '成本分析', '10天实测'],
  },
  {
    title: 'Bright Data — Build a WhatsApp AI Assistant with OpenClaw',
    desc: 'Integration guide: OpenClaw + Bright Data for web scraping enabled WhatsApp assistant',
    url: 'https://brightdata.com/blog/ai/openclaw-with-bright-data',
    source: 'Bright Data',
    lang: 'en',
    category: 'channel-integration',
    tags: ['WhatsApp', 'Web Scraping', 'Bright Data'],
  },

  // -- Video (New) --
  {
    title: 'YouTube — OpenClaw Full Tutorial for Beginners (Comprehensive Course)',
    desc: 'Comprehensive beginner course covering installation, configuration, and automation tasks',
    url: 'https://www.youtube.com/watch?v=n1sfrc-RjyM',
    source: 'YouTube',
    lang: 'en',
    category: 'video',
    featured: true,
    tags: ['YouTube', '完整课程', '入门'],
  },
  {
    title: 'YouTube — OpenClaw Skills Tutorial: Build Local AI Agent Skills + MoltBook',
    desc: 'Step-by-step skill development with Ollama and MoltBook integration',
    url: 'https://www.youtube.com/watch?v=CENnPXxVUAc',
    source: 'YouTube',
    lang: 'en',
    category: 'video',
    tags: ['YouTube', 'Skill开发', 'Ollama', 'MoltBook'],
  },
  {
    title: 'YouTube — How to Set Up OpenClaw on a Budget VPS (Hetzner)',
    desc: 'Budget-friendly setup: fresh Ubuntu Hetzner VPS with firewall rules and full walkthrough',
    url: 'https://www.youtube.com/watch?v=j9Xp5_VNYc8',
    source: 'YouTube',
    lang: 'en',
    category: 'video',
    tags: ['YouTube', 'Hetzner', '低成本', 'VPS'],
  },
  {
    title: 'B站 — 本地部署接入微信/飞书/钉钉/QQ 10分钟保姆级教程',
    desc: '10分钟手把手教会，附完整操作文档，四大平台全覆盖',
    url: 'https://www.bilibili.com/video/BV1MfFAz6EnR/',
    source: 'Bilibili',
    lang: 'zh',
    category: 'video',
    featured: true,
    tags: ['B站', '微信', '飞书', '钉钉', 'QQ'],
  },
  {
    title: 'B站 — 实测 Clawdbot 彻底改变工作方式！WhatsApp 远程控制电脑',
    desc: '一条命令部署，自动编程开发，自我进化+无限记忆实测演示',
    url: 'https://www.bilibili.com/video/BV14z6GB1EAr/',
    source: 'Bilibili',
    lang: 'zh',
    category: 'video',
    tags: ['B站', 'WhatsApp', '远程控制', '自动化'],
  },

  // -- Skill Dev --
  {
    title: 'Substack — Cheapest + Most Secure OpenClaw Setup (Hetzner)',
    desc: 'Cost-optimized and security-hardened setup guide on cheap Hetzner VPS, 24/7 operation',
    url: 'https://www.learnwithmeai.com/p/clawdbotopenclaw-cheapest-most-secure',
    source: 'Substack',
    lang: 'en',
    category: 'getting-started',
    tags: ['Hetzner', '低成本', '安全加固', '24/7'],
  },
  {
    title: 'Creator Economy — Master OpenClaw in 30 Minutes',
    desc: '5 real use cases: calendar, documents, personalized briefings, and memory management',
    url: 'https://creatoreconomy.so/p/master-openclaw-in-30-minutes-full-tutorial',
    source: 'Creator Economy',
    lang: 'en',
    category: 'getting-started',
    tags: ['30分钟', '实用场景', '付费'],
  },

  // -- Cloud Deploy --
  {
    title: '阿里云 — OpenClaw 常见问题文档',
    desc: '官方 FAQ：版本更新(2026.2.3)、镜像升级、常见错误排查',
    url: 'https://help.aliyun.com/zh/simple-application-server/use-cases/openclaw-faq',
    source: '阿里云',
    lang: 'zh',
    category: 'cloud-deploy',
    tags: ['阿里云', 'FAQ', '排错', '版本更新'],
  },

  // ============ New — Week of 2026-02-09 ============

  // -- Official / Tools --
  {
    title: 'Awesome OpenClaw Skills — 社区精选技能合集',
    desc: 'VoltAgent 维护的 OpenClaw Skills 精选列表，分类清晰，持续更新',
    url: 'https://github.com/VoltAgent/awesome-openclaw-skills',
    source: 'GitHub',
    lang: 'en',
    category: 'tools',
    featured: true,
    tags: ['Awesome', '技能合集', '社区'],
  },

  // -- Deep Dive (Security - Major) --
  {
    title: 'The Hacker News — OpenClaw 集成 VirusTotal 扫描恶意 ClawHub 技能',
    desc: 'OpenClaw 与 Google VirusTotal 合作，对 ClawHub 所有上传技能进行自动安全扫描',
    url: 'https://thehackernews.com/2026/02/openclaw-integrates-virustotal-scanning.html',
    source: 'The Hacker News',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['VirusTotal', '安全', 'ClawHub', '里程碑'],
  },
  {
    title: 'CyberSecurity News — OpenClaw 与 VirusTotal 合作保障 AI Agent 市场安全',
    desc: 'ClawHub 技能市场安全升级：自动扫描、威胁情报、安全路线图',
    url: 'https://cybersecuritynews.com/openclaw-and-virustotal/',
    source: 'CyberSecurity News',
    lang: 'en',
    category: 'deep-dive',
    tags: ['VirusTotal', '安全', '市场安全'],
  },
  {
    title: 'CrowdStrike — 安全团队需要了解的 OpenClaw AI 超级代理',
    desc: 'CrowdStrike 安全视角分析 OpenClaw 的风险面与防护建议，附 2/10 红队直播预告',
    url: 'https://www.crowdstrike.com/en-us/blog/what-security-teams-need-to-know-about-openclaw-ai-super-agent/',
    source: 'CrowdStrike',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['CrowdStrike', '安全', '红队', '企业'],
  },
  {
    title: 'eSecurity Planet — ClawHub 审计发现数百个恶意技能',
    desc: 'Koi Security 审计 2,857 个技能发现 341 个恶意条目，ClawHavoc 攻击详解',
    url: 'https://www.esecurityplanet.com/threats/hundreds-of-malicious-skills-found-in-openclaws-clawhub/',
    source: 'eSecurity Planet',
    lang: 'en',
    category: 'deep-dive',
    tags: ['安全审计', 'ClawHavoc', '供应链'],
  },
  {
    title: 'Android Headlines — OpenClaw 解析：优势、风险与争议',
    desc: '全面评估 OpenClaw 的功能、ClawHub 生态问题和安全隐患',
    url: 'https://www.androidheadlines.com/2026/02/openclaw-explained-ai-agent-security-risks-moltbot-clawdbot-features.html',
    source: 'Android Headlines',
    lang: 'en',
    category: 'deep-dive',
    tags: ['评测', '安全', '争议'],
  },
  // ============ New — Week of 2026-02-11 ============

  // -- Getting Started --
  {
    title: 'Robo Rhythms — OpenClaw 101 Beginner Friendly Guide',
    desc: 'From first install to advanced workflows, covers common pitfalls like context loss and memory issues',
    url: 'https://www.roborhythms.com/openclaw-beginner-friendly-guide/',
    source: 'Robo Rhythms',
    lang: 'en',
    category: 'getting-started',
    tags: ['入门', '踩坑', '进阶工作流'],
  },

  // -- Video --
  {
    title: 'YouTube — Master OpenClaw in 30 Minutes (Peter Yang)',
    desc: 'Calendar, documents, personalized briefings, voice reply, and memory management — 5 real use cases in 30 min',
    url: 'https://www.youtube.com/watch?v=ji_Sd4si7jo',
    source: 'YouTube',
    lang: 'en',
    category: 'video',
    featured: true,
    tags: ['YouTube', '30分钟', '实用场景', 'Peter Yang'],
  },

  // -- Deep Dive (Security) --
  {
    title: 'Snyk — Inside the clawdhub Malicious Campaign: Reverse Shells on OpenClaw',
    desc: '深入分析 ClawHub 恶意技能投放反向 Shell 的完整攻击链，含时间线和 IoC',
    url: 'https://snyk.io/articles/clawdhub-malicious-campaign-ai-agent-skills/',
    source: 'Snyk',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['Snyk', '安全', '反向Shell', '攻击链'],
  },

  // -- Tools --
  {
    title: 'DeepWiki — OpenClaw 源码解析：Tools & Skills 架构',
    desc: 'AI 自动索引的 OpenClaw 源码 Wiki，深入解析工具和技能系统架构',
    url: 'https://deepwiki.com/openclaw/openclaw/6-tools-and-skills',
    source: 'DeepWiki',
    lang: 'en',
    category: 'tools',
    tags: ['源码', '架构', 'Wiki', '自动索引'],
  },

  // ============ New — Week of 2026-02-12 ============

  // -- Tools --
  {
    title: 'Molt Founders — OpenClaw Mega Cheatsheet 2026',
    desc: '150+ CLI 命令速查、工作区文件、记忆系统、模型配置、多 Agent 设置全覆盖，附可打印 A4 PDF',
    url: 'https://moltfounders.com/openclaw-mega-cheatsheet',
    source: 'Molt Founders',
    lang: 'en',
    category: 'tools',
    featured: true,
    tags: ['速查表', 'CLI', 'PDF', '开发者'],
  },

  // -- Deep Dive (Security / Academic) --
  {
    title: 'Northeastern University — Why OpenClaw AI Assistant is a "Privacy Nightmare"',
    desc: '东北大学网络安全教授深度分析 OpenClaw 隐私风险，学术视角审视 Agent 权限与数据流向',
    url: 'https://news.northeastern.edu/2026/02/10/open-claw-ai-assistant/',
    source: 'Northeastern University',
    lang: 'en',
    category: 'deep-dive',
    featured: true,
    tags: ['学术', '隐私', '安全', '大学'],
  },

  // -- Getting Started --
  {
    title: 'Gadget Pilipinas — OpenClaw on MacBook Pro M5 虚拟环境部署',
    desc: 'M5 Mac 虚拟化部署指南，含 Zapier MCP 集成和 MCPorter 沙箱安全配置',
    url: 'https://www.gadgetpilipinas.net/2026/02/openclaw-on-macbook-pro-m5/',
    source: 'Gadget Pilipinas',
    lang: 'en',
    category: 'getting-started',
    tags: ['Mac', 'M5', 'Zapier', 'MCP', '虚拟化'],
  },

  // ============ New — Week of 2026-02-13 ============

  // -- Video --
  {
    title: 'YouTube — Install OpenClaw in 30 Seconds & Start Building (Wes Roth)',
    desc: 'Local install and VPS full tutorial, from one-liner install to first automation',
    url: 'https://www.youtube.com/watch?v=ZcIqiLLT7Fg',
    source: 'YouTube',
    lang: 'en',
    category: 'video',
    tags: ['YouTube', 'Wes Roth', '快速安装', 'VPS'],
  },

  // -- Deep Dive --
  {
    title: 'Substack — OpenClaw/Moltbot/ClawdBot 101: The Complete Guide',
    desc: 'Markdown 配置文件全解析，从 SOUL.md 到 Skills 的系统化入门',
    url: 'https://sidsaladi.substack.com/p/openclawmoltbotclawdbot-101-the-complete',
    source: 'Substack',
    lang: 'en',
    category: 'deep-dive',
    tags: ['Substack', '配置文件', '系统化'],
  },

  // -- Getting Started --
  {
    title: 'Adven Boost — OpenClaw Setup: Zero to First Chat in 10 Minutes',
    desc: '2026 最新精简版部署指南，砍掉冗余步骤直奔 10 分钟跑通',
    url: 'https://advenboost.com/en/openclaw-setup-fast-tutorial/',
    source: 'Adven Boost',
    lang: 'en',
    category: 'getting-started',
    tags: ['10分钟', '精简', '2026'],
  },

  {
    title: 'O-mega — OpenClaw: AI Agent Workforce 终极指南 2026',
    desc: '多 Agent 协作架构深度解析，从单体 AI 到 Agent 编排的趋势分析',
    url: 'https://o-mega.ai/articles/openclaw-creating-the-ai-agent-workforce-ultimate-guide-2026',
    source: 'O-mega',
    lang: 'en',
    category: 'deep-dive',
    tags: ['Multi-Agent', '编排', '趋势'],
  },
];

export function getResourcesByCategory(cat: ResourceCategory): Resource[] {
  return resources.filter((r) => r.category === cat);
}

export function getFeaturedResources(): Resource[] {
  return resources.filter((r) => r.featured);
}

export function getResourcesByLang(lang: 'zh' | 'en'): Resource[] {
  return resources.filter((r) => r.lang === lang);
}

export const stats = {
  totalResources: resources.length,
  totalCategories: Object.keys(categoryMeta).length,
  zhResources: resources.filter((r) => r.lang === 'zh').length,
  enResources: resources.filter((r) => r.lang === 'en').length,
};
