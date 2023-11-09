import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { PostgrestError } from "@supabase/supabase-js";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";

const supabase = createServerActionClient({ cookies });

type getProfileByIdProps = {
  user_id: string | null | undefined;
};

type getProfileByUsernameProps = {
  username: string;
};

type getPostProps = {
  limit: number;
};

type getPostStatisticsByIdProps = {
  post_id: number;
};

type getCommentsByPostIdProps = {
  post_id: number;
};

export const getSignedInUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

export const getProfileById = async ({ user_id }: getProfileByIdProps) => {
  const {
    data: profile,
    error,
  }: { data: profile | null; error: PostgrestError | null } = await supabase
    .from("profiles")
    .select("*")
    .match({ user_id: user_id })
    .single();
  if (error) {
    console.log("getProfileById error: ", error);
  }
  return profile;
};

export const getProfileByUsername = async ({
  username,
}: getProfileByUsernameProps) => {
  const {
    data: profile,
    error,
  }: { data: profile | null; error: PostgrestError | null } = await supabase
    .from("profiles")
    .select("*")
    .match({ username: username })
    .single();
  if (error) {
    console.log("getProfileByUsername error: ", error);
  }
  return profile;
};

export const getPostById = async ({ post_id }: { post_id: number }) => {
  const {
    data: post,
    error,
  }: { data: post | null; error: PostgrestError | null } = await supabase
    .from("posts")
    .select("*")
    .match({ id: post_id })
    .single();
  if (error) {
    console.log("getPostById error: ", error);
  }
  return post;
};

export const getPostsWithEvents = async ({ limit }: getPostProps) => {
  const {
    data: posts,
    error,
  }: { data: postWithEvent[] | null; error: PostgrestError | null } =
    await supabase
      .from("posts")
      .select("*, post_event(dislike_bool, like_bool)")
      .limit(limit);

  if (error) {
    console.log("getPostsWithEvents error: ", error);
  }
  return posts;
};

export const getPostsStatistics = async () => {
  const {
    data: postsStatistics,
    error,
  }: { data: postStatistic[] | null; error: PostgrestError | null } =
    await supabase.from("posts_statistics").select("*");
  if (error) {
    console.log("getPostsStatistics error:", error);
  }
  return postsStatistics;
};

export const getPostStatisticsById = async ({
  post_id,
}: getPostStatisticsByIdProps) => {
  const {
    data: postStatistics,
    error,
  }: { data: postStatistic | null; error: PostgrestError | null } =
    await supabase
      .from("posts_statistics")
      .select("*")
      .match({ post_id: post_id })
      .single();
  return postStatistics;
};

export const getCommentsByPostId = async ({
  post_id,
}: getCommentsByPostIdProps) => {
  const { data: comments }: { data: commentData[] | null } = await supabase
    .from("comments")
    .select("*, profiles(username), comment_event(like, dislike)")
    .match({ post_id: post_id })
    .order("like_count", { ascending: false });

  return comments;
};

export const sendPWChangeToCurrentUser = async ({ path }: { path: string }) => {
  const user = await getSignedInUser();
  if (user !== null && user.email !== undefined) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      user?.email,
      {
        redirectTo: `${path}/update-password`,
      }
    );
    if (error) {
      return error;
    }
    return data;
  }
};

export const sendPWResetByEmail = async ({
  email,
  path,
}: {
  email: string;
  path: string;
}) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${path}/update-password`,
  });
};
