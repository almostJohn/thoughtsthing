import "@/styles/globals.css";
import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { loveYaLikeASister } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ToastProvider } from "@/components/toast-provider";

export const metadata: Metadata = {
	title: "thoughtsthing",
	description:
		"Where free speech reigns. Share your thoughts, no holds barred.",
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<ToastProvider>
			<html lang="en" suppressHydrationWarning>
				<body
					className={cn(
						"bg-rose-50 text-rose-950 antialiase selection:bg-rose-500/10 selection:text-rose-500",
						loveYaLikeASister.className,
					)}
				>
					<main className="relative min-h-screen">
						<Navbar />
						{children}
						<Footer />
					</main>
				</body>
			</html>
		</ToastProvider>
	);
}
