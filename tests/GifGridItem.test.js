import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../src/components/GifGridItem";

describe('GifGridItem Test', () => { 

    const title = 'Saitama';
    const url = 'https://pruebaurl.com';

    test('should pass props', () => { 

        const {container} = render(<GifGridItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();

     });
     
     test('should return img with url and alt', () => { 

        render(<GifGridItem title={title} url={url}/>);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

     });

     test('should show the title in the component', () => { 

        render(<GifGridItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy;

     });

 });