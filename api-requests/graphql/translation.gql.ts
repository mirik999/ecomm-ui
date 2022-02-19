import { gql } from 'graphql-request';
import axios from '../../utils/interceptor.utils';
//types
import { ITranslationMessages } from '../../types/translations.type';

// export const getAllTranslations = async () => {
//   const query = gql`
//     query GetTranslations($controls: GetReq!) {
//       getTranslations(controls: $controls) {
//         count
//         payload {
//           keyword
//           translation {
//             EN
//             RU
//             AZ
//           }
//         }
//       }
//     }
//   `;
//
//   const controls = {
//     offset: 0,
//     limit: 10000,
//     keyword: '',
//   };
//
//   return axios.post('/graphql', { query, variables: { controls } }).then<ITranslationResponse>((res) => res.data.data);
// };

export const getAllTranslations = async (langCode: string = 'EN') => {
  const query = gql`
    query Query($langCode: String!) {
      getTranslationsForUI(langCode: $langCode) {
        keyword
        translation
      }
    }
  `;

  return axios.post('/graphql', { query, variables: { langCode } }).then((res) => res.data.data);
};
