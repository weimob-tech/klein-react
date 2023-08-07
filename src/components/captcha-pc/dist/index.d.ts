import * as types from './types/base';
import './index.less';
declare class TiWeimobCaptcha {
    private type;
    private instance;
    private autoRegistry;
    private verifyDomId;
    private verifyCaptchaMask;
    private verifyCaptchaContainer;
    private tk;
    private publicKey;
    private encrypt;
    private themeVariable;
    constructor(props: types.ICaptch);
    private onSuccess;
    private onClose;
    private onFail;
    destory(): void;
    show(): void;
    getCaptcha(params: any): Promise<{
        errcode: string;
        errmsg: string;
        data: {
            baseImageUrl: string;
            blockImageUrl: string;
            tk: string;
            slidingY: number;
            result: boolean;
        };
        globalTicket: string;
        monitorTrackId: string;
    }>;
    verifyCaptcha(params: any): Promise<unknown>;
    getSecurityKey(): Promise<void>;
    handleSuccess(): void;
    handleFail(): void;
    handleClose(): void;
    base64ToUrl(dataUrl: string): string;
}
export default TiWeimobCaptcha;
