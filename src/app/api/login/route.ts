import { NextResponse } from 'next/server'
import axios from 'axios'
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
    const { email, senha }: any = await req.json()

    try {

        let user = await axios.get(
            "http://localhost:3001/users?email="
            +
            email
        )

        console.log(users)

        if (user.data.length === 1) {

            if (user.data[0].senha === senha) {

                let objUser = user.data[0]

                delete objUser.senha

                console.log(objUser)

                const token = jwt.sign(objUser, '123456', {
                    // expiresIn: "1d"  
                    expiresIn: 60 * 1
                })

                return NextResponse.json({ token: token })
            }

            return new Response('Dados incorretos', {
                status: 401
            })

        }
        return new Response('Dados incorretos', {
            status: 401
        })

    } catch (error: any) {
        console.log("error")
        return new Response(error.message, {
            status: 500
        })
        // console.log(error)
    }

    return NextResponse.json({ data: "Rota get" })
}