import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useLikedSongs } from "./useLikedSongs";

describe("useLikedSongs", () => {
  it("starts empty", () => {
    const { result } = renderHook(() => useLikedSongs());
    expect(result.current.liked).toEqual([]);
  });

  it("adds a liked song", () => {
    const { result } = renderHook(() => useLikedSongs());
    act(() => {
      result.current.addLiked({ id: "1", title: "Sunset Drive", artist: "Nova" });
    });
    expect(result.current.liked).toHaveLength(1);
    expect(result.current.isLiked("1")).toBe(true);
  });

  it("removes a liked song", () => {
    const { result } = renderHook(() => useLikedSongs());
    act(() => {
      result.current.addLiked({ id: "1", title: "Sunset Drive", artist: "Nova" });
    });
    act(() => {
      result.current.removeLiked("1");
    });
    expect(result.current.liked).toHaveLength(0);
  });
});
