export default function BookCard({
  title,
  publisher,
  imgUrl,
  openModal,
  setPublisher,
}) {
  const handleModal = () => {
    setPublisher(publisher);
    openModal();
  };
  return (
    <div onClick={handleModal}>
      <p> {title}</p>
      <img src={imgUrl.imageLinks.thumbnail} alt="book thumbnail" />
    </div>
  );
}
