import Link from 'next/link';
import ContainerWrapper from '@/components/ContainerWrapper';

interface TopShowLinksProps {
  links: {
    text: string;
    href: string;
  }[];
}

export default function TopShowLinks({ links }: TopShowLinksProps) {
  return (
    <div className={'w-full bg-bgGray h-[66px] flex items-center'}>
      <ContainerWrapper>
        <div className={'flex gap-x-1'}>
          {links.map((link, index) => {
            return (
              <>
                <Link
                  className={`text-base ${index === links.length - 1 ? 'text-mainGreen' : 'text-secondText'}`}
                  href={link.href}
                  key={link.text}
                >
                  {link.text}
                </Link>
                {index !== links.length - 1 && <span>{'/'}</span>}
              </>
            );
          })}
        </div>
      </ContainerWrapper>
    </div>
  );
}
