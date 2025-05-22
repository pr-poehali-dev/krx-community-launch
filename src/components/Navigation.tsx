import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavigationProps {
  onProfileClick: () => void;
}

const Navigation = ({ onProfileClick }: NavigationProps) => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rotate-45"></div>
            <span className="text-xl font-bold">KRX Community</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Исследовать
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Учиться
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Магазин
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Вакансии
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Поиск"
              className="bg-gray-700 border border-gray-600 rounded-none px-10 py-2 text-sm focus:outline-none focus:border-blue-500 w-80"
            />
          </div>

          <Button
            variant="outline"
            className="rounded-none border-gray-600 hover:bg-gray-700"
          >
            Обновление до PRO
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-8 h-8 cursor-pointer">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-800 border-gray-700 text-white">
              <DropdownMenuItem
                onClick={onProfileClick}
                className="hover:bg-gray-700"
              >
                <Icon name="User" className="mr-2" size={16} />
                Мой профиль
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-700">
                <Icon name="Settings" className="mr-2" size={16} />
                Настройки
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-700">
                <Icon name="Upload" className="mr-2" size={16} />
                Загрузить работу
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-700">
                <Icon name="LogOut" className="mr-2" size={16} />
                Выйти
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex items-center gap-2">
            <Icon
              name="Bell"
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
            <Icon
              name="ShoppingCart"
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
            <Icon
              name="MessageCircle"
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
            <Icon
              name="MoreHorizontal"
              className="text-gray-400 hover:text-white cursor-pointer"
              size={20}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
