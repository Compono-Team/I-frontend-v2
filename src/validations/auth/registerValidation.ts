import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const getRegisterFormSchema = () =>
  yupResolver(
    yup.object({
      email: yup
        .string()
        .required('* 정확한 정보를 기입해주세요.')
        .email('* 정확한 정보를 기입해주세요'),
      phone: yup
        .string()
        .required('* 정확한 정보를 기입해주세요.')

        .matches(
          /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/,
          '* 정확한 정보를 기입해주세요.',
        ),
      name: yup
        .string()
        .required('* 정확한 정보를 기입해주세요.')
        .trim()
        .min(2, '* 정확한 정보를 기입해주세요'),
      terms: yup
        .boolean()
        .required('* 약관 미동의시 제출이 불가합니다.')
        .oneOf([true], '* 약관 미동의시 제출이 불가합니다.'),
    }),
  );
