import { NextRequest, NextResponse } from "next/server";
import { getPortfolioContext } from "@/lib/portfolio-context";
import { z } from "zod";

const OLLAMA_URL = process.env.OLLAMA_API_URL || 'http://localhost:11434/api/chat';
const MODEL = process.env.OLLAMA_CHAT_MODEL || 'llama3';

const ChatRequestSchema = z.object({
  messages: z.array(
    z.object({
      role: z.string(),
      content: z.string()
    })
  )
});

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.OLLAMA_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const validatedBody = ChatRequestSchema.parse(body);
    
    const messages: Array<{ role: string; content: string }> = validatedBody.messages;

    const systemPrompt = getPortfolioContext();

    const mapped = messages.map((m: { role: string; content: string }) => ({
      role: m.role,
      content: m.content
    }));

    const response = await fetch(OLLAMA_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          ...systemPrompt,
          ...mapped
        ]
      })
    });

    if (!response.ok) {
      throw new Error('AI service unavailable');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'AI service unavailable' },
      { status: 503 }
    );
  }
}