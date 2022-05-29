export default async (_: any, {id}: any, {models}: any) => {
    const deleteBook = await models.Book.deleteOne({_id: id})

    if(deleteBook.deletedCount) return {id:id}
}