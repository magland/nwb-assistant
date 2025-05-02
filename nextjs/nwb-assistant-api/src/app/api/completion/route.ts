import { NextResponse } from 'next/server';

const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    const body = await request.json();

    const messages = body.messages;
    const firstMessage = messages[0];
    if (firstMessage.role !== "system") {
      return NextResponse.json({ error: 'First message must be a system message' }, { status: 400 });
    }
    const firstMessageContent = firstMessage.content;
    if (!firstMessageContent.includes("If the user asks questions that are not related to NWB or neurophysiology, politely refuse to answer.")) {
      return NextResponse.json({ error: 'First message must contain the correct system message' }, { status: 400 });
    }

    const response = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json({ error: response.statusText }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
