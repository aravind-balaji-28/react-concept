// what is use hook?
// The use Hook is used to read asynchronous data like Promises and Context directly inside components.

import { Suspense, use } from "react"
const getUserInfo = async () => {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    return userResponse.json()
}
const userResult = getUserInfo()
const UserData = () => {
    const userList = use(userResult)
    return <>
        <ul>
            {userList?.map((e: any) => (
                <li key={e.id}>{e.name}</li>
            ))}
        </ul>
    </>
}
const Use = () => {
    return <>
        <Suspense fallback={"Loading..."}>
            <UserData />
        </Suspense>
    </>
}
export default Use