const LoadMoreBtn = ({ pageChange }) => {
  const handleClick = (e) => {
    e.preventDefault();
    pageChange();
  };

  return (
    <>
      <button onClick={handleClick} type="submit">
        ...
      </button>
    </>
  );
};

export default LoadMoreBtn;
