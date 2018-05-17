
interface ResourcePathConfig {
    path: string;
    route: string;
    id: string;
}
export function ResourcePath(config: ResourcePathConfig) {
    return function (target) {
        var parentTarget = Object.getPrototypeOf(target.prototype);
        // parentTarget._path = 
        target.prototype._path = config.path;
        // parentTarget._route = 
        target.prototype._route = config.route;
        target.prototype._id = config.id;
    }
}
