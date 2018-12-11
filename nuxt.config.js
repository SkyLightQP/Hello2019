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
        {src: '~/assets/css/font.scss', lang: 'sass'},
        {src: 'bootstrap/dist/css/bootstrap.css'}
    ],

    build: {
        vendor: [
            'bootstrap/dist/js/bootstrap.bundle.js'
        ]
    }
}