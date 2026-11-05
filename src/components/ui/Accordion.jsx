import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

/**
 * Accessible accordion. Uses a CSS grid row transition for smooth height.
 * items: [{ id, question, answer }]
 */
export default function Accordion({ items, defaultOpenId = null, className = "" }) {
  const [openId, setOpenId] = useState(defaultOpenId);
  const baseId = useId();

  return (
    <div
      className={`divide-y divide-mist overflow-hidden rounded-card border border-mist bg-cloud ${className}`}
    >
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.id}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className={`flex min-h-12 w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 hover:bg-ash md:px-8 ${
                  isOpen ? "text-signal-700" : "text-cosmic"
                }`}
              >
                <span className="type-body font-semibold">{item.question}</span>
                {isOpen ? (
                  <Minus aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={1.8} />
                ) : (
                  <Plus aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={1.8} />
                )}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="type-body px-5 pb-5 text-ink-700 md:px-8 md:pb-6">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
