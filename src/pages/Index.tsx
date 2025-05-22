import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все проекты" },
    { id: "3d", name: "3D Моделирование" },
    { id: "animation", name: "Анимация" },
    { id: "concept", name: "Концепт-арт" },
    { id: "game", name: "Игровые модели" },
    { id: "architecture", name: "Архитектура" },
  ];

  const projects = [
    {
      id: 1,
      title: "Киберпанк Робот",
      author: "Alex_3D",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      likes: 234,
      views: 1200,
      category: "3d",
    },
    {
      id: 2,
      title: "Футуристический Город",
      author: "CityBuilder",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      likes: 567,
      views: 2800,
      category: "architecture",
    },
    {
      id: 3,
      title: "Персонаж для Игры",
      author: "GameArtist",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      likes: 123,
      views: 890,
      category: "game",
    },
    {
      id: 4,
      title: "Космический Корабль",
      author: "SpaceDesigner",
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
      likes: 345,
      views: 1500,
      category: "3d",
    },
    {
      id: 5,
      title: "Анимированный Дракон",
      author: "DragonMaster",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      likes: 789,
      views: 3200,
      category: "animation",
    },
    {
      id: 6,
      title: "Концепт Транспорта",
      author: "VehicleArt",
      image:
        "https://images.unsplash.com/photo-1558618666-9a2b7e6e9c3f?w=400&h=300&fit=crop",
      likes: 456,
      views: 1800,
      category: "concept",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
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

            <Button className="rounded-none bg-blue-500 hover:bg-blue-600">
              Войти
            </Button>

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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Креативное Сообщество{" "}
            <span className="text-blue-400">3D Художников</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Делитесь своими работами, находите вдохновение и развивайтесь в мире
            3D искусства. Присоединяйтесь к глобальному сообществу талантливых
            художников.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="rounded-none bg-blue-500 hover:bg-blue-600 px-8 py-3">
              Начать Творить
            </Button>
            <Button
              variant="outline"
              className="rounded-none border-gray-600 hover:bg-gray-700 px-8 py-3"
            >
              Смотреть Работы
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-8 border-b border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "ghost"}
                className={`rounded-none ${
                  activeCategory === category.id
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "hover:bg-gray-700 text-gray-300"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Heart" className="text-white" size={20} />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    by {project.author}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Icon name="Heart" size={16} />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Eye" size={16} />
                        <span>{project.views}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Icon
                        name="Bookmark"
                        className="hover:text-white cursor-pointer"
                        size={16}
                      />
                      <Icon
                        name="Share"
                        className="hover:text-white cursor-pointer"
                        size={16}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="rounded-none bg-gray-700 hover:bg-gray-600 px-8 py-3">
              Загрузить Больше Работ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 px-6 py-8 mt-16">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 KRX Community. Все права защищены.</p>
          <p className="mt-2">Платформа для творческих профессионалов</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
