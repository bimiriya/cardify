const chai = require('chai');
const jsdom = require('jsdom');
const {
  JSDOM
} = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">' + 
    '<meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge">' + 
    '<title>Evolution Cards!</title><link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">' + 
    '<link rel="stylesheet" href="assets/css/styles.css"></head><body><div class="container-fluid background">' + 
    '<div class="row"><div class="col-md-12"><img src="assets/images/International_Poke_logo.png" class="poke-logo" alt="logo">' + 
    '</div><div class="col-md-12"><h1>Evolutions Cards</h1></div></div><div class="panel panel-primary panel-instructions">' + 
    '<div class="panel-heading"><h2 class="panel-title">Instrucciones (Muy Simples!)</h3></div><div class="panel-body">' + 
    '<ul class="notes"><li>Haz click en cualquier Pokémon para ver su evolución ^_~</li>' + 
    '<li>PD: Realizado con fines meramente de diversión</li><li>PD 2: Momentáneamente NO incluiremos evoluciones Alola</li>' + 
    '</ul></div></div><section><div class="row"><div class="col-md-3 col-sm-6 col-xs-12">' + 
    '<img src="assets/images/basic-pokes/sandshrew.png" data-evo="assets/images/evo-pokes/sandslash.png" alt="Sandshrew Sandslash">' + 
    '</div><div class="col-md-3 col-sm-6 col-xs-12">' + 
    '<img src="assets/images/basic-pokes/Venonat.png" data-evo="assets/images/evo-pokes/Venomoth.png" alt="Venonat Venomoth">' + 
    '</div><div class="col-md-3 col-sm-6 col-xs-12">' + 
    '<img src="assets/images/basic-pokes/Vulpix.png" data-evo="assets/images/evo-pokes/Ninetales.png" alt="Vulpix Ninetales">' + 
    '</div><div class="col-md-3 col-sm-6 col-xs-12">' + 
    '<img src="assets/images/basic-pokes/Meowth.png" data-evo="assets/images/evo-pokes/Persian.png" alt="Meowth Persian">' + 
    '</div></div><div class="row"><div class="col-md-3 col-sm-6 col-xs-12">' + 
    '<img src="assets/images/basic-pokes/Diglett.png" data-evo="assets/images/evo-pokes/Dugtrio.png" alt="Diglett Dugtrio">' + 
    '</div><div class="col-md-3 col-sm-6 col-xs-12">' + 
    '<img src="assets/images/basic-pokes/Growlithe.png" data-evo="assets/images/evo-pokes/Arcanine.png" alt="Growlithe Arcanine">' + 
    '</div><div class="col-md-3 col-sm-6 col-xs-12">' + 
    '<img src="assets/images/basic-pokes/Ponyta.png" data-evo="assets/images/evo-pokes/Rapidash.png" alt="Ponyta Rapidash">' + 
    '</div><div class="col-md-3 col-sm-6 col-xs-12">' + 
    '<img src="assets/images/basic-pokes/Psyduck.png" data-evo="assets/images/evo-pokes/Golduck.png" alt="Psyduck Golduck">' + 
    '</div></div></section></div><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>' + 
    '</body></html>');
const {
  window
} = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

var $ = require('jquery');
const cardify = require('../src/index');
var expect = require('chai').expect;

describe('img attr alt should not be empty', () => {
  it('img attr alt is not empty', () => {
    var dot = $('img').attr('alt').lastIndexOf('.');
    expect($('img').attr('alt').slice(dot)).to.not.equal(0);
  });
});