import { HandlerContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  if (
    _req.method !== "POST" ||
    _req.headers.get("content-type") !== "application/json"
  ) return new Response("", { status: 404 });
  const data = await _req.json();
  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
};
