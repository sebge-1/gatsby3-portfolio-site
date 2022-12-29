import React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
// The duration for each phase of the transition
// So the total duration will be _twice_ this
const timeout = 350;

const defaultStyle = {
  transition: `opacity ${timeout}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0.8 },
  entered: { opacity: 1 },
  exiting: { opacity: 0.5 },
  exited: { opacity: 0 },
};

const Transition = ({ children, location }) => (
  <TransitionGroup>
    <ReactTransition key={location.pathname} timeout={timeout}>
      {(status) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[status],
          }}
        >
          {children}
        </div>
      )}
    </ReactTransition>
  </TransitionGroup>
);

export default Transition;
