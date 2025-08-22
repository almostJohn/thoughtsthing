"use client";

import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
}

export function useDebounceWithImmediate<T>(
	value: T,
	delay: number,
	immediate: boolean = false,
): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);
	const [isFirstRun, setIsFirstRun] = useState(true);

	useEffect(() => {
		if (immediate && isFirstRun) {
			setDebouncedValue(value);
			setIsFirstRun(false);
			return;
		}

		const handler = setTimeout(() => {
			setDebouncedValue(value);
			setIsFirstRun(false);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay, immediate, isFirstRun]);

	return debouncedValue;
}
