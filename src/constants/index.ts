import { css, html, js } from "../assets";

export interface Box {
    id: number
    image: string,
    name: string,
}



export const boxes: Box[] = [
    {
        id: 1,
        image: html,
        name: "HTML"
    },
    {
        id: 2,
        image: css,
        name: "CSS"
    },
    {
        id: 3,
        image: js,
        name: "JS"
    }
]