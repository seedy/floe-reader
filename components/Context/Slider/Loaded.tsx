import { ComponentProps, createContext, useContext } from "react";

// CONTEXT
const SliderLoadedContext = createContext<boolean | null>(null);

// HOOKS
export const useSliderLoadedContext = () => {
	const context = useContext(SliderLoadedContext);

	if (context === null) {
		throw new Error(
			"useSliderLoadedContext must be used within a SliderLoadedContextProvider",
		);
	}
	return context;
};

// COMPONENTS
interface SliderLoadedContextProviderProps
	extends ComponentProps<typeof SliderLoadedContext.Provider> {}

const SliderLoadedContextProvider = ({
	children,
	value,
}: SliderLoadedContextProviderProps) => (
	<SliderLoadedContext.Provider value={value}>
		{children}
	</SliderLoadedContext.Provider>
);

export default SliderLoadedContextProvider;
