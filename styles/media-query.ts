import { css } from "styled-components";
import breakpoints from "./breakpoints";

const mq = {
    desktopMax: (...args) =>
        css`
            @media screen and (min-width: ${breakpoints.desktopMax}) {
                ${css(...args)}
            }
        `,
};

export default mq;
