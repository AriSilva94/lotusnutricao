export type Specialty = {
  title: string;
  imagePath: string;
  description: string;
};

export type DoctorProfile = {
  name: string;
  slug: string;
  shortPhilosophy: string;
  fullPhilosophy: string;
  education: string[];
  highlights: string[];
};

export type Testimonial = {
  author: string;
  text: string;
};

export const whatsappNumber = "5511989706917";

export const whatsappMessage =
  "Olá, gostaria de mais informações sobre os atendimentos da Clínica Lótus.";

export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const clinicAddress =
  "Rua Hilda Del Nero Bisquolo, 102, Sala 708, Jundiaí - SP";

export const socialLinks = {
  instagram: "https://www.instagram.com/clinicalotusjundiai",
  facebook: "https://www.facebook.com/clinicalotusjundiai",
};

export const specialties: Specialty[] = [
  {
    title: "Emagrecimento e Obesidade",
    imagePath: "/assets/img/especialidades/Emagrecimento-Rosa.jpg",
    description:
      "O tratamento tanto do emagrecimento quanto da obesidade envolve uma abordagem multidisciplinar, que inclui mudanças na alimentação, prática de atividades físicas e mudanças comportamentais. É importante ressaltar que cada indivíduo é único e o tratamento deve ser personalizado.",
  },
  {
    title: "Psiquiatria Nutricional e Estilo de Vida",
    imagePath: "/assets/img/especialidades/Estilo-de-vida-Rosa.jpg",
    description:
      "Uma abordagem que combina conhecimentos da psiquiatria e da nutrição para tratar distúrbios mentais e emocionais por meio de uma alimentação adequada e mudança no estilo de vida.						.",
  },
  {
    title: "Transtornos Alimentares",
    imagePath: "/assets/img/especialidades/Transtorno-Rosa.jpg",
    description:
      "São perturbações psicológicas relacionadas à alimentação e à imagem corporal. Esses transtornos podem causar danos significativos à saúde física e psicológica e requerem tratamento especializado, envolvendo uma equipe multidisciplinar.",
  },
  {
    title: "Idosos",
    imagePath: "/assets/img/especialidades/Idosos.png",
    description:
      "A nutrição desempenha um papel crucial na saúde e bem-estar dos idosos. Uma alimentação adequada e equilibrada pode ajudar a prevenir doenças crônicas, manter a saúde óssea e preservar a função cognitiva. É importante que os idosos tenham acesso a uma variedade de alimentos nutritivos e sejam incentivados a adotar uma dieta saudável.",
  },
  {
    title: "Nutrição Comportamental",
    imagePath: "/assets/img/especialidades/Comportamental-Rosa.jpg",
    description:
      "Uma abordagem que visa mudar os comportamentos alimentares. Ela reconhece que a nutrição é influenciada por diversos fatores, como emoções, ambiente social, crenças e hábitos. Sua proposta é ajudar as pessoas a desenvolver uma relação mais saudável e equilibrada com a comida, para que possam fazer escolhas alimentares conscientes e sustentáveis a longo prazo. Em vez de impor restrições rígidas e dietas restritivas, essa abordagem promove a autonomia, a autoconsciência e o prazer de comer.",
  },
  {
    title: "Nutrição Ortomolecular",
    imagePath: "/assets/img/especialidades/Nutricao-Ortomolecular-Rosa.jpg",
    description:
      "Utiliza técnicas e análises para identificar carências nutricionais e desequilíbrios bioquímicos no organismo. Através da suplementação de vitaminas, minerais e outros nutrientes, busca-se restabelecer o equilíbrio e promover a saúde. Além da suplementação, ela também enfatiza a importância de uma dieta equilibrada, rica em nutrientes.",
  },
  {
    title: "Saúde da Mulher",
    imagePath: "/assets/img/especialidades/Saude-da-mulher-Rosa.jpg",
    description:
      "O tratamento nutricional para a saúde da mulher é fundamental para garantir o bom funcionamento do organismo e prevenir problemas de saúde específicos do gênero feminino. Alguns aspectos importantes a serem considerados no tratamento nutricional para a saúde da mulher incluem: ciclo menstrual, gravidez, menopausa, entre outros.",
  },
  {
    title: "Nutrição Funcional",
    imagePath: "/assets/img/especialidades/Nutricao-Funcional-Rosa.jpg",
    description:
      "O objetivo da nutrição funcional é promover a saúde e o bem-estar através da alimentação, prevenindo e tratando doenças. Ela busca identificar e corrigir desequilíbrios nutricionais e metabólicos, visando melhorar o funcionamento do organismo como um todo.",
  },
  {
    title: "Nutrição Estética",
    imagePath: "/assets/img/especialidades/Estetica-Rosa.jpg",
    description:
      "Através de uma nutrição adequada, é possível fornecer ao organismo os nutrientes necessários para a produção de colágeno, elastina e outras substâncias essenciais para a saúde da pele. Além disso, uma dieta balanceada também pode contribuir para a prevenção de problemas como acne, envelhecimento precoce, celulite, queda de cabelo, unhas quebradiças, entre outros.",
  },
  {
    title: "Nutrição Esportiva",
    imagePath: "/assets/img/especialidades/Nutricao-Esportiva-Rosa.jpg",
    description:
      "Visa fornecer aos atletas os nutrientes certos nas quantidades adequadas para otimizar o desempenho esportivo e a saúde. Isso pode incluir macronutrientes como carboidratos, proteínas e gorduras, além de micronutrientes como vitaminas e minerais. Além da dieta individualizada, os atletas podem precisar de suplementos nutricionais específicos.",
  },
  {
    title: "Patologias Clínicas",
    imagePath: "/assets/img/especialidades/Patologia-Rosa.jpg",
    description:
      "A nutrição tem um papel fundamental no tratamento de diversas patologias clínicas. Uma alimentação adequada pode auxiliar no controle dos sintomas, no fortalecimento do sistema imunológico e na recuperação do indivíduo.",
  },
  {
    title: "Gestantes",
    imagePath: "/assets/img/especialidades/Gestante.jpg",
    description:
      "A nutrição desempenha um papel fundamental durante a gestação, pois é responsável por fornecer os nutrientes necessários para o desenvolvimento saudável do feto. Uma alimentação equilibrada e adequada nesse período é essencial para garantir a saúde da mãe e do bebê.",
  },
  {
    title: "Crianças e Adolescentes",
    imagePath: "/assets/img/especialidades/Criancas.jpg",
    description:
      "A nutrição na infância desempenha um papel crucial no crescimento, desenvolvimento e saúde geral das crianças. Aqui estão algumas razões pelas quais a nutrição adequada é importante nessa fase: Crescimento saudável, desenvolvimento cognitivo, Fortalecimento do sistema imunológico, Formação de hábitos alimentares saudáveis, Prevenção de doenças crônicas, Energia e desempenho físico. É importante lembrar que cada criança é única e pode ter necessidades nutricionais individuais.						",
  },
];

export const doctors: DoctorProfile[] = [
  {
    name: "Dra. Franciele Lucci",
    slug: "franciele-lucci",
    shortPhilosophy: "Nutrição leve, afeto e empatia.",
    fullPhilosophy:
      "A nutrição gentil coloca a pessoa no centro do cuidado, com acolhimento, escuta e um plano real para a rotina.",
    education: [
      "Graduação em Nutrição pela UNIP.",
      "Pós-graduação em Comportamento Alimentar (Plenitude).",
      "Pós-graduação em Nutrição Esportiva (IPGS).",
      "Aprimoramento em Transtornos Alimentares (AMBULIM-USP).",
    ],
    highlights: [
      "Suporte pós-consulta via WhatsApp e e-mail.",
      "Avaliação com exame de bioimpedância.",
    ],
  },
  {
    name: "Dra. Karoline Martins",
    slug: "karoline-martins",
    shortPhilosophy:
      "Nutrição como ferramenta de transformação com método colaborativo.",
    fullPhilosophy:
      "O atendimento é construído junto com o paciente para gerar autonomia, constância e resultados sustentáveis.",
    education: [
      "Graduação em Nutrição pela UNIP.",
      "Pós-graduação em Nutrição Clínica, Esportiva e Exames Laboratoriais (IPGS).",
    ],
    highlights: [
      "Fornecimento de e-books de receitas.",
      "Acesso a aplicativo exclusivo do paciente.",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    author: "Rodolfo Barbosa",
    text: "Atendimento humano, plano alimentar viável e resultados consistentes no meu dia a dia.",
  },
  {
    author: "Grazi Silva",
    text: "Me senti acolhida desde a primeira consulta. A evolução veio sem radicalismo.",
  },
  {
    author: "Paciente da Clínica Lótus",
    text: "Equipe atenciosa, explicações claras e acompanhamento que realmente funciona.",
  },
];
