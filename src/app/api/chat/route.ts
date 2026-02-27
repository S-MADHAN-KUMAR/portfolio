import { NextRequest, NextResponse } from "next/server";
import { getPortfolioContext } from "@/lib/portfolio-context";

const OLLAMA_URL = "https://ollama.com/api/chat";
const MODEL = process.env.OLLAMA_CHAT_MODEL || "gpt-oss:120b-cloud";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.OLLAMA_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OLLAMA_API_KEY is not set. Add it to your .env file in the project root." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const messages: Array<{ role: string; content: string }> = Array.isArray(body.messages) ? body.messages : [];

    const systemPrompt = getPortfolioContext();

    const mapped = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "user" || m.role === "assistant" ? m.role : "user",
      content: m.content,
    }));
    const firstUserIdx = mapped.findIndex((m) => m.role === "user");
    if (firstUserIdx !== -1) {
      mapped[firstUserIdx] = {
        ...mapped[firstUserIdx],
        content:
          systemPrompt +
          "\n\n---\n\nAnswer the user based only on the above. Keep replies concise.\n\nUser: " +
          mapped[firstUserIdx].content,
      };
    }

    const response = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: mapped,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Ollama API error:", response.status, errText);
      return NextResponse.json(
        { error: "Failed to get response from AI", details: errText },
        { status: response.status }
      );
    }

    const data = await response.json();
    const content = data.message?.content ?? "";
    return NextResponse.json({ content });
  } catch (e) {
    console.error("Chat API error:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Something went wrong" },
      { status: 500 }
    );
  }
}
