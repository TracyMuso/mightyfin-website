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
// import styles from "@/styles/Dashboard.module.css";

export function AppSidebar() {
  const { openMobile } = useSidebar();

  return (
    <Sidebar className="h-full" collapsible="icon">
      {openMobile && (
        <div className="md-hidden absolute z-250 top-3 left-[250px] text-white ">
          <SidebarTrigger />
        </div>
      )}
      <SidebarContent className={`${styles.leftSidebarContainer}`}>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {LeftSidebarData.map((item) => (
                <SidebarMenuItem
                  className="text-white hover:text-purple-600 hover:cursor-pointer"
                  key={item.title}
                >
                  <SidebarMenuButton asChild>
                    <span onClick={item.onClick}>
                      <item.icon />
                      <span>{item.title}</span>
                    </span>
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
