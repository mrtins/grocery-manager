import { ReactNode } from 'react';

export interface SidebarRoute {
  title: string;
  icon?: ReactNode;
  routeUrl?: string;
}
