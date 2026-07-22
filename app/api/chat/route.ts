import { NextRequest, NextResponse } from "next/server";
import { askOpenRouter } from "@/lib/openrouter";
import { searchKnowledge } from "@/lib/searchKnowledge";

export async function POST(request: NextRequest) {
  try {
    console.log("CHAT REQUEST RECEIVED");
    const { message } = await request.json();

    // Search the knowledge base
    const matches = searchKnowledge(message);

    const context =
      matches.length > 0
        ? matches.map((m) => m.content).join("\n\n")
        : "No relevant information found in the knowledge base.";

    const systemPrompt = `
You are Merit Properties AI Assistant.

Your job is to answer visitors' questions using the information provided below.

Rules:
- Be professional and friendly.
- Prefer the knowledge provided below.
- Do not invent information.
- If the answer is not in the knowledge base, politely say you don't have that information and recommend contacting Merit Properties.
- Keep answers concise and helpful.

Knowledge Base:

${context}
`;

    const reply = await askOpenRouter(systemPrompt, message);

    return NextResponse.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}