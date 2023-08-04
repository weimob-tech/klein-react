import React from 'react';
import ReactDOM from 'react-dom';
import ModalRenderFunction, { ModalProps } from './modalFunctionComp';
import type { ActionModalProps } from './actionsModal';
import ActionModal from './actionsModal';
import { tuple } from '../utils/tuple';

export { ModalProps };

const ActionsTuple = tuple('info', 'success', 'warning', 'error');

export type UpdateConfigProps =
  | Omit<ActionModalProps, 'type'>
  | ((props: ActionModalProps) => ActionModalProps);

export type ModalOpenReturn = {
  destroy: () => void;
  update: (configUpdate: UpdateConfigProps) => void;
};

export type ModalOpen = (
  config: Omit<ActionModalProps, 'type'>,
) => ModalOpenReturn;

export type Action = typeof ActionsTuple[number];

export type globalConfigProps = {
  getContainer: ModalProps['getContainer'];
};

export type StaticFunctions = Record<Action, ModalOpen> & {
  config: (props: globalConfigProps) => void;
};

const modal_global_config = {} as globalConfigProps;

function open(config: Omit<ActionModalProps, 'closeModal'>) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  let currentConfig: ActionModalProps = {
    ...config,
    visible: true,
    closeModal,
  };

  function destoryModal() {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function renderModal(modalConfig: ActionModalProps) {
    const endModalConfig = {
      getContainer: modal_global_config.getContainer,
      ...modalConfig,
    };
    setTimeout(() => {
      ReactDOM.render(<ActionModal {...endModalConfig} />, div);
    });
  }

  function closeModal() {
    currentConfig = {
      ...currentConfig,
      visible: false,
      afterClose: () => {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        destoryModal();
      },
    };
    renderModal(currentConfig);
  }

  function update(updateConfig: UpdateConfigProps) {
    if (typeof updateConfig === 'function') {
      currentConfig = updateConfig(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...updateConfig,
      };
    }
    renderModal(currentConfig);
  }

  renderModal(currentConfig);

  return {
    destroy: closeModal,
    update,
  };
}

const Modal = ModalRenderFunction as StaticFunctions & React.FC<ModalProps>;

Modal.config = (globalProps: globalConfigProps) => {
  modal_global_config.getContainer = globalProps.getContainer;
};

ActionsTuple.forEach((action: Action) => {
  Modal[action] = (config) => open({ type: action, ...config });
});

export default Modal;
