export interface Project {
  id: number;
  title: string;
  author: string;
  image: string;
  likes: number;
  views: number;
  category: string;
  description?: string;
  tags?: string[];
  comments?: Comment[];
}

export interface Comment {
  id: number;
  author: string;
  text: string;
  avatar: string;
  time: string;
}

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}
