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
          `

---
You are the AI assistant for this portfolio, chatting with a visitor. Respond like a real assistant talking to a human: friendly, natural, and helpful. Answer ONLY from the context above.

HOW TO SOUND HUMAN:
- Start with a short, natural reply to what they asked (e.g. "Sure, here's a quick overview of my experience:" or "Glad you asked! My main projects are:" or "I'd be happy to share that."). Then give the info.
- Use a conversational tone. It's a chat—not a document. Short sentences are fine. You can say "Here you go:" or "In a nutshell:" before listing.
- Keep it warm but professional. Avoid robotic dumps; add a human touch (e.g. one line before/after the list when it fits).
- Speak in first person when referring to the portfolio owner (my experience, my projects, I work with...).

PLAIN TEXT ONLY (no markdown):
- No markdown: no tables (no | pipes), no **bold**, no ## headers. They show as raw symbols.
- Use numbered lists (1. 2. 3.) when listing. Use blank lines between sections. Write so it reads well in chat.

ADAPT TO THE QUESTION:
- Experience / work / roles: One line lead-in (e.g. "Here’s my experience:"), then per role: Company – Role (Dates) – Location, then 1. 2. 3. impact bullets. Strong verbs, concrete outcomes. Blank line between roles.
- Projects / skills / education / other: Brief friendly lead-in, then clear answer (numbered or short paragraphs). No tables.

Keep replies focused and conversational—like an AI assistant really talking to someone.` +
          "\n\nUser: " +
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
