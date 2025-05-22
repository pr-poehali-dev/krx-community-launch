import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfileModal = ({ isOpen, onClose }: UserProfileModalProps) => {
  const [activeTab, setActiveTab] = useState("works");

  const tabs = [
    { id: "works", name: "Работы", count: 24 },
    { id: "collections", name: "Коллекции", count: 8 },
    { id: "liked", name: "Понравившиеся", count: 156 },
    { id: "following", name: "Подписки", count: 42 },
    { id: "followers", name: "Подписчики", count: 1200 },
  ];

  const userWorks = [
    {
      id: 1,
      title: "Робот Киберпанк",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
      likes: 234,
      views: 1200,
    },
    {
      id: 2,
      title: "Космический Корабль",
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop",
      likes: 345,
      views: 1500,
    },
    {
      id: 3,
      title: "Футуристический Город",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=200&fit=crop",
      likes: 567,
      views: 2800,
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full h-[90vh] bg-gray-900 border-gray-700 text-white overflow-hidden p-0">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 relative">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Profile Header */}
        <div className="px-6 -mt-16 relative z-10">
          <div className="flex items-end gap-6 mb-6">
            <Avatar className="w-32 h-32 border-4 border-gray-900">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face" />
              <AvatarFallback className="text-2xl">AA</AvatarFallback>
            </Avatar>

            <div className="flex-1 pb-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <DialogTitle className="text-2xl font-bold mb-1">
                    Alex Anderson
                  </DialogTitle>
                  <p className="text-gray-400">
                    @alex_3d • 3D Artist & Designer
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

              <p className="text-gray-300 mb-4">
                Профессиональный 3D художник с 8+ лет опыта. Специализируюсь на
                создании персонажей, роботов и футуристических концептов для игр
                и фильмов.
              </p>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Icon name="MapPin" size={16} className="text-gray-400" />
                  <span>Москва, Россия</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Link" size={16} className="text-gray-400" />
                  <span className="text-blue-400">artstation.com/alex3d</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Calendar" size={16} className="text-gray-400" />
                  <span>На KRX с марта 2021</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-700">
            <nav className="flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.name} ({tab.count})
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {activeTab === "works" && (
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
          )}

          {activeTab === "collections" && (
            <div className="text-center py-12">
              <Icon
                name="Folder"
                size={48}
                className="mx-auto text-gray-600 mb-4"
              />
              <h3 className="text-lg font-medium mb-2">Нет коллекций</h3>
              <p className="text-gray-400">
                Пользователь еще не создал ни одной коллекции
              </p>
            </div>
          )}

          {activeTab === "liked" && (
            <div className="text-center py-12">
              <Icon
                name="Heart"
                size={48}
                className="mx-auto text-gray-600 mb-4"
              />
              <h3 className="text-lg font-medium mb-2">Понравившиеся работы</h3>
              <p className="text-gray-400">
                Здесь будут отображаться понравившиеся работы
              </p>
            </div>
          )}

          {activeTab === "following" && (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
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
                  <Button size="sm" variant="outline" className="rounded-none">
                    Отписаться
                  </Button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "followers" && (
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded"
                >
                  <Avatar>
                    <AvatarImage
                      src={`https://images.unsplash.com/photo-${1494790108755 + i}?w=40&h=40&fit=crop&crop=face`}
                    />
                    <AvatarFallback>F{i}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium">Follower {i}</h4>
                    <p className="text-sm text-gray-400">Digital Artist</p>
                  </div>
                  <Button size="sm" className="rounded-none">
                    Подписаться
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfileModal;
