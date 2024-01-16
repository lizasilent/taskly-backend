const { buildSchema } = require("graphql");

const schema = buildSchema(
  ` type User {
        id: ID
        role: String
        name: String
        lastname: String
        age: Int
        
    },
    type List {
        id: ID
        list: [ListItem]
    }

    type ListItem {
        id: ID
        item: String

    }`
);

module.exports = schema;
