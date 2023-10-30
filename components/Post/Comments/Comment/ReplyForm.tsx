type ReplyFormProps = {
  isActive: boolean;
};

const ReplyForm = ({ isActive }: ReplyFormProps) => {
  return (
    <form className="absolute transition-all w-full ml-2">
      <input type="text" placeholder="Write your reply here" />
      <button type="submit">Reply</button>
    </form>
  );
};

export default ReplyForm;
