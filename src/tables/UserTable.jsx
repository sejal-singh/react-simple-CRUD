export const UserTable = ({ usersData,deleteUser,editRow}) => (

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {usersData.length > 0 ? usersData.map((data, key) =>
                <tr key={key}>
                    <td>{data.name}</td>
                    <td>{data.userName}</td>
                    <td>
                        <button onClick={()=>editRow(data)}>Edit</button>
                        <button onClick={() => deleteUser(data.id)}>Delete</button>
                    </td>
                </tr>
            ) : < tr>
                    <td colSpan={3}>No users</td>
                </tr>}
        </tbody>
    </table>
)