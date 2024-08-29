export const SelectList = ({title}) => {

    const key= 'select-${title}'
    const label = title.toUpperCase()
    const option = ['Cund', 'Anti', 'Cald']

    return (
        <>
            <label htmlFor={key}>{label}</label>
            <select name={key} id={key}>
                <option value="">Seleccione un {label}</option>
</select>

        </>
    )
}