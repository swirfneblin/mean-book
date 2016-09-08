# Projeto Loc8r exemplo do livro "MEAN Definitivo"

## Aplicação com MongoDB, Nodejs, Express, AngularJs, listando redes estabelecimentos com wifi e sistema interativo de classificação

* Angular: https://angularjs.org/
* Heroku: https://toolbelt.heroku.com/
* Bootstrap: http://getbootstrap.com/getting-started/#download
* Express

sudo npm install -g express-generator
express (create project)

## Heroku (https://intense-thicket-26081.herokuapp.com)

* git remote add heroku git@heroku.com:intense-thicket-26081.git
* heroku git:remote -a intense-thicket-26081
* heroku local web
* git push heroku master
* heroku config:set NODE_ENV=production
* heroku config:set MONGOLAB_URI=mongodb://:@:/loc8r