import { ReactNode } from "react";

interface QuoteProps {
	children: ReactNode;
}

const Quote = ({ children }: QuoteProps) => (
	<div className="flex items-start gap-4 pt-5">{children}</div>
);

export default Quote;
