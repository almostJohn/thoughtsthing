import { NextLink } from "./ui/next-link";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-rose-200 bg-rose-50/95 backdrop-blur-xl supports-[backdrop-filter]:bg-rose-50/60">
			<div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-0 h-16">
				<div className="flex items-center">
					<NextLink href="/" className="text-lg font-bold">
						thoughts<span className="text-rose-600">thing</span>
					</NextLink>
				</div>
				<MainNav />
				<MobileNav />
			</div>
		</header>
	);
}
