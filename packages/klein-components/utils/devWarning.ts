import devWarning, { resetWarned } from '../components/rc-util/warning';

export { resetWarned };

export default (valid: boolean, component: string, message: string): void => {
  devWarning(valid, `[klein: ${component}] ${message}`);
};
