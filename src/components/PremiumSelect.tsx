import { Check, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export type PremiumSelectOption = {
  value: string;
  label: string;
};

type PremiumSelectProps = {
  id: string;
  value: string;
  options: PremiumSelectOption[];
  placeholder: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  invalid?: boolean;
  valid?: boolean;
  describedBy?: string;
};

const PremiumSelect = ({
  id,
  value,
  options,
  placeholder,
  onChange,
  onBlur,
  invalid = false,
  valid = false,
  describedBy,
}: PremiumSelectProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const selectedIndex = options.findIndex((option) => option.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : null;

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        onBlur?.();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open, onBlur]);

  useEffect(() => {
    if (open) {
      setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    }
  }, [open, selectedIndex]);

  const choose = (index: number) => {
    const option = options[index];
    if (!option) return;
    onChange(option.value);
    setOpen(false);
    onBlur?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setActiveIndex((index) => Math.min(index + 1, options.length - 1));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
      setActiveIndex((index) => Math.max(index - 1, 0));
      return;
    }

    if (event.key === "Home" && open) {
      event.preventDefault();
      setActiveIndex(0);
      return;
    }

    if (event.key === "End" && open) {
      event.preventDefault();
      setActiveIndex(options.length - 1);
      return;
    }

    if ((event.key === "Enter" || event.key === " ") && open) {
      event.preventDefault();
      choose(activeIndex);
      return;
    }

    if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
      onBlur?.();
    }
  };

  return (
    <div ref={rootRef} className={"premium-dropdown " + (open ? "premium-dropdown-open" : "")}>
      <button
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          if (!open) onBlur?.();
        }}
        className={
          "premium-dropdown-trigger " +
          (invalid
            ? "premium-dropdown-error"
            : valid
              ? "premium-dropdown-valid"
              : "")
        }
      >
        <span className={selected ? "premium-dropdown-value" : "premium-dropdown-placeholder"}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          className="premium-dropdown-chevron"
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          id={listboxId}
          role="listbox"
          aria-labelledby={id}
          className="premium-dropdown-menu"
        >
          <div className="premium-dropdown-scroll">
            {options.map((option, index) => {
              const isSelected = option.value === value;
              const isActive = index === activeIndex;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => choose(index)}
                  className={
                    "premium-dropdown-option " +
                    (isActive ? "premium-dropdown-option-active " : "") +
                    (isSelected ? "premium-dropdown-option-selected" : "")
                  }
                >
                  <span>{option.label}</span>
                  {isSelected && <Check size={17} strokeWidth={2.2} aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumSelect;
