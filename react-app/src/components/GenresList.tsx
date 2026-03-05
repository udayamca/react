import useGenres from "@/hooks/useGenres";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {data.map((genre) => (
        <div key={genre.id}>{genre.name}</div>
      ))}
    </div>
  );
};

export default GenresList;
