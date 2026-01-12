'use client'

import React from 'react'

/* Generated Contentful */
import type { ContentfulImageContentFragment } from '@/generated/contentful'

/* Next.js */
import Image from 'next/image'
import type { ImageProps } from 'next/image'

export interface ContentfulImageProps extends ContentfulImageContentFragment {
  imageProps?: Omit<ImageProps, 'alt' | 'src'>
}

const ContentfulImage: React.FC<ContentfulImageProps> = ({
  height,
  imageProps,
  title,
  url,
  width,
}) => {
  if (!height || !title || !url || !width) return null
  return (
    <Image
      height={height}
      width={width}
      alt={title}
      src={url}
      {...imageProps}
    />
  )
}

export default ContentfulImage
