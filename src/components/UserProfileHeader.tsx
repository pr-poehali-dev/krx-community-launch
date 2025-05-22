import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { User } from "@/types/user";

interface UserProfileHeaderProps {
  user: User;
}

const UserProfileHeader = ({ user }: UserProfileHeaderProps) => {
  return (
    <>
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 relative">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Profile Header */}
      <div className="px-6 -mt-16 relative z-10">
        <div className="flex items-end gap-6 mb-6">
          <Avatar className="w-32 h-32 border-4 border-gray-900">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="text-2xl">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
                <p className="text-gray-400">
                  @{user.username} • {user.role}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  className="rounded-none border-gray-600"
                >
                  Подписаться
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-none border-gray-600"
                    >
                      <Icon name="MoreHorizontal" size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border-gray-700">
                    <DropdownMenuItem className="text-white hover:bg-gray-700">
                      <Icon name="MessageCircle" className="mr-2" size={16} />
                      Написать сообщение
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white hover:bg-gray-700">
                      <Icon name="Share" className="mr-2" size={16} />
                      Поделиться профилем
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white hover:bg-gray-700">
                      <Icon name="Flag" className="mr-2" size={16} />
                      Пожаловаться
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{user.bio}</p>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1">
                <Icon name="MapPin" size={16} className="text-gray-400" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Link" size={16} className="text-gray-400" />
                <span className="text-blue-400">{user.website}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Calendar" size={16} className="text-gray-400" />
                <span>На KRX с {user.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileHeader;
