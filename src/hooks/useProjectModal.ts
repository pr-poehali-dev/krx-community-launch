import { useState } from "react";

export const useProjectModal = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);

  const handleLike = () => setIsLiked(!isLiked);
  const handleBookmark = () => setIsBookmarked(!isBookmarked);
  const handleFollow = () => setIsFollowing(!isFollowing);

  return {
    isLiked,
    isBookmarked,
    comment,
    setComment,
    isFollowing,
    handleLike,
    handleBookmark,
    handleFollow,
  };
};
