import { ProfileTab, TabType } from "@/types/user";

interface UserProfileTabsProps {
  tabs: ProfileTab[];
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const UserProfileTabs = ({
  tabs,
  activeTab,
  onTabChange,
}: UserProfileTabsProps) => {
  return (
    <div className="px-6">
      <div className="border-b border-gray-700">
        <nav className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as TabType)}
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
  );
};

export default UserProfileTabs;
