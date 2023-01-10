import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../src/hooks/useFetchGifs"

describe('useFetchGifs', () => { 

    test('should return initial state of the hook', () => { 

        const {result} = renderHook( () => useFetchGifs('One Punch'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy;
     });

     test('should return an images array and isLoading false', async () => { 

        const {result} = renderHook( () => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0), 
            {
               timeout: 6000
            }
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

      });


 });