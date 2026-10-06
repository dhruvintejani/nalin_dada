import { Image as ImageIcon } from "lucide-react";
import type { MediaAsset } from "../config/media";

type MediaSlotProps = {
  asset: MediaAsset;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  label?: string;
};

const MediaSlot = ({
  asset,
  className = "",
  imageClassName = "",
  priority = false,
  label = "वास्तविक फोटो यहाँ जोड़ी जाएगी",
}: MediaSlotProps) => {
  if (asset.src) {
    return (
      <div className={"media-slot " + className}>
        <img
          src={asset.src}
          alt={asset.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding={priority ? "sync" : "async"}
          style={{ objectPosition: asset.position ?? "center" }}
          className={"media-slot-image " + imageClassName}
        />
      </div>
    );
  }

  return (
    <div
      className={"media-slot media-slot-placeholder " + className}
      role="img"
      aria-label={asset.alt}
    >
      <div className="media-slot-orb media-slot-orb-top" />
      <div className="media-slot-orb media-slot-orb-bottom" />
      <div className="relative z-10 max-w-[260px] px-5 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#ddb675] bg-white/75 text-[#a45f23] shadow-sm">
          <ImageIcon size={28} strokeWidth={1.5} />
        </div>
        <p className="mt-4 text-sm font-bold text-[#7f171b]">{label}</p>
        <p className="mt-2 text-xs leading-5 text-[#766457]">{asset.alt}</p>
      </div>
    </div>
  );
};

export default MediaSlot;
