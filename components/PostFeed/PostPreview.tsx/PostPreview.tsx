import { ImagePreview } from "./PostPreviewTypes/ImagePreview";
import { TextPreview } from "./PostPreviewTypes/TextPreview";

type PostPreviewProps = {
  post_id: number;
  avatar_url: string | null;
  username: string | null;
  title: string | null;
  description: string | null;
  like_count: number | null;
  view_count: number | null;
  imageUrl: string | null;
};

export const PostPreview = ({
  post_id,
  avatar_url,
  username,
  title,
  description,
  like_count,
  view_count,
  imageUrl,
}: PostPreviewProps) => {
  if (imageUrl !== null || imageUrl === undefined)
    return (
      <ImagePreview
        post_id={post_id}
        avatar_url={avatar_url}
        username={username}
        title={title}
        description={description}
        like_count={like_count}
        view_count={view_count}
        imageUrl={imageUrl}
      />
    );
  else {
    return (
      <TextPreview
        post_id={post_id}
        avatar_url={avatar_url}
        username={username}
        title={title}
        description={description}
        like_count={like_count}
        view_count={view_count}
      />
    );
  }
};
