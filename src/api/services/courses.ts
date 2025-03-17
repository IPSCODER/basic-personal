import { apiEndPoint ,api } from "../handlers";

const getCourses = async () =>{
    const {data} = await api.get(apiEndPoint.courses)
    return data;
}


export {getCourses}