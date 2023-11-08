import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
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

export const getPostById = async ({ post_id }: { post_id: number }) => {
  const { data: post }: { data: post | null } = await supabase
    .from("posts")
    .select("*")
    .match({ id: post_id })
    .single();
  return post;
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

export const getPostStatisticsById = async ({
  post_id,
}: getPostStatisticsByIdProps) => {
  const { data: postStatistics }: { data: postStatistic | null } =
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
