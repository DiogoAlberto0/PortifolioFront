
//forms
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

//api
import { api } from '../../../api/axios'

//cookies
import { useCookies } from 'react-cookie'


import { useNavigate } from 'react-router-dom'
import { SinginContainer } from './styles'

const loginFormSchema = z.object({
    login: z.string()
        .min(1, 'Informe o seu login')
    ,
    password: z.string()
        .min(1, 'Informe a senha')

})

type LoginFormData = z.infer<typeof loginFormSchema>



export const Singin = () => {

    const [cookies, setCookie] = useCookies(['token', 'authenticated']);

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema)
    })

    const onSumbit = async (data: LoginFormData) => {

        const { login, password } = data
        await api.post('/singin', { login: login, password: password })
            .then(resp => {
                setCookie('token', resp.data.token, { path: '/' })
                setCookie('authenticated', resp.data.authenticated, { path: '/' })
            })
            .catch(err => console.warn(err.response.data))

        navigate("/postproject")
    }



    return (
        <SinginContainer>
            <form onSubmit={handleSubmit(onSumbit)}>
                <div>
                    <label htmlFor="login">User:</label>
                    <input
                        id='login'
                        type="text"
                        {...register('login')}
                    />
                </div>
                {errors.login && <span>{errors.login.message}</span>}

                <div>

                    <label htmlFor="password">Senha:</label>
                    <input
                        id='password'
                        type="password"
                        {...register('password')}
                    />
                </div>
                {errors.password && <span>{errors.password.message}</span>}

                <button type="submit">Entrar</button>
            </form>
        </SinginContainer>
    )
}