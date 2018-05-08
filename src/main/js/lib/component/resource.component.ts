
interface ResourcePathConfig {
    path: string;
    route: string;
}
export function ResourcePath(config: ResourcePathConfig) {
    return function (target) {
        var parentTarget = Object.getPrototypeOf(target.prototype);
        parentTarget.path = target.path = config.path;
        parentTarget.route = target.route = config.route;
    }
}