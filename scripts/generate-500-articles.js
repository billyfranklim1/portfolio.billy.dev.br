const fs = require('fs');
const path = require('path');

// Função para gerar slug
function generateSlug(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Função para gerar data aleatória
function generateRandomDate() {
  const start = new Date('2024-01-01');
  const end = new Date('2025-10-21');
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
}

// Base de tópicos para geração dinâmica
const topicBases = {
  aiTrends: {
    prefixes: ['Como', 'Guia Completo de', 'Tudo Sobre', 'Introdução a', 'Dominando', 'Implementando', 'Otimizando', 'Entendendo', 'Melhores Práticas de', 'Tutorial de'],
    topics: [
      'IA Agêntica', 'Modelos de Raciocínio', 'Small Language Models', 'Edge AI', 'Ética em IA',
      'IA Espacial 3D', 'Busca Conversacional', 'IA na Ciência', 'Voice AI', 'IA Generativa',
      'Transformers', 'Fine-Tuning', 'Embeddings', 'Prompt Engineering', 'Multimodalidade',
      'IA e Privacidade', 'Custos de IA', 'Transfer Learning', 'Neural Networks', 'Deep Learning',
      'Machine Learning', 'Computer Vision', 'NLP', 'Redes Neurais Convolucionais', 'GANs',
      'Autoencoders', 'Attention Mechanisms', 'BERT', 'Diffusion Models', 'Stable Diffusion',
      'Midjourney', 'DALL-E', 'Text-to-Image', 'Image-to-Image', 'IA para Vídeo',
      'IA para Áudio', 'Síntese de Voz', 'Reconhecimento de Fala', 'IA Explicável',
      'Federated Learning', 'IA On-Premise', 'IA Cloud', 'MLOps', 'DataOps',
      'Feature Engineering', 'Model Training', 'Hyperparameter Tuning', 'Cross-Validation',
      'Overfitting e Underfitting', 'Regularização', 'Dropout', 'Batch Normalization',
      'Gradient Descent', 'Backpropagation', 'Loss Functions', 'Activation Functions',
      'Optimizers', 'Learning Rate', 'Momentum', 'Adam Optimizer', 'RMSprop',
      'Transfer Learning em Visão', 'Zero-Shot Learning', 'One-Shot Learning',
      'Meta-Learning', 'Reinforcement Learning', 'Q-Learning', 'Policy Gradient',
      'Actor-Critic', 'PPO', 'DQN', 'AlphaGo', 'IA para Jogos',
      'IA para Robótica', 'IA para IoT', 'IA para Saúde', 'IA para Finanças',
      'IA para E-commerce', 'IA para Marketing', 'IA para RH', 'IA para Educação',
      'IA para Agricultura', 'IA para Indústria', 'IA para Segurança', 'Anomaly Detection',
      'Sentiment Analysis', 'Text Classification', 'Named Entity Recognition', 'Question Answering',
      'Text Summarization', 'Machine Translation', 'Chatbots', 'Virtual Assistants'
    ],
    suffixes: ['em 2025', 'na Prática', 'para Iniciantes', 'Avançado', 'do Zero', 'Passo a Passo', 'com Python', 'com JavaScript', 'em Produção', 'para Empresas']
  },
  llms: {
    prefixes: ['Explorando', 'Comparando', 'Implementando', 'Otimizando', 'Configurando', 'Usando', 'Integrando', 'Desenvolvendo com', 'Trabalhando com', 'Masterizando'],
    topics: [
      'GPT-5', 'GPT-4', 'Claude 4 Opus', 'Claude 4 Sonnet', 'Gemini 2.5 Pro', 'Llama 4',
      'Context Windows', 'RAG', 'DeepSeek', 'Grok', 'Mistral AI', 'Cohere',
      'Temperature', 'Top-P', 'Top-K', 'Token Economics', 'Function Calling',
      'Streaming', 'Chain of Thought', 'Few-Shot Learning', 'LLMs Locais',
      'Quantização', 'Sistema de Mensagens', 'Hallucinations', 'Benchmarks',
      'Embeddings Models', 'OpenAI API', 'Anthropic API', 'Google AI API',
      'Hugging Face', 'LangChain', 'LlamaIndex', 'Vector Databases', 'Pinecone',
      'Weaviate', 'Qdrant', 'Chroma', 'FAISS', 'Semantic Search',
      'Document Processing', 'PDF Parsing', 'Text Extraction', 'Chunking Strategies',
      'Retrieval Strategies', 'Hybrid Search', 'Reranking', 'Context Injection',
      'Memory Management', 'Conversation History', 'Session Management', 'State Management',
      'Prompt Templates', 'Prompt Optimization', 'Prompt Chaining', 'Prompt Caching',
      'Response Formatting', 'JSON Mode', 'Structured Output', 'Validation',
      'Error Handling', 'Rate Limiting', 'Cost Optimization', 'Batch Processing',
      'Async Processing', 'Parallel Requests', 'Load Balancing', 'Failover',
      'Model Selection', 'Model Comparison', 'Model Switching', 'Multi-Model',
      'Fine-Tuning GPT', 'Fine-Tuning Claude', 'Fine-Tuning Llama', 'Custom Models',
      'Domain-Specific LLMs', 'Multilingual LLMs', 'Code-Specific LLMs', 'Math LLMs',
      'Vision-Language Models', 'Audio-Language Models', 'Multimodal LLMs',
      'LLM Security', 'Jailbreak Prevention', 'Content Filtering', 'Moderation',
      'PII Detection', 'Data Sanitization', 'Compliance', 'GDPR e LLMs',
      'LLM Monitoring', 'Observability', 'Logging', 'Debugging',
      'Testing LLMs', 'Evaluation Metrics', 'Human Feedback', 'RLHF',
      'Instruction Tuning', 'Constitutional AI', 'Alignment', 'Safety',
      'Interpretability', 'Explainability', 'Transparency', 'Bias Detection'
    ],
    suffixes: ['Tutorial', 'Guia Prático', 'Melhores Práticas', 'Casos de Uso', 'em Produção', 'Performance', 'Custos', 'Comparação', 'em 2025', 'para Desenvolvedores']
  },
  aiAgents: {
    prefixes: ['Criando', 'Desenvolvendo', 'Implementando', 'Construindo', 'Orquestrando', 'Otimizando', 'Escalando', 'Configurando', 'Gerenciando', 'Monitorando'],
    topics: [
      'Multi-Agent Systems', 'RAG Agêntico', 'Agentes Proativos', 'Voice Agents',
      'Customer Service Agents', 'LangChain Agents', 'AutoGPT', 'Agentes de Pesquisa',
      'Memory Systems', 'Tool Use', 'Planning', 'ReAct', 'Agentes Conversacionais',
      'Agentes de Análise', 'Supervisory Agents', 'Agentes de Workflow',
      'Error Handling', 'Agent Observability', 'LangGraph', 'CrewAI',
      'AgentGPT', 'BabyAGI', 'SuperAGI', 'Agent Executors', 'Agent Chains',
      'Custom Agents', 'Specialized Agents', 'General Agents', 'Task Agents',
      'Research Agents', 'Writing Agents', 'Coding Agents', 'Data Agents',
      'SQL Agents', 'API Agents', 'Web Scraping Agents', 'Browser Agents',
      'Email Agents', 'Calendar Agents', 'Scheduling Agents', 'Notification Agents',
      'Translation Agents', 'Summarization Agents', 'Classification Agents',
      'Extraction Agents', 'Validation Agents', 'Transformation Agents',
      'Integration Agents', 'Orchestration Agents', 'Coordination Agents',
      'Decision Agents', 'Routing Agents', 'Filtering Agents', 'Aggregation Agents',
      'Agent Communication', 'Message Passing', 'Event-Driven Agents', 'Reactive Agents',
      'Deliberative Agents', 'Hybrid Agents', 'Cognitive Agents', 'Social Agents',
      'Learning Agents', 'Adaptive Agents', 'Autonomous Agents', 'Semi-Autonomous Agents',
      'Agent Architectures', 'Agent Frameworks', 'Agent Patterns', 'Agent Design',
      'Agent Testing', 'Agent Debugging', 'Agent Deployment', 'Agent Scaling',
      'Agent Security', 'Agent Safety', 'Agent Ethics', 'Agent Governance',
      'Agent Metrics', 'Agent KPIs', 'Agent ROI', 'Agent Performance',
      'Agent Reliability', 'Agent Resilience', 'Agent Recovery', 'Agent Fallback',
      'Agent State', 'Agent Context', 'Agent Memory', 'Agent Learning',
      'Agent Feedback', 'Agent Improvement', 'Agent Evolution', 'Agent Versioning',
      'Agent Marketplace', 'Agent Templates', 'Agent Sharing', 'Agent Collaboration'
    ],
    suffixes: ['na Prática', 'do Zero', 'Avançado', 'em Produção', 'Escalável', 'Performance', 'com LangChain', 'com Python', 'Tutorial Completo', 'Guia Definitivo']
  },
  n8n: {
    prefixes: ['Automatizando', 'Integrando', 'Conectando', 'Sincronizando', 'Configurando', 'Criando', 'Desenvolvendo', 'Otimizando', 'Implementando', 'Construindo'],
    topics: [
      'Google Sheets', 'WhatsApp', 'Telegram', 'Discord', 'Slack',
      'Webhooks', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
      'Notion', 'Gmail', 'Outlook', 'APIs', 'n8n Self-Hosted',
      'Agendamento', 'n8n com IA', 'Error Workflows', 'Airtable',
      'Backup', 'E-commerce', 'Variáveis', 'n8n Cloud', 'HTTP Requests',
      'Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Mercado Pago',
      'Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'TikTok',
      'YouTube', 'Twitch', 'GitHub', 'GitLab', 'Bitbucket',
      'Jira', 'Trello', 'Asana', 'ClickUp', 'Monday.com',
      'HubSpot', 'Salesforce', 'Pipedrive', 'Zendesk', 'Intercom',
      'Mailchimp', 'SendGrid', 'ConvertKit', 'ActiveCampaign',
      'WordPress', 'Webflow', 'Bubble', 'Zapier vs n8n', 'Make vs n8n',
      'Workflows Complexos', 'Workflows Simples', 'Workflows Avançados',
      'Split in Batches', 'Merge', 'IF', 'Switch', 'Loop',
      'Code Node', 'Function', 'Function Item', 'Set', 'Edit Fields',
      'Filter', 'Sort', 'Limit', 'Remove Duplicates', 'Aggregate',
      'Item Lists', 'Binary Data', 'File Processing', 'Image Processing',
      'PDF Generation', 'Email Templates', 'SMS', 'Push Notifications',
      'Webhooks Avançados', 'OAuth', 'API Authentication', 'Headers',
      'Query Parameters', 'JSON', 'XML', 'CSV', 'Excel',
      'Database Queries', 'SQL', 'NoSQL', 'GraphQL', 'REST API',
      'SOAP API', 'FTP', 'SFTP', 'S3', 'Google Drive',
      'Dropbox', 'OneDrive', 'Box', 'AWS', 'Azure',
      'Google Cloud', 'Firebase', 'Supabase', 'Vercel', 'Netlify'
    ],
    suffixes: ['com n8n', 'no n8n', 'usando n8n', 'via n8n', 'automatizado', 'integração', 'workflow', 'passo a passo', 'tutorial', 'guia completo']
  },
  codeAgents: {
    prefixes: ['Usando', 'Configurando', 'Otimizando', 'Integrando', 'Desenvolvendo com', 'Programando com', 'Codificando com', 'Trabalhando com', 'Masterizando', 'Dominando'],
    topics: [
      'GitHub Copilot', 'Cursor', 'Windsurf', 'Replit', 'Tabnine',
      'Code Review', 'Testes Automatizados', 'Documentação', 'Refatoração',
      'Debug', 'Pair Programming', 'Geração de Código', 'Migração',
      'Análise de Performance', 'Segurança', 'Code Completion', 'Multi-File',
      'Context-Aware', 'Deploy', 'VS Code', 'JetBrains', 'Vim',
      'Emacs', 'Sublime Text', 'Atom', 'CodeGPT', 'Codeium',
      'Amazon CodeWhisperer', 'Sourcegraph Cody', 'Continue', 'Aider',
      'Phind', 'Pieces', 'Cursor Tab', 'Copilot Chat', 'Inline Chat',
      'AI Code Suggestions', 'AI Code Generation', 'AI Code Explanation',
      'AI Code Translation', 'AI Code Optimization', 'AI Debugging',
      'AI Testing', 'AI Documentation', 'AI Code Review', 'AI Refactoring',
      'JavaScript', 'TypeScript', 'Python', 'Go', 'Rust',
      'Java', 'C++', 'C#', 'PHP', 'Ruby',
      'Swift', 'Kotlin', 'Dart', 'Flutter', 'React',
      'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt',
      'Node.js', 'Django', 'FastAPI', 'Express', 'NestJS',
      'Spring Boot', '.NET', 'Laravel', 'Rails', 'SQL',
      'NoSQL', 'GraphQL', 'REST', 'gRPC', 'Docker',
      'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions', 'GitLab CI',
      'Jenkins', 'AWS', 'Azure', 'GCP', 'Terraform',
      'Infrastructure as Code', 'Microservices', 'Serverless', 'APIs',
      'Frontend', 'Backend', 'Full Stack', 'DevOps', 'Cloud Native'
    ],
    suffixes: ['IA', 'AI Assistants', 'Code Agents', 'AI Tools', 'Automation', 'Productivity', 'Best Practices', 'Tutorial', 'Guia', '2025']
  }
};

// Gerar tópicos dinamicamente
function generateTopics(category, count) {
  const base = topicBases[category];
  const topics = [];
  const usedTitles = new Set();

  let attempts = 0;
  const maxAttempts = count * 10;

  while (topics.length < count && attempts < maxAttempts) {
    attempts++;

    const prefix = base.prefixes[Math.floor(Math.random() * base.prefixes.length)];
    const topic = base.topics[Math.floor(Math.random() * base.topics.length)];
    const suffix = base.suffixes[Math.floor(Math.random() * base.suffixes.length)];

    // Gerar título com variações
    let title;
    const variation = Math.floor(Math.random() * 4);

    switch(variation) {
      case 0:
        title = `${prefix} ${topic} ${suffix}`;
        break;
      case 1:
        title = `${prefix} ${topic}`;
        break;
      case 2:
        title = `${topic}: ${suffix}`;
        break;
      case 3:
        title = `${topic} ${suffix}`;
        break;
    }

    // Evitar duplicatas
    if (usedTitles.has(title)) continue;
    usedTitles.add(title);

    const slug = generateSlug(title);
    const keywords = `${topic}, ${category}, AI, automação, desenvolvimento`;

    topics.push({ title, slug, keywords });
  }

  return topics;
}

// Templates de conteúdo
const contentTemplates = {
  aiTrends: (topic) => `
Nos últimos anos, testemunhei uma transformação incrível no mundo da inteligência artificial. Quando comecei minha jornada na tecnologia, jamais imaginei que chegaria o dia em que ${topic.title.toLowerCase()} seria uma realidade tão próxima e acessível.

## Minha Experiência

Trabalhando com desenvolvimento de software, percebi que a IA não é mais apenas um conceito futurista - ela está aqui, transformando a forma como criamos, pensamos e resolvemos problemas. Esta tecnologia me ensinou que o impossível de ontem é o cotidiano de hoje.

## O Que Aprendi

A cada projeto que desenvolvo, incorporando elementos de inteligência artificial, aprendo algo novo. A persistência e a curiosidade que desenvolvi ao longo da minha carreira me prepararam para abraçar essas mudanças com entusiasmo.

Descobri que trabalhar com IA requer não apenas conhecimento técnico, mas também uma mentalidade aberta para aprender constantemente. Assim como quando enfrentei meus primeiros desafios na programação, a IA nos convida a sair da zona de conforto.

## Aplicações Práticas

Na prática, vejo essa tecnologia sendo aplicada em diversos contextos: desde automação de tarefas repetitivas até a criação de experiências completamente novas para usuários. Cada implementação traz seus próprios desafios e aprendizados.

O mais fascinante é ver como ferramentas que antes eram exclusivas de grandes empresas agora estão ao alcance de desenvolvedores independentes e pequenas equipes. Isso democratiza o acesso à inovação.

## Implementação

Durante minha jornada, aprendi que a chave para o sucesso está em começar pequeno, experimentar constantemente e não ter medo de errar. Cada erro é uma oportunidade de aprendizado que nos aproxima da solução ideal.

## Desafios Encontrados

Como toda tecnologia emergente, encontrei desafios no caminho. Questões de performance, custos, integração e manutenção foram obstáculos que aprendi a superar com paciência e pesquisa.

## Conclusão

Minha jornada está apenas começando, e espero que minha experiência inspire você a explorar essas possibilidades. Lembre-se: a tecnologia avança, mas o mais importante continua sendo nossa capacidade de aprender, adaptar e criar.
`,

  llms: (topic) => `
Quando comecei a trabalhar com modelos de linguagem, fiquei impressionado com o potencial transformador dessa tecnologia. ${topic.title} representa um marco importante nessa evolução, e quero compartilhar o que aprendi nessa jornada.

## Descobrindo o Potencial

Minha primeira experiência com modelos de linguagem foi reveladora. Percebi que estávamos diante de uma ferramenta que poderia amplificar nossa capacidade de criar, comunicar e resolver problemas de formas completamente novas.

## Aplicações no Desenvolvimento

No desenvolvimento de projetos, integrei LLMs de diversas formas: desde assistentes de código até sistemas de processamento de linguagem natural. Cada integração trouxe insights valiosos sobre as possibilidades e limitações dessa tecnologia.

O que mais me impressiona é a versatilidade. Você pode usar LLMs para análise de sentimentos, geração de conteúdo, tradução, sumarização, e muito mais. As possibilidades são praticamente infinitas.

## Implementação Prática

Aprendi que a implementação eficaz de LLMs requer atenção a detalhes como prompt engineering, gestão de contexto, controle de custos e otimização de performance. Cada aspecto é crucial para o sucesso do projeto.

## Desafios e Soluções

Como em qualquer tecnologia nova, enfrentei desafios. Aprendi sobre limitações de tokens, custos operacionais, latência e qualidade de respostas. Cada obstáculo foi uma oportunidade de crescimento e aprendizado.

A chave é experimentar, testar, iterar. Não existe uma fórmula mágica - existe prática, persistência e muita curiosidade.

## Melhores Práticas

Com o tempo, desenvolvi um conjunto de práticas que melhoraram significativamente meus resultados: estruturação cuidadosa de prompts, validação rigorosa de saídas, monitoramento constante e ajustes iterativos.

## Olhando para o Futuro

O futuro dos LLMs é brilhante. Estamos apenas arranhando a superfície do que é possível. Acredito que, assim como a internet transformou nossa sociedade, os LLMs irão redefinir como interagimos com informação e tecnologia.

Encorajo você a explorar, experimentar e aprender. A melhor forma de entender essa tecnologia é colocando a mão na massa.
`,

  aiAgents: (topic) => `
A primeira vez que vi um agente de IA funcionando de verdade, percebi que estava presenciando o futuro do desenvolvimento. ${topic.title} é um exemplo perfeito de como essa tecnologia está evoluindo rapidamente.

## Minha Jornada com Agentes

Desenvolver e trabalhar com agentes autônomos mudou minha perspectiva sobre o que é possível em programação. Esses sistemas não apenas executam comandos - eles pensam, planejam e agem de forma independente.

## Funcionamento na Prática

Em projetos reais, implementei agentes que automatizam desde tarefas simples até workflows complexos que envolvem múltiplas etapas e decisões. Ver um agente executar uma tarefa complexa do início ao fim é fascinante.

A diferença entre um script tradicional e um agente de IA é como a diferença entre um mapa e um GPS com assistente pessoal. O agente entende contexto, adapta-se a situações inesperadas e aprende com experiências.

## Arquitetura e Design

Aprendi que a arquitetura de um bom agente requer planejamento cuidadoso: definição clara de objetivos, ferramentas adequadas, sistema de memória eficiente e mecanismos robustos de tomada de decisão.

## Desafios de Implementação

Nem tudo são flores. Trabalhar com agentes requer cuidado com confiabilidade, custo e segurança. Aprendi que é crucial implementar sistemas de monitoramento e validação para garantir funcionamento adequado.

Também descobri a importância de definir limites claros e criar mecanismos de fallback para quando algo não sai como planejado.

## Casos de Uso Reais

Implementei agentes para automação de atendimento, processamento de dados, pesquisa e análise, geração de relatórios e muito mais. Cada caso de uso trouxe aprendizados únicos.

## Impacto na Produtividade

O impacto de agentes de IA vai além da automação - eles libertam tempo e energia mental para focarmos no que realmente importa: criatividade, estratégia e inovação.

## Começando sua Jornada

Se você está começando com agentes de IA, meu conselho é: comece pequeno, experimente muito e não tenha medo de errar. Cada erro é uma lição valiosa.
`,

  n8n: (topic) => `
Descobrir o n8n foi um divisor de águas na minha jornada de automação. ${topic.title} mostra perfeitamente como essa plataforma pode transformar a forma como trabalhamos.

## Por Que n8n Transformou Meu Workflow

Como desenvolvedor, sempre busquei formas de automatizar tarefas repetitivas. O n8n me deu o poder de criar automações complexas de forma visual, sem sacrificar flexibilidade ou controle.

## Primeiras Experiências

Minha primeira automação com n8n foi simples: sincronizar dados entre diferentes plataformas. Mas essa simplicidade inicial abriu portas para possibilidades muito mais complexas e interessantes.

O que mais aprecio no n8n é a capacidade de integrar praticamente qualquer ferramenta ou serviço. Se tem uma API, você pode integrá-la.

## Implementação Passo a Passo

Aprendi que a melhor forma de trabalhar com n8n é começando simples e evoluindo gradualmente. Criar workflows modulares e reutilizáveis facilita muito a manutenção e expansão.

## Casos de Uso Práticos

Implementei automações para monitoramento de sistemas, processamento de dados, integração entre ferramentas de produtividade, notificações inteligentes e até criação de chatbots.

Cada projeto me ensinou algo novo sobre as capacidades da plataforma e sobre automação em geral.

## Dicas e Truques

Com o tempo, desenvolvi técnicas que melhoram significativamente a eficiência: uso inteligente de variáveis, tratamento robusto de erros, logging adequado e testes sistemáticos.

## Otimização e Performance

Aprendi que automações eficientes requerem atenção a detalhes como uso de recursos, tempo de execução, tratamento de falhas e escalabilidade.

## Vale a Pena?

Absolutamente. O tempo economizado, os erros evitados e a tranquilidade de ter processos confiáveis e automatizados vale cada minuto investido em aprender a ferramenta.
`,

  codeAgents: (topic) => `
Quando integrei ${topic.title} no meu fluxo de desenvolvimento, minha produtividade deu um salto significativo. Essa experiência me mostrou que o futuro da programação não é substituir desenvolvedores - é amplificá-los.

## Transformando a Programação

Lembro-me de passar horas debugando código, procurando por erros ou escrevendo testes repetitivos. Com agentes de código baseados em IA, essas tarefas se tornaram muito mais eficientes.

## Experiência Diária

No dia a dia, uso agentes de código para diversas tarefas: autocompletar código inteligente, gerar testes, refatorar código legado, escrever documentação e explorar APIs novas.

O mais interessante é que esses agentes aprendem com seu contexto específico. Eles entendem o estilo do seu código, as convenções do seu projeto e se adaptam ao seu fluxo.

## Configuração e Setup

Aprendi que a configuração adequada de agentes de código faz toda diferença. Tempo investido em configurar preferências, contexto e integrações retorna multiplicado em produtividade.

## Aprendizados Importantes

Descobri que agentes de código são ferramentas poderosas, mas não substituem conhecimento fundamental. Você ainda precisa entender princípios de programação, arquitetura e boas práticas.

Também aprendi que a qualidade da saída depende muito da qualidade da entrada. Quanto melhor você comunica sua intenção, melhores são os resultados.

## Casos de Uso Reais

Uso agentes para desenvolver features, corrigir bugs, otimizar performance, revisar código, gerar documentação e aprender novas tecnologias mais rapidamente.

## Produtividade Real

A produtividade não vem apenas de escrever código mais rápido - vem de reduzir tempo em tarefas cognitivamente cansativas e poder focar em problemas mais interessantes.

## Meu Conselho

Se você ainda não experimentou agentes de código, experimente com mente aberta. Eles não vão substituir sua experiência, mas vão definitivamente potencializá-la.
`
};

// Criar artigo MDX
function createArticle(category, topic) {
  const publishedAt = generateRandomDate();
  const template = contentTemplates[category];
  const content = template(topic);

  const mdxContent = `---
title: '${topic.title}'
publishedAt: '${publishedAt}'
summary: 'Descubra insights valiosos sobre ${topic.title.toLowerCase()} e como essa tecnologia pode transformar sua forma de trabalhar com IA e desenvolvimento.'
---

${content}`;

  return {
    filename: `${topic.slug}.mdx`,
    content: mdxContent,
  };
}

// Gerar todos os artigos
function generateAllArticles() {
  const contentDir = path.join(__dirname, '..', 'content');

  if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
  }

  console.log('🚀 Iniciando geração de 500 artigos...\n');

  let totalArticles = 0;
  const articlesList = [];

  // Gerar 100 artigos por categoria
  const categories = ['aiTrends', 'llms', 'aiAgents', 'n8n', 'codeAgents'];

  categories.forEach(category => {
    console.log(`\n📝 Gerando 100 artigos para: ${category}`);
    const topics = generateTopics(category, 100);

    topics.forEach((topic, index) => {
      const article = createArticle(category, topic);
      const filePath = path.join(contentDir, article.filename);

      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, article.content, 'utf-8');
        totalArticles++;
        if (index % 10 === 0) {
          console.log(`   ✅ ${index + 1}/100 artigos criados`);
        }
      }

      articlesList.push({
        category,
        title: topic.title,
        slug: topic.slug,
        filename: article.filename,
      });
    });

    console.log(`   ✨ ${category}: 100 artigos concluídos!`);
  });

  // Salvar lista
  const listPath = path.join(__dirname, 'articles-list.json');
  fs.writeFileSync(listPath, JSON.stringify(articlesList, null, 2));

  console.log(`\n🎉 CONCLUÍDO!`);
  console.log(`📊 Total de artigos criados: ${totalArticles}`);
  console.log(`📋 Total de artigos no banco: ${articlesList.length}`);
  console.log(`💾 Lista salva em: ${listPath}\n`);
}

generateAllArticles();
