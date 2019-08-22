import { ComponentChildren } from "./types";

const Throw = () => {
  throw Error("Not mounted yet!");
};

const DreactThrowUpdater = {
  enqueueSetState: Throw,
  enqueueForceUpdate: Throw
};

class Component<P, S> {
  readonly props: Readonly<P> & Readonly<{ children?: ComponentChildren }>;
  state?: Readonly<S>;
  updater: any;
  constructor(props: Readonly<P>) {
    this.props = props;
    this.updater = DreactThrowUpdater;
  }
  setState(partialState: Partial<S>, callback: () => void) {
    this.updater.enqueueSetState(this, partialState, callback);
  }
  forchUpdate(callback: () => void) {
    this.updater.enqueueSetState(this, true, callback);
  }
  render() {
    throw Error("Dreact:You must implement render();");
  }
}

class PureComponent<P, S> extends Component<P, S> {
  static isPureComponent = true;
}

export { Component, PureComponent };
