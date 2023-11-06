import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabase = createServerActionClient({ cookies });

type getProfileByIDProps = {
  user_id: string | null;
};

type getProfileByUsernameProps = {
  username: string;
};

type getPostProps = {
  limit: number;
};

type getCommentsProps = {
  post_id: number;
};

export const getSignedInUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

export const getProfileByID = async ({ user_id }: getProfileByIDProps) => {
  const { data: profile }: { data: profile | null } = await supabase
    .from("profiles")
    .select("*")
    .match({ user_id: user_id })
    .single();
  return profile;
};

export const getProfileByUsername = async ({
  username,
}: getProfileByUsernameProps) => {
  const { data: profile }: { data: profile | null } = await supabase
    .from("profiles")
    .select("*")
    .match({ username: username })
    .single();
  return profile;
};

export const getPostsWithEvents = async ({ limit }: getPostProps) => {
  const { data: posts }: { data: postWithEvent[] | null } = await supabase
    .from("posts")
    .select("*, post_event(dislike, like)")
    .limit(limit);
  return posts;
};

export const getPostsStatistics = async () => {
  const { data: postsStatistics }: { data: postStatistic[] | null } =
    await supabase.from("posts_statistics").select("*");
  return postsStatistics;
};

export const getComments = async ({ post_id }: getCommentsProps) => {
  const { data: comments }: { data: comment[] | null } = await supabase
    .from("comments")
    .select("*")
    .match({ post_id: post_id });

  return comments;
};
