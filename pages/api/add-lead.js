import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { date, requirement, details, link } = req.body;

  // 🔒 basic validation
  if (!date || !requirement) {
    return res.status(400).json({ error: "Date and Requirement are required" });
  }

  const { data, error } = await supabase
    .from("leads")   // ✅ TABLE NAME MUST BE EXACT
    .insert([
      {
        date,
        requirement,
        details,
        link,
      },
    ])
    .select(); // 🔥 IMPORTANT — without this insert may silently fail

  if (error) {
    console.error("Supabase insert error:", error);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({
    status: "ok",
    data,
  });
}
