import { gql } from '@apollo/client';
// apollo queries (troy)
export const QUERY_USERS = gql`
query{
    users{
      _id
      username
      email
    }
  }
`;