import {
  DreactAttributes
} from "./attributes";

export type Key = string | number | any;

export type RefObject<T> = { current?: T | null };
export type RefCallback<T> = (instance: T | null) => void;
export type Ref<T> = RefObject<T> | RefCallback<T>;

export interface Component<P = {}, S = {}> {
  componentWillMount?(): void;
  componentDidMount?(): void;
  componentWillUnmount?(): void;
  componentWillReceiveProps?(nextProps: Readonly<P>): void;
  shouldComponentUpdate?(
    nextProps: Readonly<P>,
    nextState: Readonly<S>
  ): boolean;
  componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>): void;
  getSnapshotBeforeUpdate?(oldProps: Readonly<P>, oldState: Readonly<S>): any;
  componentDidUpdate?(
    previousProps: Readonly<P>,
    previousState: Readonly<S>,
    snapshot: any
  ): void;
  componentDidCatch?(error: any, errorInfo: any): void;
}

export interface ComponentClass<P = {}, S = {}> {
  new (props: P): Component<P, S>;
  displayName?: string;
  defaultProps?: Partial<P>;
  getDerivedStateFromProps?(
    props: Readonly<P>,
    state: Readonly<S>
  ): Partial<S> | null;
}

export type ComponentChild =
  | DreactElement<any>
  | object
  | string
  | number
  | boolean
  | null
  | undefined;

export type ComponentChildren = ComponentChild[] | ComponentChild;

export type RenderableProps<P, RefType = any> = Readonly<
  P & DreactAttributes & { children?: ComponentChildren; ref?: Ref<RefType> }
>;
export interface FunctionComponent<P = {}> {
  (props: RenderableProps<P>, ref: Ref<any>): ComponentChildren;
  displayName?: string;
  defaultProps?: Partial<P>;
}

export type ComponentType<P = {}> = FunctionComponent<P> | ComponentClass<P>;

export interface DreactElement<P = {}> {
  $$typeof: number | Symbol;
  props: P & { children: ComponentChildren };
  type: ComponentType<P> | string | null;
  ref?: Ref<any> | null;
  key?: Key;
  isPortal?:boolean;
}
