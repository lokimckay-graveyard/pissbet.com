import { gql } from "graphql-request";

export const LEADERBOARD_QUERY = gql`
  query Leaderboard($count: Int = 10, $offset: Int = 0) {
    participants(count: $count, offset: $offset) {
      id
      username
      balance
    }
    totalParticipants: countParticipants
  }
`;
