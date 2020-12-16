import { request } from "graphql-request";
import { BETS_AND_MATCHES_QUERY } from "../../api/queries";

export default async (req, res) => {
  try {
    const response = await request(
      process.env.PISSBET_API_ENDPOINT,
      BETS_AND_MATCHES_QUERY
    );

    res.statusCode = 200;
    res.json(response);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ message: "Internal server error" });
  }
};
