import { useState, useEffect, useRef } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

export default function TextScramble({ text, className = '', delay = 0 }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const frameRef = useRef(0);
  const resolveRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      scramble(text);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frameRef.current);
    };
  }, [text, delay]);

  const scramble = (newText) => {
    const length = newText.length;
    const queue = [];

    for (let i = 0; i < length; i++) {
      const from = '';
      const to = newText[i];
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queue.push({ from, to, start, end });
    }

    let frame = 0;
    const update = () => {
      let output = '';
      let complete = 0;

      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end, char } = queue[i];

        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = chars[Math.floor(Math.random() * chars.length)];
            queue[i].char = char;
          }
          output += char;
        } else {
          output += from;
        }
      }

      setDisplayText(output);

      if (complete === queue.length) {
        setIsComplete(true);
      } else {
        frameRef.current = requestAnimationFrame(update);
        frame++;
      }
    };

    update();
  };

  return (
    <span className={className}>
      {displayText}
    </span>
  );
}
