export const actionDispatch = (type, payload) => {
    if (payload)
        return { type, payload }
    return { type }
}
