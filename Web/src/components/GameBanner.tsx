interface GamerBannerProps {
  bannerUrl: string
  title: string
  adCount: number
}

export function GameBaner(props: GamerBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden ">
      <img src={props.bannerUrl} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0 ">
        <strong className="font-bold text-white block ">
          {props.title}
        </strong>
        <span className="text-zinc-300 text-sm block">{props.adCount} anuncio(s)</span>
      </div>
    </a>
  )
}
