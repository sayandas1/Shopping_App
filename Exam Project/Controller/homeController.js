exports.homePage = (req, res) => {
    res.render('Home/home_page', {
        titlePage: "Home",
        path: '/home'
    })
}