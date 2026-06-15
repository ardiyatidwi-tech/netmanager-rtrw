export const metadata = {
title: 'NETMANAGER',
description: 'NETMANAGER RTRW',
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <html lang="id"> <body>{children}</body> </html>
);
}
