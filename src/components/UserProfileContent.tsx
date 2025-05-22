import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { TabType, UserWork } from "@/types/user";

interface UserProfileContentProps {
  activeTab: TabType;
  userWorks: UserWork[];
}

const UserProfileContent = ({
  activeTab,
  userWorks,
}: UserProfileContentProps) => {
  const renderWorksGrid = () => (
    <div className="grid grid-cols-3 gap-4">
      {userWorks.map((work) => (
        <div key={work.id} className="group cursor-pointer">
          <div className="relative overflow-hidden bg-gray-800 hover:bg-gray-750 transition-all">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
            <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <h4 className="font-medium text-white text-sm mb-1">
                {work.title}
              </h4>
              <div className="flex items-center gap-3 text-xs text-gray-300">
                <div className="flex items-center gap-1">
                  <Icon name="Heart" size={12} />
                  <span>{work.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Eye" size={12} />
                  <span>{work.views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderEmptyState = (
    icon: string,
    title: string,
    description: string,
  ) => (
    <div className="text-center py-12">
      <Icon name={icon} size={48} className="mx-auto text-gray-600 mb-4" />
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );

  const renderUserList = (
    users: number[],
    buttonText: string,
    variant: "outline" | "default" = "outline",
  ) => (
    <div className="space-y-4">
      {users.map((i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 bg-gray-800 rounded"
        >
          <Avatar>
            <AvatarImage
              src={`https://images.unsplash.com/photo-${1472099645785 + i}?w=40&h=40&fit=crop&crop=face`}
            />
            <AvatarFallback>U{i}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="font-medium">User {i}</h4>
            <p className="text-sm text-gray-400">3D Artist</p>
          </div>
          <Button size="sm" variant={variant} className="rounded-none">
            {buttonText}
          </Button>
        </div>
      ))}
    </div>
  );

  switch (activeTab) {
    case "works":
      return renderWorksGrid();

    case "collections":
      return renderEmptyState(
        "Folder",
        "Нет коллекций",
        "Пользователь еще не создал ни одной коллекции",
      );

    case "liked":
      return renderEmptyState(
        "Heart",
        "Понравившиеся работы",
        "Здесь будут отображаться понравившиеся работы",
      );

    case "following":
      return renderUserList([1, 2, 3], "Отписаться", "outline");

    case "followers":
      return renderUserList([1, 2, 3, 4, 5], "Подписаться", "default");

    default:
      return null;
  }
};

export default UserProfileContent;
