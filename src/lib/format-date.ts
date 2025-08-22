export function formatDate(date: Date) {
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export function formatDateWithRelativeTime(date: Date) {
	const now = new Date();
	const targetDate = new Date(date);

	const formattedDate = targetDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const diffMs = now.getTime() - targetDate.getTime();
	const diffDays = Math.floor(diffMs / (1_000 * 60 * 60 * 24));
	const diffHours = Math.floor(diffMs / (1_000 * 60 * 60));
	const diffMinutes = Math.floor(diffMs / (1_000 * 60));

	let relativeTime: string;

	if (diffMs < 0) {
		const futureDays = Math.abs(diffDays);
		const futureHours = Math.abs(diffHours);
		const futureMinutes = Math.abs(diffMinutes);

		if (futureDays > 0) {
			relativeTime = futureDays === 1 ? "in a day" : `in ${futureDays} days`;
		} else if (futureHours > 0) {
			relativeTime =
				futureHours === 1 ? "in an hour" : `in ${futureHours} hours`;
		} else if (futureMinutes > 0) {
			relativeTime =
				futureMinutes === 1 ? "in a minute" : `in ${futureMinutes} minutes`;
		} else {
			relativeTime = "a few seconds ago";
		}
	} else {
		if (diffDays > 0) {
			relativeTime = diffDays === 1 ? "a day ago" : `${diffDays} days ago`;
		} else if (diffHours > 0) {
			relativeTime =
				diffHours === 1 ? "an hours ago" : `${diffHours} hours ago`;
		} else if (diffMinutes > 0) {
			relativeTime =
				diffMinutes === 1
					? "less than a minute ago"
					: `${diffMinutes} minutes ago`;
		} else {
			relativeTime = "a few seconds ago";
		}
	}

	return `${formattedDate} (${relativeTime})`;
}
