import type { MediaAsset } from "../config/media";

type MediaSlotProps = {
  asset: MediaAsset;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

const MediaSlot = ({
  asset,
  className = "",
  imageClassName = "",
  priority = false,
}: MediaSlotProps) => {
  if (!asset.src) {
    return null;
  }

  return (
    <div className={"media-slot " + className}>
      <img
        src={asset.src}
        alt={asset.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        style={{
          objectPosition: asset.position ?? "center",
          objectFit: asset.fit ?? "cover",
        }}
        className={"media-slot-image " + imageClassName}
      />
    </div>
  );
};

export default MediaSlot;
