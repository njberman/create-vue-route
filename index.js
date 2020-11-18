/**
 * 
 * @param {string} path The path of the new route.
 * @param {string} name The name of the new route.
 * @param {any} component The imported component of the new route.
 * @param {object} meta Optional metadata of the route.
 * @returns {object} The returned route.
 */
export default function createRoute(path, name, component, meta = { title: name }) {
  return {
    path,
    name,
    component,
    meta,
  };
}
