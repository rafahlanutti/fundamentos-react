import React, { Component } from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'

export default class Contador extends Component {


    state = {
        passo: this.props.passo,
        valor: 0
    }

    incrementar = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    render() {
        return (
            <div>
                <Display valor={this.state.valor}></Display>
                <PassoForm
                    passo={this.state.passo}
                    setPasso={value => this.setState({ passo: value })}>

                </PassoForm>
                <Botoes
                    onIncrementar={e => this.incrementar(e)}
                    onDecrementar={(e) => { this.decrementar(e) }}
                ></Botoes>

            </div>
        )
    }
}