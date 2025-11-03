import PreviewCard from "@/components/preview-card";

export default function AppSection() {
  const movies = [
    {
      url: "/images/background.jpg",
      alt: "The Shawshank Redemption",
      id: 1,
    },
    {
      url: "/images/living-room.jpg",
      alt: "The Godfather",
      id: 2,
    },
    {
      url: "/images/star-wars.jpg",
      alt: "The Dark Knight",
      id: 3,
    },
  ];

  const listItems = movies.map(movie => {
    return <li key={movie.id}><PreviewCard url={movie.url} alt={movie.alt} /></li>
  })
  return (
    <div>
      <ul className="flex">
        {listItems}
      </ul>
    </div>
  );
}
