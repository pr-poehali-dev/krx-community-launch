export interface User {
  id: string;
  name: string;
  username: string;
  role: string;
  avatar: string;
  bio: string;
  location: string;
  website: string;
  joinDate: string;
  followersCount: number;
  followingCount: number;
}

export interface UserWork {
  id: number;
  title: string;
  image: string;
  likes: number;
  views: number;
}

export interface ProfileTab {
  id: string;
  name: string;
  count: number;
}

export type TabType =
  | "works"
  | "collections"
  | "liked"
  | "following"
  | "followers";
