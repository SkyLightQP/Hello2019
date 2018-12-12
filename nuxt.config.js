module.exports = {
    loading: {
        color: 'yellow'
    },

    head: {
        title: '안녕! 2019!',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ]
    },

    css: [
        {src: '~/assets/css/font.scss', lang: 'sass'}
    ],

    modules: [
        ['@nuxtjs/google-analytics', {
            id: 'UA-69668170-9'
        }]
    ]
}