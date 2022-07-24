import { useRef } from 'react';
import { useEffect } from 'react';

export const useClickOutside = handler => {
  const domNode = useRef<HTMLInputElement>();

  useEffect(() => {
    const handlerEvent = e => {
      if (domNode.current && !domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.body.addEventListener('mousedown', handlerEvent);

    return () => {
      document.removeEventListener('mousedown', handlerEvent);
    };
  }, [handler]);

  return domNode;
};
