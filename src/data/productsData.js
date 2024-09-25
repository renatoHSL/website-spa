// src/data/productData.js
import bemEstarImg from '../assets/products/placeholder1.png';

const productsData = [
    {
        category: 'Bem-Estar e Relaxamento',
        description: 'Desfrute de uma variedade de serviços de massagem e relaxamento projetados para aliviar o estresse e promover o bem-estar geral.',
        image: bemEstarImg, // Substitua pelo caminho real da imagem
        link: '/bem-estar-e-relaxamento',
        products: [
        {
            id: 'egn-relax',
            title: 'EGN - Relax',
            description:
                "Massagem Relaxante Corporal + Massagem Relaxante Facial + Reflexologia = Nossa experiência exclusiva. O famoso 'só tem aqui'.\nMassagem corporal relaxante feita com óleo relaxante e Creme de Massagem Chá Verde da Adcos, seguida por uma massagem facial suave e ritmada e reflexologia com foco nas áreas de tensão. \nO ambiente é preparado para criar a atmosfera perfeita.",
            image: bemEstarImg,
            duration: '90 minutos',
            price: 'R$200,00',
            purpose: "Bem-estar prolongado, relaxamento profundo, liberação de toxinas, melhora da circulação, alívio de dores e tensões musculares, apoio à saúde mental, emocional e ao equilíbrio."
        },
        {
            id: 'massagem-relaxante-corporal',
            title: 'Massagem Relaxante Corporal',
            description:
              'Massagem que combina movimentos efetivos e contínuos, feita com óleo relaxante e Creme de Massagem Chá Verde da Adcos. ',
            image: bemEstarImg,
            duration: '45 minutos',
            price: 'R$150,00',
            purpose: 'Bem-estar, relaxamento, alívio de dores e tensões musculares, apoio à saúde mental, emocional e ao equilíbrio.'
        },
        {
            id: 'candle-massage',
            title: 'Candle Massage',
            description:
              'Massagem com velas que, quando aquecidas, se transformam em óleos essenciais. Técnica que combina aroma, temperatura e toque, com movimentos longos e suaves para criar uma experiência de relaxamento profunda e envolvente. \nO ambiente é preparado de maneira singular e uma atmosfera de paz e acolhimento é sentida.',
              image: bemEstarImg,
            duration: '60 minutos',
            price: 'R$190,00',
            purpose: 'Bem-estar prolongado, hidratação da pele, experiência sensorial.'
        },
        {
            id: 'massagem-pedras-quentes',
            title: 'Massagem com Pedras Quentes',
            description:
              'Massagem relaxante feita a partir da sinergia de pedras aquecidas e um blend 3 óleos essenciais. Experiência sensorial única e revitalizante.',
            image: bemEstarImg,
            duration: '60 minutos',
            price: 'R$190,00',
            purpose: 'Bem-estar, relaxamento profundo e alivio de tensões musculares. '
        },
        {
            id: 'massagem-relaxante-facial',
            title: 'Massagem Relaxante Facial',
            description:
              'Massagem facial relaxante que emprega as técnicas de massagem de maneira ainda mais suave, com os produtos Adcos necessários ao cuidado da pele do rosto. ',
            image: bemEstarImg,
            duration: '30 minutos',
            price: 'R$110,00',
            purpose: 'Bem-estar, relaxamento, saúde da pele (sabe aquele glow?)'
        },
      ],
    },
    {
      category: 'Estética Corporal',
      products: [
        {
            id: 'drenagem-linfatica',
            title: 'Drenagem Linfática',
            description:
              'Massagem terapêutica e estética. Aqui, usamos o Creme de Arroz Doce da Adcos combinado à uma técnica relaxante de movimentos suaves e rítmicos projetados para melhorar a função do sistema linfático.',
            image: bemEstarImg,
            duration: '60 minutos',
            price: 'R$150,00',
            purpose: 'Bem-estar, remoção de toxinas, estimulação da circulação linfática, redução de edema, apoio à recuperação muscular, alívio de condições de saúde. '
        },
        {
            id: 'massagem-modeladora',
            title: 'Massagem Modeladora',
            description:
              'Massagem terapêutica e estética que emprega técnicas para modelar o corpo, melhorar a circulação, reduzir gordura localizada e tonificar a pele. Foco em áreas específicas e personalizadas. Usamos, dentre outros produtos, o Reduxel Thermo Gel Redutor Crioter e o Creme de Massagem Redutor Plus – Reduxel Slim, da Adcos, para criar uma experiência personalizada e eficaz.',
            image: bemEstarImg,
            duration: '60 minutos',
            price: 'R$170,00',
            purpose: ''
        },
        {
            id: 'esfoliacao-corporal',
            title: 'Esfoliação Corporal',
            description:
              'Tratamento estético para remoção de células mortas da camada superior da pele. Aplicação do esfoliante com movimentos circulares e firmes que ajudam a desintegrar as células mortas e a estimular a circulação sanguínea. A pressão e a técnica são ajustadas de maneira individualizada para alcançar os melhores resultados. Após a remoção do esfoliante a pele é hidratada para restaurar e prolongar a suavidade e elasticidade.',
            image: bemEstarImg,
            duration: '60 minutos',
            price: 'R$160,00',
            purpose: 'Bem-estar, renovação celular, melhora da textura da pele, estímulo à circulação, desobstrução de poros.'
          },
          {
            id: 'revitalizacao-corporal-esfoliacao-argila',
            title: 'Revitalização Corporal com Esfoliação e Máscara de Argila',
            description:
              'Tratamento estético e terapêutico para rejuvenescimento e vitalidade. Conjunto de técnicas projetadas para restaurar e renovar o corpo, com foco na saúde da pele, do sistema muscular e da circulação. Utilização de peeling de hortelã e máscara de argila. Após, a pele é hidratada para restaurar e prolongar a suavidade e a elasticidade.',
            image: bemEstarImg,
            duration: '50 minutos',
            price: 'R$200,00',
            purpose: 'Bem-estar, melhora da aparência da pele, redução de poros, acalma e nutre.'
          },
          {
            id: 'revitalizacao-corporal-esfoliacao-hidratacao',
            title: 'Revitalização Corporal com Esfoliação e Hidratação',
            description:
              'Tratamento estético e terapêutico para rejuvenescimento e vitalidade. Empregamos técnicas projetadas para restaurar e renovar o corpo, com foco na saúde da pele e na hidratação. Utilização de peeling físico corporal.',
            image: bemEstarImg,
            duration: '60 minutos',
            price: 'R$200,00',
            purpose: 'Bem-estar, efeito de rejuvenescimento e firmamento, melhora da aparência da pele, redução de poros, acalma, nutre e hidrata.'
          }
        // Adicione mais produtos aqui
      ],
    },
    {
      category: 'Estética Facial',
      products: [
        {
            id: 'limpeza-pele-egn',
            title: 'Limpeza de Pele EGN',
            description:
              'A nossa limpeza de pele é única. Única porque só tem ela no nosso catálogo. E única porque você só encontra aqui. Técnica de extração com significativa redução da dor. Isso promove relaxamento, saúde para a sua pele, beleza e, principalmente, bem-estar. Personalizamos de maneira individual cada tratamento, sua pele é única. Para tanto, todos os produtos utilizados são Adcos.',
            image: bemEstarImg,
            duration: '60 minutos',
            price: 'R$200,00',
            purpose: 'Bem-estar, limpeza profunda, desobstrução dos poros, renovação da pele, melhora da circulação, equilíbrio do PH, hidratação, relaxamento.'
          },
          {
            id: 'limpeza-pele-peeling-diamante',
            title: 'Limpeza de Pele EGN + Peeling de Diamante',
            description:
              'Nossa limpeza de pele exclusiva, com o plus do peeling de diamante, que utiliza micro cristais de diamante para promover a esfoliação da pele, melhorar a textura e estimular a renovação celular. Sua pele vai ficar mais suave, radiante e rejuvenescida.',
            image: bemEstarImg,
            duration: '70 minutos',
            price: 'R$220,00',
            purpose: 'Bem-estar, limpeza profunda, desobstrução dos poros, renovação da pele, melhora da circulação, equilíbrio do PH, hidratação, relaxamento, redução de manchas, clareamento da pele, aumento da produção de colágeno.'
          },
          {
            id: 'limpeza-peeling-diamante-led-laser',
            title: 'Limpeza de Pele EGN + Peeling de Diamante + Led Laser',
            description:
              'Nossa limpeza de pele exclusiva potencializada pelo peeling de diamante e pela aplicação do Led Laser. Completa e exclusiva demais para caber em uma descrição. Para mais informações, converse com nossa especialista.',
            image: bemEstarImg,
            duration: '90 minutos',
            price: 'R$250,00',
            purpose: 'Bem-estar, limpeza profunda, desobstrução dos poros, renovação da pele, melhora da circulação, equilíbrio do PH, hidratação, relaxamento, redução de manchas, clareamento da pele, aumento da produção de colágeno, regeneração celular, tratamento de uma variedade de condições.'
          },
          {
            id: 'limpeza-rejuvenescimento-vitamina-c',
            title: 'Limpeza de Pele EGN + Tratamento de Rejuvenescimento com Vitamina C',
            description:
              'Nossa limpeza de Pele exclusiva, com aplicação potencializada de vitamina C.',
            image: bemEstarImg,
            duration: '70 minutos',
            price: 'R$210,00',
            purpose: 'Bem-estar, limpeza profunda, desobstrução dos poros, renovação da pele, melhora da circulação, equilíbrio do PH, hidratação, relaxamento, ação antioxidante, estímulo à produção de colágeno, clareamento e melhora da textura da pele. Hidrata, revitaliza e rejuvenesce.'
          },
          {
            id: 'drenagem-facial',
            title: 'Drenagem Facial',
            description:
              'Massagem focada em estimular os canais linfáticos e sanguíneos do rosto. Remoção de líquidos acumulados e toxinas. Isso reduz o inchaço e melhora a aparência da pele. Tratamento pode ser realizado com as mãos ou com o auxílio de aparelhos específicos. Pode ser recomendada a partir de outros procedimentos estéticos.',
            image: bemEstarImg,
            duration: '45 minutos',
            price: 'R$150,00',
            purpose: 'Bem-estar, melhora da circulação, desintoxicação da pele, relaxamento e alívio da tensão. Rejuvenesce.'
          },
          {
            id: 'lifting-facial',
            title: 'Lifiting Facial',
            description:
              'Para esse tratamento, unimos técnicas e movimentos de drenagem e massagem modeladora facial.',
            image: bemEstarImg,
            duration: '45 minutos',
            price: 'R$110,00',
            purpose: 'Bem-estar, redução dos sinais de envelhecimento (flacidez, rugas e linhas de expressão, por exemplo). Tonifica a pele.'
          },
          {
            id: 'massagem-tensora-facial',
            title: 'Massagem Tensora Facial',
            description:
              'Técnica de massagem estética que empregamos para estimular e revitalizar a pele do rosto.',
            image: bemEstarImg,
            duration: '45 minutos',
            price: 'R$110,00',
            purpose: 'Bem-estar. Potencializa a elasticidade e a firmeza da pele.'
          }
        // Adicione mais produtos aqui
      ],
    },
    {
      category: 'Gestante e Pós-Parto',
      products: [
        {
            id: 'healthy-mom',
            title: 'Healthy Mom',
            description:
              'União e personalização de técnicas de massagem modeladora e de drenagem.',
            image: bemEstarImg,
            duration: '60 minutos',
            price: 'R$180,00',
            purpose: 'Bem-estar, melhora na circulação, retenção de líquidos e toxinas no pós-parto.',
        },
        {
            id: 'bem-estar-gestacao',
            title: 'Bem-Estar na Gestação',
            description:
              'Massagem personalizada com técnicas específicas direcionadas às gestantes. Aqui, unimos conhecimento e atenção ao seu momento e necessidade. Sem negligenciar as orientações dadas pelo seu médico (a). Queremos estar presentes e te ajudar a se sentir bem em cada momento.',
            image: bemEstarImg,
            duration: 'Sob consulta',
            price: 'Sob consulta',
            purpose: 'Bem-estar, relaxamento, redução na retenção de líquidos e no inchaço característico.',
            notes: 'Orientações acerca do período em que o tratamento pode ser realizado devem ser previamente consultadas.'
          }
        // Adicione mais produtos aqui
      ],
    },
    {
      category: 'Demais Tratamentos',
      products: [
        {
            id: 'banho-de-lua',
            title: 'Banho de Lua',
            description:
              'Limpeza da pele, esfoliação e aplicação do kit clareador. Após, hidratação e proteção da pele.',
            image: bemEstarImg,
            duration: '60 minutos',
            price: 'R$180,00',
            purpose: 'Bem-estar, clareamento dos pelos do corpo e renovação celular.'
          },
          {
            id: 'escalda-pes',
            title: 'Escalda Pés',
            description:
              'Tratamento relaxante que se concentra no cuidado com pés a partir da imersão deles em água quente/morna e utilização da técnica de relaxamento podal EGN. Para tanto, todos os produtos usados são do spa dos pés da granado.',
            image: bemEstarImg,
            duration: '30 minutos',
            price: 'R$70,00',
            purpose: 'Bem-estar, alívio para o cansaço, renovação celular e relaxamento.'
          },
          {
            id: 'reflexologia',
            title: 'Reflexologia',
            description:
              'Técnica de aplicação de pressão em pontos específicos dos pés que correspondem aos órgãos internos, por meio de caminhos energéticos.',
            image: bemEstarImg,
            duration: '35 minutos',
            price: 'R$120,00',
            purpose: 'Bem-estar, equilíbrio, estímulo da capacidade de cura natural do corpo, relaxamento.'
          },
          {
            id: 'pos-operatorio',
            title: 'Pós-operatório',
            description:
              'Protocolos de pós-operatório devem ser indicados pelo médico responsável e analisados caso a caso pela profissional indicada para o tratamento, a depender da área.',
            image: bemEstarImg,
            duration: 'Sob consulta',
            price: 'Sob consulta',
            purpose: 'Tratamento personalizado de acordo com a necessidade de recuperação pós-operatória.',
            notes: 'Consulte nossa especialista para uma avaliação personalizada antes de agendar o tratamento.'
          }
        // Adicione mais produtos aqui
      ],
    },
    {
      category: 'Combos',
      products: [
        {
            id: 'massagem-relaxante-escalda-pes',
            title: 'Massagem Relaxante Corporal + Escalda Pés',
            description: 'Combinação de massagem relaxante corporal com escalda pés para um relaxamento completo.',
            image: bemEstarImg,
            duration: '90 minutos',
            price: 'R$190,00'
            // Este tratamento não possui a propriedade 'purpose'
          },
          {
            id: 'pedras-quentes-escalda-pes',
            title: 'Massagem com Pedras Quentes + Escalda Pés',
            description: 'Combinação de massagem com pedras quentes e escalda pés, promovendo relaxamento e alívio profundo das tensões musculares.',
            image: bemEstarImg,
            duration: '90 minutos',
            price: 'R$240,00'
            // Este tratamento não possui a propriedade 'purpose'
          },
          {
            id: 'candle-massage-escalda-pes',
            title: 'Candle Massage + Escalda Pés',
            description: 'Massagem com velas que se transformam em óleos essenciais combinada com escalda pés. Uma experiência de relaxamento e bem-estar.',
            image: bemEstarImg,
            duration: '90 minutos',
            price: 'R$240,00'
            // Este tratamento não possui a propriedade 'purpose'
          }
        // Adicione mais produtos aqui
      ],
    },
  ];

  export default productsData;
