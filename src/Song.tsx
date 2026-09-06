import type { Song as SongType } from "./useLikedSongs";

interface SongProps {
  song: SongType;
  onLike: (song: SongType) => void;
  liked: boolean;
}

export function Song({ song, onLike, liked }: SongProps) {
  return (
    <div className="song">
      <span>{song.title} — {song.artist}</span>
      <button onClick={() => onLike(song)}>{liked ? "♥" : "♡"}</button>
    </div>
  );
}
