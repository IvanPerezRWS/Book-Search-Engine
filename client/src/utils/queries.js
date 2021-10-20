
import gql from 'graphql-tag'
export const Get_ME = gql`
query {
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookID
            authors
            image
            title
            description
        }
    }
}
`;
//*