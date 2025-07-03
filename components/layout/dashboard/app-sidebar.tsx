import styles from "@/styles/Dashboard.module.css";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { LeftSidebarData } from "@/constants/data/dashboard";
// import styles from "@/styles/Dashboard.module.css";

export function AppSidebar() {
  return (
    <Sidebar className="h-full" collapsible="icon">
      <SidebarContent className={`${styles.leftSidebarContainer}`}>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
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
