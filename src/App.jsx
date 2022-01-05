import React from 'react'

import Primeiro from './componentes/simples/Primeiro'
import Card from './componentes/layout/Card'
import ComFilhos from './componentes/simples/ComFilhos'
import ComParametros from './componentes/simples/Comparametros'

import Repeticao from './componentes/produtos/Repeticao'
import Condicional from './componentes/condicao/Condicao'
import If from './componentes/condicao/If'

import Pai from './componentes/comunicacao/direta/Pai'
import Super from './componentes/comunicacao/indireta/Super'
import Input from './componentes/formulario/Input'
import Contador from './componentes/contador/Contador'
import Mega from './componentes/mega/Mega'

import './App.css'

export default (props) => (

    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo="Primeiro Componente" color="#FA6900">
                <Primeiro />
            </Card>
            <Card titulo="Componente com parametro" color="#E94C6F">
                <ComParametros titulo="Meu Titulo Legal" subtitulo="Meu subtitulo Legal" />
            </Card>
            <Card titulo="Componente com filhos" color="#FA6200">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Marcos</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="Componente Repetição" color="#FA2900">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="Componente Condicional v1" color="#FB2200">
                <Condicional numero={6}></Condicional>
            </Card>
            <Card titulo="Componente Condicional If" color="#BA1100">
                <If test={6}>
                    <span>Par</span>
                </If>
            </Card>
            <Card titulo="Componente Condicional If" color="#AF2100">
                <If test={3}>
                    <span>Impar</span>
                </If>
            </Card>
            <Card titulo="Comunicação Direta (Pai para filho)" color="#556B2F">
                <Pai sobrenome="Silva"></Pai>
                {/* Passando propriedade pelo o pai */}
            </Card>

            <Card titulo="Comunicação Indireta (Filho para pai)" color="#ADFF2F">
                <Super ></Super>
            </Card>

            <Card titulo="Formulario Input" color="#778899">
                <Input ></Input>
            </Card>
            <Card titulo="Contador" color="#DA70D6">
                <Contador passo={10}></Contador>
            </Card>

            <Card titulo="Mega" color="#DA70D6">
                <Mega qtdNumero={8} ></Mega>
            </Card>
        </div>


    </div>
);