import { Outlet } from 'react-router-dom';
import { ResourcesShell } from '@/components/resources/ResourcesShell';

export const ResourcesWrapper = () => {
  return <ResourcesShell><Outlet /></ResourcesShell>;
};

export default ResourcesWrapper;
