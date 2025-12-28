import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "Missing id" });
  }

  const { error } = await supabase
    .from("linkedin_posts")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Supabase delete error:", error.message);
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ status: "deleted" });
}
