import { createGlobalStyle } from "styled-components";
import tf2build from "./fonts/tf2build.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "tf2 build";
        src: url(${tf2build});
    }
`;
