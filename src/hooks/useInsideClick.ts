import React from "react";
const useInsideClick = () => {
  const [outside, setOutside] = React.useState<boolean>(true);
  const [currentElement, setCurrentElement] =
    React.useState<HTMLElement | null>(null);
  const checkIsoutClick = (e: Event) => {
    if (currentElement) {
      if (e.composedPath().includes(currentElement)) {
        setOutside(true);
      } else {
        setOutside(false);
      }
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", checkIsoutClick);

    return () => {
      document.body.removeEventListener("click", checkIsoutClick);
    };
  }, [currentElement]);

  return {
    init: (element: HTMLElement | null) => {
      setCurrentElement(element);
      return outside;
    },
    outside,
  };
};

export default useInsideClick;
