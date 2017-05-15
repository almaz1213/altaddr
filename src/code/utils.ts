/**
 * Created by Almaz Khamatkhanov on 13/05/17.
 */

import * as RSA from 'node-rsa';


export function getRootAddrs(Addrs: any, encrypted?: boolean) {
    let rsa = new RSA();
    let prk = '-----BEGIN PRIVATE KEY-----\n' +
        'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCbz1ls0zsNeBBA\n' +
        'qGQRHeN6jZO09OBwhf0Q5VXoHJIyEzrsyKXhwSL4p6ppB38YF3SSlIqV5XhTNsbw\n' +
        'VWKcTKL1++0Ivn5K8VwR1YO8gbmt7URH1LN+Tv0CADeIh/nRNN8uN2B1e3nc1eXo\n' +
        'VTeHMYembJUp8h+lmWBbrFFxzzJvs0++cloorwKLG82t0fNykq4j/tWBYF93X37G\n' +
        'XHBmHwspnqKDlwZxKVFBDBLW6vOpAbfuEFYgF2EOINJaCzmB7X9lr2MAv72v4Q7a\n' +
        '3KoUVfpnLCyysYjNtJUxMjTZkqjVboAejp0XeJwDQqJZQKRCJjXfON3xu/DWnwJm\n' +
        'poR1NFyVAgMBAAECggEAepXWe6JtMZmm39gccsMbOE6vSY3oD1+7zVFCF45zD2bF\n' +
        '04nByS5VP2Fa16uIOQIrOzAXIPwbgQz11By5qtM422PMCDcn0fq3P2jHbsZ5ufeU\n' +
        '4xbb6aJnuO1Gw+qHiCua9BepkoUFSdQYQITbXUiAu1VuvkO61mUnxLh8k5g6zFn6\n' +
        'q678mEVvLM2iDkxQaislghv1rHmzEAoTQw3F6NeKF+cJHis97L4WeuFcUSRpruUc\n' +
        'hHq+Hw1HNXMrDgkCsL64UTouIje3CfoOoUWMIpK/ppZWcWXehyqCRKDpg/GTSL8v\n' +
        'xG9+zc6wEC8noodmR4763MvWbtxLMRIGJJSXK8H5eQKBgQD8Hw5W67oPPiloOzt3\n' +
        'Cx7Lm34fXAHR8BGmPSX8mTYsK6qavGSdXXQqS14OBPR6x+pFZ5VOtSxMbUp/3JlX\n' +
        'ujdQOA6vHjwUfgpbw6V7n85JPrdUXOL60j0Be0sQ8OHZD1ErzwXfnmJefY1k/Ik/\n' +
        'X0fIg4IwcTA/lyeFqIzr74VHcwKBgQCeNPwWB2pNrizl+qx/LBCUIZpcek/ZX6OL\n' +
        'HiJ1ebsCuOBBTiu6LHZo4PeNjQlVrnxEeRQ7lv1cKzeISyj5S4rilwo60Z1SvMz5\n' +
        'rMwNR3bZmG9MkxyiCQvAjssjNak4GsiYikhPOdi3SXpMHpIS68J7jxjHKsxdZ2X5\n' +
        'm1J8HIB51wKBgQC71INBXIMUQhJlNeO6b4100RYoVMqCVmE/wUSgqKBETg/fEcW/\n' +
        'u1UFAXtD5IsjQfcV1/LTXYRwN+gN1BJl2jTFTc4axuKpvbEH5n1N2aO8y72XW1A6\n' +
        '3xBWHz2wlFUd+hxWD/jnPT85+D2z47R4gwqepuMCJgF1Dq6CFC1QxPQ9YwKBgHHQ\n' +
        '1HpUo1l3ML3S9T4YSWUIN7DIHaHYeCOhblDtXmi68DqLLlIlopoZHn8rM8f8W1I3\n' +
        'eSLVoTgpry3SRIv0mNoipy1hl7jqMtx8P+BdxVcNnySLwVGhCF9jWyjddfvy6NU0\n' +
        'xoiYqRxTNDSG2bfa/HM/oyfF1nhr5qUH5PN83cDJAoGBAONVg5mIPlgkh6/3m0Nn\n' +
        'xYsqQKdO8yOqGJ1vomietNHzBJ3HTU9IlbUnUEqeEJuCmgO+qP7p10Wp67fA+Wr+\n' +
        'V6fC4wpAyAfZ5v15N4aVdlITTSTIEeCz7BA2Sjqr3ztjoDIGP7TEcWMGNopFR5GD\n' +
        'GmhkGOzFqlBY/gUjhsUHrZOl\n' +
        '-----END PRIVATE KEY-----';

    let puk = '--deleted--';

    if (encrypted) {
        rsa.importKey(puk, 'pkcs8-public');
        return rsa.encrypt(Addrs, 'base64');
    }
    else {
        rsa.importKey(prk, 'pkcs8');
        return rsa.decrypt(Addrs, 'json')
    };

}
