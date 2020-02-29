export default {
    name: 'Guanchen Song',
    // Contact email
    contactEmail: 'guanchen.song.797@gmail.com',
    // Project
    projects: [
        {
            id: 1,
            title: 'Todo List',
            service: 'Web Development',
            tools: 'React, JavaScript, CSS',
            imageSrc: require('./assets/todo.png'),
            url:'https://github.com/guanchen18/todo-app',
        },
        {
            id: 2,
            title: 'Weather App',
            service: 'Web Development',
            tools: 'React, JavaScript, CSS',
            imageSrc: require('./assets/weather.jpg'),
            url:'https://github.com/guanchen18/know-weather-react-app/',
        },
        {
            id: 3,
            title: 'Poketimes',
            service:'Web Development',
            tools: 'React router, AWS, Javascript, CSS',
            imageSrc: require('./assets/poke.png'),
            url:'https://github.com/guanchen18/react-router-poketimes/'
        },
        {
            id: 4,
            title: 'Word Embeddings',
            service:'Natural Language Processing, Machine Learning',
            tools: 'Python, Pandas, NumPy, Sklearn, Big data, Master thesis',
            imageSrc: require('./assets/wordEmbed.png'),
            url:'http://uu.diva-portal.org/smash/record.jsf?pid=diva2%3A1359740%22&dswid=9702'
        },
    ],
    // Social contacts 
    social: [
        {name: 'Github', url: 'https://github.com/guanchen18/'},
        {name: 'LinkedIn', url: 'https://www.linkedin.com/in/guanchensong/'},
        {name: 'Email', url: 'guanchen.song.797@gmail.com'},
    ]
}
