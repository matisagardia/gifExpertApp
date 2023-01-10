import { getGifs } from "../src/helpers/getGifs"
import { screen } from "@testing-library/react";

describe('Pruebas en getGifs', () => { 

    test('Should return a gifs array', async () => { 

        const gifs = await getGifs('One piece');

        expect(gifs.length).toBe(9);
        
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });

     });
 });