import * as yup from 'yup'

const formSchema = yup.object().shape ({
    username: yup
        .string()
        .trim()
        .required('Username must be at least 3 characters')
        .min(3, 'Username must be at least 3 characters'),
    password: yup
        .string()
        .trim()
        .required('Password must be at least 6 characters')
        .min(6, 'Password must be at least 6 characters'),
}
    
)

export default formSchema;