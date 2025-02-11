type SVGProps = JSX.IntrinsicElements['svg'] & import('theme-ui').SxProp;
type SVGComponent = React.FC<SVGProps>;

declare module '*.svg' {
  const url: string;
  export const ReactComponent: SVGComponent;
  export default content;
}
