import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { title, content, link } = req.body;

  // basic validation
  if (!title || !content || !link) {
    return res.status(400).json({
      error: "title, content, and link are required",
    });
  }

  const { data, error } = await supabase
    .from("linkedin_posts")
    .insert([
      {
        title,
        content,
        link,
        classification: "REQUIREMENT",
      },
    ])
    .select();

  if (error) {
    console.error("Supabase insert error:", error.message);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({
    status: "ok",
    data,
  });
}
