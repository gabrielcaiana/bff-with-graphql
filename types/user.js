const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// declare the user type.
const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        username: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
})

module.exports = UserType;