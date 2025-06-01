import { useEffect, useRef } from 'react';
import { useGlobalScrollSync } from './ScrollSyncContext';

export function useSyncedScroll(
  refs: React.RefObject<HTMLElement | null>[],
  enableGlobalSync: boolean = false,
) {
  const isSyncing = useRef(false);

  // Optional global sync support
  let subscribe:
    | ((cb: (top: number, left: number) => void) => () => void)
    | null = null;
  let publish: ((top: number, left: number) => void) | null = null;

  try {
    const global = useGlobalScrollSync();
    subscribe = global.subscribe;
    publish = global.publish;
  } catch {
    // no provider, operate in local-only mode
  }

  useEffect(() => {
    const handleScroll = (sourceIndex: number) => () => {
      if (isSyncing.current) return;
      isSyncing.current = true;

      const source = refs[sourceIndex].current;
      if (!source) return;

      const { scrollTop, scrollLeft } = source;

      // Local sync
      refs.forEach((ref, index) => {
        if (index !== sourceIndex && ref.current) {
          ref.current.scrollTop = scrollTop;
          ref.current.scrollLeft = scrollLeft;
        }
      });

      // Global sync
      if (enableGlobalSync && publish) {
        publish(scrollTop, scrollLeft);
      }

      requestAnimationFrame(() => {
        isSyncing.current = false;
      });
    };

    const listeners: (() => void)[] = [];

    refs.forEach((ref, index) => {
      const el = ref.current;
      if (el) {
        const listener = handleScroll(index);
        el.addEventListener('scroll', listener);
        listeners.push(() => el.removeEventListener('scroll', listener));
      }
    });

    let unsubscribe: (() => void) | null = null;

    if (enableGlobalSync && subscribe) {
      unsubscribe = subscribe((scrollTop, scrollLeft) => {
        if (isSyncing.current) return;
        isSyncing.current = true;

        refs.forEach(ref => {
          if (ref.current) {
            ref.current.scrollTop = scrollTop;
            ref.current.scrollLeft = scrollLeft;
          }
        });

        requestAnimationFrame(() => {
          isSyncing.current = false;
        });
      });
    }

    return () => {
      listeners.forEach(remove => remove());
      if (unsubscribe) unsubscribe();
    };
  }, [refs, enableGlobalSync, subscribe, publish]);
}
