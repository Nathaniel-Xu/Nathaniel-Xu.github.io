import { ReactNode } from 'react';
import clsx from 'clsx';

interface GradientButtonLinkProps {
  href: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function GradientButtonLink({
  href,
  title,
  children,
  className,
}: GradientButtonLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={clsx(
        'group mt-2 flex w-fit cursor-pointer items-center gap-x-1 rounded-full border-none bg-gradient-to-r from-[#aa2957] from-0% via-[#aa2957] via-40% to-[#aa2957] to-90% px-5 py-2 text-sm font-bold tracking-wide text-white no-underline shadow-lg hover:from-[#aa2957] hover:via-[#aa2957] hover:to-[#aa2957] hover:text-white focus:outline-none focus:ring-[#aa2957] focus:ring-offset-2 active:scale-95 dark:shadow-[#aa2957]/30 sm:mt-0 sm:px-6 sm:py-2.5 sm:text-base',
        className,
      )}
    >
      <span>{title}</span>
      {children}
    </a>
  );
}
