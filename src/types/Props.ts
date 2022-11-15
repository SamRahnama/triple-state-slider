import Slide from "./Slide";

export default interface Props {
    slides: Slide[]
    containerClass?: string
    interval: number
    infinite: boolean
}