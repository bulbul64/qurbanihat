import Image from 'next/image';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Image className="h-18 w-18"  src="/images/logo.jpg" alt="Logo" width={100} height={100} />
    </div>
  );
};
