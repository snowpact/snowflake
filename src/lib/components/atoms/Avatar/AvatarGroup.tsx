import type { PropsWithChildren, ReactNode } from 'react';
import React from 'react';

export type AvatarGroupProps = PropsWithChildren<{
  children: ReactNode;
}>;

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children }) => {
  return (
    <div data-testid="avatar-group-element" className="mb-5 flex -space-x-4">
      {children}
    </div>
  );
};
