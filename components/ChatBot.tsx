'use client';
// @ts-expect-error - tawk.to is not typed
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from 'react';

export default function ChatBot() {
  // const tawkMessengerRef = useRef();
  //
  // const handleToggle = () => {
  //   if (tawkMessengerRef?.current) {
  //     // @ts-expect-error - toggle is not typed
  //     tawkMessengerRef.current?.toggle();
  //   }
  // };
  // const onLoad = () => {
  //   // @ts-expect-error - hideWidget is not typed
  //   tawkMessengerRef.current.hideWidget();
  // };
  return (
    <TawkMessengerReact
      customStyle={{ zIndex: 100 }}
      // ref={tawkMessengerRef}
      propertyId="66d45475ea492f34bc0c67b0"
      widgetId="1i6mmjqqp"
    />
  );
}
