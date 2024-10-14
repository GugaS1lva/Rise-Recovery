import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  link: string;
  image: string;
  name: string;
  description: string;
  spec: string;
}

export default function Card({ link, image, name, description, spec }: CardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="w-80 h-96 rounded-xl p-4 hover:scale-105 transition-all flex flex-col justify-end gap-2 bg-blue_heuristic text-yellow_heuristic relative"
    >
      <span className='bg-yellow_heuristic text-verydark_heuristic font-bold text-center flex items-center justify-center top-0 absolute left-0 rounded-tl-xl rounded-tr-xl w-full h-14'>
        {name}
      </span>

      <Image src={image} width={500} height={500} alt='teste' />

      <div className='flex flex-col gap-2'>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{spec}</p>
      </div>
    </Link>
  );
}