import express from 'express'
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
    res.send('Graphql is amazing!');
});

const root = { friend: () => {
    return {
        "id": 387638767682,
        "firstName":"Jenny",
        "lastName":"Huo",
        "gender":"Female",
        "email":"me@me.com"
    }
}};

app.use('/graphql', graphqlHTTP ({
    schema: schema,
    rootValue: root,
    graphiql:true,
}));

app.listen(8080, () => console.log("Running on server port localhost:8080/graphql"));