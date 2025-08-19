"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NextLink } from "./ui/next-link";

const navItems = [
	{
		label: "home",
		href: "/",
	},
	{
		label: "about",
		href: "/about",
	},
	{
		label: "contact",
		href: "/contact",
	},
];

export function MobileNav() {
	const pathname = usePathname();
	const [interacted, setInteracted] = useState(false);

	function toggleMenu() {
		setInteracted((prev) => !prev);
	}

	return (
		<>
			<button
				className="inline-flex items-center justify-center size-10 rounded-lg cursor-pointer transition-colors duration-300 p-2 hover:bg-rose-200 md:hidden"
				aria-label="Toggle Menu"
				onClick={toggleMenu}
			>
				<Menu className="size-5 shrink-0" />
			</button>
			<div
				className={cn(
					"md:hidden fixed min-h-screen inset-0 bg-rose-50 z-40 transition-all duration-500 ease-in-out",
					interacted ? "opacity-100 visible" : "opacity-0 invisible",
				)}
				onClick={() => setInteracted(false)}
			>
				<button
					className="inline-flex absolute top-4 right-6 items-center justify-center size-10 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-rose-200"
					onClick={() => setInteracted(false)}
					aria-label="Close Menu"
				>
					<X className="size-5 shrink-0" />
				</button>
				<nav
					className="h-full flex flex-col items-center justify-center gap-8"
					onClick={(e) => e.stopPropagation()}
				>
					{navItems.map((item, index) => (
						<NextLink
							key={index + 1}
							href={item.href}
							className={cn(
								"text-lg font-semibold transition-colors duration-200",
								pathname === item.href
									? "text-rose-500"
									: "hover:text-rose-500",
							)}
							onClick={() => setInteracted(false)}
						>
							{item.label}
						</NextLink>
					))}
				</nav>
			</div>
		</>
	);
}
