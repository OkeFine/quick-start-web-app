## Structure

    - src
    --- apis
    ------ private (private apis, need to verify header token)
    --------- controllers (handle the logic)
    --------- routers (define the route and bind to the controller)
    ------ public (public apis)
    --------- controllers
    --------- routers
    --- db (sequelize migrations && models)
    ------ migrations
    ------ models
    ------ seeders
    ------ database.json (config database conection)
    --- middlewares
    --- public (public assets)
    --- utils (helper functions and constants)

## Database & Migrations

I am using MYSQL and [Sequelize](https://sequelize.org/) to connect, migrate and query database

- Create Model (/db/migrations): `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,roleId:integer`
- Running Migrations: `npx sequelize-cli db:migrate`
- Create seed (/db/seeders): `npx sequelize-cli seed:generate --name demo-user`
- Run seed: `npx sequelize-cli db:seed:all`

[===> Read more about sequelize-cli](https://sequelize.org/master/manual/migrations.html)

## Start API

Before running the app, you need to create `.env` file, you may clone from `.env.sample`

In the project directory, you can run:

### `npx sequelize-cli db:migrate`

run migrations

### `npx sequelize-cli db:seed:all`

run data seeders

### `yarn start`

Runs the app in the development mode.<br/>
The API server will run at [http://localhost:8081](http://localhost:8081)

### `yarn run prod`

Runs the app in the production mode.<br/>
