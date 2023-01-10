import { render, screen } from "@testing-library/react";
import { GifGrid } from "../src/components/GifGrid";
import { useFetchGifs } from "../src/hooks/useFetchGifs";

jest.mock('../src/hooks/useFetchGifs');

describe('GifGridTest', () => { 

    const category = 'One Punch';

    test('should show the loading element ', () => { 

        const gifs = [{
            id: 'abc',
            title: 'Saiama',
            url: 'https://localhost.saitama.jpg'
        }, {
            id: '123',
            title: 'Goku',
            url: 'https://localhost.goku.jpg'
        },
    ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid cat={category}/>);
        expect(screen.getByText('Loading...'));

     });

     test('should show items when calling useFetchGifs hook', () => { 

        render(<GifGrid cat={category}/>);
        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);
     });

 })