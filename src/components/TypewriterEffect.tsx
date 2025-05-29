
import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

const TypewriterEffect = ({ text, speed = 100, delay = 0, onComplete }: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (onComplete) {
        onComplete();
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, onComplete]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span>
      {displayText}
      {(currentIndex < text.length || showCursor) && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default TypewriterEffect;
