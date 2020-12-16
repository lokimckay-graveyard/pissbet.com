import { request } from "graphql-request";
import { LEADERBOARD_QUERY } from "../../api/queries";

export default async (req, res) => {
  try {
    const {
      query: { count: _count, offset: _offset },
    } = req;

    const count = parseInt(_count);
    const offset = parseInt(_offset);
    const response = await request(
      process.env.PISSBET_API_ENDPOINT,
      LEADERBOARD_QUERY,
      {
        count,
        offset,
      }
    );

    res.statusCode = 200;
    res.json(response);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ message: "Internal server error" });
  }
};
