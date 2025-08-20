import "@/styles/globals.css";
import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { loveYaLikeASister } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
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
						"bg-rose-50 text-rose-950 antialiased",
						loveYaLikeASister.className,
					)}
				>
					<main className="min-h-screen relative">
						<Navbar />
						{children}
					</main>
				</body>
			</html>
		</ToastProvider>
	);
}
