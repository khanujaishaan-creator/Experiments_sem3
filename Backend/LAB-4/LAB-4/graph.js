import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        Name: String
        Email: String
        RollNo: Int
    }
`);

const root = {
    Name: () => {
        return "Lakshya";
    },

    Email: () => {
        return "lakshya@example.com";
    },

    RollNo: () => {
        return 20;
    }
};

const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/graphql");
});