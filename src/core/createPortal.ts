import { ComponentChildren, RenderableProps } from "./types";
import createElement from "./createElement";

const PortalType = function<P>(props: RenderableProps<P>) {
  return props.children;
};

function createPortal(children: ComponentChildren, container?: HTMLElement) {
  const portalElement = createElement(PortalType, {
    children,
    container
  });
  portalElement.isPortal = true;
  return portalElement;
}
export default createPortal;
