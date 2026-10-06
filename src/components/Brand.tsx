type BrandProps = {
  compact?: boolean;
  inverse?: boolean;
};

const LotusMark = ({ inverse = false }: { inverse?: boolean }) => (
  <svg
    viewBox="0 0 64 48"
    aria-hidden="true"
    className="h-9 w-12 shrink-0"
    fill="none"
  >
    <path d="M32 43C23 35 21 24 32 8c11 16 9 27 0 35Z" fill={inverse ? "#e2aa51" : "#c9872a"} />
    <path d="M30 43C18 39 11 31 12 18c13 3 20 10 18 25Z" fill={inverse ? "#d79a3b" : "#d89a3f"} />
    <path d="M34 43c12-4 19-12 18-25-13 3-20 10-18 25Z" fill={inverse ? "#d79a3b" : "#d89a3f"} />
    <path d="M27 43C15 44 7 39 4 29c11-1 19 3 23 14Z" fill={inverse ? "#c9852d" : "#be7423"} />
    <path d="M37 43c12 1 20-4 23-14-11-1-19 3-23 14Z" fill={inverse ? "#c9852d" : "#be7423"} />
  </svg>
);

const Brand = ({ compact = false, inverse = false }: BrandProps) => (
  <div className="flex items-center gap-2.5">
    <LotusMark inverse={inverse} />
    <div className="leading-none">
      <div
        className={`${inverse ? "text-[#fff8ec]" : "text-[#8f181c]"} font-serif text-[1.45rem] font-bold tracking-[-0.02em] md:text-[1.7rem]`}
      >
        Nalin Dada
      </div>
      {!compact && (
        <div className={`${inverse ? "text-[#e8c999]" : "text-[#9a3b2f]"} mt-1 text-[0.72rem] font-semibold tracking-[0.08em]`}>
          Dr. Nalin Pandya
        </div>
      )}
    </div>
  </div>
);

export default Brand;
