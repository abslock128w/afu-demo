import { useState, useCallback } from "react";

export interface Song {
  id: string;
  title: string;
  artist: string;
}

export function useLikedSongs() {
  const [liked, setLiked] = useState<Song[]>([]);

  const addLiked = useCallback((song: Song) => {
    setLiked((prev) => [...prev, song]);
  }, []);

  const removeLiked = useCallback((id: string) => {
    setLiked((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const isLiked = useCallback(
    (id: string) => liked.some((s) => s.id === id),
    [liked]
  );

  return { liked, addLiked, removeLiked, isLiked };
}
