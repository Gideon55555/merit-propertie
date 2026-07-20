import fs from "fs";
import path from "path";

interface KnowledgeResult {
  content: string;
  source: string;
  score: number;
}

// Recursively find all JSON files
function getJsonFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getJsonFiles(fullPath);
    }

    return entry.name.endsWith(".json") ? [fullPath] : [];
  });
}

// Convert nested JSON into searchable text
function flatten(data: any): string {
  if (typeof data === "string") return data;

  if (Array.isArray(data)) {
    return data.map(flatten).join(" ");
  }

  if (typeof data === "object" && data !== null) {
    return Object.values(data).map(flatten).join(" ");
  }

  return "";
}

export function searchKnowledge(query: string): KnowledgeResult[] {
  const knowledgeFolder = path.join(process.cwd(), "knowledge");

  const files = getJsonFiles(knowledgeFolder);

  const keywords = query.toLowerCase().split(/\s+/);

  const results: KnowledgeResult[] = [];

  for (const file of files) {
    try {
      const json = JSON.parse(fs.readFileSync(file, "utf8"));

      const text = flatten(json);

      let score = 0;

      for (const word of keywords) {
        if (word.length > 2 && text.toLowerCase().includes(word)) {
          score++;
        }
      }

      if (score > 0) {
        results.push({
          content: text,
          source: path.basename(file),
          score,
        });
      }
    } catch (err) {

    console.error("Failed to read:", file);
    console.error(err);
}
  }

  results.sort((a, b) => b.score - a.score);

  return results.slice(0, 5);
}