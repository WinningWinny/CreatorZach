import React from 'react'
import Typography from '@components/ui/typography'
import Image from 'next/image'

interface FeatureImageProps {
  imagePath: string
  headline: string
  width: number
  height: number
}

const FeatureImage: React.FC<FeatureImageProps> = ({
  headline,
  imagePath,
  width,
  height
}) => {
  return (
    <div
      className="flex flex-col gap-6 text-left max-w-72 md:items-start
        items-center"
    >
      <Typography variant="h3">{headline}</Typography>
      <Image
        width={width}
        height={height}
        alt={imagePath}
        src={imagePath}
      />
    </div>
  )
}

export default FeatureImage
