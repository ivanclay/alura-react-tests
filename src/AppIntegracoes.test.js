import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App, { calcularNovoSaldo } from './app';
import api from './api';

jest.mock('./api');

describe('API Requests', () => {
    it('Show API transaction list.', async () => {
        api.listaTransacoes.mockResolvedValue([
            {
                "valor": "10",
                "trasacao": "saque",
                "data": "10/08/2020",
                "id": 1
            },
            {
                "valor": "20",
                "trasacao": "deposito",
                "data": "26/09/2020",
                "id": 2
            }
        ]);

        render(<App />);

        expect(await screen.findByText('saque')).toBeInTheDocument();
        
        // expect(screen.findByText('saque')).toBeInTheDocument();
        expect(screen.getByTestId('tasacoes').children.length).toBe(2);
    })
})