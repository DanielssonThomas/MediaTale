import { Database } from "@/db_types/supabase";

type ProfilePostsProps = Database["public"]["Tables"]["posts"]["Row"];

export const ProfilePosts = ({
  created_at,
  created_by_username,
  description,
  title,
}: ProfilePostsProps) => {
  return <div></div>;
};
