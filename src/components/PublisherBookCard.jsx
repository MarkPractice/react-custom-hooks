export default function BookCard({ title, imgUrl }) {
  return (
    <div>
      <p> {title}</p>
      <img src={imgUrl?.imageLinks?.thumbnail} alt="book thumbnail" />
    </div>
  );
}
