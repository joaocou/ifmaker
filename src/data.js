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
        map: "/mapa.png"
    }, 
    {
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
        map: "/mapa.png"
    }, 
    {
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
        map: "/mapa.png"
    }, 
    {
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
        map: "/mapa.png"
    }, 
    {
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
        map: "/mapa.png"
    }, 
    {
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
        map: "/mapa.png"
    }, 
    {
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
        map: "/mapa.png"
    }, 
    {
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
        map: "/mapa.png"
    }, 
    {
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
        map: "/mapa.png"
    }, 
    {
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
        map: "/mapa.png"
    }, 
]

const posts = [
    { title: "Fabricação de PCBs de baixo custo", image: "https://images.unsplash.com/photo-1599851149285-1d70e22d57cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=   " },
    { title: "Robótica utilizando Lego", image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { title: "Modelagem de equipamentos", image: "https://images.unsplash.com/photo-1600869009558-c0dca8dcbc37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { title: "Impressão de artigos em 3D", image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
]

const equipments = [
    { title: "Cortadora a laser: Duplotech 1080", image: "/equipamentos/duplotech.png" },
    { title: "Cortadora de vinil: Roland CAMM-1Servo", image: "/equipamentos/roland.png" },
    { title: "Cortadora a laser: Epilog Laser Legend Mini 24", image: "/equipamentos/epilog.png" },
    { title: "Impressora 3D: Zmorph", image: "/equipamentos/zmorph.png" },
    { title: "Fresadora de grande formato: ShopBot", image: "/equipamentos/shopbot.png" },
    { title: "Serra: Tico Tico de bancada Makita", image: "/equipamentos/makita.png" },
]

const events = [
    { date: '20/11/2020', time: '13:00', place: 'Campus Aquidauana', campus: 'Campus Aquidauana', title: 'Programa Trainee como oportunidade de início de carreira', content: 'Webinar Após um período de poucas oportunidades, os programas de trainees estão voltando...' },
    { date: '21/11/2020', time: '13:00', place: 'Campus Campo Grande', campus: 'Campus Campo Grande', title: 'Urbanismo Social: próximos passos, desafios e oportunidades', content: 'Webinar Medellín venceu a morte: de cidade mais violenta do mundo, um dos mais importantes...' },
    { date: '22/11/2020', time: '13:00', place: 'Campus Corumbá', campus: 'Campus Corumbá', title: 'Avanços e desafios de compliance na Prevenção à Lavagem de Dinheiro', content: 'Webinar As práticas de compliance ganham cada vez mais espaço no mercado financeiro e têm se estendido...' },
    { date: '23/11/2020', time: '13:00', place: 'Campus Coxim', campus: 'Campus Coxim', title: 'Como Estratégia e Design se conectam?', content: 'Webinar Em um ambiente de intensas mudanças, as organizações começam a entender que a sua proposta...' },
    { date: '24/11/2020', time: '13:00', place: 'Campus Nova Andradina', campus: 'Campus Nova Andradina', title: 'Programa Trainee como oportunidade de início de carreira', content: 'Webinar Após um período de poucas oportunidades, os programas de trainees estão voltando…' },
    { date: '25/11/2020', time: '13:00', place: 'Campus Jardim', campus: 'Campus Jardim', title: 'Programa Trainee como oportunidade de início de carreira', content: 'Webinar Após um período de poucas oportunidades, os programas de trainees estão voltando…' },
];

export { about, labs, posts, equipments, events }