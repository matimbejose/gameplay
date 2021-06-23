declare module "*.svg" {
    import React from "react";
    import { svgPros } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
}