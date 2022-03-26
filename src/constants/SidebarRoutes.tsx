import {
  HiAdjustments,
  HiCash,
  HiChartBar,
  HiCollection,
  HiHome,
  HiShoppingCart,
} from 'react-icons/hi';
import { SidebarRoute } from 'types';

const SidebarRoutes: SidebarRoute[] = [
  {
    title: 'Dashboard',
    icon: <HiHome />,
    routeUrl: '/',
  },
  {
    title: 'Compras',
    icon: <HiCash />,
    routeUrl: '/shopping-list',
  },
  {
    title: 'Estatisticas',
    icon: <HiChartBar />,
    routeUrl: '/stats',
  },
  {
    title: 'Categorias',
    icon: <HiCollection />,
    routeUrl: '/categories',
  },
  {
    title: 'Mercados',
    icon: <HiShoppingCart />,
    routeUrl: '/stores',
  },
  {
    title: 'Configurações',
    icon: <HiAdjustments />,
    routeUrl: '/settings',
  },
];

export default SidebarRoutes;
