import { useEffect, useState, type ComponentType } from "react";
import Loading from "../Components/Loading";

export function withLoading(WrappedComponent: ComponentType) {
  return (props: any) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const handleSetLoader = async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
      };

      handleSetLoader();
    }, []);

    return isLoading ? <Loading /> : <WrappedComponent {...props} />;
  };
}
