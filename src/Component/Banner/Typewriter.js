// components/Typewriter.js
"use client"
;
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: ['Front End Developer ', 'React JS Developer ', 'Next JS Developer'],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
