import type { Metadata } from "next";
import "./globals.css";
import { ResponseLogger } from "@/components/response-logger";
import { cookies } from "next/headers";
import { ReadyNotifier } from "@/components/ready-notifier";
import FarcasterWrapper from "@/components/FarcasterWrapper";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const requestId = cookieStore.get("x-request-id")?.value;

  return (
        <html lang="en">
          <head>
            {requestId && <meta name="x-request-id" content={requestId} />}
          </head>
          <body className="antialiased">
            {/* Do not remove this component, we use it to notify the parent that the mini-app is ready */}
            <ReadyNotifier />
            
      <FarcasterWrapper>
        {children}
      </FarcasterWrapper>
      
            <ResponseLogger />
          </body>
        </html>
      );
}

export const metadata: Metadata = {
        title: "Gajian OnChain Payroll",
        description: "Manage payroll and treasury with full self-custody. Dashboard with graphs, user profiles, and settings. React + Tailwind CSS for seamless UI.",
        other: { "fc:frame": JSON.stringify({"version":"next","imageUrl":"https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/thumbnail_88822e3d-5fa0-4e0f-955a-4052db898c76-oVXZciTOnuwLnJLJK8aqNn22Pir5vR","button":{"title":"Open with Ohara","action":{"type":"launch_frame","name":"Gajian OnChain Payroll","url":"https://calm-primitive-120.app.ohara.ai","splashImageUrl":"https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/farcaster/splash_images/splash_image1.svg","splashBackgroundColor":"#ffffff"}}}
        ) }
    };
