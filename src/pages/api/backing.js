import { request } from "graphql-request";
import { BACKING_QUERY } from "../../api/queries";

export default async (_, res) => {
  try {
    const response = await request(
      process.env.PISSBET_API_ENDPOINT,
      BACKING_QUERY
    );

    res.statusCode = 200;
    res.json(response);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.json({ message: "Internal server error" });
  }
};
