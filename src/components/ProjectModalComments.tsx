import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Comment } from "@/types/Project";

interface ProjectModalCommentsProps {
  comment: string;
  onCommentChange: (value: string) => void;
}

const ProjectModalComments = ({
  comment,
  onCommentChange,
}: ProjectModalCommentsProps) => {
  const mockComments: Comment[] = [
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
    <>
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
                  <span className="font-medium text-sm">{comment.author}</span>
                  <span className="text-xs text-gray-400">{comment.time}</span>
                </div>
                <p className="text-sm text-gray-300">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <Input
            value={comment}
            onChange={(e) => onCommentChange(e.target.value)}
            placeholder="Добавить комментарий..."
            className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
          />
          <Button size="sm" className="rounded-none">
            <Icon name="Send" size={16} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProjectModalComments;
