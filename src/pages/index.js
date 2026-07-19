import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const copy = {
  en: {
    title: 'Your Health History, Always With You',
    description:
      'Vitae keeps your complete health history on your phone, private by design.',
    headline: 'Your health history.',
    headlineAccent: 'In your hands.',
    hero: 'I lost years of my medical records overnight. I built Vitae so it never happens to you.',
    appStoreAlt: 'Download on the App Store',
    playStoreAlt: 'Get it on Google Play',
    screen: 'screen-en.png',
    screenAlt: 'Vitae app — medical history timeline',
    storyTitle: 'Why I built Vitae',
    story: [
      'I had been going to the same hospital my whole life: same dermatologist, same doctors, same physical folder they kept for me there. One day I showed up for an appointment and my record was just gone. Empty folder. Years of visits, diagnoses, and notes, vanished.',
      "It turned out the hospital had erased everything when I switched from my dad's health insurance to my mom's. As if I had become a different person.",
      'I was studying Computer Science at the time, and I made a decision: I would build the app I wished had existed. One where I own my health history. Not a hospital, not an insurance company.',
      'That app is Vitae.',
    ],
    featuresTitle: 'Your health story, finally in one place.',
    featuresIntro:
      'Vitae is a personal health record that lives on your phone. No account, no cloud, no one else touching your data. Just your complete health history, always with you.',
    featuresCardTitle: 'Keep track of everything that matters',
    features: [
      'Doctor visits and notes from each appointment',
      'Exam results and medical documents',
      'Medications and vaccines',
      'Symptoms over time',
    ],
    pillars: [
      ['Private by design', 'Your data stays on your device. No cloud, no tracking, no compromise.'],
      ['Fully yours', 'Export, share, or delete your records at any time. You own your health story.'],
      ['Built for real life', 'Created by a human for other humans.'],
    ],
    bioTitle: 'Built by one person who uses it every day.',
    bio: "I'm Mari, a software engineer. I built Vitae for myself first. I use it for every appointment, every exam result, every new medication. If it works for me, I think it'll work for you too.",
  },
  'pt-BR': {
    title: 'Seu Histórico de Saúde, Sempre com Você',
    description:
      'O Vitae mantém seu histórico completo de saúde no celular, privado por design.',
    headline: 'Seu histórico de saúde.',
    headlineAccent: 'Nas suas mãos.',
    hero: 'Eu perdi anos de registros médicos da noite pro dia. Criei o Vitae para que isso nunca aconteça com você.',
    appStoreAlt: 'Disponível na App Store',
    playStoreAlt: 'Disponível no Google Play',
    screen: 'screen-pt-br.png',
    screenAlt: 'App Vitae — histórico médico',
    storyTitle: 'Por que criei o Vitae',
    story: [
      'Eu sempre fui ao mesmo hospital a vida toda: mesmo dermatologista, mesmos médicos, mesma pasta física que guardavam para mim lá. Um dia apareci para uma consulta e meu prontuário tinha sumido. Pasta vazia. Anos de visitas, diagnósticos e anotações, apagados.',
      'Descobri que o hospital perdeu tudo quando mudei do plano de saúde do meu pai para o da minha mãe. Como se eu tivesse me tornado outra pessoa.',
      'Eu estudava Ciência da Computação na época e tomei uma decisão: criaria o aplicativo que eu gostaria que existisse. Um onde eu sou dona do meu histórico de saúde. Não um hospital ou uma operadora de plano.',
      'Esse aplicativo é o Vitae.',
    ],
    featuresTitle: 'Sua história de saúde, finalmente em um só lugar.',
    featuresIntro:
      'O Vitae é um prontuário pessoal que vive no seu celular. Sem conta, sem nuvem, sem ninguém tocando nos seus dados. Apenas seu histórico completo de saúde, sempre com você.',
    featuresCardTitle: 'Registre tudo que importa',
    features: [
      'Consultas médicas e anotações de cada visita',
      'Resultados de exames e documentos médicos',
      'Medicamentos e vacinas',
      'Sintomas ao longo do tempo',
    ],
    pillars: [
      ['Privado por design', 'Seus dados ficam no seu dispositivo. Sem nuvem, sem rastreamento.'],
      ['Totalmente seu', 'Exporte, compartilhe ou exclua seus registros a qualquer momento. Sua história de saúde pertence a você.'],
      ['Feito para a vida real', 'Criado por um ser humano pra outros seres humanos.'],
    ],
    bioTitle: 'Criado por uma pessoa que usa todos os dias.',
    bio: 'Sou a Mari, engenheira de software. Criei o Vitae pra solucionar um problema real que eu tive. Uso em cada consulta, cada resultado de exame, cada novo medicamento. Se funciona para mim, acredito que vai funcionar para você também.',
  },
  de: {
    title: 'Deine Gesundheitsgeschichte, immer bei dir',
    description:
      'Vitae bewahrt Ihre vollständige Gesundheitsgeschichte auf Ihrem Telefon auf — mit Privatsphäre by Design.',
    headline: 'Deine Gesundheitsgeschichte.',
    headlineAccent: 'In deinen Händen.',
    hero: 'Ich habe über Nacht Jahre meiner Krankenakte verloren. Ich habe Vitae gebaut, damit dir das nie passiert.',
    appStoreAlt: 'Laden im App Store',
    playStoreAlt: 'Jetzt bei Google Play',
    screen: 'screen-de.png',
    screenAlt: 'Vitae App — medizinischer Verlauf',
    storyTitle: 'Warum ich Vitae gebaut habe',
    story: [
      'Ich war mein ganzes Leben lang im selben Krankenhaus: derselbe Dermatologe, dieselben Ärzte, dieselbe Akte, die sie für mich aufbewahrten. Eines Tages kam ich zu einem Termin – und meine Akte war einfach weg. Leerer Ordner. Jahre von Besuchen, Diagnosen und Notizen, verschwunden.',
      'Es stellte sich heraus, dass das Krankenhaus alles gelöscht hatte, als ich von der Krankenversicherung meines Vaters zu der meiner Mutter gewechselt hatte. Als wäre ich eine andere Person geworden.',
      'Ich studierte damals Informatik und traf eine Entscheidung: Ich würde die App bauen, die ich mir gewünscht hätte. Eine, in der ich meine Gesundheitsgeschichte besitze. Nicht ein Krankenhaus, nicht eine Versicherung.',
      'Diese App ist Vitae.',
    ],
    featuresTitle: 'Deine Gesundheitsgeschichte, endlich an einem Ort.',
    featuresIntro:
      'Vitae ist eine persönliche Gesundheitsakte, die auf deinem Telefon lebt. Kein Konto, keine Cloud, niemand sonst berührt deine Daten. Nur deine vollständige Gesundheitsgeschichte, immer bei dir.',
    featuresCardTitle: 'Behalte alles Wichtige im Blick',
    features: [
      'Arztbesuche und Notizen von jedem Termin',
      'Untersuchungsergebnisse und medizinische Dokumente',
      'Medikamente und Impfungen',
      'Symptome im Zeitverlauf',
    ],
    pillars: [
      ['Privatsphäre by Design', 'Deine Daten bleiben auf deinem Gerät. Keine Cloud, kein Tracking, keine Kompromisse.'],
      ['Vollständig deins', 'Exportiere, teile oder lösche deine Aufzeichnungen jederzeit. Deine Gesundheitsgeschichte gehört dir.'],
      ['Für das echte Leben', 'Von einem Menschen für andere Menschen gemacht.'],
    ],
    bioTitle: 'Von einer Person gebaut, die es jeden Tag nutzt.',
    bio: 'Ich bin Mari, Softwareingenieurin. Ich habe Vitae zuerst für mich selbst gebaut. Ich nutze es für jeden Termin, jedes Untersuchungsergebnis, jedes neue Medikament. Wenn es für mich funktioniert, glaube ich, dass es auch für dich funktioniert.',
  },
};

function FeatureIcon({index}) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
        <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function PillarIcon({index}) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function StoreBadges({content}) {
  return (
    <div className="store-badges">
      <img
        src="/uploads/app-store-badge.svg"
        alt={content.appStoreAlt}
        className="store-badge"
      />
      <img
        src="/uploads/google-play-badge.png"
        alt={content.playStoreAlt}
        className="store-badge"
      />
    </div>
  );
}

export default function Home() {
  const {i18n} = useDocusaurusContext();
  const content = copy[i18n.currentLocale] ?? copy.en;
  const highResolutionScreen = content.screen.replace('.png', '@2x.png');

  return (
    <Layout title={content.title} description={content.description}>
      <main className="landing-page">
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-content">
            <div className="hero-text">
              <img
                src="/uploads/vitae-logo.png"
                alt="Vitae"
                className="hero-app-icon"
              />
              <h1 className="hero-headline">
                {content.headline}
                <span className="hero-headline-accent">
                  {content.headlineAccent}
                </span>
              </h1>
              <p className="hero-sub">{content.hero}</p>
              <StoreBadges content={content} />
            </div>
            <div className="hero-phone-wrap">
              <img
                src={`/uploads/${content.screen}`}
                srcSet={`/uploads/${content.screen} 780w, /uploads/${highResolutionScreen} 1472w`}
                sizes="(max-width: 768px) 260px, 370px"
                alt={content.screenAlt}
                className="hero-phone-img"
              />
            </div>
          </div>
        </section>

        <section className="story-section">
          <div className="story-inner">
            <h2 className="section-title">{content.storyTitle}</h2>
            <div className="story-body">
              {content.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-bg" />
          <div className="features-inner">
            <h2 className="features-headline">{content.featuresTitle}</h2>
            <p className="features-sub">{content.featuresIntro}</p>
            <div className="features-card">
              <div className="features-card-title">
                {content.featuresCardTitle}
              </div>
              {content.features.map((feature, index) => (
                <div className="feature-item" key={feature}>
                  <div className="feature-icon">
                    <FeatureIcon index={index} />
                  </div>
                  <span className="feature-label">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pillars-section">
          <div className="pillars-inner">
            <div className="pillars-grid">
              {content.pillars.map(([title, description], index) => (
                <div className="pillar-card" key={title}>
                  <div className="pillar-icon-wrap">
                    <PillarIcon index={index} />
                  </div>
                  <div className="pillar-title">{title}</div>
                  <p className="pillar-desc">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bio-section">
          <div className="bio-badges">
            <StoreBadges content={content} />
          </div>
          <h3 className="bio-headline">{content.bioTitle}</h3>
          <p className="bio-text">{content.bio}</p>
        </section>
      </main>
    </Layout>
  );
}
