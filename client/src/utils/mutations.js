
import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation SaveBook($input: savedBook) {
        SaveBook(Book: $Book) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookID
                authors
                image
                link
                title
                description
            }
        }
    }

`;
export const REMOVE_BOOK = gql`
    mutation removeBook($bookID: Stirng!) {
        removeBook(bookID: $bookID) {
            bookID
            username
            email
            bookCount
            savedBooks {
                bookID
                authors
                image
                link
                title
                description
            }
        }
    }
`;