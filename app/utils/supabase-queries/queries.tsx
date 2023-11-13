import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { PostgrestError } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

type getProfileByIdProps = {
  user_id: string | null | undefined;
};

type getProfileByUsernameProps = {
  username: string;
};

type getPostProps = {
  limit: number;
  user_id?: string | null | undefined;
};

type getPostStatisticsByIdProps = {
  post_id: number;
};

type getCommentsByPostIdProps = {
  post_id: number;
};

export const getSignedInUser = async () => {
  const supabase = createServerActionClient({ cookies });
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  return user;
};

export const getSignedInProfilePictureUrl = async () => {
  const supabase = createServerActionClient({ cookies });
  const user = await getSignedInUser();
  const { data } = await supabase
    .from("profiles")
    .select("avatar_url")
    .match({ user_id: user?.id })
    .single();
  return data?.avatar_url;
};

export const getProfileById = async ({ user_id }: getProfileByIdProps) => {
  const supabase = createServerActionClient({ cookies });
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
  const supabase = createServerActionClient({ cookies });
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
  const supabase = createServerActionClient({ cookies });
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

export const getPostWithEventById = async ({ id }: { id: number }) => {
  const supabase = createServerActionClient({ cookies });
  const user = await getSignedInUser();
  const userProfile = await getProfileById({ user_id: user?.id });
  const {
    data: post,
    error,
  }: { data: postWithEvent | null; error: PostgrestError | null } =
    await supabase.from("posts").select("*").match({ id: id }).single();

  const {
    data: post_event,
  }: {
    data: postEvent | null;
  } = await supabase
    .from("post_event")
    .select("*")
    .match({ post_id: id, profile_id: userProfile?.id })
    .single();

  if (error || post === null) {
    console.log("getPostWithEvent error: ", error);
    return null;
  }

  const result: postWithEvent | null = {
    title: post.title,
    created_at: post.created_at,
    created_by_username: post.created_by_username,
    created_by_uuid: post.created_by_uuid,
    description: post.description,
    id: post.id,
    image_url: post.image_url,
    text_content: post.text_content,
    post_event: {
      like_bool: post_event?.like_bool,
      dislike_bool: post_event?.dislike_bool,
    },
  };
  return result;
};

export const getPostsWithEvents = async ({ limit, user_id }: getPostProps) => {
  const supabase = createServerActionClient({ cookies });
  if (user_id !== undefined) {
    const {
      data: posts,
      error,
    }: { data: post[] | null; error: PostgrestError | null } = await supabase
      .from("posts")
      .select("*")
      .match({ created_by_uuid: user_id })
      .limit(limit);

    if (error) {
      console.log("getPostsWithEvents error: ", error);
      return null;
    }
    return posts;
  }
  const {
    data: posts,
    error,
  }: { data: post[] | null; error: PostgrestError | null } = await supabase
    .from("posts")
    .select("*")
    .limit(limit);

  if (error) {
    console.log("getPostsWithEvents error: ", error);
    return null;
  }
  return posts;
};

export const getPostsStatistics = async ({
  limit,
  user_id,
}: {
  limit: number;
  user_id?: string | null | undefined;
}) => {
  const supabase = createServerActionClient({ cookies });
  if (user_id !== undefined) {
    const {
      data: postsStatistics,
      error,
    }: { data: postStatistic[] | null; error: PostgrestError | null } =
      await supabase
        .from("posts_statistics")
        .select("*, profiles(avatar_url)")
        .match({ created_by: user_id })
        .limit(limit);
    if (error) {
      console.log("getPostsStatistics error:", error);
    }
    return postsStatistics;
  }
  const {
    data: postsStatistics,
    error,
  }: { data: postStatistic[] | null; error: PostgrestError | null } =
    await supabase
      .from("posts_statistics")
      .select("*, profiles(avatar_url)")
      .limit(limit);
  if (error) {
    console.log("getPostsStatistics error:", error);
  }
  return postsStatistics;
};

export const getPostStatisticsById = async ({
  post_id,
}: getPostStatisticsByIdProps) => {
  const supabase = createServerActionClient({ cookies });
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
  const supabase = createServerActionClient({ cookies });
  const {
    data: comments,
    error,
  }: { data: commentData[] | null; error: PostgrestError | null } =
    await supabase
      .from("comments")
      .select(
        "*, profiles(username, avatar_url), comment_event(like_bool, dislike_bool)"
      )
      .match({ post_id: post_id })
      .order("like_count", { ascending: false });
  if (error) {
    console.log("getCommentsById error: ", error);
  }
  return comments;
};

export const sendPWChangeToCurrentUser = async ({ path }: { path: string }) => {
  const supabase = createServerActionClient({ cookies });
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
  const supabase = createServerActionClient({ cookies });
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${path}/update-password`,
  });
};
