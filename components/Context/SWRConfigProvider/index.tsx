import { ComponentProps } from "react";
import { SWRConfig } from "swr";

// HELPERS
const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

// COMPONENTS
interface SWRConfigProviderProps extends ComponentProps<typeof SWRConfig> {}

const SWRConfigProvider = ({ children, ...props }: SWRConfigProviderProps) => (
  <SWRConfig value={{ fetcher, ...props }} {...props}>
    {children}
  </SWRConfig>
);

export default SWRConfigProvider;
