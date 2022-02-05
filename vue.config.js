// for gitlab pages
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/' + process.env.CI_PROJECT_NAME + '/'
        : '.'
}

/*
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? 'PATH_A_REMPLIR'
        : '.'
}
*/

