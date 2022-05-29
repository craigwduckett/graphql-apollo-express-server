export default async (_: any, {input}: any, {models}: any) => {
    const book = await models.Book.create(input)
    return book
}