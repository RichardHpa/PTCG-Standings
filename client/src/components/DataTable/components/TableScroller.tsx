import type { ReactNode, Ref } from 'react';

export const TableScroller = ({
  children,
  scrollerRef,
}: {
  children: ReactNode;
  scrollerRef?: Ref<HTMLDivElement>;
}) => {
  return (
    <div className="w-full overflow-x-auto" ref={scrollerRef}>
      {children}
    </div>
  );
};
