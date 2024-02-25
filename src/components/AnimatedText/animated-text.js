// src/components/AnimatedText.js
import React from 'react';
import * as styles from './animated-text.module.css';

const AnimatedText = ({ text }) => {
  const renderAnimatedText = (text) => {
    const parts = text.split(/(<br\s*\/?>)/g);
    return parts.map((part, index) => {
      if (/<br\s*\/?>/.test(part)) {
        return React.createElement('br', { key: index });
      }
      return part.split('').map((char, charIndex) => (
        <span key={charIndex} className={styles.animatedChar} style={{ animationDelay: `${0.02 * charIndex}s` }}>
          {char}
        </span>
      ));
    });
  };

  return <h2 className={styles.contentsTitle}>{renderAnimatedText(text)}</h2>;
};

export default AnimatedText;
