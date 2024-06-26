import { IBM_Plex_Sans_Thai, Prompt } from "next/font/google";

export const ibmFont = IBM_Plex_Sans_Thai({
    subsets: ["latin", "thai"],
    weight: "400",
})

export const ibm700Font = IBM_Plex_Sans_Thai({
    subsets: ["latin", "thai"],
    weight: "700"
})

export const promptFont = Prompt({
    subsets: ["latin", "thai"],
    weight: "400",
})