import { css, html, js } from "../assets";

interface Box {
    image: string,
    name: string,
}



export const boxes: Box[] = [
    {
        image: html,
        name: "HTML"
    },
    {
        image: css,
        name: "CSS"
    },
    {
        image: js,
        name: "JS"
    }
]