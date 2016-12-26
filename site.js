var fs = require('fs');
var Handlebars = require('handlebars');
var koara = require('koara');
var koaraHtml = require('koara-html');

var result = new koara.Parser().parse(fs.readFileSync('index.kd', "utf8"))
var renderer = new koaraHtml.Html5Renderer();
renderer.headingIds = true;
result.accept(renderer);

var template = Handlebars.compile(fs.readFileSync('layout.html', "utf8"));
var html = template({body: renderer.getOutput()});

fs.writeFileSync("index.html", html);