module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/assets/styles/variables.scss";'
            },
        },
    },
    configureWebpack: {
        plugins: [
            new WebpackPlugin()]
    }
};