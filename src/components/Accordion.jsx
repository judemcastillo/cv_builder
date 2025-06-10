import { useState, useRef, useEffect } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="accordion-section">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <div className={`dropDown-down ${isOpen ? "rotate" : ""}`} />
      </div>
      <div
        ref={contentRef}
        className={`accordion-content ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
