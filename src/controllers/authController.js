const authController = {
    getLoginScreen: (request, response) => {
        return response.render('index');
    },
    login: (request, response) => {

        
        return response.redirect('home')
    }
}

module.exports = authController;