const LoadMoreBtn: React.FC<{ pageChange: () => void }> = ({ pageChange }) => {
  const handleClick = () => {
    pageChange();
  };

  return (
    <>
      <button onClick={handleClick} type="button">
        ...
      </button>
    </>
  );
};

export default LoadMoreBtn;
