const loginController = {
    logar: (req, res)=>{
        let {nome, email} = req.query;
        res.send('logado')
    }
}

module.exports = loginController;