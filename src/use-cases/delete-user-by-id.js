/**
 * @param {Like<User>} user
 */
export const deleteUserById = async(id) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${user.id}`;
    const res = await fetch(url, {
        method: 'DELETE',
    });

    const resultDelete = await res.json();
    console.log({ resultDelete });

    return true;

}