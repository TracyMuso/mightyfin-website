import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/Dashboard.module.css";
import {
  useSidebar,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { LeftSidebarData } from "@/constants/data/dashboard";

export function AppSidebar() {
  const { openMobile, setOpenMobile } = useSidebar();
  const pathname = usePathname();

  const changeTab = () => {
    if (openMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar className="h-full" collapsible="icon">
      {openMobile && (
        <div className="md-hidden absolute z-250 top-3 left-[250px] text-white">
          <SidebarTrigger />
        </div>
      )}
      <SidebarContent className={`${styles.leftSidebarContainer}`}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {LeftSidebarData.map((item) => (
                <SidebarMenuItem
                  className={`text-white hover:text-purple-600 hover:cursor-pointer ${
                    pathname === item.href
                      ? "text-purple-600 bg-purple-50 rounded-sm"
                      : ""
                  }`}
                  key={item.title}
                >
                  <SidebarMenuButton asChild onClick={changeTab}>
                    <Link href={item.href} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
