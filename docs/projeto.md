Especificações de Migração: Clínica Lótus – Vida & Nutrição
1. Arquitetura de Páginas e Rotas (Next.js)
O projeto deve seguir uma estrutura de App Router com as seguintes rotas:

app/page.tsx: Landing Page principal (One Page com âncoras).

app/franciele-lucci/page.tsx: Perfil detalhado da Dra. Franciele.

app/karoline-martins/page.tsx: Perfil detalhado da Dra. Karoline.

2. Sistema de Navegação (Âncora)
A Home deve implementar scroll suave para os seguintes IDs :

#aclinica: Seção institucional "Nutrição Gentil".

#Trabalho: Seção de especialidades.

#fran: Resumo biográfico da Dra. Franciele.

#karol: Resumo biográfico da Dra. Karoline.

#content: Link de acessibilidade "Skip to content".

3. Inventário de Conteúdo
3.1. Especialidades (Seção #Trabalho)
Devem ser criados cards para as 14 áreas de atuação :

Emagrecimento e Obesidade: Abordagem multidisciplinar e personalizada.

Psiquiatria Nutricional: Relação entre alimentação e saúde mental.

Transtornos Alimentares: Foco em anorexia, bulimia e compulsão.

Idosos: Prevenção de doenças e manutenção cognitiva.

Nutrição Comportamental: Autonomia e prazer de comer sem restrições.

Nutrição Ortomolecular: Equilíbrio bioquímico e suplementação.

Saúde da Mulher: Ciclo menstrual, gestação e menopausa.

Nutrição Funcional: Correção de desequilíbrios metabólicos.

Nutrição Estética: Saúde de pele, unhas e cabelos.

Nutrição Esportiva: Performance e otimização de nutrientes.

Patologias Clínicas: Controle de doenças via alimentação.

Gestantes: Desenvolvimento fetal e saúde materna.

Crianças e Adolescentes: Formação de hábitos saudáveis.

Hipertrofia: Ganho de massa muscular.

3.2. Perfil: Dra. Franciele Lucci
Filosofia: Nutrição leve, afeto e empatia.

Formação: Graduada pela UNIP; Pós em Comportamento Alimentar (Plenitude) e Nutrição Esportiva (IPGS); Aprimorada em Transtornos Alimentares (AMBULIM-USP).

Diferenciais: Suporte via WhatsApp/E-mail pós-consulta e exame de bioimpedância.

3.3. Perfil: Dra. Karoline Martins
Filosofia: Nutrição como ferramenta de transformação; método colaborativo.

Formação: Graduada pela UNIP; Pós em Nutrição Clínica, Esportiva e Exames Laboratoriais (IPGS).

Recursos: Fornecimento de e-books de receitas e acesso a aplicativo exclusivo do paciente.

4. Identidade Visual e UI/UX
Estilo: Clean, acolhedor e focado em humanização.

Componentes:

Botão flutuante de WhatsApp (onipresente).

Carrossel de depoimentos (Ex: Rodolfo Barbosa, Grazi Silva).

Cabeçalho fixo (Sticky Header) com menu mobile tipo "hamburger".

5. Integrações e Contatos
WhatsApp: Link direto para 5511989706917 com mensagens pré-definidas.

Localização: Rua Hilda Del Nero Bisquolo, 102, Sala 708, Jundiaí - SP.

Redes Sociais: Instagram (@clinicalotusjundiai) e Facebook.

6. Requisitos Técnicos de SEO
Implementar Meta Tags para os nomes das profissionais para capturar buscas orgânicas.

Garantir acessibilidade (tags ARIA e link de pulo de conteúdo).

Principais pontos para a migração:

A estrutura original é focada em conversão direta via WhatsApp, então mantenha os CTAs (chamadas para ação) visíveis em todas as seções.

As páginas das doutoras são essenciais para o SEO local de Jundiaí, portanto, devem ter slugs amigáveis como configurado acima.

O site utiliza uma filosofia de "Nutrição Gentil", o que deve refletir em uma paleta de cores suaves e tipografia legível.

FONTES E CONTEÚDOS RELACIONADOS:
https://lotusnutricao.com.br/