import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
