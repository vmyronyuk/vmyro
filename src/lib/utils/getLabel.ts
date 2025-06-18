export function getLabel<T extends { label: string; value: string | number }[]>(
	options: T,
	value: T[number]['value']
): string | undefined {
	const found = options.find(option => option.value === value)
	return found?.label
}
