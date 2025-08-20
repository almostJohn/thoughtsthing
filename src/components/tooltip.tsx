import type { PropsWithChildren } from "react";
import {
	Tooltip as TooltipWrapper,
	TooltipTrigger,
	TooltipContent,
} from "./ui/tooltip";

type TooltipProps = PropsWithChildren & {
	content: string;
};

export function Tooltip({ content, children }: TooltipProps) {
	return (
		<TooltipWrapper>
			<TooltipTrigger>{children}</TooltipTrigger>
			<TooltipContent>
				<p>{content}</p>
			</TooltipContent>
		</TooltipWrapper>
	);
}
