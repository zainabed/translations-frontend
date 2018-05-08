
interface ResourcePathConfig {
    path: string;
    route: string;
}
export function ResourcePath(config: ResourcePathConfig) {
    return function (target) {
        var parentTarget = Object.getPrototypeOf(target.prototype);
        parentTarget._path = target._path = config.path;
        parentTarget._route = target._route = config.route;
    }
}