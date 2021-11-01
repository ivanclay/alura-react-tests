import React from 'react';
import { render, screen } from '@testing-library/react';

import App, { calcularNovoSaldo } from './app';

describe('Main Component', () => {
    describe('When I open the app', () => {
        it('the name is displayed', () => {
            render(<App/>);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });
    
        it('the balance is displayed', () => {
            render(<App/>);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        });
    
        it('the perform transaction button is displayed', () => {
            render(<App/>);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        });
    });

    describe('When I perform a transaction', () => {
        it('a withdrawal, the value will decrease', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            }
            const novoSaldo = calcularNovoSaldo(valores, 150);
            expect(novoSaldo).toBe(100);
        });
    })
})
