// Banco de questões dividido por tópicos do sumário (1 a 14) - Simulado Completo para Aprovação
const bancoQuestoes = {
  1: [ // Tópico 1: O Instituto Brasileiro de Geografia e Estatística (IBGE)
    {
      id: 1,
      pergunta: "Qual é a missão institucional principal do IBGE segundo o material de estudos?",
      opcoes: [
        "A) Coordenar exclusivamente as políticas fiscais e tributárias do país.",
        "B) Retratar o Brasil com informações necessárias ao conhecimento de sua realidade e ao exercício da cidadania.",
        "C) Executar censos demográficos decenais com foco exclusivo na arrecadação municipal.",
        "D) Fiscalizar o cumprimento de leis ambientais em áreas rurais e urbanas."
      ],
      resposta: 1,
      explicacao: "O IBGE tem como missão institucional retratar o Brasil com informações necessárias ao conhecimento de sua realidade e ao exercício da cidadania."
    },
    {
      id: 2,
      pergunta: "Em que ano o IBGE foi fundado, consolidando-se como o principal provedor de dados e informações do País?",
      opcoes: [
        "A) 1920",
        "B) 1936",
        "C) 1940",
        "D) 1988"
      ],
      resposta: 1,
      explicacao: "Desde o início de suas atividades, em 1936, o IBGE consolidou-se como o principal provedor de dados e informações do País."
    },
    {
      id: 3,
      pergunta: "Quantas Superintendências Estaduais (SES) o IBGE possui distribuídas pelo país?",
      opcoes: [
        "A) 26 Superintendências, todas localizadas nas capitais.",
        "B) 27 Superintendências, sendo 26 nas capitais e 1 no Distrito Federal.",
        "C) 5.569 Superintendências, uma para cada município brasileiro.",
        "D) Apenas 5 grandes sedes regionalizadas."
      ],
      resposta: 1,
      explicacao: "O IBGE conta com 27 Superintendências Estaduais (SES), sendo 26 nas capitais e 1 no Distrito Federal."
    },
    {
      id: 4,
      pergunta: "Além das Superintendências Estaduais, a rede nacional de pesquisa e disseminação do IBGE possui quantas agências municipais?",
      opcoes: [
        "A) 566 Agências municipais.",
        "B) 1.000 Agências municipais.",
        "C) 5.569 Agências municipais.",
        "D) 36 mil Agências municipais."
      ],
      resposta: 0,
      explicacao: "A rede conta com 566 Agências municipais vinculadas à Presidência do Instituto, capilarizando a presença da instituição."
    },
    {
      id: 5,
      pergunta: "(Caiu na prova anterior do IBGE) O IBGE é uma fundação pública federal vinculada a qual órgão da administração pública brasileira?",
      opcoes: [
        "A) Ministério da Economia / Fazenda",
        "B) Ministério do Planejamento e Orçamento",
        "C) Ministério da Agricultura e Pecuária (MAPA)",
        "D) Banco Central do Brasil"
      ],
      resposta: 1,
      explicacao: "O IBGE é uma fundação pública federal instituída pela Lei nº 5.878/1973, vinculada ao Ministério do Planejamento e Orçamento, dotada de autonomia técnica e administrativa."
    },
    {
      id: 6,
      pergunta: "Sobre a natureza jurídica e as competências do IBGE, assinale a alternativa incorreta:",
      opcoes: [
        "A) Possui autonomia técnica e administrativa para garantir a confiabilidade das estatísticas.",
        "B) É o coordenador oficial do Sistema Estatístico Nacional (SEN) e do Sistema Cartográfico Nacional (SCN).",
        "C) Suas atribuições restringem-se estritamente à contagem demográfica, sendo proibido de realizar pesquisas econômicas ou agrárias.",
        "D) Produz informações geoespaciais fundamentais para a soberania e o planejamento territorial do país."
      ],
      resposta: 2,
      explicacao: "A alternativa C está incorreta porque o IBGE realiza extensas pesquisas econômicas, sociais, ambientais e agrárias (como o Censo Agropecuário), além dos censos demográficos."
    },
    {
      id: 7,
      pergunta: "O Sistema Estatístico Nacional (SEN) e o Sistema Cartográfico Nacional (SCN) têm coordenação oficial exercida por qual instituição no Brasil?",
      opcoes: [
        "A) Instituto Brasileiro de Geografia e Estatística (IBGE)",
        "B) Instituto Nacional de Colonização e Reforma Agrária (INCRA)",
        "C) Empresa Brasileira de Pesquisa Agropecuária (Embrapa)",
        "D) Ministério das Cidades"
      ],
      resposta: 0,
      explicacao: "O IBGE atua formalmente como o órgão coordenador do Sistema Estatístico Nacional e do Sistema Cartográfico Nacional."
    },
    {
      id: 8,
      pergunta: "Qual é a principal relevância da autonomia técnica conferida ao IBGE?",
      opcoes: [
        "A) Permitir que o órgão defina o valor dos impostos cobrados no meio rural.",
        "B) Assegurar que os dados produzidos sejam isentos de interferências políticas, refletindo com fidelidade a realidade estatística e geográfica do país.",
        "C) Isentar os servidores de cumprir normas trabalhistas vigentes.",
        "D) Autorizar o fechamento de agências municipais sem aval do Congresso."
      ],
      resposta: 1,
      explicacao: "A autonomia técnica garante a credibilidade e a imparcialidade científica e estatística dos levantamentos oficiais produzidos pelo IBGE."
    }
  ],
  2: [ // Tópico 2: O Censo Agropecuário, Florestal e Aquícola
    {
      id: 1,
      pergunta: "O primeiro Censo Agropecuário da história do Brasil foi realizado em qual ano?",
      opcoes: [
        "A) 1936",
        "B) 1940",
        "C) 1920",
        "D) 1970"
      ],
      resposta: 2,
      explicacao: "O Brasil realizou o seu primeiro Censo Agropecuário em 1920 e, em 1936, o IBGE foi fundado."
    },
    {
      id: 2,
      pergunta: "Sobre a periodicidade histórica dos Censos Agropecuários, assinale a alternativa correta:",
      opcoes: [
        "A) De 1940 a 1970 ocorreram a cada cinco anos, e depois a cada dez anos.",
        "B) De 1940 a 1970 ocorreram a cada dez anos, e a partir de então a cada cinco anos.",
        "C) Sempre ocorreram estritamente a cada dez anos sem exceções.",
        "D) No século XXI foram realizados três censos agropecuários."
      ],
      resposta: 1,
      explicacao: "De 1940 a 1970 os Censos foram realizados a cada dez anos e a partir de então a cada cinco anos (1975, 1980, 1985)."
    },
    {
      id: 3,
      pergunta: "Em que ano do século XXI foi realizado o penúltimo Censo Agropecuário antes do planejamento de 2027?",
      opcoes: [
        "A) 2000",
        "B) 2007",
        "C) 2010",
        "D) 2017"
      ],
      resposta: 3,
      explicacao: "No século XXI, foram realizados dois Censos Agropecuários em 2007 e em 2017."
    },
    {
      id: 4,
      pergunta: "O termo 'Agropecuário' refere-se especificamente a:",
      opcoes: [
        "A) Atividades exclusivas de extrativismo vegetal em matas nativas.",
        "B) Atividades de agricultura e pecuária, ou seja, produção vegetal e criação de animais.",
        "C) Multiplicação de animais cujos ciclos de vida ocorrem em meio aquático.",
        "D) Processamento industrial de alimentos enlatados."
      ],
      resposta: 1,
      explicacao: "Agropecuário é relativo às atividades de agricultura e pecuária, ou seja, à produção vegetal e à criação de animais."
    },
    {
      id: 5,
      pergunta: "Como o material define a atividade 'Florestal'?",
      opcoes: [
        "A) Cultivo de peixes em cativeiro e crustáceos.",
        "B) Relativo ao cultivo, manejo ou exploração de florestas e matas, nativas ou plantadas, bem como o extrativismo florestal.",
        "C) Apenas a derrubada ilegal de madeira em terras indígenas.",
        "D) Atividades estritamente urbanas de jardinagem."
      ],
      resposta: 1,
      explicacao: "Florestal é relativo ao cultivo, manejo ou exploração de florestas e matas, nativas ou plantadas, bem como o extrativismo florestal."
    },
    {
      id: 6,
      pergunta: "O termo 'Aquícola' abrange:",
      opcoes: [
        "A) Criação e multiplicação de plantas e animais cujo ciclo de vida em condições naturais se dá total ou parcialmente em meio aquático.",
        "B) Irrigação de lavouras temporárias com águas subterrâneas.",
        "C) Extração de sal marinho em salinas industriais.",
        "D) Navegação fluvial comercial em bacias hidrográficas."
      ],
      resposta: 0,
      explicacao: "Aquícola é relativo à criação e multiplicação de plantas e animais cujo ciclo de vida em condições naturais se dá total ou parcialmente em meio aquático."
    },
    {
      id: 7,
      pergunta: "Um 'pesque-pague' será considerado estabelecimento agropecuário para fins censitários sob qual condição?",
      opcoes: [
        "A) Sempre, independentemente de qualquer fator.",
        "B) Apenas se houver nele criação e engorda de peixes.",
        "C) Somente se houver comercialização de bebidas e porções.",
        "D) Nunca, pois trata-se exclusivamente de local de lazer urbano."
      ],
      resposta: 1,
      explicacao: "O pesque-pague é considerado estabelecimento agropecuário quando nele houver criação e engorda de peixes. Se houver somente compra de peixes criados, não é considerado."
    },
    {
      id: 8,
      pergunta: "O que caracteriza especificamente uma 'Lavoura Temporária'?",
      opcoes: [
        "A) Plantação que dura vários anos sem precisar de novo plantio.",
        "B) Plantação que nasce, cresce e é colhida no mesmo ano, precisando ser replantada após a colheita.",
        "C) Cultivo hidropônico em ambientes fechados.",
        "D) Extração de frutos de árvores nativas seculares."
      ],
      resposta: 1,
      explicacao: "Lavoura temporária é a plantação que nasce, cresce e é colhida no mesmo ano. Depois da colheita, acaba e precisa ser replantada."
    },
    {
      id: 9,
      pergunta: "Diferente da lavoura temporária, a 'Lavoura Permanente' caracteriza-se por:",
      opcoes: [
        "A) Exigir plantio obrigatório trimestral.",
        "B) Ser colocada no solo uma vez e continuar dando frutos por muitos anos, sem precisar replantar todo ano.",
        "C) Ser exclusiva de hortaliças e legumes de ciclo curto.",
        "D) Desenvolver-se unicamente em substratos artificiais."
      ],
      resposta: 1,
      explicacao: "Lavoura permanente é a plantação que você coloca no solo uma vez e ela continua dando frutos por muitos anos."
    },
    {
      id: 10,
      pergunta: "Técnica de cultivar plantas sem solo, onde as raízes recebem solução nutritiva balanceada, é denominada:",
      opcoes: [
        "A) Sericicultura",
        "B) Apicultura",
        "C) Hidroponia",
        "D) Silvicultura"
      ],
      resposta: 2,
      explicacao: "A hidroponia é a técnica de cultivar plantas sem solo, onde as raízes recebem uma solução nutritiva balanceada."
    },
    {
      id: 11,
      pergunta: "Assinale a alternativa que apresenta um exemplo clássico de 'Produtor sem área':",
      opcoes: [
        "A) Proprietário de latifúndio com registro em cartório e títulos definitivos.",
        "B) Produtor de mel que instala colmeias em matas ou em áreas de outros estabelecimentos.",
        "C) Fazendeiro que cultiva soja em 500 hectares de terra própria contínua.",
        "D) Empresário dono de uma agroindústria processadora de sucos."
      ],
      resposta: 1,
      explicacao: "O produtor de mel que instala colmeias em matas ou áreas de terceiros é um exemplo clássico de produtor sem área própria ou espaço físico delimitado."
    },
    {
      id: 12,
      pergunta: "Sobre a produção de subsistência, assinale a afirmativa correta conforme a apostila:",
      opcoes: [
        "A) É aquela em que toda a produção é obrigatoriamente exportada para o mercado externo.",
        "B) É voltada para atender às necessidades vitais do produtor e sua família, podendo parte ser comercializada ou trocada.",
        "C) Descaracteriza imediatamente a unidade como estabelecimento agropecuário.",
        "D) É proibida por lei de ser contabilizada nos censos oficiais."
      ],
      resposta: 1,
      explicacao: "Produção de subsistência é aquela voltada para atender às necessidades vitais da família, podendo parte ser comercializada ou trocada para atender a outras necessidades."
    },
    {
      id: 13,
      pergunta: "A criação exclusiva de quais animais domésticos NÃO configura atividade agropecuária para fins do Censo?",
      opcoes: [
        "A) Bovinos e suínos",
        "B) Aves de postura para venda comercial",
        "C) Pássaros, cães e gatos",
        "D) Abelhas para produção de mel"
      ],
      resposta: 2,
      explicacao: "A criação exclusiva de pássaros, cães e gatos não é considerada atividade agropecuária, florestal e aquícola."
    },
    {
      id: 14,
      pergunta: "(Caiu na prova anterior do IBGE) O Censo Agropecuário tem como unidade de investigação básica o 'estabelecimento agropecuário'. Qual das opções abaixo caracteriza corretamente essa unidade?",
      opcoes: [
        "A) Apenas propriedades com mais de 1.000 hectares legalmente registradas em cartório.",
        "B) Unidade de produção ou de exploração agropecuária, florestal e aquícola, independentemente de tamanho, forma jurídica ou localização.",
        "C) Qualquer terreno baldio localizado dentro de perímetros estritamente urbanos.",
        "D) Empresas comerciais que apenas revendem produtos hortifrutigranjeiros no atacado urbano."
      ],
      resposta: 1,
      explicacao: "O estabelecimento agropecuário é definido operacionalmente como unidade de produção ou de exploração agropecuária, florestal e aquícola, independentemente de seu tamanho, forma jurídica ou localização."
    },
    {
      id: 15,
      pergunta: "Com relação aos objetivos do Censo Agropecuário, assinale a assertiva que melhor descreve a sua importância estratégica para o país:",
      opcoes: [
        "A) Fornecer dados para a cobrança retroativa de impostos municipais sobre glebas rurais.",
        "B) Desenhar o perfil da estrutura fundiária, o uso da terra, a tecnologia empregada, a agricultura familiar e orientar políticas públicas como o Pronaf.",
        "C) Substituir o Censo Demográfico na contagem total da população urbana das metrópoles.",
        "D) Controlar o preço de venda de commodities agrícolas na bolsa de valores."
      ],
      resposta: 1,
      explicacao: "O Censo Agropecuário fornece um retrato completo da estrutura agrária, uso da terra, condições de vida do produtor, agricultura familiar e subsídios para políticas governamentais de crédito e fomento."
    },
    {
      id: 16,
      pergunta: "O que caracteriza especificamente a atividade de Silvicultura dentro do setor florestal?",
      opcoes: [
        "A) A exploração puramente predatória e ilegal de árvores centenárias nativas.",
        "B) O cultivo e o manejo de florestas plantadas para a obtenção de produtos como celulose, madeira e carvão vegetal.",
        "C) A poda ornamental de árvores em praças públicas e avenidas urbanas.",
        "D) A proteção exclusiva de animais silvestres ameaçados de extinção."
      ],
      resposta: 1,
      explicacao: "A silvicultura é o ramo da ciência florestal que se dedica ao cultivo e manejo de florestas plantadas (como eucalipto e pinus) para fins comerciais e industriais."
    },
    {
      id: 17,
      pergunta: "A Apicultura e a Meliponicultura, quando desenvolvidas em âmbito produtivo comercial ou de subsistência em um estabelecimento, inserem-se em qual grande grupo de investigação do Censo?",
      opcoes: [
        "A) Pecuária / Criação de pequenos animais e insetos úteis",
        "B) Indústria metalúrgica",
        "C) Extrativismo mineral metálico",
        "D) Comércio varejista de alimentos"
      ],
      resposta: 0,
      explicacao: "A criação de abelhas (apicultura e meliponicultura) faz parte das atividades pecuárias voltadas à produção de mel, cera e polinizações agrícolas."
    },
    {
      id: 18,
      pergunta: "(Caiu em concurso do IBGE) Assinale a alternativa que indica corretamente uma situação em que uma área com plantio NÃO é classificada como estabelecimento agropecuário censitário:",
      opcoes: [
        "A) Pequena chácara onde o proprietário cultiva mandioca e cria galinhas para consumo próprio e venda excedente.",
        "B) Vaso de planta ornamental cultivado na varanda de um apartamento em zona estritamente urbana sem fins comerciais ou de produção agrícola.",
        "C) Fazenda de grande porte dedicada à criação intensiva de bovinos de corte.",
        "D) Sítio voltado ao cultivo comercial de hortaliças em estufas."
      ],
      resposta: 1,
      explicacao: "Cultivos domésticos em vasos ou quintais estritamente urbanos sem finalidade de produção comercial ou subsistência agropecuária organizada não compõem a unidade investigada pelo Censo Agropecuário."
    },
    {
      id: 19,
      pergunta: "Qual é o principal órgão internacional de estatísticas alimentares e agrícolas que serve de parâmetro metodológico para o Censo Agropecuário brasileiro?",
      opcoes: [
        "A) Organização das Nações Unidas para a Alimentação e a Agricultura (FAO)",
        "B) Organização Mundial da Saúde (OMS)",
        "C) Fundo Monetário Internacional (FMI)",
        "D) Organização Mundial do Comércio (OMC)"
      ],
      resposta: 0,
      explicacao: "O IBGE segue diretrizes internacionais estabelecidas pela FAO para padronizar conceitos e comparações globais dos Censos Agropecuários."
    },
    {
      id: 20,
      pergunta: "O conceito de 'Unidade Legal' ou forma jurídica do estabelecimento agropecuário investiga se o produtor é:",
      opcoes: [
        "A) Produtor individual / pessoa física, sociedade de pessoas, cooperativa, empresa pública ou sociedade anônima.",
        "B) Apenas funcionário público concursado.",
        "C) Exclusivamente estrangeiro com visto diplomático.",
        "D) Órgão municipal de arrecadação de impostos."
      ],
      resposta: 0,
      explicacao: "A investigação da forma jurídica abrange desde o produtor individual (pessoa física) até formas societárias e cooperativas empresariais."
    }
  ],
  3: [ // Tópico 3: O 12º Censo Agropecuário, Florestal e Aquícola
    {
      id: 1,
      pergunta: "O 12º Censo Agropecuário, Florestal e Aquícola terá sua coleta realizada em que ano, tendo como referência os dados de qual período?",
      opcoes: [
        "A) Coleta em 2026, referência no ano de 2025.",
        "B) Coleta em 2027, tendo como referência os dados do ano 2026.",
        "C) Coleta em 2027, referência no próprio ano de 2027.",
        "D) Coleta em 2028, referência no ano de 2027."
      ],
      resposta: 1,
      explicacao: "A coleta será realizada em 2027, tendo como referência os dados do ano 2026."
    },
    {
      id: 2,
      pergunta: "Quantos profissionais temporários aproximadamente serão contratados por meio de processos seletivos simplificados para o 12º Censo Agropecuário em 2027?",
      opcoes: [
        "A) Cerca de 10 mil",
        "B) Cerca de 36 mil",
        "C) Cerca de 180 mil",
        "D) Cerca de 300 mil"
      ],
      resposta: 1,
      explicacao: "Em 2027, para o 12º Censo Agropecuário, serão contratados cerca de 36 mil profissionais temporários por processos seletivos simplificados."
    },
    {
      id: 3,
      pergunta: "(Caiu em concurso do IBGE) Qual é a principal finalidade estatística de se estabelecer um ano de referência (como o ano anterior ao da coleta) em grandes operações censitárias agrárias?",
      opcoes: [
        "A) Permitir que o produtor rural pague menos impostos federais retroativos.",
        "B) Garantir um período fixo e fechado de doze meses para que a apuração da produção e receita das atividades rurais tenha consistência e comparabilidade nacional.",
        "C) Dar tempo hábil para que o governo desaproprie terras improdutivas.",
        "D) Impedir que agricultores familiares participem do processo censitário."
      ],
      resposta: 1,
      explicacao: "O ano de referência serve para delimitar um período padrão de apuração (12 meses fechados), garantindo a consistência técnica, precisão e comparabilidade das estatísticas coletadas em todo o território nacional."
    },
    {
      id: 4,
      pergunta: "O 12º Censo Agropecuário, Florestal e Aquícola consolida uma longa tradição de levantamentos estatísticos do setor primário no Brasil. Dentre os desafios logísticos esperados para esta edição em 2027, destaca-se:",
      opcoes: [
        "A) A cobertura exclusiva de áreas urbanas densamente povoadas.",
        "B) A captação de dados em estabelecimentos agropecuários de todos os portes, desde a agricultura familiar até grandes complexos empresariais, cobrindo áreas remotas e de difícil acesso.",
        "C) A proibição de uso de dispositivos eletrônicos de coleta em campo.",
        "D) A apuração restrita apenas à pecuária bovina de corte."
      ],
      resposta: 1,
      explicacao: "O grande desafio logístico e operacional do Censo Agropecuário é alcançar todos os estabelecimentos do país, independentemente de sua localização geográfica ou porte, contemplando desde a agricultura familiar até a grande agroindústria."
    },
    {
      id: 5,
      pergunta: "Com relação aos preparativos e à execução do 12º Censo Agropecuário, assinale a alternativa correta sobre o papel dos recenseadores e equipes técnicas:",
      opcoes: [
        "A) Os recenseadores atuam apenas nos escritórios centrais elaborando leis orçamentárias.",
        "B) As equipes de campo são responsáveis pela coleta direta de informações junto aos informantes nos estabelecimentos, seguindo rigorosos manuais técnicos e metodológicos.",
        "C) A coleta de dados é feita inteiramente por satélite, sem necessidade de visitas presenciais.",
        "D) O trabalho de campo restringe-se a entrevistas telefônicas realizadas nas capitais."
      ],
      resposta: 1,
      explicacao: "O trabalho central do Censo envolve a visita presencial aos estabelecimentos agropecuários pelas equipes de campo e recenseadores, que aplicam os questionários seguindo manuais técnicos rigorosos."
    },
    {
      id: 6,
      pergunta: "Por que o Censo Agropecuário é considerado uma operação censitária de periodicidade não anual (geralmente decenal ou quinquenal), diferenciando-se de pesquisas amostrais mensais?",
      opcoes: [
        "A) Porque o governo só tem orçamento disponível uma vez a cada cem anos.",
        "B) Devido à extrema complexidade operacional, custo logístico elevado e à necessidade de mapear exaustivamente cada unidade produtiva do território nacional.",
        "C) Porque a agricultura brasileira não sofre nenhuma alteração ao longo dos anos.",
        "D) Porque a legislação federal proíbe pesquisas no campo em anos pares."
      ],
      resposta: 1,
      explicacao: "Pesquisas censitárias universais no campo exigem uma mobilização nacional gigantesca de recursos humanos e financeiros, o que inviabiliza realizações anuais, justificando sua periodicidade específica."
    },
    {
      id: 7,
      pergunta: "(Caiu em prova do IBGE) O planejamento do 12º Censo Agropecuário contempla o uso intensivo de tecnologias digitais. Qual é o principal ganho operacional esperado com o uso de coletores de dados eletrônicos (DMC / smartphones corporativos) em substituição aos antigos impressos de papel?",
      opcoes: [
        "A) Eliminar completamente a necessidade de contratação de recenseadores.",
        "B) Realizar consistências automáticas de dados em campo, agilizar a transmissão das informações e reduzir margens de erro de preenchimento.",
        "C) Permitir que o informante preencha o questionário sozinho pela internet sem supervisão.",
        "D) Impedir que o IBGE divulgue os resultados finais à sociedade."
      ],
      resposta: 1,
      explicacao: "Os dispositivos móveis de coleta (DMC) trazem validações automáticas de consistência que evitam erros grosseiros no ato da entrevista e agilizam o fluxo de transmissão dos dados para as bases centrais."
    }
  ],
  4: [ // Tópico 4: Estrutura Organizacional Censitária
    {
      id: 1,
      pergunta: "Como se estrutura de forma geral a hierarquia operacional de campo em uma grande operação censitária do IBGE?",
      opcoes: [
        "A) Apenas por ministros de Estado e prefeitos municipais.",
        "B) Coordenadores Nacionais/Estaduais, Coordenadores de Subárea, Agentes Censitários Municipais (ACM), Agentes Censitários Supervisores (ACS) e Recenseadores.",
        "C) Somente por fiscais de tributos estaduais e policiais rodoviários.",
        "D) Por voluntários civis sem vínculo com o Instituto."
      ],
      resposta: 1,
      explicacao: "A estrutura organizacional envolve cargos gerenciais, técnicos e de campo, destacando-se as funções fundamentais de ACM, ACS e o Recenseador."
    },
    {
      id: 2,
      pergunta: "Qual é a principal atribuição operacional do Recenseador durante a execução do Censo em campo?",
      opcoes: [
        "A) Julgar processos judiciais de disputas de terras rurais.",
        "B) Percorrer o seu setor censitário atribuído, visitando todos os estabelecimentos/domicílios e coletando as informações diretamente junto aos informantes.",
        "C) Coordenar o orçamento financeiro de toda a Superintendência Estadual.",
        "D) Assinar decretos de desapropriação de glebas agrícolas."
      ],
      resposta: 1,
      explicacao: "O Recenseador é o elemento principal da coleta de dados: é ele quem percorre o setor, entra em contato com o informante e preenche o questionário censitário."
    },
    {
      id: 3,
      pergunta: "(Caiu em prova anterior do IBGE) Qual é a função primária do Agente Censitário Supervisor (ACS) em relação aos Recenseadores?",
      opcoes: [
        "A) Substituir os juízes eleitorais nas zonas rurais.",
        "B) Acompanhar, orientar, solucionar dúvidas operacionais e controlar o andamento e a qualidade do trabalho de campo dos recenseadores sob sua responsabilidade.",
        "C) Cobrar impostos federais atrasados dos produtores visitados.",
        "D) Desenvolver os softwares de programação do coletor eletrônico de dados."
      ],
      resposta: 1,
      explicacao: "O Agente Censitário Supervisor (ACS) orienta e supervisiona diretamente o trabalho dos recenseadores, garantindo a cobertura correta e a qualidade das informações coletadas."
    },
    {
      id: 4,
      pergunta: "Qual cargo da estrutura censitária responde pela gestão administrativa, operacional e técnica de um posto de coleta em nível municipal?",
      opcoes: [
        "A) Agente Censitário Municipal (ACM)",
        "B) Ministro da Agricultura",
        "C) Fiscal Sanitário Municipal",
        "D) Diretor Comercial de Cooperativa"
      ],
      resposta: 0,
      explicacao: "O Agente Censitário Municipal (ACM) é o responsável pela gestão administrativa e operacional do Posto de Coleta do IBGE no município."
    },
    {
      id: 5,
      pergunta: "Sobre a subordinação e cooperação entre os cargos de campo, assinale a alternativa correta:",
      opcoes: [
        "A) O recenseador não deve reportar nenhuma dúvida ao seu supervisor.",
        "B) O ACS faz a ponte direta de orientação técnica e suporte diário entre o ACM e os Recenseadores.",
        "C) Os agentes censitários não possuem nenhuma responsabilidade sobre o controle de entrega de equipamentos.",
        "D) A estrutura de campo é autônoma e não possui vínculos com as agências do IBGE."
      ],
      resposta: 1,
      explicacao: "O ACS atua diretamente na retaguarda e orientação do Recenseador, respondendo ao ACM e assegurando o fluxo operacional do Posto de Coleta."
    }
  ],
  5: [ // Tópico 5: Instrumentos de Trabalho
    {
      id: 1,
      pergunta: "(Caiu em prova do IBGE) Qual é o principal instrumento eletrônico utilizado pelo Recenseador para a coleta de dados e geolocalização durante o trabalho de campo?",
      opcoes: [
        "A) Computador de bordo fixo em tratores agrícolas",
        "B) Dispositivo Móvel de Coleta (DMC) / Smartphone corporativo configurado com aplicativos específicos do IBGE",
        "C) Aparelho de fax analógico",
        "D) Rádio amador de ondas curtas"
      ],
      resposta: 1,
      explicacao: "O Dispositivo Móvel de Coleta (DMC), geralmente um smartphone robusto com aplicativo próprio, é a ferramenta oficial e principal de trabalho de campo do recenseador."
    },
    {
      id: 2,
      pergunta: "Além do dispositivo eletrônico de coleta, quais documentos e materiais de apoio físicos ou digitais são indispensáveis ao trabalho do Recenseador?",
      opcoes: [
        "A) Manuais de instruções, mapas operacionais do setor censitário, crachá de identificação oficial e guias de consulta de conceitos.",
        "B) Blocos de notas fiscais de venda de mercadorias e maquininhas de cartão de crédito.",
        "C) Bulas de defensivos agrícolas e tabelas de juros bancários.",
        "D) Plantas baixas de projetos arquitetônicos urbanos comerciais."
      ],
      resposta: 0,
      explicacao: "O recenseador utiliza manuais técnicos de conceitos e definições, mapas do setor para controle de limites, além de crachá e documento de identidade funcional obrigatórios."
    },
    {
      id: 3,
      pergunta: "Por que o uso do crachá de identificação e do documento de identidade oficial fornecido pelo IBGE é obrigatório durante todo o expediente de campo?",
      opcoes: [
        "A) Apenas para fins de elegibilidade a descontos comerciais em lojas locais.",
        "B) Para garantir a segurança do próprio agente, assegurar a transparência perante o informante e comprovar formalmente a sua condição de representante oficial da pesquisa.",
        "C) Para permitir a entrada gratuita em eventos esportivos municipais.",
        "D) Para substituir a necessidade de preenchimento dos questionários."
      ],
      resposta: 1,
      explicacao: "A identificação oficial é fundamental para a segurança do recenseador e para transmitir confiança ao produtor ou morador visitado, atestando a veracidade da operação."
    },
    {
      id: 4,
      pergunta: "Qual é a utilidade dos mapas e limites de setores censitários carregados no DMC ou impressos para o Recenseador?",
      opcoes: [
        "A) Servir de guia para encontrar rotas de turismo ecológico na região.",
        "B) Delimitarem rigorosamente a área geográfica de atuação do recenseador, garantindo que nenhum domicílio ou estabelecimento seja omitido ou duplicado.",
        "C) Calcular o imposto predial territorial urbano de cada gleba.",
        "D) Indicar o preço de mercado das safras agrícolas."
      ],
      resposta: 1,
      explicacao: "O mapa do setor censitário delimita a área exata onde o recenseador deve trabalhar, assegurando a cobertura completa e exclusiva do território designado."
    }
  ],
  6: [ // Tópico 6: Orientações de Navegação para o Trabalho em Campo
    {
      id: 1,
      pergunta: "Durante a navegação e o percurso pelo setor censitário rural ou urbano, qual é a principal diretriz de percurso que o Recenseador deve seguir para assegurar que não haja omissões de estabelecimentos?",
      opcoes: [
        "A) Visitar apenas as fazendas que ficam localizadas às margens de rodovias asfaltadas.",
        "B) Percorrer o setor de forma sistemática e contínua, seguindo a orientação dos limites do mapa operacional e garantindo a cobertura exaustiva de toda a área atribuída.",
        "C) Entrevistar somente os produtores que comparecerem voluntariamente à Agência do IBGE.",
        "D) Sortear aleatoriamente 10% das propriedades e ignorar o restante."
      ],
      resposta: 1,
      explicacao: "A navegação sistemática baseada no mapa operacional garante o controle de percurso e evita falhas ou omissões de unidades na área de coleta."
    },
    {
      id: 2,
      pergunta: "(Caiu em concurso do IBGE) Ao se deparar com barreiras físicas naturais (como rios caudalosos, áreas de encosta íngreme ou cercas fechadas com restrição de acesso) em uma zona rural, qual deve ser a conduta inicial orientada ao Recenseador?",
      opcoes: [
        "A) Desistir imediatamente de cobrir aquele setor e retornar à base.",
        "B) Utilizar as orientações de contorno seguro de limites, consultar o supervisor (ACS) e buscar alternativas viáveis de contato com os informantes responsáveis pela área.",
        "C) Invadir a propriedade privada sem autorização judicial.",
        "D) Classificar automaticamente a área como inexistente."
      ],
      resposta: 1,
      explicacao: "Dificuldades de acesso devem ser reportadas e tratadas em conjunto com a supervisão, buscando caminhos alternativos e seguros previstos nos manuais de campo."
    },
    {
      id: 3,
      pergunta: "Qual é a importância de registrar corretamente os pontos de coordenadas e o trajeto percorrido no Dispositivo Móvel de Coleta (DMC) durante a navegação em campo?",
      opcoes: [
        "A) Servir de base para o pagamento de pedágios rodoviários.",
        "B) Atualizar a base territorial cartográfica do IBGE e comprovar a efetiva cobertura do setor censitário.",
        "C) Fornecer previsões meteorológicas para a colheita.",
        "D) Rastrear a velocidade dos veículos particulares da região."
      ],
      resposta: 1,
      explicacao: "O registro geográfico no DMC atualiza a malha territorial e cartográfica do país, além de atestar o cumprimento da cobertura censitária."
    },
    {
      id: 4,
      pergunta: "Como o Recenseador deve proceder ao identificar uma divergência entre os limites físicos reais encontrados em campo e o que consta no mapa digital do seu setor?",
      opcoes: [
        "A) Alterar por conta própria os limites oficiais do município sem avisar ninguém.",
        "B) Comunicar imediatamente ao Agente Censitário Supervisor (ACS) para que os procedimentos de atualização cartográfica sejam adotados junto à coordenação.",
        "C) Parar de trabalhar até o final do contrato.",
        "D) Ignorar a divergência e preencher dados fictícios."
      ],
      resposta: 1,
      explicacao: "Qualquer inconsistência cartográfica ou limite divergente deve ser reportada à supervisão técnica para a devida correção e atualização nos sistemas do IBGE."
    }
  ],
  7: [ // Tópico 7: Divisão Político-Administrativa do Brasil
    {
      id: 1,
      pergunta: "Segundo a divisão político-administrativa oficial do Brasil adotada pelo IBGE, o território nacional compreende:",
      opcoes: [
        "A) Apenas os Estados e o Distrito Federal, desconsiderando os municípios.",
        "B) A União, os Estados Federativos, o Distrito Federal e os Municípios, todos entes autônomos nos termos da Constituição.",
        "C) Somente as Regiões Metropolitanas e distritos industriais.",
        "D) Territórios federais administrados diretamente por prefeitos."
      ],
      resposta: 1,
      explicacao: "A organização político-administrativa da República Federativa do Brasil compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos."
    },
    {
      id: 2,
      pergunta: "Qual é a unidade político-administrativa básica de base municipal em que se subdividem os municípios brasileiros para fins estatísticos e censitários?",
      opcoes: [
        "A) Distritos e subdistritos",
        "B) Lotes particulares de condomínios fechados",
        "C) Zonas francas internacionais",
        "D) Regiões de planejamento fiscal exclusivo"
      ],
      resposta: 0,
      explicacao: "Os municípios brasileiros subdividem-se administrativamente em distritos e, em alguns casos maiores, em subdistritos, servindo de base para a organização territorial do IBGE."
    },
    {
      id: 3,
      pergunta: "(Caiu em prova anterior do IBGE) O que é um 'Setor Censitário' na divisão territorial estatística do IBGE?",
      opcoes: [
        "A) Uma grande fazenda com mais de 10 mil hectares.",
        "B) A unidade territorial de base, de extensão contínua, localizada em área urbana ou rural, dimensionada com critérios operacionais para o trabalho de coleta de uma equipe ou recenseador.",
        "C) A sede administrativa de uma Superintendência Estadual.",
        "D) Uma zona exclusivamente militar de acesso restrito."
      ],
      resposta: 1,
      explicacao: "O setor censitário é a unidade territorial de planejamento e execução da coleta de dados, dimensionada para que um recenseador possa percorri-la integralmente."
    },
    {
      id: 4,
      pergunta: "Sobre a divisão regional do Brasil em Grandes Regiões (Norte, Nordeste, Sudeste, Sul e Centro-Oeste), assinale a afirmativa correta:",
      opcoes: [
        "A) É uma divisão puramente eleitoral sem respaldo geográfico.",
        "B) Trata-se do agrupamento oficial de estados com características geográficas, econômicas, sociais e históricas semelhantes, estruturado pelo IBGE.",
        "C) Altera-se obrigatoriamente todos os anos por decreto municipal.",
        "D) É subordinada administrativamente aos países vizinhos da América do Sul."
      ],
      resposta: 1,
      explicacao: "A regionalização oficial do Brasil em cinco Grandes Regiões foi estabelecida pelo IBGE com base em critérios sistêmicos socioeconômicos e geográficos."
    },
    {
      id: 5,
      pergunta: "Para fins de organização dos censos e pesquisas agropecuárias, como o IBGE diferencia o espaço territorial?",
      opcoes: [
        "A) Apenas considerando capitais de estado.",
        "B) Distinguindo áreas urbanas (perímetros urbanos definidos por lei municipal) e áreas rurais (o restante do território municipal).",
        "C) Excluindo totalmente as áreas de floresta nativa de qualquer apuração.",
        "D) Considerando todo o país como uma zona homogênea única."
      ],
      resposta: 1,
      explicacao: "O IBGE adota a distinção oficial entre situação do domicílio/estabelecimento em área urbana ou rural com base nos limites legais municipais."
    }
  ],
  8: [ // Tópico 8: Estruturas Territoriais
    {
      id: 1,
      pergunta: "O que compreendem as chamadas 'Estruturas Territoriais' para fins de mapeamento estatístico e censitário pelo IBGE?",
      opcoes: [
        "A) Apenas os limites de estados estrangeiros vizinhos.",
        "B) As divisões e unidades territoriais legal ou operacionalmente constituídas, tais como municípios, distritos, bairros, aglomerados subnormais e localidades.",
        "C) Exclusivamente as áreas de preservação ambiental permanente federais.",
        "D) As zonas francas de comércio exterior marítimo."
      ],
      resposta: 1,
      explicacao: "As estruturas territoriais englobam as divisões geográficas oficiais e operacionais que estruturam o espaço urbano e rural do país para a coleta de dados."
    },
    {
      id: 2,
      pergunta: "(Caiu em concurso do IBGE) Como o IBGE classifica tipicamente os aglomerados subnormais (favelas e similares) dentro da estrutura territorial urbana?",
      opcoes: [
        "A) Como zonas industriais de alta tecnologia.",
        "B) Como latifúndios voltados exclusivamente à exportação de grãos.",
        "C) Como formas de ocupação irregular de terrenos de propriedade alheia, caracterizadas por padrões urbanísticos fora dos padrões normais e carência de serviços públicos essenciais.",
        "D) Como áreas de preservação ecológica estrita."
      ],
      resposta: 2,
      explicacao: "Aglomerados subnormais correspondem a assentamentos irregulares (favelas, invasões, comunidades) que possuem características urbanísticas específicas mapeadas pelo instituto."
    },
    {
      id: 3,
      pergunta: "Qual é a importância fundamental de manter atualizadas as estruturas territoriais e os marcos geográficos nos censos do IBGE?",
      opcoes: [
        "A) Garantir a precisão na alocação da população, dos estabelecimentos e da infraestrutura, servindo de base para repasses de fundos constitucionais e políticas públicas.",
        "B) Permitir a cobrança de IPTU progressivo por funcionários do IBGE.",
        "C) Extinguir municípios com menos de mil habitantes automaticamente.",
        "D) Determinar os limites de velocidade nas rodovias estaduais."
      ],
      resposta: 0,
      explicacao: "A base territorial atualizada é vital para o planejamento socioeconômico e serve de base legal para o cálculo de fundos de participação (FPM/FPE)."
    },
    {
      id: 4,
      pergunta: "Dentro da organização do território pelo IBGE, o que caracteriza uma 'Localidade' fora da sede municipal?",
      opcoes: [
        "A) Uma capital de estado.",
        "B) Exclusivamente uma grande metrópole industrial.",
        "C) Qualquer aglomeração de população permanente situada fora da sede do município ou distrito, como povoados, vilas ou núcleos.",
        "D) Um quartel militar isolado."
      ],
      resposta: 2,
      explicacao: "Localidades correspondem a aglomerados humanos secundários no território (vilas, povoados), importantes para o detalhamento da rede de lugares habitados."
    },
    {
      id: 5,
      pergunta: "A malha territorial utilizada pelo IBGE em suas operações é atualizada continuamente por meio de:",
      opcoes: [
        "A) Sorteios aleatórios feitos por computadores sem checagem de campo.",
        "B) Pesquisas de atualização cadastral, imagens de satélite, aerofotogrametria e relatórios enviados pelas equipes técnicas municipais e de campo.",
        "C) Decretos emitidos exclusivamente por tribunais esportivos.",
        "D) Consulta direta a livros de história antigos."
      ],
      resposta: 1,
      explicacao: "A atualização da malha territorial combina tecnologias de geoprocessamento (satélites) com o trabalho de verificação e relatórios das equipes de campo."
    }
  ],
   9: [ // Tópico 9: Estruturas Territoriais de Povos e Comunidades Tradicionais (PCTs)
    {
      id: 1,
      pergunta: "(Caiu na prova do IBGE) De acordo com a metodologia censitária, como são tratadas as áreas de Terras Indígenas e Territórios Quilombolas?",
      opcoes: [
        "A) São ignoradas por não pertencerem ao sistema tributário municipal.",
        "B) São consideradas propriedades privadas de posse de prefeituras.",
        "C) São convertidas compulsoriamente em áreas urbanas.",
        "D) São reconhecidas e mapeadas com abordagens metodológicas específicas e adequadas, respeitando as particularidades socioculturais desses povos."
      ],
      resposta: 3,
      explicacao: "O IBGE possui protocolos e tratamento diferenciado rigoroso para o mapeamento e coleta em Terras Indígenas e Territórios Quilombolas, garantindo a visibilidade estatística dessas comunidades."
    },
    {
      id: 2,
      pergunta: "O que caracteriza os Povos e Comunidades Tradicionais (PCTs) no contexto da cobertura territorial brasileira?",
      opcoes: [
        "A) Grupos culturais diferenciados que se reconhecem como tais, possuem formas próprias de organização social e ocupam territórios tradicionais para sua reprodução cultural e econômica.",
        "B) Grupos que dependem exclusivamente de empregos industriais urbanos formais.",
        "C) Empresas multinacionais de exploração mineral.",
        "D) Populações residentes em condomínios fechados de alto padrão."
      ],
      resposta: 0,
      explicacao: "As PCTs abrangem ribeirinhos, quilombolas, indígenas, extrativistas e outros grupos com relação tradicional com a terra e os recursos naturais."
    },
    {
      id: 3,
      pergunta: "Qual é o cuidado ético e operacional exigido do Recenseador ao atuar em comunidades tradicionais, terras indígenas ou quilombolas?",
      opcoes: [
        "A) Recusar-se a entrar nas comunidades por falta de segurança jurídica.",
        "B) Observar diretrizes de respeito intercultural, dialogar com lideranças locais e seguir rigorosamente os protocolos específicos definidos pelo IBGE para essas áreas.",
        "C) Vender produtos comerciais durante a abordagem.",
        "D) Aplicar as mesmas regras rígidas urbanas sem respeitar lideranças locais."
      ],
      resposta: 1,
      explicacao: "A abordagem em áreas de PCTs exige respeito mútuo, articulação com lideranças e adesão estrita aos protocolos institucionais de sensibilidade cultural."
    },
    {
      id: 4,
      pergunta: "No levantamento censitário voltado a comunidades tradicionais, o reconhecimento geográfico e social dessas áreas visa principalmente:",
      opcoes: [
        "A) Garantir a visibilidade demográfica, social e econômica dessas populações, fornecendo subsídios para políticas públicas direcionadas.",
        "B) Cobrar taxas de preservação de recursos naturais.",
        "C) Promover o loteamento imobiliário privado das terras coletivas.",
        "D) Restringir o acesso a qualquer tipo de assistência governamental."
      ],
      resposta: 0,
      explicacao: "O mapeamento estatístico dessas populações garante o direito à informação e subsidia políticas públicas essenciais de saúde, educação e proteção territorial."
    },
    {
      id: 5,
      pergunta: "Além de indígenas e quilombolas, o conceito estatístico e territorial de PCTs abrange outras categorias tradicionais no Brasil, tais como:",
      opcoes: [
        "A) Diretorias de empresas multinacionais de tecnologia.",
        "B) Ribeirinhos, extrativistas, pescadores artesanais, caiçaras e pantaneiros.",
        "C) Moradores de edifícios residenciais de grandes centros urbanos.",
        "D) Comerciantes varejistas de shoppings centers."
      ],
      resposta: 1,
      explicacao: "O conceito abrange diversos grupos tradicionais como ribeirinhos, extrativistas, caiçaras e pescadores artesanais que dependem dos recursos naturais para seu modo de vida."
    }
  ],
    10: [ // Tópico 10: Endereço (CNEFE e componentes)
    {
      id: 1,
      pergunta: "O Cadastro Nacional de Endereços para Fins Estatísticos (CNEFE) é mantido pelo IBGE e tem como principal função:",
      opcoes: [
        "A) Servir como base de dados geoespaciais dos endereços do país para orientar as operações de campo e assegurar a cobertura total do território.",
        "B) Registrar o nome dos proprietários para a cobrança de impostos rurais federais.",
        "C) Substituir os cartórios de registro de imóveis dos municípios.",
        "D) Definir os preços de venda de terrenos urbanos."
      ],
      resposta: 0,
      explicacao: "O CNEFE é a base oficial de endereços do IBGE que permite localizar com precisão as edificações e cobrir o território sem omissões."
    },
    {
      id: 2,
      pergunta: "(Caiu em concurso do IBGE) Quais são os elementos padronizados que compõem a estrutura básica de um endereço no CNEFE?",
      opcoes: [
        "A) Apelido do morador e número do telefone celular.",
        "B) Logradouro, número, complemento, bairro, município, UF e CEP (quando aplicável).",
        "C) Valor venal do imóvel e tamanho da área construída.",
        "D) Inscrição estadual da empresa e número do CNPJ."
      ],
      resposta: 1,
      explicacao: "A estrutura de um endereço no CNEFE inclui o tipo e título do logradouro, o número, complementos (bloco, apartamento, casa), bairro e município."
    },
    {
      id: 3,
      pergunta: "Durante a atualização do CNEFE no trabalho de campo, o que o Recenseador deve fazer ao encontrar um endereço novo que não constava no seu dispositivo móvel (DMC)?",
      opcoes: [
        "A) Ignorar o local, pois tudo o que é oficial já deve vir pré-carregado no sistema.",
        "B) Solicitar que o proprietário faça um cadastro prévio na prefeitura.",
        "C) Incluir o novo endereço com todos os seus componentes e realizar a entrevista no estabelecimento ou domicílio.",
        "D) Apagar um endereço antigo para dar lugar ao novo."
      ],
      resposta: 2,
      explicacao: "A atualização de campo exige a inclusão de novos endereços encontrados dentro dos limites do setor censitário para garantir a cobertura universal."
    },
    {
      id: 4,
      pergunta: "O 'Complemento' do endereço (ex.: Bloco A, Apto 202, Fundos) desempenha qual papel na identificação da unidade no CNEFE?",
      opcoes: [
        "A) Serve apenas como informação estética dispensável.",
        "B) Permite individualizar cada edificação ou domicílio existente dentro de um mesmo número principal de logradouro.",
        "C) Define o valor da taxa de coleta de lixo.",
        "D) Identifica a profissão do chefe da família."
      ],
      resposta: 1,
      explicacao: "O complemento distingue as diversas unidades autônomas (apartamentos, casas de fundos, salas) situadas no mesmo número principal."
    },
    {
      id: 5,
      pergunta: "Em áreas rurais onde os endereços não possuem nomes de ruas nem numeração oficial tradicional, como o CNEFE identifica o local?",
      opcoes: [
        "A) O local é descartado da pesquisa estatística.",
        "B) Utiliza o nome do estabelecimento, pontos de referência locais, estradas de acesso e a coordenada geográfica capturada no DMC.",
        "C) Atribui-se o número 1 para todas as propriedades da zona rural.",
        "D) Cria-se um nome de rua fictício definido pelo recenseador."
      ],
      resposta: 1,
      explicacao: "No meio rural, a identificação combina o nome da propriedade/produtor, referências geográficas e as coordenadas obtidas via GPS do DMC."
    },
    {
      id: 6,
      pergunta: "O que caracteriza especificamente uma 'Edificação' para fins de cadastramento no CNEFE?",
      opcoes: [
        "A) Qualquer árvore de grande porte localizada em praças públicas.",
        "B) Toda construção permanente (como casas, edifícios, galpões, estabelecimentos) delimitada por paredes e teto, onde pessoas possam habitar, trabalhar ou exercer alguma atividade.",
        "C) Apenas veículos automotores adaptados como moradia móvel.",
        "D) Cercas de arame farpado em divisas de pastagens."
      ],
      resposta: 1,
      explicacao: "Edificação é a estrutura fixa e permanente destinada à habitação, comércio, produção ou prestação de serviços, servindo de base para o registro de endereços."
    },
    {
      id: 7,
      pergunta: "Quando uma edificação possui múltiplos usos (por exemplo, uma loja comercial no piso térreo e habitação nos andares superiores), como o CNEFE e o Recenseador devem proceder?",
      opcoes: [
        "A) Registrar apenas a atividade comercial e ignorar os moradores.",
        "B) Considerar e cadastrar separadamente cada unidade autônoma correspondente ao seu respectivo uso e endereço específico.",
        "C) Excluir o imóvel da pesquisa por conflito de finalidade.",
        "D) Unificar tudo sob uma única descrição genérica sem complementos."
      ],
      resposta: 1,
      explicacao: "Imóveis mistos exigem o desdobramento e cadastramento individualizado de cada unidade autônoma (comercial e residencial) para garantir a precisão censitária."
    }
  ],
  11: [ // Tópico 11: Coordenadas Geográficas
    {
      id: 1,
      pergunta: "Para que serve a captura de Coordenadas Geográficas (Latitude e Longitude) pelo Dispositivo Móvel de Coleta (DMC) no momento da visita ao estabelecimento?",
      opcoes: [
        "A) Determinar a altitude exata para cobrança de taxas de voo de drones.",
        "B) Medir o sinal de internet para a venda de planos de dados no meio rural.",
        "C) Associar uma posição espacial precisa no planeta a cada unidade visitada, permitindo análises geoestatísticas detalhadas.",
        "D) Calcular o consumo de energia elétrica das bombas de irrigação."
      ],
      resposta: 2,
      explicacao: "As coordenadas fornecem a posição precisa (latitude/longitude), permitindo mapear espacialmente a produção e os estabelecimentos."
    },
    {
      id: 2,
      pergunta: "(Caiu em prova anterior do IBGE) Em que momento da operação de campo o Recenseador deve realizar a captura do ponto GPS/Coordenada Geográfica no DMC?",
      opcoes: [
        "A) Na entrada ou edificação principal do estabelecimento/domicílio visitado, seguindo as instruções do aplicativo de coleta.",
        "B) No centro da praça principal do município ao fim do expediente.",
        "C) Na sede da agência do IBGE antes de ir para o campo.",
        "D) Somente se o informante exigir o comprovante da visita."
      ],
      resposta: 0,
      explicacao: "A captura é feita presencialmente no local da visita, em frente à edificação principal do estabelecimento ou domicílio."
    },
    {
      id: 3,
      pergunta: "Qual é a unidade de medida das coordenadas geográficas utilizadas nos mapas e sistemas de posicionamento do IBGE?",
      opcoes: [
        "A) Metros quadrados e hectares.",
        "B) Graus, minutos e segundos (ou graus decimais).",
        "C) Quilogramas por hectare.",
        "D) Litros por segundo."
      ],
      resposta: 1,
      explicacao: "As coordenadas geográficas são expressas em graus, minutos e segundos ou em graus decimais (latitude e longitude)."
    },
    {
      id: 4,
      pergunta: "Caso o receptor GPS do DMC apresente dificuldade temporária em obter a localização exata devido à cobertura de árvores ou tempo fechado, o Recenseador deve:",
      opcoes: [
        "A) Digitar números aleatórios de latitude e longitude.",
        "B) Desistir de realizar a entrevista naquele dia.",
        "C) Aguardar alguns instantes em local mais aberto ou seguir os procedimentos de tolerância indicados no manual do equipamento.",
        "D) Desligar o equipamento e não realizar mais capturas no setor."
      ],
      resposta: 2,
      explicacao: "O manual orienta a procurar melhor recepção de sinal em área livre sem falsificar dados de localização."
    },
    {
      id: 5,
      pergunta: "A integração das coordenadas geográficas com as estatísticas do Censo Agropecuário possibilita ao IBGE:",
      opcoes: [
        "A) Elaborar mapas temáticos de distribuição de lavouras, rebanhos e uso do solo com elevado detalhamento territorial.",
        "B) Vender terras agrícolas produtivas para empresas estrangeiras.",
        "C) Substituir a necessidade de realização de futuros censos.",
        "D) Alterar os limites dos estados brasileiros sem autorização do Congresso."
      ],
      resposta: 0,
      explicacao: "O georreferenciamento cruza estatísticas com a localização espacial, gerando mapas e análises fundamentais para o planejamento agronômico e ambiental do país."
    },
    {
      id: 6,
      pergunta: "O que representa o conceito de 'Latitude' no sistema de coordenadas geográficas utilizado na cartografia do IBGE?",
      opcoes: [
        "A) A distância horizontal medida em graus a partir do Meridiano de Greenwich.",
        "B) A distância angular medida em graus, minutos e segundos a partir da Linha do Equador, variando de 0° a 90° para norte ou sul.",
        "C) A altura da edificação em relação ao nível do mar.",
        "D) A velocidade de deslocamento do recenseador em campo."
      ],
      resposta: 1,
      explicacao: "Latitude é a distância angular ao Equador, medida de 0° a 90° rumo aos polos norte ou sul."
    },
    {
      id: 7,
      pergunta: "No contexto da navegação e geolocalização por satélite em campo, o que significa a 'Longitude'?",
      opcoes: [
        "A) A distância angular medida em graus a partir do Meridiano de Greenwich, variando de 0° a 180° para leste ou oeste.",
        "B) A medida linear do perímetro de uma propriedade rural em metros.",
        "C) A profundidade de poços artesianos em uma fazenda.",
        "D) O tempo gasto para percorrer um setor censitário."
      ],
      resposta: 0,
      explicacao: "Longitude é a distância angular em relação ao Meridiano de Greenwich, medida de 0° a 180° para leste ou oeste."
    }
  ],
  12: [ // Tópico 12: Estabelecimento Agropecuário (Conceitos, Unidades Recenseáveis/Não Recenseáveis)
    {
      id: 1,
      pergunta: "Para fins do Censo Agropecuário, o que caracteriza essencialmente um 'Estabelecimento Agropecuário'?",
      opcoes: [
        "A) Qualquer terreno urbano utilizado exclusivamente para moradia e lazer familiar.",
        "B) Unidade de produção ou de exploração agropecuária, florestal e aquícola, independentemente de tamanho, forma jurídica ou localização, sob uma mesma administração.",
        "C) Apenas empresas comerciais registradas na Junta Comercial com faturamento superior a 1 milhão de reais.",
        "D) Áreas públicas federais destinadas à preservação ambiental intransitável."
      ],
      resposta: 1,
      explicacao: "O estabelecimento agropecuário é a unidade básica de investigação do Censo, definido pela produção ou exploração sob a mesma direção, sem restrição de tamanho ou forma jurídica."
    },
    {
      id: 2,
      pergunta: "(Caiu em concurso do IBGE) Dentre as opções abaixo, assinale a que representa uma unidade NÃO RECENSEÁVEL (que não constitui estabelecimento agropecuário):",
      opcoes: [
        "A) Uma granja comercial dedicada à criação de aves de postura.",
        "B) Um sítio voltado ao cultivo de mandioca e milho para subsistência e venda do excedente.",
        "C) Um terreno urbano baldio onde não há qualquer atividade agropecuária, florestal ou aquícola sendo desenvolvida.",
        "D) Uma área de silvicultura de eucalipto para extração de celulose."
      ],
      resposta: 2,
      explicacao: "Terrenos ou unidades que não realizam nenhuma atividade de produção agropecuária, florestal ou aquícola no período de referência ficam fora do escopo censitário."
    },
    {
      id: 3,
      pergunta: "Quando duas ou mais porções de terra (glebas) pertencentes ao mesmo produtor estão em locais separados dentro do mesmo município, como elas devem ser tratadas pelo Recenseador?",
      opcoes: [
        "A) Devem obrigatoriamente ser tratadas como estabelecimentos separados, independentemente de qualquer fator.",
        "B) Constituem um único estabelecimento agropecuário se estiverem sob a mesma administração e exploração conjunta, seguindo as normas de contiguidade e gestão.",
        "C) Devem ser ignoradas pelo Censo por falta de regularização em cartório.",
        "D) Somente a gleba maior será recenseada."
      ],
      resposta: 1,
      explicacao: "Glebas sob a mesma administração no mesmo município formam um único estabelecimento, mesmo que não sejam fisicamente contíguas (regras de ligação operacional)."
    },
    {
      id: 4,
      pergunta: "Um produtor rural arrenda terras de terceiros para plantar soja e cria gado em terras próprias. Para o Censo, como isso é contabilizado?",
      opcoes: [
        "A) Tudo forma um único estabelecimento se estiver sob a mesma gestão e unidade de exploração econômica.",
        "B) As terras arrendadas pertencem ao proprietário original e nunca ao arrendatário.",
        "C) A pecuária é contabilizada na prefeitura e a agricultura no estado.",
        "D) O arrendamento anula a condição de produtor rural."
      ],
      resposta: 0,
      explicacao: "A terra explorada sob regime de arrendamento ou parceria, quando integrada à gestão do produtor, compõe o seu estabelecimento agropecuário."
    },
    {
      id: 5,
      pergunta: "(Caiu em prova anterior do IBGE) A criação exclusiva de quais animais de estimação ou finalidades urbanas exclui a unidade da condição de estabelecimento agropecuário?",
      opcoes: [
        "A) Bovinos de corte e suínos para abate.",
        "B) Cães, gatos e pássaros mantidos estritamente como animais de estimação em residências urbanas.",
        "C) Abelhas criadas para produção comercial de mel.",
        "D) Peixes criados em cativeiro para comercialização em pesque-pagues."
      ],
      resposta: 1,
      explicacao: "A criação de pets (cães, gatos, passarinhos de estimação) em ambiente urbano sem finalidade de produção agropecuária comercial ou de subsistência não configura estabelecimento."
    },
    {
      id: 6,
      pergunta: "Qual é o tratamento dado às terras comunitárias ou de uso comum (como áreas de pastagem coletiva em comunidades tradicionais) no Censo Agropecuário?",
      opcoes: [
        "A) São totalmente desconsideradas por não possuírem dono registrado em cartório.",
        "B) São investigadas considerando o uso compartilhado e a forma como os produtores da comunidade exploram esses recursos conjuntamente.",
        "C) Distribuem-se as terras igualmente entre os fiscais do IBGE.",
        "D) São convertidas em parques nacionais automaticamente."
      ],
      resposta: 1,
      explicacao: "Áreas de uso coletivo ou comum são mapeadas detalhadamente considerando a exploração comunitária realizada pelos produtores locais."
    },
    {
      id: 7,
      pergunta: "Um estabelecimento que encerrou totalmente suas atividades produtivas antes do início do ano de referência e não produziu nada no período deve ser recenseado?",
      opcoes: [
        "A) Sim, com questionário completo de safras futuras.",
        "B) Não, pois unidades inativas que não tiveram nenhuma produção ou exploração no período de referência não são consideradas estabelecimentos ativos no Censo.",
        "C) Sim, e o proprietário deve pagar multa por inatividade.",
        "D) Apenas se a prefeitura autorizar."
      ],
      resposta: 1,
      explicacao: "Estabelecimentos totalmente paralisados ou inativados durante todo o período de referência não entram na contagem de unidades ativas."
    }
  ],
  13: [ // Tópico 13: Produtores Sem Área
    {
      id: 1,
      pergunta: "Para fins estatísticos do Censo Agropecuário, o que define a figura do 'Produtor sem área'?",
      opcoes: [
        "A) Aquele que não possui título de propriedade de terra registrado em cartório, mas cultiva lavouras permanentes em latifúndios.",
        "B) Aquele que explora atividades agropecuárias, florestais ou aquícolas sem dispor de uma área delimitada própria, arrendada ou ocupada sob sua posse direta.",
        "C) O trabalhador assalariado rural que não possui bens imóveis urbanos.",
        "D) Qualquer morador de rua em áreas estritamente metropolitanas."
      ],
      resposta: 1,
      explicacao: "O produtor sem área realiza atividades agropecuárias, florestais ou de apicultura/extrativismo utilizando terras de terceiros, vias públicas ou recursos naturais sem delimitação de área física sob sua posse direta."
    },
    {
      id: 2,
      pergunta: "(Caiu em concurso do IBGE) Assinale o exemplo clássico de atividade que frequentemente enquadra o responsável como 'Produtor sem área':",
      opcoes: [
        "A) O proprietário de uma fazenda de 500 hectares com criação de bovinos confinados.",
        "B) O apicultor migratório (transumante) que coloca suas colmeias em vegetação nativa, matas de terceiros ou beiras de estradas sem possuir área delimitada.",
        "C) O empresário dono de uma usina agroindustrial de processamento de cana-de-açúcar.",
        "D) O morador urbano que cultiva plantas medicinais em vasos na varanda."
      ],
      resposta: 1,
      explicacao: "Apicultores itinerantes que utilizam colmeias móveis dispostas em matas ou propriedades de terceiros sem contrato de uso da terra são o exemplo típico de produtores sem área."
    },
    {
      id: 3,
      pergunta: "Como deve ser feita a coleta e o preenchimento do questionário censitário para um produtor sem área?",
      opcoes: [
        "A) A entrevista é realizada com a captura dos dados da produção e o registro especial de 'área zero' ou sem área física vinculada no DMC.",
        "B) O produtor é obrigado a comprar um lote de terra antes de responder ao Censo.",
        "C) O questionário deve ser atribuído compulsoriamente à prefeitura do município.",
        "D) A pesquisa é cancelada por ausência de cadastro imobiliário."
      ],
      resposta: 0,
      explicacao: "A metodologia censitária prevê o registro de estabelecimentos sem área delimitada, coletando os dados da produção, rebanho ou extração normalmente."
    },
    {
      id: 4,
      pergunta: "Pescadores artesanais e extrativistas que retiram recursos de rios, mares e florestas públicas sem possuir uma base de exploração fixa delimitada são classificados como:",
      opcoes: [
        "A) Proprietários latifundiários urbanos.",
        "B) Comerciantes atacadistas de insumos químicos.",
        "C) Produtores sem área (ou extrativistas sem área delimitada), desde que a atividade tenha finalidade comercial ou de subsistência.",
        "D) Funcionários públicos federais do Ministério da Marinha."
      ],
      resposta: 2,
      explicacao: "A exploração extrativista vegetal, aquícola ou de pesca artesanal sem uma área física delimitada própria enquadra a unidade como produtor sem área."
    },
    {
      id: 5,
      pergunta: "(Caiu em prova do IBGE) Um criador de gado que não possui terras e apascenta seus animais na faixa de domínio de rodovias ou terras devolutas comunitárias sem delimitação de recinto é considerado:",
      opcoes: [
        "A) Uma unidade não recenseável e desconsiderada da estatística.",
        "B) Um produtor agropecuário sem área.",
        "C) Um arrendatário de grande porte com registro cartorial.",
        "D) Um fiscal de trânsito rodoviário."
      ],
      resposta: 1,
      explicacao: "A criação de animais em terras soltas, faixas de rodovias ou áreas comuns sem recinto delimitado sob posse direta configura a condição de produtor sem área."
    },
    {
      id: 6,
      pergunta: "Qual é o principal desafio metodológico para o Recenseador ao localizar e entrevistar um produtor sem área em campo?",
      opcoes: [
        "A) Medir a altitude do terreno com trena manual.",
        "B) Identificar o local de residência ou ponto de apoio do produtor para evitar a omissão da sua produção no setor censitário correto.",
        "C) Exigir a apresentação de nota fiscal de compra do imóvel.",
        "D) Cobrar a taxa de inscrição no processo seletivo do IBGE."
      ],
      resposta: 1,
      explicacao: "Como não há uma porteira ou limite físico de terra, o recenseador deve localizar o produtor em sua morada ou ponto de apoio dentro do setor para vincular a produção."
    },
    {
      id: 7,
      pergunta: "Se um apicultor possui uma pequena sede física própria onde processa o mel, mas suas colmeias ficam espalhadas por áreas alheias, como o IBGE trata o local de apoio?",
      opcoes: [
        "A) A sede de apoio/processamento serve como ponto de referência para a identificação do estabelecimento do produtor.",
        "B) A sede é ignorada e entrevista-se apenas o dono da mata onde a colmeia está instalada.",
        "C) O mel é desconsiderado das estatísticas por falta de flores próprias.",
        "D) Transfere-se o cadastro para o município vizinho automaticamente."
      ],
      resposta: 0,
      explicacao: "A instalação física de apoio (depósito, casa de mel ou residência) serve de referência para cadastrar o estabelecimento e registrar a produção das colmeias."
    }
  ],
    14: [ // Tópico 14: Situações Especiais
    {
      id: 1,
      pergunta: "Como o Recenseador deve proceder ao inventariar um estabelecimento agropecuário cuja área física (terra) está situada em mais de um município?",
      opcoes: [
        "A) O estabelecimento deve ser dividido em fatias geográficas e cadastrado separadamente em cada prefeitura.",
        "B) A unidade é cadastrada integralmente no município onde se localiza a sede da administração do estabelecimento (ou a maior parte da área produtiva, conforme normas técnicas do manual).",
        "C) O estabelecimento é completamente desconsiderado do Censo por conflito de jurisdição.",
        "D) O produtor escolhe aleatoriamente em qual município quer pagar os impostos do Censo."
      ],
      resposta: 1,
      explicacao: "Propriedades cortadas por limites municipais seguem regras de alocação baseadas na sede de gestão ou na maior porção da área para evitar dupla contagem."
    },
    {
      id: 2,
      pergunta: "(Caiu em concurso do IBGE) No caso de heranças indivisas ou espólios em que vários herdeiros exploram conjuntamente uma mesma herança agrícola deixada por um <i>de cujus</i> sem divisão formal em cartório, como o Censo classifica essa unidade?",
      opcoes: [
        "A) Como dezenas de estabelecimentos separados, um para cada herdeiro.",
        "B) Como um único estabelecimento agropecuário sob a responsabilidade conjunta do inventariante ou administrador do espólio/família.",
        "C) Como um terreno urbano baldio.",
        "D) Como uma sociedade anônima de capital aberto."
      ],
      resposta: 1,
      explicacao: "Espólios e terras em regime de herança indivisa são recenseados como uma única unidade produtiva sob a responsabilidade de quem administra a exploração."
    },
    {
      id: 3,
      pergunta: "Como são tratadas, para fins censitários, as terras de uso agropecuário situadas no interior de Terras Indígenas demarcadas?",
      opcoes: [
        "A) São rigorosamente mapeadas e investigadas de acordo com os protocolos metodológicos e diferenciais específicos para comunidades indígenas.",
        "B) Ficam proibidas por lei de produzir qualquer tipo de alimento.",
        "C) São tratadas exatamente como latifúndios privados comerciais convencionais.",
        "D) São ignoradas pelo IBGE por estarem sob jurisdição militar."
      ],
      resposta: 0,
      explicacao: "Áreas agropecuárias em Terras Indígenas possuem tratamento metodológico diferenciado e específico, integrando as estatísticas com respeito à soberania e cultura dos povos."
    },
    {
      id: 4,
      pergunta: "O que o Recenseador deve fazer ao encontrar um estabelecimento agropecuário fechado ou cujo produtor se recusa terminantemente a prestar as informações obrigatórias?",
      opcoes: [
        "A) Inventariar dados fictícios baseados em informações de vizinhos curiosos.",
        "B) Tentar novas visitas em horários alternativos, acionar o Agente Censitário Supervisor (ACS) e aplicar os protocolos institucionais de recusa e insistência amigável previstos nos manuais.",
        "C) Aplicar multa em dinheiro imediatamente no local.",
        "D) Abandonar o setor censitário e encerrar o contrato."
      ],
      resposta: 1,
      explicacao: "Situações de recusa ou ausência prolongada exigem retornos estratégicos e suporte do supervisor para tentar reverter o caso amigavelmente conforme as normas do IBGE."
    },
    {
      id: 5,
      pergunta: "(Caiu em prova anterior do IBGE) Estabelecimentos agropecuários pertencentes a instituições de pesquisa científica, escolas agrícolas experimentais ou presídios que comercializam ou produzem excedentes agropecuários devem ser recenseados?",
      opcoes: [
        "A) Sim, desde que desenvolvam atividade de produção agropecuária, florestal ou aquícola no período de referência, independentemente de sua natureza institucional.",
        "B) Não, pois órgãos públicos são isentos de estatísticas de campo.",
        "C) Apenas se a produção for totalmente exportada.",
        "D) Nunca, pois trata-se de atividade industrial urbana."
      ],
      resposta: 0,
      explicacao: "Escolas agrárias, centros de pesquisa e unidades prisionais com produção agropecuária ativa compõem o escopo do Censo Agropecuário."
    },
    {
      id: 6,
      pergunta: "Como o Censo procede em assentamentos de reforma agrária recém-criados onde os lotes individuais já foram distribuídos, mas a infraestrutura ainda é precária?",
      opcoes: [
        "A) Cada lote ocupado e em exploração produtiva constitui um estabelecimento agropecuário independente a ser recenseado.",
        "B) O assentamento inteiro é contado como uma única grande fazenda do governo.",
        "C) Os lotes são desconsiderados até que recebam títulos definitivos de cartório.",
        "D) Apenas os lotes que possuem tratores modernos são visitados."
      ],
      resposta: 0,
      explicacao: "Em assentamentos, cada lote ou unidade familiar que já esteja explorando a terra produtivamente é tratado como um estabelecimento agropecuário individual."
    },
    {
      id: 7,
      pergunta: "Quando um produtor rural desenvolve atividades em dois municípios diferentes, mas utiliza a mesma sede de máquinas e gerencia tudo do mesmo local principal, qual é a regra de desdobramento?",
      opcoes: [
        "A) Concentra-se tudo no município onde ele dorme.",
        "B) As terras situadas em cada município devem ser tratadas como estabelecimentos distintos e vinculados aos respectivos municípios de localização.",
        "C) O produtor escolhe em qual cidade quer registrar toda a produção.",
        "D) A produção é anulada por duplicidade de gestão."
      ],
      resposta: 1,
      explicacao: "A regra de contiguidade municipal exige que terras em municípios diferentes formem estabelecimentos separados em cada base municipal correspondente."
    },
    {
      id: 8,
      pergunta: "Qual é a diretriz fundamental que o Recenseador deve adotar diante de qualquer situação de campo atípica, duvidosa ou conflituosa não prevista diretamente nos exemplos rápidos do manual?",
      opcoes: [
        "A) Tomar uma decisão individual improvisada sem consultar ninguém.",
        "B) Consultar imediatamente o seu Agente Censitário Supervisor (ACS) ou recorrer às instâncias de suporte técnico do Posto de Coleta.",
        "C) Omitir a questão no DMC e avançar para o próximo domicílio.",
        "D) Perguntar aos moradores locais qual regra deve ser aplicada."
      ],
      resposta: 1,
      explicacao: "Dúvidas complexas de campo devem ser sempre encaminhadas à supervisão direta (ACS/ACM) para garantir a padronização metodológica em todo o território nacional."
    }
  ]
};

