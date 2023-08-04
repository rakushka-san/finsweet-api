# Finsweet API

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

## Production server

Run `docker-compose up -d --build` to build docker image and run docker container. Navigate to `http://localhost:3000/`. You can also setup the frontend part of application: [Finsweet](https://github.com/rakushka-san/finsweet).

## Sample Data

Run `node fill-db.js` in container terminal to fill database with sample data
