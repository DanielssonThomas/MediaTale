import Heading from "./Heading";
import Body from "./Body";

type ContentsProps = {
  post_id: number;
  avatar_url: string | null | undefined;
  follower_count: number | null | undefined;
  username: string | null | undefined;
  text_contents: string | null | undefined;
  image_url: string | null | undefined;
  created_at: string | null | undefined;
  disliked: boolean | null;
  liked: boolean | null;
  like_count: number | null;
  view_count: number | null;
  postOwner: boolean | null;
};

const Contents = ({
  post_id,
  avatar_url,
  follower_count,
  username,
  text_contents,
  image_url,
  created_at,
  disliked,
  liked,
  like_count,
  view_count,
  postOwner,
}: ContentsProps) => {
  return (
    <div>
      <Heading
        avatar_url={avatar_url}
        follower_count={follower_count}
        username={username}
        post_id={post_id}
        postOwner={postOwner}
      />
      <Body
        text_contents={text_contents}
        image_url={image_url}
        createdAt={created_at ? created_at : "No dateT"}
        disliked={disliked}
        like_count={like_count}
        liked={liked}
        post_id={post_id}
        view_count={view_count}
      />
    </div>
  );
};

export default Contents;
