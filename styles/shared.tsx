import colors from "@/styles/colors";
import mq from "@/styles/media-query";
import styled from "styled-components";
import fonts from "./fonts";

interface FlexProps {
    main?: string;
    cross?: string;
    dir?: string;
}

interface GridProps {
    rows?: string;
    cols?: string;
    gap?: string;
}

interface TextProps {
    color?: string;
    weight?: string;
    size?: string;
    align?: string;
    family?: string;
}

interface DimProps {
    width?: string;
    height?: string;
}

interface Adaptable {
    mobile: string;
    desktop: string;
}

interface AdaptableGridProps {
    mobile: {
        rows?: string;
        cols?: string;
        gap?: string;
    };
    desktop: {
        rows?: string;
        cols?: string;
        gap?: string;
    };
}


export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${(props) => props.dir || "row"};
    justify-content: ${(props) => props.main || "center"};
    align-items: ${(props) => props.cross || "center"};
`;

export const Grid = styled.div<GridProps>`
    display: grid;
    gap: ${(props) => props.gap || "0rem"};
    grid-template: ${(props) => props.rows + " / " + props.cols};
`;

export const AdaptableFlexDir = styled(Flex)<Adaptable>`
    flex-direction: ${(props) => props.mobile};

    ${mq.desktopMax`
        flex-direction: ${(props: { desktop: string }) => props.desktop};
    `}
`;

export const AdaptableGrid = styled.div<AdaptableGridProps>`
    display: grid;
    gap: ${(props) => props.mobile?.gap};
    grid-template: ${(props) =>
        props.mobile?.rows + " / " + props.mobile?.cols};

    ${mq.desktopMax`
        gap: ${(props: { desktop: any }) => props.desktop?.gap};
        grid-template: ${(props: { desktop: any }) =>
            props.desktop?.rows + " / " + props.desktop?.cols};
    `}
`;

export const AdaptableWidth = styled(Flex)<Adaptable>`
    width: ${(props) => props.mobile};

    ${mq.desktopMax`
        width: ${(props: { desktop: string }) => props.desktop};
    `}
`;

export const Text = styled.p<TextProps>`
    display: flex;
    flex-wrap: wrap;
    color: ${(props) => props.color || colors.black};
    font-weight: ${(props) => props.weight || "unset"};
    font-size: ${(props) => props.size || "2rem"};
    text-align: ${(props) => props.align || "left"};
    font-family: ${(props) => props.family || fonts.Tahoma};
`;

export const AdaptableText = styled(Text)<Adaptable>`
    font-size: ${(props) => props.mobile};

    ${mq.desktopMax`
        font-size: ${(props: { desktop: string }) => props.desktop};
    `}
`;

export const Image = styled.img<DimProps>`
    width: ${(props) => props.width || "5vw"};
    height: ${(props) => props.height || "unset"};
`;

export const AdaptableImage = styled(Image)<Adaptable>`
    width: ${(props) => props.mobile};

    ${mq.desktopMax`
        width: ${(props: { desktop: string }) => props.desktop};
    `}
`;

export const AdaptableStyles = styled(Flex)<Adaptable>`
    width: ${(props) => props.mobile};

    ${mq.desktopMax`
        width: ${(props: { desktop: string }) => props.desktop};
    `}
`;
