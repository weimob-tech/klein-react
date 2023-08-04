import ConfigProvider from './config-provider';
import type { ConfigConsumerProps as ConsumerProps } from './context';
import { ConfigContext } from './context';

export const ConfigConsumer = ConfigContext.Consumer;
//  bugfix: export 'ConfigConsumerProps' was not found in './context
export type ConfigConsumerProps = ConsumerProps;

export default ConfigProvider;
