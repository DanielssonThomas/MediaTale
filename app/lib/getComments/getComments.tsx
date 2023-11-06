import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

type getCommentsProps = {
  post_id: number;
};

export const getComments = async ({ post_id }: getCommentsProps) => {
  const supabase = createRouteHandlerClient({ cookies });

  const { data: comments }: { data: comment[] | null } = await supabase
    .from("comments")
    .select("*")
    .match({ post_id: post_id });

  return comments;
};
