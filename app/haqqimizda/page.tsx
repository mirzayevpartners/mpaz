import Link from 'next/link';
import TopShowLinks from '@/components/TopShowLinks';
import AboutPageBg from '@/assets/AboutPageBg.png';
import ContainerWrapper from '@/components/ContainerWrapper';
import AboutPageBgSmall from '@/assets/AboutPageBgSmall.png';
import { Separator } from '@/components/ui/separator';
export default function Home() {
  const links = [
    {
      text: 'Əsas səhifə',
      href: '/',
    },
    {
      text: 'Haqqımızda',
      href: '/haqqimizda',
    },
  ];
  return (
    <div>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'flex flex-col gap-y-8 py-8'}>
        <div>
          <img src={AboutPageBg.src} className={'hidden sm:block w-full'} />
          <img src={AboutPageBgSmall.src} className={'block sm:hidden w-full'} />
        </div>
        <div className={'flex flex-col items-center gap-y-6'}>
          <div className={'flex flex-col gap-y-1 items-center'}>
            <h2 className={'text-secondGold text-[20px] leading-[24.2px]'}>HAQQIMIZDA</h2>
            <h1 className={'text-center font-semibold text-mainGreen text-[32px] leading-[42.66px]'}>
              “Mirzəyev və partnyorları şirkəti kimdir
            </h1>
          </div>
          <p className={'text-base leading-[28px] text-center text-newsText xl:max-w-[70%] md:max-w-[85%] max-w-full'}>
            “Mirzayev and Partners Law Firm” hüquq şirkəti Sizin problemlərinizi hüquq müstəvisində həll etməyə qadir
            təcrübəli, müstəqil vəkillərin və hüquqşünasların komandasıdır. Biz hüquqi və fiziki şəxslərin müdafiəsini
            və ən müxtəlif hüquqi problemlərin, ən mürəkkəb hüquqi məsələlərin müasir həllini təklif edirik. İstər
            yerli, istərsə də xarici müştərilərin problemlərini həll etməyə hazırıq. Biz “Mirzayev and Partners Law
            Firm” hüquq şirkətinin gələcəyinə böyük ümidlərlə baxırıq, çox ciddi və iddialı planlarımız vardır. Bizim
            xidmətlərin keyfiyyəti hüququn bütün sahələri üzrə ekspert səviyyəsində biliklərə və təcrübəyə malik
            əməkdaşlarımızın olması, hüquq sisteminin fəaliyyətinin xüsusiyyətlərini bilməyimiz, hər bir müştəriyə fərdi
            və bir tərəfdaş kimi yanaşmağımız, yüksək professionallıq, məlumatların konfidensiallığının qorunması və
            etik standartlara əməl etməyimizlə bağlıdır. Müştərilərimizlə uzunmüddətli münasibətlərin qurulmasının
            tərəfdarıyıq. Komandamızın üzvləri Azərbaycan Respublikasının, eləcə də xarici ölkələrin aparıcı hüquq
            şirkətlərində, dövlət müəssisələrində uzun illər çalışmış, hüququn ayrı-ayrı sahələri üzrə ixtisaslaşmış,
            müxtəlif beynəlxalq təlimlərdə iştirak etmiş və müsbət iş təcrübəsinə malik olan hüquqşünaslar və
            vəkillərdir. Biz qanunvericilikdəki dəyişiklikləri diqqətlə izləyirik və günün tələblərinə uyğun olaraq,
            təklif etdiyimiz xidmətlərin spektrini daim genişləndiririk. Müştərinin mənafeyi tələb edən hər zaman və hər
            yerdə yanınızdayıq.
          </p>
          <div className={'flex flex-col gap-y-1 items-center'}>
            <h1 className={'text-mainGreen font-semibold text-[32px] leading-[42.66px]'}>Missiyamız</h1>
            <p className={'text-base leading-7 text-center text-newsText'}>
              Bilik və məsuliyyətimizə güvənərək ədalətin bərqərar olmasına nail oluruq.
            </p>
          </div>
        </div>
        {/*<Separator className={'bg-secondGold h-0.5'} />*/}
      </ContainerWrapper>
    </div>
  );
}
