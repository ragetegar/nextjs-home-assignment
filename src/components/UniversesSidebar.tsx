import UniverseTag from "./UniverseTag";
import { Universe } from "@/pages/api/mockData";

interface UniversesSidebarProps {
    universes: Universe[];
}

export default function UniversesSidebar({ universes }: UniversesSidebarProps) {
    return (
        <div className="rounded-3xl p-4 box-shadow h-[90vh] flex flex-col">
            <h3 className="text-sm font-semibold text-white mb-3">Universes</h3>
            <div className="space-y-1 overflow-y-auto scrollbar-hide flex-1">
                {universes.map((universe) => (
                    <UniverseTag key={universe.tag} {...universe} />
                ))}
            </div>
        </div>
    );
}
