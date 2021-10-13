import { createSelector } from "reselect"

export const getFollowingProgress=(state)=>{
    return state.usersPage.followingProgress
}

export const getIsFetching=(state)=>{
    return state.usersPage.isFetching
}
export const getCurrentPage=(state)=>{
    return state.usersPage.currentPage
}
export const getPageSize=(state)=>{
    return state.usersPage.pageSize
}
export const getTotalUsersCount=(state)=>{
    return state.usersPage.totalUsersCount
}


const getUsersSelector=(state)=>{
    return state.usersPage.users
}

export const getUser = createSelector(getUsersSelector,(users)=>{
    return users.filter(u=>true)
})
