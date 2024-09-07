'use client';
// @ts-expect-error - tawk.to is not typed
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from '@/navigation';

export default function ChatBot() {
  const pathname = usePathname();
  const router = useRouter();
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return (
    <TawkMessengerReact customStyle={{ zIndex: 100 }} propertyId="66d45475ea492f34bc0c67b0" widgetId="1i6mmjqqp" />
  );
}
