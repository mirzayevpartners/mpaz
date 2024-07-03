import NewsImgSlider from '@/components/xeberler/NewsImgSlider';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function SingleNewsFullCard() {
  const socialIcons = [
    { href: '/', icon: <FaFacebookF className={'text-white'} size={15} /> },
    { href: '/', icon: <FaTwitter className={'text-white'} size={15} /> },
    { href: '/', icon: <FaInstagram className={'text-white'} size={15} /> },
    { href: '/', icon: <FaYoutube className={'text-white'} size={15} /> },
    { href: '/', icon: <FaLinkedinIn className={'text-white'} size={15} /> },
  ];
  return (
    <div className={'flex flex-[2] flex-col gap-y-[44px]'}>
      <div className={'flex flex-col gap-y-[44px]'}>
        <div className={'flex flex-col gap-y-[34px]'}>
          <div className={'BASLIQ flex flex-col gap-y-[26px]'}>
            <div className={'flex flex-col gap-y-2'}>
              <div
                className={
                  'h-7 px-2 inline-flex w-fit items-center justify-center bg-secondGold text-white text-center text-sm leading-[14px]'
                }
              >
                17.12.2023 | 14:24
              </div>
              <h1 className={'font-bold text-[28px] leading-[44.99px] sm:text-[40px] sm:leading-[53.07px] text-mainGreen'}>
                "Mirzəyev və Partnyorları" Vəkil Bürosunda Müstəqilliyin Bərpası Günü münasibətilə şahmat turniri
                keçirilib
              </h1>
            </div>
            <p className={'text-base leading-7 text-newsText'}>
              Avropa İnsan Hüquqları Konvensiyasının 6-cı maddəsinə əsasən, hər kəs ədalətli məhkəmə araşdırması
              hüququna malikdir.
            </p>
          </div>
          <NewsImgSlider />
        </div>
        <div>
          <p className={'text-base leading-7 text-newsText'}>
            İlk öncə qeyd edim ki, adenoid burun udlaqda yerləşən limfoid toxuma olan burun udlaq badamcığıdır. El
            arasında bu burun əti kimi tanınır. Böyümüş burun əti ilk öncə burun tənəffüsünü pozur və bunun da
            nəticəsində beyin lazımı oksigeni ala bilmir və nəticədə uşaqlarda zehni inkişaf pozğunluğuna,yuxu
            pozğunluğuna,tın-tınlı danışığa gecələr ağzı açıq yatmaya, xoruldamaya, gecələr narahat yatmaya və s. səbəb
            olur. Burun udlaq badamcığı kapsulu olmayan limfoid toxumadır. Əgər əməliyyat sırasında toxumanın kiçik bir
            hissəsi qalsa, bu gələcəkdə nəfəs almaya problemlər yarada bilər. Biz əməliyyatlarımızı endoskopik icra
            etdiyimiz üçün bu tip fəsadlar ilə ratlaşmırıq. Endoskop ilə burun udlaqda olan bütün adenoid toxuması tam
            təmizlənmə imkanına sahibdir və burun ətinin yenidən əmələ gəlmə şansı sıfıra bərabərdir. İlk öncə qeyd edim
            ki, adenoid burun udlaqda yerləşən limfoid toxuma olan burun udlaq badamcığıdır. El arasında bu burun əti
            kimi tanınır. Böyümüş burun əti ilk öncə burun tənəffüsünü pozur və bunun da nəticəsində beyin lazımı
            oksigeni ala bilmir və nəticədə uşaqlarda zehni inkişaf pozğunluğuna,yuxu pozğunluğuna,tın-tınlı danışığa
            gecələr ağzı açıq yatmaya, xoruldamaya, gecələr narahat yatmaya və s. səbəb olur.
          </p>
        </div>
      </div>
      <div className={'h-16 border-t border-t-myGray flex items-center justify-center pt-5 sm:pt-0 sm:justify-start'}>
        <div className={'flex items-center gap-x-8 flex-col gap-y-4 sm:flex-row'}>
          <p className={'text-sm leading-[21.63px] text-newsText'}>Sosial şəbəkələrdə paylaş</p>
          <div className={'flex items-center gap-x-[15px]'}>
            {socialIcons.map((item, index) => {
              return (
                <Link
                  className={'bg-newsText rounded-full size-6 flex items-center justify-center'}
                  href={item.href}
                  key={index}
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
