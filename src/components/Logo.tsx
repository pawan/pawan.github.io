import Image from 'next/image';

export function MyLogo() {
  return (
    <Image src="/expert.png" alt="Profile" width={100} height={100} />
  );
}