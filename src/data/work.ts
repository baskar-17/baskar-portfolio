export type WorkItem = {
  slug: string
  title: string
  productType: string
  imageSrc: string
  logoSrc: string
  thumbnailSrc: string
}

const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: "sportsgravy",
    title: "SportsGravy",
    productType: "Web + Mobile",
    imageSrc: withBase("/work/sportsgravy.png"),
    logoSrc: withBase("/work/sportsgravy.png"),
    thumbnailSrc: withBase("/work/placeholder.png"),
  },
  {
    slug: "mykinderpass",
    title: "MyKinderPass",
    productType: "Web + Mobile",
    imageSrc: withBase("/work/mykinderpass.png"),
    logoSrc: withBase("/work/mykinderpass.png"),
    thumbnailSrc: withBase("/work/placeholder.png"),
  },
  {
    slug: "mudrex",
    title: "Mudrex",
    productType: "Web",
    imageSrc: withBase("/work/mudrex.png"),
    logoSrc: withBase("/work/mudrex.png"),
    thumbnailSrc: withBase("/work/placeholder.png"),
  },
  {
    slug: "aplushub",
    title: "A Plus Hub",
    productType: "Web",
    imageSrc: withBase("/work/aplushub.png"),
    logoSrc: withBase("/work/aplushub.png"),
    thumbnailSrc: withBase("/work/placeholder.png"),
  },
  {
    slug: "onhand-pos",
    title: "OnHand POS",
    productType: "Web + Tablet + Mobile",
    imageSrc: withBase("/work/onhand-pos.png"),
    logoSrc: withBase("/work/onhand-pos.png"),
    thumbnailSrc: withBase("/work/placeholder.png"),
  },
  {
    slug: "onhand-dairy",
    title: "OnHand Dairy",
    productType: "Mobile",
    imageSrc: withBase("/work/onhand-dairy.png"),
    logoSrc: withBase("/work/onhand-dairy.png"),
    thumbnailSrc: withBase("/work/placeholder.png"),
  },
]
