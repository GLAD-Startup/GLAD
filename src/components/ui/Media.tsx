import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export interface MediaProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  w?: number | string;
  h?: number | string;
  radius?: number | string;
  video?: boolean;
  className?: string;
  mediaClassName?: string;
  priority?: boolean;
  style?: React.CSSProperties;
  'data-cursor'?: string;
}

export default function Media({
  src,
  alt = '',
  w,
  h,
  radius,
  video = false,
  className,
  mediaClassName,
  priority = false,
  style,
  'data-cursor': dataCursor,
  ...rest
}: MediaProps) {
  const formattedRadius =
    typeof radius === 'number' ? `${radius}px` : radius;

  const containerStyle: React.CSSProperties = {
    width: typeof w === 'number' ? `${w}px` : w,
    height: typeof h === 'number' ? `${h}px` : h,
    borderRadius: formattedRadius,
    ...style,
  };

  const isFill = !w || !h || typeof w === 'string' || typeof h === 'string';

  return (
    <div
      data-cursor={dataCursor}
      className={clsx(
        'relative overflow-hidden',
        !w && 'w-full',
        !h && 'h-full',
        className
      )}
      style={containerStyle}
      {...rest}
    >
      {video ? (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className={clsx("w-full h-full object-cover block", mediaClassName)}
          style={{ borderRadius: formattedRadius }}
        />
      ) : isFill ? (
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          className="w-full h-full object-cover block"
          style={{ borderRadius: formattedRadius }}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={Number(w)}
          height={Number(h)}
          unoptimized
          priority={priority}
          className="w-full h-full object-cover block"
          style={{ borderRadius: formattedRadius }}
        />
      )}
    </div>
  );
}
