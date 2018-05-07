export function ResourcePath(value: string) {
    return function (target) {
        target.resource = value;
    }
}