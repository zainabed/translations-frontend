export class LocalService {

    public static transform(resourceList, locales, data, apiPath) {
        locales = locales.map(locale => {
            return data.getId(locale);
        });
        
        return resourceList.map(resource => {
            let id = data.getId(resource);
            resource["id"] = id;
            if (locales.indexOf(id) >= 0) {
                resource["present"] = true;
            }
            resource['api'] = apiPath + "/" + id;
            return resource;
        }).sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => (a.present === b.present) ? 0 : a.present ? -1 : 1);

    }
}