import { ReactNode } from "react"

interface interfProps {
  /*  
    children: ReactNode
    active: string
    token: string | undefined
  */
   id: number
   nome: string
   email: strings
}
export const LayoutUser = (props: interfProps) => {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Narcos Paulo</td>
                    </tr>
                    <tr>
                        <th scope="row">{props.id}</th>
                        <td>{props.nome}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
