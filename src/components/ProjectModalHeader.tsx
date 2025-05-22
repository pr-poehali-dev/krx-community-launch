import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { Project } from "@/types/Project";

interface ProjectModalHeaderProps {
  project: Project;
  isFollowing: boolean;
  onFollow: () => void;
}

const ProjectModalHeader = ({
  project,
  isFollowing,
  onFollow,
}: ProjectModalHeaderProps) => {
  return (
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
          onClick={onFollow}
          className="rounded-none"
        >
          {isFollowing ? "Отписаться" : "Подписаться"}
        </Button>
      </div>

      <DialogTitle className="text-xl font-bold mb-2">
        {project.title}
      </DialogTitle>
      <p className="text-gray-300 text-sm">
        Потрясающая 3D модель с детализированной проработкой каждого элемента.
        Создано с использованием современных техник моделирования и рендеринга.
      </p>
    </div>
  );
};

export default ProjectModalHeader;
