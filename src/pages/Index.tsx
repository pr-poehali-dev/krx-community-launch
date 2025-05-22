import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectModal from "@/components/ProjectModal";
import UserProfileModal from "@/components/UserProfileModal";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation onProfileClick={() => setShowProfileModal(true)} />
      <HeroSection />
      <ProjectGrid projects={projects} />

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 px-6 py-8 mt-16">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 KRX Community. Все права защищены.</p>
          <p className="mt-2">Платформа для творческих профессионалов</p>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        isOpen={showProjectModal}
        onClose={() => setShowProjectModal(false)}
      />

      <UserProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </div>
  );
};

export default Index;
