// @ts-nocheck
import ReactDOM from 'react-dom';

function defaultGetContainer() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  return container;
}

export default function getContainerRenderMixin(config) {
  const {
    autoMount = true,
    autoDestroy = true,
    isVisible,
    isForceRender,
    getComponent,
    getContainer = defaultGetContainer,
  } = config;

  let mixin;

  function renderComponent(instance, componentArg, ready) {
    if (
      !isVisible ||
      instance._component ||
      isVisible(instance) ||
      (isForceRender && isForceRender(instance))
    ) {
      if (!instance._container) {
        instance._container = getContainer(instance);
      }
      let component;
      if (instance.getComponent) {
        component = instance.getComponent(componentArg);
      } else {
        component = getComponent(instance, componentArg);
      }
      ReactDOM.unstable_renderSubtreeIntoContainer(
        instance,
        component,
        instance._container,
        function callback() {
          instance._component = this;
          if (ready) {
            ready.call(this);
          }
        },
      );
    }
  }

  if (autoMount) {
    mixin = {
      ...mixin,
      componentDidMount() {
        renderComponent(this);
      },
      componentDidUpdate() {
        renderComponent(this);
      },
    };
  }

  if (!autoMount || !autoDestroy) {
    mixin = {
      ...mixin,
      renderComponent(componentArg, ready) {
        renderComponent(this, componentArg, ready);
      },
    };
  }

  function removeContainer(instance) {
    if (instance._container) {
      const container = instance._container;
      ReactDOM.unmountComponentAtNode(container);
      container.parentNode.removeChild(container);
      instance._container = null;
    }
  }

  if (autoDestroy) {
    mixin = {
      ...mixin,
      componentWillUnmount() {
        removeContainer(this);
      },
    };
  } else {
    mixin = {
      ...mixin,
      removeContainer() {
        removeContainer(this);
      },
    };
  }

  return mixin;
}
