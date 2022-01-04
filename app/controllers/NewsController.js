const res = require("express/lib/response");

class NewsController {
    index(req, res) {
        res.send('news controller index');
    }
    
    show(req, res) {
        res.send('show function');
    }
}

module.exports = new NewsController;
