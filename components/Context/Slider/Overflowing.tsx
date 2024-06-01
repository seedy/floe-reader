import { ComponentProps, createContext, useContext } from "react";

// CONTEXT
const SliderOverflowingContext = createContext<boolean | null>(null);

// HOOKS
export const useSliderOverflowingContext = () => {
	const context = useContext(SliderOverflowingContext);

	if (context === null) {
		throw new Error(
			"useSliderOverflowingContext must be used within a SliderOverflowingContextProvider",
		);
	}
	return context;
};

// COMPONENTS
interface SliderOverflowingContextProviderProps
	extends ComponentProps<typeof SliderOverflowingContext.Provider> {}

const SliderOverflowingContextProvider = ({
	children,
	value,
}: SliderOverflowingContextProviderProps) => (
	<SliderOverflowingContext.Provider value={value}>
		{children}
	</SliderOverflowingContext.Provider>
);

export default SliderOverflowingContextProvider;
