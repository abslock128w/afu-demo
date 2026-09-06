import { useState } from "react";
import { useLikedSongs, type Song as SongType } from "./useLikedSongs";
import { Song } from "./Song";

const CATALOG: SongType[] = [
  { id: "1", title: "Sunset Drive", artist: "Nova" },
  { id: "2", title: "Glass Hearts", artist: "Kite" },
  { id: "3", title: "Static Bloom", artist: "Echo Lane" },
];

export function Search() {
  const [query, setQuery] = useState("");
  const { addLiked, isLiked } = useLikedSongs();

  const results = CATALOG.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search">
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search songs..." />
      {results.map((song) => (
        <Song key={song.id} song={song} onLike={addLiked} liked={isLiked(song.id)} />
      ))}
    </div>
  );
}
