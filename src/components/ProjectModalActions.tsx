import Icon from "@/components/ui/icon";
import { Project } from "@/types/Project";

interface ProjectModalActionsProps {
  project: Project;
  isLiked: boolean;
  isBookmarked: boolean;
  onLike: () => void;
  onBookmark: () => void;
}

const ProjectModalActions = ({
  project,
  isLiked,
  isBookmarked,
  onLike,
  onBookmark,
}: ProjectModalActionsProps) => {
  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        onClick={onLike}
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
        onClick={onBookmark}
        className={`${isBookmarked ? "text-blue-400" : "text-gray-400"} hover:text-blue-400`}
      >
        <Icon name="Bookmark" size={20} />
      </button>

      <button className="text-gray-400 hover:text-white">
        <Icon name="Share" size={20} />
      </button>
    </div>
  );
};

export default ProjectModalActions;
