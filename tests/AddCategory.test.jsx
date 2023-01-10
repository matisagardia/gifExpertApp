import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../src/components/AddCategory";

describe('AddCategory test', () => { 

    test('Text input should change ', () => { 

        render(<AddCategory onNewCategory={AddCategory}/>);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Saitama'}})

        expect(input.value).toBe('Saitama');
     });

     test('if the input has a value, then call onNewCategory', () => { 

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();


        render(<AddCategory onNewCategory={() => {
            onNewCategory
        }}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        
        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
      });

 });