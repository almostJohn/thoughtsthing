"use client";

import { usePathname } from "next/navigation";
import { NextLink } from "./ui/next-link";
import { cn } from "@/lib/utils";

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

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="hidden items-center justify-end gap-6 md:flex">
			{navItems.map((item, index) => (
				<NextLink
					key={index + 1}
					href={item.href}
					className={cn(
						"text-base font-medium transition-colors duration-200",
						pathname === item.href ? "text-rose-500" : "hover:text-rose-500",
					)}
				>
					{item.label}
				</NextLink>
			))}
		</div>
	);
}
