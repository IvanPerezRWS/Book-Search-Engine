

const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: int
    savedBooks: [Book]
}

type Book {
    bookID: ID!
    authors: [String]
    image: String
    link: String
    title String!
    description: string

}

type Query {
    me: User
    users: [User]
    user(username: String!); User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(usename: Sting!, email: String!, password: String!): Auth
    SaveBook(bookId: ID!, bookBody: String!); Book
    removeBook()
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;