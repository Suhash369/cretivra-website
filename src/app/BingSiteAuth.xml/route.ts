import { NextResponse } from "next/server";

export async function GET() {
  const xml = `<?xml version="1.0"?>
<users>
	<user>6704B5F1A29B47E9244FF3B298FDC8A8</user>
</users>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
