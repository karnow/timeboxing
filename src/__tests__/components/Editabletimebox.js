import { render, cleanup ,fireEvent, getByLabelText, getAllByPlaceholderText} from '@testing-library/react';
import React from "react";


import EditableTimebox from '../../components/Editabletimebox';


describe('<EditableTimebox />', ()=> {
    afterEach(cleanup);
    it('show zatwierdz zmiany button', ()=> {

        const {debug , getByText} = render(<EditableTimebox />)
        //const result = render(<EditableTimebox />) //wyświetla metody obiektu instancji render
         //expect(result).toEqual()
        debug();
        // 1 spobób:
        // getByText("Zatwierdź zmiany");
        //2 sposób intencjonalny:
        
        expect( ()=>{
            getByText("Zatwierdź zmiany")
        }).not.toThrow();
        
    });

    it('show zatwierdz zmiany button', ()=> {
        const {debug , getByText} = render(<EditableTimebox />)
        
        fireEvent.click(getByText("Zatwierdź zmiany"))
        debug();
        fireEvent.click(getByText("Edytuj"))
        expect( ()=>{
            getByText("Zatwierdź zmiany")
        }).not.toThrow();
       

    });
    
    it('show Change Title', ()=> {
        const {debug , getByText, getByLabelText} = render(<EditableTimebox />)
        debug();
        fireEvent.change(getByLabelText(/Co robisz?/i), { target: { value: 'a' } })
        fireEvent.click(getByText("Zatwierdź zmiany"))
        debug();
        getByText("a");
        
        expect( ()=>{
            getByText("a")
        }).not.toThrow();
       

    });
});