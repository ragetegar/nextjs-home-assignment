import NavItem from "./NavItem";
import { NavItem as NavItemType } from "@/pages/api/mockData";

interface LeftSidebarProps {
    navItems: NavItemType[];
}

export default function LeftSidebar({ navItems }: LeftSidebarProps) {
    return (
        <div className="flex flex-col h-full">
            {/* Navigation */}
            <nav className="flex-1">
                {navItems.map((item) => (
                    <NavItem key={item.label} {...item} />
                ))}
            </nav>
        </div>
    );
}
