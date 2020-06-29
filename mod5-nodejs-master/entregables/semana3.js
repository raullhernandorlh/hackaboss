/**
 * Una tienda quiere ofrecer sus servicios online. 
 * Para ello se dispone a digitalizar su catálogo y mostrarlo 
 * en una web. Nos piden realizar la parte de backend, que debe
 * permitir añadir y modificar productos, para lo cual será 
 * necesario que el usuario esté autenticado; y permitirá también 
 * listar los productos existentes, que se podrá acceder 
 * libremente.
 * 
 * Notas:
 *   - no se pueden dar de alta usuarios. Deberá existir uno por
 * defecto para las tareas de administración.
 *   - la lista de productos puede llegar a ser muy grande, así 
 * que el usuario deberá poder filtrarla mediante parámetros
 * enviados en la `querystring`
 *   - la estructura de un producto es la siguiente:
 *       {
 *           name: '',
 *           stock: <número de productos disponibles de este modelo>
 *           precio: 100
 *       }
 * 
 * 
 * 
 */