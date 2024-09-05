// components/Transitions.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // استيراد useLocation من react-router-dom
import { SwitchTransition, CSSTransition } from 'react-transition-group'; // استيراد من react-transition-group

const Transitions = ({ children }) => {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        timeout={300}
        classNames="fade"
      >
        <div className="transition-wrapper">
          {children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Transitions;
