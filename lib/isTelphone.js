var isTelphone = function (value) {
    return /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value.toString());
};
export default isTelphone;