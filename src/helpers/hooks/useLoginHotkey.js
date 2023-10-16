import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useLoginHotkey = () => {
  const navigate = useNavigate();

  const handleKeyDown = useCallback((e) => {
    if (e.ctrlKey && e.key === 'q') {
      navigate('/d/');
    }
  }, [navigate]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useLoginHotkey;