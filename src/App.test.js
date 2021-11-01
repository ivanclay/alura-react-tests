import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

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

        it('a withdrawal, The transaction must be completed.', () => {
            const { getByText, getByTestId, getByLabelText} = render(<App/>);
            
            const saldo = getByText('R$ 1000');
            const transacao = getByLabelText('Saque');
            const valor = getByTestId('valor');
            const botaoTransacao = getByText('Realizar operação');

            expect(saldo.textContent).toBe('R$ 1000');

            fireEvent.click(transacao, {target: { value: 'saque'}});
            fireEvent.change(valor, {target: {value: 10 }});
            fireEvent.click(botaoTransacao);

            expect(saldo.textContent).toBe('R$ 990');
        });

        it('Another way for the same test.', () => {
            
            render(<App/>);
            
            const saldo = screen.getByText('R$ 1000');
            const transacao = screen.getByLabelText('Saque');
            const valor = screen.getByTestId('valor');
            const botaoTransacao = screen.getByText('Realizar operação');

            expect(saldo.textContent).toBe('R$ 1000');

            fireEvent.click(transacao, {target: { value: 'saque'}});
            fireEvent.change(valor, {target: {value: 10 }});
            fireEvent.click(botaoTransacao);

            expect(saldo.textContent).toBe('R$ 990');
        });
    });
});
