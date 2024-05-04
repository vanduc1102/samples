import request from "supertest";
import createApp from "./app";

describe("GET /", () => {
  test("should return 200 OK", async () => {
    const app = await createApp();
    const response = await request(app.callback()).get("/health");
    expect(response.status).toBe(200);
  });
});
