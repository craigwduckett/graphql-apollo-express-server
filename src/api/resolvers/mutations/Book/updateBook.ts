export default async (_: any, {id, input}: any, {models}: any) => {
    const bookToUpdate = await models.Book.findOne({_id: id})

    Object.keys(input).forEach(value => {
        bookToUpdate[value] = input[value]
    })

    const updatedBook = await bookToUpdate.save()
    return updatedBook

}