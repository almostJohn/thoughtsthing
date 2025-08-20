export function formatNumber(length: number, locale: string = "en-US"): string {
	return new Intl.NumberFormat(locale).format(length);
}
