declare module "*.js";
declare module "*.tsx";

declare namespace JSX {
  interface ExtendedDiv 
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement> {
        theme?: string | void;
  }

  interface IntrinsicElements {
      div: ExtendedDiv;
  }
}