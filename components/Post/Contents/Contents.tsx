import Heading from "./Heading";
import Body from "./Body";

type ContentsProps = {
  authorStatistics: profile | null;
  post: postWithEvent | null;
  postStatistics: postStatistic | null;
};

const Contents = ({
  authorStatistics,
  post,
  postStatistics,
}: ContentsProps) => {
  return (
    <div>
      <Heading
        avatar_url={authorStatistics?.avatar_url}
        follower_count={authorStatistics?.followers}
        username={authorStatistics?.username}
      />
      <Body
        text_contents={post?.text_content}
        createdAt={
          postStatistics?.created_at ? postStatistics.created_at : "No dateT"
        }
        disliked={
          post?.post_event.dislike_bool ? post.post_event.dislike_bool : null
        }
        like_count={postStatistics?.like_count ? postStatistics.like_count : 0}
        liked={post?.post_event.like_bool ? post.post_event.like_bool : null}
        post_id={post?.id ? post.id : 0}
        view_count={
          postStatistics?.view_count ? postStatistics.view_count : null
        }
      />
    </div>
  );
};

export default Contents;
