import { supabase } from "../../lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json([]);
  }

  const { data, error } = await supabase
    .from("linkedin_posts")
    .select("*")
    .eq("classification", "REQUIREMENT")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase fetch error:", error.message);
    return res.status(200).json([]);
  }

  return res.status(200).json(data || []);
}
