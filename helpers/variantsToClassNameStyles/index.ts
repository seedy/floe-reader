const variantsToClassNameStyles = (
	variants: { [key: string]: string | boolean | undefined },
	styles: { readonly [key: string]: string },
) =>
	Object.entries(variants).reduce((acc, [key, value]) => {
		if (value === undefined) {
			return acc;
		}
		if (acc === "") {
			return styles[`${key}-${value}`];
		}
		return `${acc} ${styles[`${key}-${value}`]}`;
	}, "");

export default variantsToClassNameStyles;
