import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import UserProfileHeader from "@/components/UserProfileHeader";
import UserProfileTabs from "@/components/UserProfileTabs";
import UserProfileContent from "@/components/UserProfileContent";
import { User, UserWork, ProfileTab, TabType } from "@/types/user";

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfileModal = ({ isOpen, onClose }: UserProfileModalProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("works");

  const user: User = {
    id: "1",
    name: "Alex Anderson",
    username: "alex_3d",
    role: "3D Artist & Designer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=face",
    bio: "Профессиональный 3D художник с 8+ лет опыта. Специализируюсь на создании персонажей, роботов и футуристических концептов для игр и фильмов.",
    location: "Москва, Россия",
    website: "artstation.com/alex3d",
    joinDate: "марта 2021",
    followersCount: 1200,
    followingCount: 42,
  };

  const tabs: ProfileTab[] = [
    { id: "works", name: "Работы", count: 24 },
    { id: "collections", name: "Коллекции", count: 8 },
    { id: "liked", name: "Понравившиеся", count: 156 },
    { id: "following", name: "Подписки", count: 42 },
    { id: "followers", name: "Подписчики", count: 1200 },
  ];

  const userWorks: UserWork[] = [
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
        <DialogTitle className="sr-only">Профиль пользователя</DialogTitle>

        <UserProfileHeader user={user} />

        <UserProfileTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <UserProfileContent activeTab={activeTab} userWorks={userWorks} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfileModal;
