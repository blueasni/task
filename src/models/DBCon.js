const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../database.sqlite'
});

/*const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWWORD, {
  host: 'DH_HOST',
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle'
}); 
*/
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
