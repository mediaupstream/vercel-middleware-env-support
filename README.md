My environment:
```
node version: 16.6.2
yarn version: 1.22.5
```

Two projects:

```
npx create-react-app cra
npx create-next-app next-app
```

both have a basic `middleware.js` (edge middleware) that just logs the `process.env.API_URL`
both have an `.env` with 

```
API_URL=http://localhost:8081
```

Start cra:

```
cd cra
yarn
vercel dev
```
open up `localhost:3000` and see the error message 

```
500: INTERNAL_SERVER_ERROR
```

------

Start next-app:

```
cd next-app
yarn
yarn dev
```
open up `localhost:3000` and see it's working as expected, also note the console log in the terminal showing the correct value

```
{ API_URL: 'http://localhost:8081' }
```

