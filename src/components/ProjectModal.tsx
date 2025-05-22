import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  author: string;
  image: string;
  likes: number;
  views: number;
  category: string;
  description?: string;
  tags?: string[];
  comments?: Array<{
    id: number;
    author: string;
    text: string;
    avatar: string;
    time: string;
  }>;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState("");
  const [isFollowing, setIsFollowing] = useState(false);

  if (!project) return null;

  const handleLike = () => setIsLiked(!isLiked);
  const handleBookmark = () => setIsBookmarked(!isBookmarked);
  const handleFollow = () => setIsFollowing(!isFollowing);

  const mockComments = [
    {
      id: 1,
      author: "Designer_Pro",
      text: "Невероятная работа! Детализация просто потрясающая.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      time: "2 часа назад",
    },
    {
      id: 2,
      author: "3D_Artist",
      text: "Можешь рассказать какой рендер использовал?",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      time: "5 часов назад",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] bg-gray-900 border-gray-700 text-white overflow-hidden p-0">
        <div className="flex h-full">
          {/* Left side - Image */}
          <div className="flex-1 bg-black flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Right side - Details */}
          <div className="w-96 bg-gray-900 border-l border-gray-700 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
                    <AvatarFallback>{project.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{project.author}</h3>
                    <p className="text-sm text-gray-400">3D Artist</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant={isFollowing ? "secondary" : "default"}
                  onClick={handleFollow}
                  className="rounded-none"
                >
                  {isFollowing ? "Отписаться" : "Подписаться"}
                </Button>
              </div>

              <DialogTitle className="text-xl font-bold mb-2">
                {project.title}
              </DialogTitle>
              <p className="text-gray-300 text-sm">
                Потрясающая 3D модель с детализированной проработкой каждого
                элемента. Создано с использованием современных техник
                моделирования и рендеринга.
              </p>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 ${isLiked ? "text-red-500" : "text-gray-400"} hover:text-red-400`}
                >
                  <Icon name="Heart" size={20} />
                  <span>{project.likes + (isLiked ? 1 : 0)}</span>
                </button>

                <div className="flex items-center gap-2 text-gray-400">
                  <Icon name="Eye" size={20} />
                  <span>{project.views}</span>
                </div>

                <button
                  onClick={handleBookmark}
                  className={`${isBookmarked ? "text-blue-400" : "text-gray-400"} hover:text-blue-400`}
                >
                  <Icon name="Bookmark" size={20} />
                </button>

                <button className="text-gray-400 hover:text-white">
                  <Icon name="Share" size={20} />
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["3D", "Blender", "Robot", "Cyberpunk", "Sci-Fi"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Comments */}
            <div className="flex-1 overflow-y-auto p-4">
              <h4 className="font-semibold mb-4">
                Комментарии ({mockComments.length})
              </h4>

              <div className="space-y-4">
                {mockComments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={comment.avatar} />
                      <AvatarFallback>{comment.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">
                          {comment.author}
                        </span>
                        <span className="text-xs text-gray-400">
                          {comment.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300">{comment.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comment input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <Input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Добавить комментарий..."
                  className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                />
                <Button size="sm" className="rounded-none">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
