import { IMVVMOptions } from './types';
declare class MVVM {
    private $options;
    private $data;
    private $methods;
    private $mounted;
    constructor(options: IMVVMOptions);
    private $proxyData;
    private $proxyMethods;
    protected $updateProxyData(fields: {
        [field: string]: any;
    }): void;
}
export default MVVM;
