db = db.getSiblingDB('api_prod_db');
db.createUser({
  user: 'mongoadmin',
  pwd: 'secret',
});
