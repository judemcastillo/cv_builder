import { useState, useRef, useEffect } from "react";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    }
  }, [isOpen, children]); // <-- children added here to update height when dynamic content changes

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion-section">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <div className={`dropDown-down ${isOpen ? "rotate" : ""}`} />
      </div>
      <div
        ref={contentRef}
        className={`accordion-content ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? height : "0px",
        }}
      >
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
