export function ResourcePath(value: string) {
    return function (target) {
        var parentTarget = Object.getPrototypeOf(target.prototype);
        parentTarget.path = target.path = value;
    }
}