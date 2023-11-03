import { Database } from "@/db_types/supabase";

declare global {
  type comment = Database["public"]["Tables"]["comments"]["Row"];
  type commentInsert = Database["public"]["Tables"]["comments"]["Insert"];
  type commentUpdate = Database["public"]["Tables"]["comments"]["Update"];
  type commentData = {
    comment: string | null;
    created_at: string;
    dislike_count: number | null;
    id: number;
    like_count: number | null;
    post_id: number | null;
    profile_id: number | null;
    sub_comment_id: number | null;
    user_id: string | null;
    profiles: { username: string };
    comment_event: { like: boolean; dislike: boolean };
  };

  type commentEvent = Database["public"]["Tables"]["comment_event"]["Row"];

  type post = Database["public"]["Tables"]["posts"]["Row"];
  type postInsert = Database["public"]["Tables"]["posts"]["Insert"];
  type postUpdate = Database["public"]["Tables"]["posts"]["Update"];

  type postWithEvent = {
    created_at: string;
    created_by_username: string | null;
    created_by_uuid: string | null;
    description: string | null;
    id: number;
    image: string | null;
    text_content: string | null;
    title: string | null;
    video: string | null;
    post_event: {
      dislike: boolean | null;
      like: boolean | null;
    };
  };

  type postStatistic = Database["public"]["Tables"]["posts_statistics"]["Row"];
  type postStatisticUpdate =
    Database["public"]["Tables"]["posts_statistics"]["Update"];

  type profile = Database["public"]["Tables"]["profiles"]["Row"];
  type profileInsert = Database["public"]["Tables"]["profiles"]["Insert"];
  type profileUpdate = Database["public"]["Tables"]["profiles"]["Update"];

  type category = Database["public"]["Tables"]["categories"]["Row"];
  type categoryUpdate = Database["public"]["Tables"]["categories"]["Update"];

  type categoryPost = Database["public"]["Tables"]["categories_posts"]["Row"];
  type categoryPostInsert =
    Database["public"]["Tables"]["categories_posts"]["Insert"];
}
