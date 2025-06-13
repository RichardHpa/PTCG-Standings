// ScrollSyncContext.tsx
import React, { createContext, useContext, useRef } from 'react';

type ScrollSyncCallback = (scrollTop: number, scrollLeft: number) => void;

const ScrollSyncContext = createContext<{
  subscribe: (cb: ScrollSyncCallback) => () => void;
  publish: ScrollSyncCallback;
} | null>(null);

export const ScrollSyncProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const callbacks = useRef<Set<ScrollSyncCallback>>(new Set());

  const subscribe = (cb: ScrollSyncCallback) => {
    callbacks.current.add(cb);
    return () => callbacks.current.delete(cb);
  };

  const publish = (scrollTop: number, scrollLeft: number) => {
    callbacks.current.forEach((cb) => cb(scrollTop, scrollLeft));
  };

  return (
    <ScrollSyncContext.Provider value={{ subscribe, publish }}>
      {children}
    </ScrollSyncContext.Provider>
  );
};

export function useGlobalScrollSync() {
  const ctx = useContext(ScrollSyncContext);
  if (!ctx) throw new Error('useGlobalScrollSync must be used within ScrollSyncProvider');
  return ctx;
}
