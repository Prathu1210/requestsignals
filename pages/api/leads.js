import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { data, error } = await supabase
    .from("linkedin_posts") // ✅ CORRECT TABLE
    .select("id, title, content, link, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error);
    return res.status(500).json({ error: error.message });
  }

  // ✅ ALWAYS return an array
  return res.status(200).json(data || []);
}
