import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useProjectModal } from "@/hooks/useProjectModal";
import { ProjectModalProps } from "@/types/Project";
import ProjectModalHeader from "./ProjectModalHeader";
import ProjectModalActions from "./ProjectModalActions";
import ProjectModalComments from "./ProjectModalComments";

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const {
    isLiked,
    isBookmarked,
    comment,
    setComment,
    isFollowing,
    handleLike,
    handleBookmark,
    handleFollow,
  } = useProjectModal();

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] bg-gray-900 border-gray-700 text-white overflow-hidden p-0">
        <div className="flex h-full">
          <div className="flex-1 bg-black flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="w-96 bg-gray-900 border-l border-gray-700 flex flex-col">
            <ProjectModalHeader
              project={project}
              isFollowing={isFollowing}
              onFollow={handleFollow}
            />

            <ProjectModalActions
              project={project}
              isLiked={isLiked}
              isBookmarked={isBookmarked}
              onLike={handleLike}
              onBookmark={handleBookmark}
            />

            <div className="flex flex-wrap gap-2 mt-4 px-4">
              {["3D", "Blender", "Robot", "Cyberpunk", "Sci-Fi"].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-700 px-2 py-1 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <ProjectModalComments
              comment={comment}
              onCommentChange={setComment}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
