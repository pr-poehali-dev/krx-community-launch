import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  author: string;
  image: string;
  likes: number;
  views: number;
  category: string;
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все проекты" },
    { id: "3d", name: "3D Моделирование" },
    { id: "animation", name: "Анимация" },
    { id: "concept", name: "Концепт-арт" },
    { id: "game", name: "Игровые модели" },
    { id: "architecture", name: "Архитектура" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
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
    </>
  );
};

export default ProjectGrid;
