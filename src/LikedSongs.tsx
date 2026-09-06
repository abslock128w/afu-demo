import { useLikedSongs } from "./useLikedSongs";
import { Song } from "./Song";

export function LikedSongs() {
  const { liked, removeLiked } = useLikedSongs();

  return (
    <div className="liked-songs">
      <h2>Liked Songs ({liked.length})</h2>
      {liked.map((song) => (
        <Song key={song.id} song={song} onLike={() => removeLiked(song.id)} liked={true} />
      ))}
    </div>
  );
}
