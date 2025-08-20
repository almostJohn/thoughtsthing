export function Footer() {
	return (
		<footer className="bottom-0 w-full">
			<div className="mx-auto flex items-center justify-center text-center h-16">
				<p className="text-sm text-muted-foreground">
					Built by{" "}
					<a
						href="https://github.com/almostJohn"
						rel="noreferrer"
						target="_blank"
						className="underline-offset-4 underline"
					>
						almostJohn
					</a>
					. The source code is available at{" "}
					<a
						className="underline-offset-4 underline"
						href="https://github.com/almostJohn/thoughtsthing"
						rel="noreferrer"
						target="_blank"
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
	);
}
