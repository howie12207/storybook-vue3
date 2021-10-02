export function typeRules(value, type) {
    const METHOD = {
        enAndNumber() {
            return /^[a-zA-Z0-9]*$/.test(value);
        },
        en() {
            return /^[a-zA-Z]*$/.test(value);
        },
        number() {
            return !/[^0-9]/.test(value);
        },
        email() {
            return /^(([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4}))?$/.test(value);
        },
        decimal() {
            return /^(\d+)(\.\d+)?$/.test(value);
        }
    };
    return !type || !Object.prototype.hasOwnProperty.call(METHOD, type) || METHOD[type]();
}

export function lengthRules(value, props) {
    const { isRequired, min, max, only, atLeast } = props.rules;
    const verify = {
        minMax: {
            need: min !== undefined && max !== undefined,
            isValid: String(value).length >= min && String(value).length <= max
        },
        only: {
            need: only !== undefined,
            isValid: String(value).length === only
        },
        atLeast: {
            need: atLeast !== undefined,
            isValid: String(value).length >= atLeast
        },
        isRequired: {
            need: isRequired,
            isValid: String(value).length > 0
        }
    };
    for (const item of Object.keys(verify)) {
        if (verify[item].need) {
            return verify[item].isValid;
        }
    }
    return true;
}

export function errorText(props) {
    const commonErr = '請輸入正確格式';
    const { min, max, only, atLeast, limit = 'default', isRequired } = props.rules;
    const type = {
        enAndNumber: '位英文或數字',
        number: '位數字',
        en: '位英文',
        decimal: '位數字',
        default: '個字元'
    };
    const verify = {
        errMsg: {
            showErr: props.errMsg,
            text: props.errMsg
        },
        isRequired: {
            showErr: isRequired && props.inputValue === '',
            text: '此欄為必填項'
        },
        minMax: {
            showErr: min !== undefined && max !== undefined,
            text: `請輸入${min} ~ ${max}${type[limit]}`
        },
        only: {
            showErr: only !== undefined,
            text: `請輸入${only}${type[limit]}`
        },
        atLeast: {
            showErr: atLeast !== undefined,
            text: `請輸入至少${atLeast}${type[limit]}`
        },
        email: {
            showErr: limit === 'email',
            text: '電子信箱格式錯誤'
        },
        limit: {
            showErr: limit,
            text: `請輸入${type[limit]?.slice(1)}`
        }
    };
    for (const item of Object.keys(verify)) {
        if (verify[item].showErr) {
            return verify[item].text;
        }
    }
    return commonErr;
}
