import {
  ComponentType,
  ComponentChildren,
  DreactElement,
  Component,
  FunctionComponent,
  ComponentClass,
  Ref
} from "./types";
import {
  DreactAttributes,
  HTMLAttributes,
  SVGAttributes,
  DreactClassAttributes
} from "./attributes";
import { DREACT_ELEMENT_TYPE } from "../shared/Symbols";

//Functional Component

//Class Component
function createElement<P extends {}, T extends Component>(
  type: ComponentClass,
  props: P & DreactClassAttributes<T>,
  ...children: ComponentChildren[]
): DreactElement<P & DreactClassAttributes<T>>;
//HTML HostComponent
function createElement<P extends HTMLAttributes, T extends HTMLElement>(
  type: string,
  props: P & DreactClassAttributes<T>,
  ...children: ComponentChildren[]
): DreactElement<P & DreactClassAttributes<T>>;
//SVG HostComponent
function createElement<P extends SVGAttributes, T extends SVGAElement>(
  type: string,
  props: P & DreactClassAttributes<T>,
  ...children: ComponentChildren[]
): DreactElement<P & DreactClassAttributes<T>>;

function createElement<P extends {}>(
  type: FunctionComponent,
  props: DreactAttributes & P,
  ...children: ComponentChildren[]
): DreactElement<DreactAttributes & P>;

function createElement<P extends {}, T>(
  type: ComponentType | string,
  props: P & { children: ComponentChildren; key?: string; ref?: Ref<T> },
  ...children: ComponentChildren[]
): DreactElement {
  if (children.length > 0) {
    props.children = children;
  }
  const ref = props.ref;
  const key = props.key;
  if (ref) delete props.ref;
  if (key) delete props.key;
  return {
    $$typeof: DREACT_ELEMENT_TYPE,
    props,
    type,
    ref,
    key
  };
}

export default createElement;
