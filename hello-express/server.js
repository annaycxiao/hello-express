var express = require('express');
var bodyParser = require('body-parser');
// var fs = require('fs');

var app = express();

var indexRouter = require('./routers/index');
var usersRouter = require('./routers/users');

app.use('/', indexRouter);

app.use('/users', usersRouter);
// app.use('/asset', express.static('public'));

// app.use(function(req, res, next) {
//     console.log('first middleware');
//     next();
//     console.log('first middleware after');
// });

// app.use('/home', function(req, res, next) {
//     console.log('second middleware');
//     res.send('ok');
// });

// app.use('/users', function(req, res, next) {
//     res.send('users');
// });

// app.get('/', function(req, res, next) {
//     res.send('root');
// })

// app.get('/', function(req, res, next) {
//     res.send('ok');
// })

// app.set('view engine', 'ejs');

// var multer = require('multer');

// var createFolder = function(folder) {
//     try {
//         fs.accessSync(folder);
//     } catch(e) {
//         fs.mkdirSync(folder);
//     }
// };

// var uploadFolder = './upload/';
// createFolder(uploadFolder);

// var storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, uploadFolder);
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// var upload = multer({ storage: storage});

// var jsonParser = bodyParser.json();

// var urlencodedParser = bodyParser.urlencoded({ entended: false});

// app.get('/', function(req, res) {
//     console.dir(req.query);
//     res.send('home page: ' + req.query.find);
// });

// app.get('/form/:name', function(req, res) {
//     var data = {age: 18, job: "programmer", hobbies:['eating','fighting','fishing']};
//     res.render('form', {data: data});
// });

// app.get('/about', function(req, res) {
//     res.render('about');
// });

// app.post('/', urlencodedParser, function(req, res) {
//     console.dir(req.body);
//     res.send(req.body.name);
// })

// app.post('/upload', upload.single('logo'), function(req, res) {
//     console.dir(req.file);
//     res.send({'ret_code': 0});
// });

// app.get('/profile/:id/:name', function(req, res) {
//     console.dir(req.params);
//     res.send('You requested to see profile page with the name of ' + req.params.name);
// });

// app.get('/ab?cd', function(req, res) {
//     res.send('/ab?cd');
// });

app.listen(3000);
console.log('listening to port 3000');