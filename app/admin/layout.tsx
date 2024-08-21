import './admin.css';
export const metadata = {
  title: 'Admin panel',
  description: 'mp.az Admin Panel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
