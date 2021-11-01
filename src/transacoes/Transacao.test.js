import React from 'react';
import { render } from '@testing-library/react';
import Transacao from "./Transacao";

describe('Componente de Transação do extrato', () => {
    it('O snapshot do componente deve permanecer sempre o mesmo', () => {
        const { container } = render(
                        <Transacao 
                                data="08/09/202" 
                                tipo="saque"
                                valor="20.00"
                        />
                    );
        expect(container.firstChild).toMatchSnapshot();
    })
})