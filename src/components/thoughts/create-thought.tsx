"use client";

import {
	useState,
	type PropsWithChildren,
	type SetStateAction,
	type Dispatch,
	type FormEvent,
} from "react";
import { useServerAction } from "@/hooks/use-server-action";
import { createThought } from "@/actions/create-thought";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "../ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

type CreateThoughtDialogProps = PropsWithChildren & {
	interacted: boolean;
	setInteracted: Dispatch<SetStateAction<boolean>>;
};

function CreateThoughtDialog({
	interacted,
	setInteracted,
	children,
}: CreateThoughtDialogProps) {
	return (
		<Dialog open={interacted} onOpenChange={setInteracted}>
			<DialogTrigger asChild>
				<Button className="cursor-pointer bg-rose-500 text-rose-50 hover:bg-rose-600">
					create thought
				</Button>
			</DialogTrigger>
			<DialogContent className="w-full sm:max-w-xl">
				<VisuallyHidden>
					<DialogTitle>Create Thought Title</DialogTitle>
					<DialogDescription>Create Thought Description</DialogDescription>
				</VisuallyHidden>
				{children}
			</DialogContent>
		</Dialog>
	);
}

const initialState = {
	successMessage: "",
	errorMessage: "",
	errors: {
		author: "",
		content: "",
	},
};

export function CreateThought() {
	const { state, formAction, isPending } = useServerAction(
		createThought,
		initialState,
	);
	const [length, setLength] = useState(0);
	const [isAnonymous, setIsAnonymous] = useState(false);
	const [interacted, setInteracted] = useState(false);
	const maxLength = 300;

	const isNearLimit = length > maxLength * 0.8;
	const isOverLimit = length > maxLength;

	function onClose() {
		setInteracted((prev) => !prev);
	}

	function handleInputLength(e: FormEvent<HTMLTextAreaElement>) {
		setLength(e.currentTarget.value.length);
	}

	return (
		<CreateThoughtDialog interacted={interacted} setInteracted={setInteracted}>
			<form
				action={(formData) => {
					formAction(formData);
					onClose();
				}}
				className="flex flex-col gap-4"
			>
				<h1 className="text-2xl font-bold">create a new thought</h1>
				<div className="flex flex-col gap-2">
					<Label htmlFor="author">author</Label>
					<Input
						type="text"
						id="author"
						name="author"
						disabled={isAnonymous}
						placeholder={isAnonymous ? "anonymous" : "enter your name"}
						className="w-full focus-visible:border-rose-500/60 focus-visible:ring-rose-500/30"
						required
					/>
					{state.errors?.author && (
						<span className="text-sm text-red-500">{state.errors.author}</span>
					)}
					{isAnonymous && (
						<span className="text-sm">your post will be anonymous.</span>
					)}
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="content">content</Label>
					<Textarea
						id="content"
						name="content"
						onInput={handleInputLength}
						rows={4}
						placeholder="what's on your mind?"
						className={cn(
							"w-full h-50 whitespace-pre-wrap break-all focus-visible:border-rose-500/60 focus-visible:ring-rose-500/30",
							isOverLimit
								? "border-red-500"
								: isNearLimit
								? "border-amber-500"
								: "",
						)}
						required
					/>
					<div className="flex items-center justify-between">
						<div
							className={cn(
								"text-sm font-medium",
								isOverLimit
									? "text-red-500"
									: isNearLimit
									? "text-amber-500"
									: "text-muted-foreground",
							)}
						>
							{length} / {maxLength}
						</div>
						<div className="flex items-center gap-2">
							<div className="w-24 bg-accent rounded-full h-2">
								<div
									className={cn(
										"h-2 rounded-full transition-all duration-300",
										isOverLimit
											? "bg-red-500"
											: isNearLimit
											? "bg-amber-500"
											: "bg-rose-500",
									)}
									style={{
										width: `${Math.min((length / maxLength) * 100, 100)}%`,
									}}
								/>
							</div>
							{isOverLimit && (
								<span className="text-sm text-red-500">
									your over the limit!
								</span>
							)}
						</div>
					</div>
					{state.errors?.content && (
						<span className="text-sm text-red-500">{state.errors.content}</span>
					)}
				</div>
				<div className="flex flex-col gap-3 items-center justify-center md:flex-row md:justify-between">
					<div className="flex items-center gap-2">
						<Checkbox
							id="is_anonymous"
							name="is_anonymous"
							checked={isAnonymous}
							onCheckedChange={(checked) => setIsAnonymous(checked === true)}
							className="border border-rose-500 data-[state=checked]:bg-rose-500 data-[state=checked]:text-rose-50 data-[state=checked]:border-rose-500"
						/>
						<Label htmlFor="is_anonymous">post anonymously</Label>
					</div>
					<Button
						type="submit"
						disabled={isPending || isOverLimit}
						className="cursor-pointer bg-rose-500 text-rose-50 hover:bg-rose-600"
					>
						{isPending ? (
							<Loader className="size-4 animate-spin shrink-0" />
						) : (
							"post"
						)}
					</Button>
				</div>
			</form>
		</CreateThoughtDialog>
	);
}
