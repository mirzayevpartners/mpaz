import HPFaqBG from '@/assets/HPFaqBG.png';
import ContainerWrapper from '@/components/ContainerWrapper';
import CustomAccordion from '@/components/custom-ui/CustomAccordion';

export default function HPFaqSection() {
  const data = [
    {
      trigger: 'What does it cost to attend law school?',
      content:
        'The cost of attending law school varies depending on the school you choose to attend. You can find information about tuition and fees on the websites of the law schools you are interested in.',
    },
    {
      trigger: 'Do I need to take any prerequisites before I apply to law school?',
      content:
        'Most law schools do not require specific prerequisites for admission. However, you will need to have a bachelor’s degree from an accredited institution before you can enroll in law school.',
    },
    {
      trigger: 'Do law schools require standardized test scores?',
      content:
        'Most law schools require applicants to submit scores from the Law School Admission Test (LSAT). Some schools also accept scores from the Graduate Record Examination (GRE).',
    },
    {
      trigger: 'What classes do law students take in the first year?',
      content:
        'In the first year of law school, students typically take foundational courses in subjects like contracts, torts, civil procedure, criminal law, and legal writing.',
    },
    {
      trigger: 'Are law students required to pursue summer internships?',
      content:
        'Many law students choose to pursue summer internships to gain practical experience and build their professional networks. However, internships are not typically required for graduation.',
    },
    {
      trigger: 'How should I prepare for law school?',
      content:
        'To prepare for law school, you should focus on developing your critical thinking, analytical, and writing skills. You may also want to familiarize yourself with the legal system and the types of legal careers available.',
    },
    {
      trigger: 'Can I apply to law school if I have a criminal record?',
      content:
        'Having a criminal record does not necessarily disqualify you from attending law school. However, you may be required to disclose your criminal history on your application and provide additional information about the circumstances of your conviction.',
    },
    {
      trigger: 'What advice would you give someone considering law school?',
      content:
        'If you are considering law school, I would advise you to research the legal profession thoroughly and talk to current law students and legal professionals to get a sense of what the field is like. You should also consider your own strengths, interests, and career goals to determine if law school is the right path for you.',
    },
  ];
  return (
    <section id={'FaqSection'} className={' bg-mainGreen py-12'} style={{ backgroundImage: `url(${HPFaqBG.src})` }}>
      <ContainerWrapper className={'h-full flex flex-col items-center justify-center gap-y-8'}>
        <div className={'flex flex-col items-center gap-y-1'}>
          <h4 className={'text-paleGold2 text-[20px] leading-[24.2px]'}>FAQ</h4>
          <h2 className={'text-white font-semibold text-[32px] leading-[42.66px]'}>Ən çox verilən suallar</h2>
        </div>
        <div className={'xl:w-1/2 lg:w-2/3 md:w-[80%] sm:w-full'}>
          <CustomAccordion
            data={data}
            contentClassName={'text-myGray text-sm w-full'}
            triggerClassName={'text-[20px] leading-[26.66px] text-secondGold !no-underline text-left'}
          />
        </div>
      </ContainerWrapper>
    </section>
  );
}
