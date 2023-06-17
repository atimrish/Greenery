export const normalizeMultipartBody = async (event) => {
    const body =  await readMultipartFormData(event);
    const normalized = {};

    body.forEach(item => {
        const title = item.name;
        normalized[title] = item;
    });

    return normalized;
}