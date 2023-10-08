export function getDataArray(obj) {
    const { special } = obj;
    return special.map( ( {description = 'Описание недоступно', ...rest} ) => ( { ...rest, description } ) );
};
