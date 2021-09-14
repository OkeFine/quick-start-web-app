sequelize migration: https://sequelize.org/master/manual/migrations.html

DB folder: /src/db

DB config: /src/db/database.js

Create model: npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,roleId:integer

Running Migrations: npx sequelize-cli db:migrate
