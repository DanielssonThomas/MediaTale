import Image from "next/image";

type ContentsProps = {
  authorStatistics: profile | null;
  post: post | null;
  postStatistics: postStatistic | null;
};

const Contents = ({
  authorStatistics,
  post,
  postStatistics,
}: ContentsProps) => {
  return (
    <div>
      <div className="flex justify-between w-full h-[200px]">
        <div>
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              src={post?.image || "/images/defaultPFP.jpeg"}
              alt="Poster avatar"
              fill={true}
            />
          </div>
          <div className="flex flex-col">
            <h3>{post?.created_by_username}</h3>
            <p>{authorStatistics?.followers} followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
