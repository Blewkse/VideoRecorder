import { useEffect } from 'react';

function useImportScript(ressourceUrl: string) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = ressourceUrl;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [ressourceUrl]);
}

export default useImportScript;
