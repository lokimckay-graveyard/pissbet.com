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

export const BETS_AND_MATCHES_QUERY = gql`
  {
    allBets {
      id
      participantId: participant_id
      matchId: match_id
      playerNumber: player_number
      volume
    }
    allMatches {
      id
      player1Id: player_1_id
      player2Id: player_2_id
      bettingOpen: betting_open
      winningPlayerId: winning_player_id
    }
  }
`;

export const BACKING_QUERY = gql`
  {
    currentOpenMatch {
      id
      player1Tag: player_1_tag
      player1BetTotal: player_1_bet_total
      player2Tag: player_2_tag
      player2BetTotal: player_2_bet_total
    }
  }
`;
