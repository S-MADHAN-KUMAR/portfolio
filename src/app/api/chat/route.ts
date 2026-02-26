import { NextRequest, NextResponse } from "next/server";
import { getPortfolioContext } from "@/lib/portfolio-context";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "google/gemma-3n-e2b-it:free";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY || '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';
    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENROUTER_API_KEY is not set. Add it to your .env file in the project root." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const messages: Array<{ role: string; content: string }> = Array.isArray(body.messages) ? body.messages : [];

    const systemPrompt = getPortfolioContext();

    // Gemma on OpenRouter doesn't support system/developer instructions; inject context into first user message
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

    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001",
        "X-OpenRouter-Title": process.env.NEXT_PUBLIC_SITE_NAME || "Portfolio",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: mapped,
        temperature: 0.6,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenRouter API error:", response.status, errText);
      return NextResponse.json(
        { error: "Failed to get response from AI", details: errText },
        { status: response.status }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content ?? "";
    return NextResponse.json({ content });
  } catch (e) {
    console.error("Chat API error:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Something went wrong" },
      { status: 500 }
    );
  }
}
