const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function askOpenRouter(systemPrompt: string, userMessage: string) {
  const response = await fetch(OPENROUTER_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENROUTER_MODEL,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    }),
  });

  const rawData = await response.text();
  try {
    const data = JSON.parse(rawData);
    return data.choices[0].message.content;
  } catch (error) {
    throw new Error(`Failed to parse OpenRouter response: ${rawData}`);
  }
}
