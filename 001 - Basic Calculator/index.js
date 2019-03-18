var open = require('opn');
var querystring = require('querystring');
var url = reuqire('url');
var server = require('http').createServer(function(request, response) {

});
server.listen(3000, () => open({
    'index.html'
}));