export default {
    name: 'Guanchen Song',
    headerTagline: [
        // Line one for header
        'Hi nice to meet you! I am Guanchen from China.',
        // Line two for header
        'I am living in Uppsala, Sweden.',
        // Line three for header
        'I love working with data and building websites!'
    ],
    // Contact email
    contactEmail: 'guanchen.song.797@gmail.com',
    // About 
    aboutText: 'I am Guanchen. I am a happy and ambitious person who has a “ want to learn” personality. Previously, I was working for artificial intelligence in human language interactions. Since then I enjoy writing codes and analyzing data.',
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
