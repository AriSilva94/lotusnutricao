export type Specialty = {
  title: string;
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
  "Olá! Quero agendar uma consulta com a Clínica Lótus Vida & Nutrição.";

export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const clinicAddress = "Rua Hilda Del Nero Bisquolo, 102, Sala 708, Jundiaí - SP";

export const socialLinks = {
  instagram: "https://www.instagram.com/clinicalotusjundiai",
  facebook: "https://www.facebook.com/clinicalotusjundiai",
};

export const specialties: Specialty[] = [
  {
    title: "Emagrecimento e Obesidade",
    description: "Abordagem multidisciplinar e personalizada.",
  },
  {
    title: "Psiquiatria Nutricional",
    description: "Relação entre alimentação e saúde mental.",
  },
  {
    title: "Transtornos Alimentares",
    description: "Foco em anorexia, bulimia e compulsão.",
  },
  {
    title: "Idosos",
    description: "Prevenção de doenças e manutenção cognitiva.",
  },
  {
    title: "Nutrição Comportamental",
    description: "Autonomia e prazer de comer sem restrições.",
  },
  {
    title: "Nutrição Ortomolecular",
    description: "Equilíbrio bioquímico e suplementação.",
  },
  {
    title: "Saúde da Mulher",
    description: "Ciclo menstrual, gestação e menopausa.",
  },
  {
    title: "Nutrição Funcional",
    description: "Correção de desequilíbrios metabólicos.",
  },
  {
    title: "Nutrição Estética",
    description: "Saúde de pele, unhas e cabelos.",
  },
  {
    title: "Nutrição Esportiva",
    description: "Performance e otimização de nutrientes.",
  },
  {
    title: "Patologias Clínicas",
    description: "Controle de doenças via alimentação.",
  },
  {
    title: "Gestantes",
    description: "Desenvolvimento fetal e saúde materna.",
  },
  {
    title: "Crianças e Adolescentes",
    description: "Formação de hábitos saudáveis.",
  },
  {
    title: "Hipertrofia",
    description: "Ganho de massa muscular.",
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
