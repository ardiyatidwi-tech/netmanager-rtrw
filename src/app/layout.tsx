export const metadata = {
  title: 'NetManager RT/RW',
  description: 'Oriya Gunung Guruh Official',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
