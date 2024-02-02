import useMatchMedia from "hooks/useMatchMedia";

const useIsDesktop = () => {
	const isDesktop = useMatchMedia("(min-width: 1024px)");

	return isDesktop;
};

export default useIsDesktop;
