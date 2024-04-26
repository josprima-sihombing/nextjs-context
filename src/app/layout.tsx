import { AppContextProvider } from "@/contexts/app-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body>{children}</body>
      </AppContextProvider>
    </html>
  );
}
