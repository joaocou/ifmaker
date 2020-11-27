const content = `
**Sobre o IFMS**

O Instituto Federal de Educação, Ciência e Tecnologia de Mato Grosso do Sul (IFMS) tem dez campi instalados nos municípios de Aquidauana, Campo Grande, Corumbá, Coxim, Dourados, Jardim, Naviraí, Nova Andradina, Ponta Porã e Três Lagoas. A reitoria, órgão executivo da instituição, está localizada na capital, Campo Grande. 

O IFMS oferta desde qualificação profissional até pós-graduação, com opções de cursos presenciais e a distância.
`

const about = {
    content,
    cards: [
        { title: 'Missão', text: 'Promover a educação de excelência por meio do ensino, pesquisa e extensão nas diversas áreas do conhecimento técnico e tecnológico, formando profissional humanista e inovador, com vistas a induzir o desenvolvimento econômico e social local, regional e nacional.', },
        { title: 'Visão', text: 'Ser reconhecido como uma instituição de ensino de excelência, sendo referência em educação, ciência e tecnologia no Estado de Mato Grosso do Sul.', },
        { title: 'Valores', text: '- Inovação - Ética - Compromisso com o desenvolvimento local e regional - Transparência - Compromisso social', }
    ],
}

const labs = [
    {
        slug: "aquidauana",
        name: "Aquidauana",
        images: [
            { url: "https://images.unsplash.com/photo-1604798498937-d76c1627b218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "01" },
            { url: "https://images.unsplash.com/photo-1569089707420-aa6b948dde01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "02" },
            { url: "https://images.unsplash.com/photo-1604611364011-706e9e1f2573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "03" },
        ],
        team: [
            { name: "Fulano da Silva", role: "Exemplo", avatar: "/icon.png" },
            { name: "Ciclano da Silva", role: "Outro exemplo", avatar: "/icon.png" },
            { name: "Deltrano da Silva", role: "Mais um exemplo", avatar: "/icon.png" },
        ],
        map: "/mapas/aquidauana.png"
    }, 
    {
        slug: "campo-grande",
        name: "Campo Grande",
        images: [
            { url: "https://images.unsplash.com/photo-1569089707420-aa6b948dde01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "02" },
            { url: "https://images.unsplash.com/photo-1604611364011-706e9e1f2573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "03" },
            { url: "https://images.unsplash.com/photo-1604798498937-d76c1627b218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "01" },
        ],
        team: [
            { name: "Deltrano da Silva", role: "Mais um exemplo", avatar: "/icon.png" },
            { name: "Fulano da Silva", role: "Exemplo", avatar: "/icon.png" },
            { name: "Ciclano da Silva", role: "Outro exemplo", avatar: "/icon.png" },
        ],
        map: "/mapas/campo-grande.png"
    }, 
    {
        slug: "corumba",
        name: "Corumbá",
        images: [
            { url: "https://images.unsplash.com/photo-1604611364011-706e9e1f2573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "03" },
            { url: "https://images.unsplash.com/photo-1604798498937-d76c1627b218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "01" },
            { url: "https://images.unsplash.com/photo-1569089707420-aa6b948dde01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "02" },
        ],
        team: [
            { name: "Fulano da Silva", role: "Exemplo", avatar: "/icon.png" },
            { name: "Deltrano da Silva", role: "Mais um exemplo", avatar: "/icon.png" },
            { name: "Ciclano da Silva", role: "Outro exemplo", avatar: "/icon.png" },
        ],
        map: "/mapas/corumba.png"
    }, 
    {
        slug: "coxim",
        name: "Coxim",
        images: [
            { url: "https://images.unsplash.com/photo-1569089707420-aa6b948dde01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "02" },
            { url: "https://images.unsplash.com/photo-1604798498937-d76c1627b218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "01" },
            { url: "https://images.unsplash.com/photo-1604611364011-706e9e1f2573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "03" },
        ],
        team: [
            { name: "Fulano da Silva", role: "Exemplo", avatar: "/icon.png" },
            { name: "Ciclano da Silva", role: "Outro exemplo", avatar: "/icon.png" },
            { name: "Deltrano da Silva", role: "Mais um exemplo", avatar: "/icon.png" },
        ],
        map: "/mapas/coxim.png"
    }, 
    {
        slug: "dourados",
        name: "Dourados",
        images: [
            { url: "https://images.unsplash.com/photo-1604798498937-d76c1627b218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "01" },
            { url: "https://images.unsplash.com/photo-1569089707420-aa6b948dde01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "02" },
            { url: "https://images.unsplash.com/photo-1604611364011-706e9e1f2573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "03" },
        ],
        team: [
            { name: "Fulano da Silva", role: "Exemplo", avatar: "/icon.png" },
            { name: "Ciclano da Silva", role: "Outro exemplo", avatar: "/icon.png" },
            { name: "Deltrano da Silva", role: "Mais um exemplo", avatar: "/icon.png" },
        ],
        map: "/mapas/dourados.png"
    }, 
    {
        slug: "jardim",
        name: "Jardim",
        images: [
            { url: "https://images.unsplash.com/photo-1604611364011-706e9e1f2573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "03" },
            { url: "https://images.unsplash.com/photo-1604798498937-d76c1627b218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "01" },
            { url: "https://images.unsplash.com/photo-1569089707420-aa6b948dde01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "02" },
        ],
        team: [
            { name: "Ciclano da Silva", role: "Outro exemplo", avatar: "/icon.png" },
            { name: "Fulano da Silva", role: "Exemplo", avatar: "/icon.png" },
            { name: "Deltrano da Silva", role: "Mais um exemplo", avatar: "/icon.png" },
        ],
        map: "/mapas/jardim.png"
    }, 
    {
        slug: "navirai",
        name: "Naviraí",
        images: [
            { url: "https://images.unsplash.com/photo-1569089707420-aa6b948dde01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "02" },
            { url: "https://images.unsplash.com/photo-1604798498937-d76c1627b218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "01" },
            { url: "https://images.unsplash.com/photo-1604611364011-706e9e1f2573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "03" },
        ],
        team: [
            { name: "Fulano da Silva", role: "Exemplo", avatar: "/icon.png" },
            { name: "Deltrano da Silva", role: "Mais um exemplo", avatar: "/icon.png" },
            { name: "Ciclano da Silva", role: "Outro exemplo", avatar: "/icon.png" },
        ],
        map: "/mapas/navirai.png"
    }, 
    {
        slug: "nova-andradina",
        name: "Nova Andradina",
        images: [
            { url: "https://images.unsplash.com/photo-1604798498937-d76c1627b218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "01" },
            { url: "https://images.unsplash.com/photo-1569089707420-aa6b948dde01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "02" },
            { url: "https://images.unsplash.com/photo-1604611364011-706e9e1f2573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "03" },
        ],
        team: [
            { name: "Fulano da Silva", role: "Exemplo", avatar: "/icon.png" },
            { name: "Ciclano da Silva", role: "Outro exemplo", avatar: "/icon.png" },
            { name: "Deltrano da Silva", role: "Mais um exemplo", avatar: "/icon.png" },
        ],
        map: "/mapas/nova-andradina.png"
    }, 
    {
        slug: "ponta-pora",
        name: "Ponta Porã",
        images: [
            { url: "https://images.unsplash.com/photo-1604611364011-706e9e1f2573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "03" },
            { url: "https://images.unsplash.com/photo-1604798498937-d76c1627b218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "01" },
            { url: "https://images.unsplash.com/photo-1569089707420-aa6b948dde01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "02" },
        ],
        team: [
            { name: "Ciclano da Silva", role: "Outro exemplo", avatar: "/icon.png" },
            { name: "Fulano da Silva", role: "Exemplo", avatar: "/icon.png" },
            { name: "Deltrano da Silva", role: "Mais um exemplo", avatar: "/icon.png" },
        ],
        map: "/mapas/ponta-pora.png"
    }, 
    {
        slug: "tres-lagoas",
        name: "Três Lagoas",
        images: [
            { url: "https://images.unsplash.com/photo-1569089707420-aa6b948dde01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "02" },
            { url: "https://images.unsplash.com/photo-1604798498937-d76c1627b218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "01" },
            { url: "https://images.unsplash.com/photo-1604611364011-706e9e1f2573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", alt: "03" },
        ],
        team: [
            { name: "Deltrano da Silva", role: "Mais um exemplo", avatar: "/icon.png" },
            { name: "Fulano da Silva", role: "Exemplo", avatar: "/icon.png" },
            { name: "Ciclano da Silva", role: "Outro exemplo", avatar: "/icon.png" },
        ],
        map: "/mapas/tres-lagoas.png"
    }, 
]

const postContent = `
Não seria ótimo se a sua planta pudesse avisar você quando está precisando de água ? Com o sensor de umidade do solo higrômetro e um Arduino, isso é possível. Monte um sistema para monitorar sua planta usando Arduino com as instruções deste post, que utiliza poucos componentes para criar um indicador visual de nível de umidade do solo e saúde da sua plantinha.

Neste projeto, temos três leds que acendem conforme o nível detectado pelo sensor de umidade: vermelho para solo seco, amarelo para umidade moderada e verde para solo úmido.

O sensor de umidade do solo consiste em 2 partes: uma sonda que entra em contato com o solo, e um pequeno módulo contendo um chip comparador LM393 (datasheet), que vai ler os dados que vêm do sensor e enviá-los para o microcontrolador, no nosso caso, um Arduino Uno. Como saída, temos um pino D0, que fica em nível 0 ou 1 dependendo da umidade, e um pino de saída analógica (A0), que possibilita monitorar com maior precisão usando uma porta analógica do microcontrolador.

O módulo tem um led que indica quando a placa está sendo alimentada corretamente, e outro que acende quando a saída digital for acionada. A sensibilidade do módulo é ajustada por meio do potenciômetro existente na placa.


## Conexão do sensor ao Arduino

No nosso exemplo vamos usar a porta analógica A0 do Arduino para ler os valores do pino A0 do módulo. Os leds serão ligados às portas digitais 5, 6 e 7.


[...]


Texto retirado de [https://www.filipeflop.com/blog/monitore-sua-planta-usando-arduino/](https://www.filipeflop.com/blog/monitore-sua-planta-usando-arduino/)
`

const posts = [
    { title: "Horta automatizada com arduino", slug: 'horta-automatizada-com-arduino', section: 'O que fazemos', category: 'Microcontroladores', campus: 'Aquidauana', image: "https://images.unsplash.com/photo-1599851149285-1d70e22d57cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=", content: postContent },
    { title: "Robótica utilizando Lego", slug: 'robotica-utilizando-lego', section: 'O que fazemos', category: 'Robótica', campus: 'Campo Grande', image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", content: postContent },
    { title: "Modelagem de equipamentos", slug: 'modelagem-de-equipamentos', section: 'O que fazemos', category: 'Design', campus: 'Corumbá', image: "https://images.unsplash.com/photo-1600869009558-c0dca8dcbc37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", content: postContent },
    { title: "Impressão de artigos em 3D", slug: 'impressao-de-artigos-em-3d', section: 'O que fazemos', category: 'Impressão 3D', campus: 'Coxim', image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60", content: postContent },
]

const equipmentContent = `
Corta vinil com precisão e velocidade. Com ela, você pode fazer estampas para camisetas, sinalizações para vidros e adesivos para qualquer superfície lisa.

Para utilizar o equipamento, observe os requisitos de segurança e EPI’s necessários:
- Calça comprida sem rasgos;
- Sapato fechado;
- Caso tenha cabelos compridos, é necessário prendê-los;
- Retire os relógios e demais adornos.



**Tutoriais:**

- [https://instructables.com/id/Vinyl-Cutting-for-begginers/](https://instructables.com/id/Vinyl-Cutting-for-begginers/)
- [https://instructables.com/id/Vinyl-Laptop-Decal/](https://instructables.com/id/Vinyl-Cutting-for-begginers/)

**Tipos de Arquivos:** JPG, AI, EPS

**Softwares utilizados:** CutStudio, FabModules

**Largura máxima:** 600mm
`

const equipments = [
    { title: "Cortadora a laser: Duplotech 1080", category: "Cortadora a laser", campus: "Aquidauana", image: "/equipamentos/duplotech.png", content: equipmentContent },
    { title: "Cortadora de vinil: Roland CAMM-1Servo", category: "Cortadora de vinil", campus: "Campo Grande", image: "/equipamentos/roland.png", content: equipmentContent },
    { title: "Cortadora a laser: Epilog Laser Legend Mini 24", category: "Cortadora a laser", campus: "Corumbá", image: "/equipamentos/epilog.png", content: equipmentContent },
    { title: "Impressora 3D: Zmorph", category: "Impressora 3D", campus: "Coxim", image: "/equipamentos/zmorph.png", content: equipmentContent },
    { title: "Fresadora de grande formato: ShopBot", category: "Fresadora", campus: "Jardim", image: "/equipamentos/shopbot.png", content: equipmentContent },
    { title: "Serra: Tico Tico de bancada Makita", category: "Serra", campus: "Aquidauana", image: "/equipamentos/makita.png", content: equipmentContent },
]

const events = [
    { date: '2020-11-20', time: '13:00', city: 'Aquidauana', campus: 'Aquidauana', title: 'Programa Trainee como oportunidade de início de carreira', content: 'Webinar Após um período de poucas oportunidades, os programas de trainees estão voltando...' },
    { date: '2020-11-21', time: '13:00', city: 'Campo Grande', campus: 'Campo Grande', title: 'Urbanismo Social: próximos passos, desafios e oportunidades', content: 'Webinar Medellín venceu a morte: de cidade mais violenta do mundo, um dos mais importantes...' },
    { date: '2020-11-22', time: '13:00', city: 'Corumbá', campus: 'Corumbá', title: 'Avanços e desafios de compliance na Prevenção à Lavagem de Dinheiro', content: 'Webinar As práticas de compliance ganham cada vez mais espaço no mercado financeiro e têm se estendido...' },
    { date: '2020-11-23', time: '13:00', city: 'Coxim', campus: 'Coxim', title: 'Como Estratégia e Design se conectam?', content: 'Webinar Em um ambiente de intensas mudanças, as organizações começam a entender que a sua proposta...' },
    { date: '2020-11-24', time: '13:00', city: 'Dourados', campus: 'Nova Andradina', title: 'Programa Trainee como oportunidade de início de carreira', content: 'Webinar Após um período de poucas oportunidades, os programas de trainees estão voltando…' },
    { date: '2020-11-25', time: '13:00', city: 'Jardim', campus: 'Jardim', title: 'Urbanismo Social: próximos passos, desafios e oportunidades', content: 'Webinar Após um período de poucas oportunidades, os programas de trainees estão voltando…' },
    { date: '2020-11-26', time: '13:00', city: 'Naviraí', campus: 'Naviraí', title: 'Avanços e desafios de compliance na Prevenção à Lavagem de Dinheiroa', content: 'Webinar Após um período de poucas oportunidades, os programas de trainees estão voltando…' },
    { date: '2020-11-27', time: '13:00', city: 'Nova Andradina', campus: 'Nova Andradina', title: 'Como Estratégia e Design se conectam?', content: 'Webinar Após um período de poucas oportunidades, os programas de trainees estão voltando…' },
    { date: '2020-11-28', time: '13:00', city: 'Ponta Porã', campus: 'Ponta Porã', title: 'Programa Trainee como oportunidade de início de carreira', content: 'Webinar Após um período de poucas oportunidades, os programas de trainees estão voltando…' },
    { date: '2020-11-29', time: '13:00', city: 'Três Lagoas', campus: 'Três Lagoas', title: 'Urbanismo Social: próximos passos, desafios e oportunidades', content: 'Webinar Após um período de poucas oportunidades, os programas de trainees estão voltando…' },
];

export { about, labs, posts, equipments, events }