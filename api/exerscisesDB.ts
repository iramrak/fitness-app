// import axios from 'axios';
// import BodyParts from '@/components/bodyParts';

// const basedUrl = 'https://exercisedb.p.rapidapi.com/exercises';

// const apiCall = async({url, params} : any) => {
//     try{
//         const options = {
//             method: 'GET',
//             url,
//             params,
//             headers: {
//               'x-rapidapi-key': 'f66ea6529bmsh0395e730feea2bcp167ec5jsnde58436d4ead',
//               'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
//         }
//     };
// 	const response = await axios.request(options);
//     return response.data;
// }catch (error) {
// 	    console.error(error);
//     }
// }

// export const fetchExercisesByBodyPart = async (BodyParts) => {
//     let data = await apiCall(basedUrl+`/exercises/bodyPart/${BodyParts}`)
//     return data;
// }