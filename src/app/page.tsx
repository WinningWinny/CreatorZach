import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import FeatureImage from './featureImage'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          CreatorZach Starts Here 🚀
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          A perfectly curated set of tools for Influencer
          Managers & Agencies
        </Typography>
        <Link
          href="https://www.linkedin.com/in/winston-m-lao/"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {`Schedule A Demo`}
          </Button>
        </Link>
        <Image
          width={1080}
          height={400}
          alt="CreatorZachIMG3.webp"
          src="/CreatorZachIMG3.webp"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-3xl" variant="h1">
            Quick solutions, Less stress 😮‍💨
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <FeatureImage
              headline="Creator Database 🔭"
              imagePath="CreatorDatabase.svg"
              width={400}
              height={300}
            />
            <FeatureImage
              headline=" Campaign Tools 🎉"
              imagePath="CampaignManager.svg"
              width={400}
              height={300}
            />
            <FeatureImage
              headline="Client Reporting 💸"
              imagePath="DealTracking.svg"
              width={400}
              height={10}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            {'Lets Build The Future 🔥❤️'}
          </Typography>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="https://www.linkedin.com/in/winston-m-lao/"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Schedule a Demo Now`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
