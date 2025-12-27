import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json([]);
  }

  const { data, error } = await supabase
    .from("linkedin_posts")   // ✅ CONFIRM table name
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error.message);

    // ✅ ALWAYS return an array
    return res.status(200).json([]);
  }

  // ✅ Always return array
  return res.status(200).json(data || []);
}
