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
    profiles: { username: string; avatar_url: string | null };
    comment_event: { like: boolean; dislike: boolean };
  };

  type commentEvent = Database["public"]["Tables"]["comment_event"]["Row"];

  type post = Database["public"]["Tables"]["posts"]["Row"];
  type postInsert = Database["public"]["Tables"]["posts"]["Insert"];
  type postUpdate = Database["public"]["Tables"]["posts"]["Update"];

  type prototypePost = {
    post: Database["public"]["Tables"]["posts"]["Row"];
    postStatistics: Database["public"]["Tables"]["posts_statistics"]["Row"];
    comments: Database["public"]["Tables"]["comments"]["Row"];
    likeCount: number;
  };

  type postEvent = {
    like_bool: boolean | null;
    dislike_bool: boolean | null;
  };

  type postWithEvent = {
    created_at: string;
    created_by_username: string | null;
    created_by_uuid: string | null;
    description: string | null;
    id: number;
    image_url: string | null;
    text_content: string | null;
    title: string | null;
    post_event: {
      like_bool: boolean | null | undefined;
      dislike_bool: boolean | null | undefined;
    };
  };

  type postStatistic = {
    created_at: string;
    created_by: string | null;
    dislike_count: number | null;
    id: number;
    like_count: number | null;
    post_id: number | null;
    profile_id: number;
    updated_at: string | null;
    view_count: number;
    profiles: { avatar_url: string | null };
  };

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
