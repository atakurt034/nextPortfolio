export const PROJECT_LIST_REQUEST = 'PROJECT_LIST_REQUEST'
export const PROJECT_LIST_SUCCESS = 'PROJECT_LIST_SUCCESS'
export const PROJECT_LIST_FAIL = 'PROJECT_LIST_FAIL'

export interface ProjectList {
projectList: {}[]
}

export interface ProjectListProps {
loading: boolean,
error: {}[],
projects:{name: string, image: string, url:string, description: string, github: string}[]
}
