import { FunctionComponent, RenderableProps, Ref } from "./types";

function createRef() {
  return {
    current: null
  };
}

interface ForwardRefComponent<refType> extends FunctionComponent {
  ref: Ref<refType>;
}

function forwardRef<P, refType>(FunctionComponent: FunctionComponent<P>) {
  return function ForwardRefComponent(
    this: ForwardRefComponent<refType>,
    props: RenderableProps<P, refType>
  ) {
    return FunctionComponent(props, this.ref);
  };
}

export { forwardRef, createRef };
