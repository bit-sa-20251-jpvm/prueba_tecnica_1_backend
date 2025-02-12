describe("Test de la calculadora", () => {

    let number1;
    let number2;
    let number3;

    beforeEach(() => {
        number1 = 1;
        number2 = 2;
        number3 = 0;
    })

    it('Primer test de la calculadora', () => {
        expect(5).toBe(5);
    })

    it('Operacion suma', () => {

        // Act
        let result = number1+number2;
        // Assert
        expect(result).toBe(3);
    })

    it('Operacion multiplicacion', () => {

        // Act
        let result = number1*number2;
        // Assert
        expect({resultado: result}).toEqual({resultado: result});
        expect(result).not.toBe(10)
    })

    it('Operacion division por 0', () => {

        // Act
        let result = number1/number3;
        // Assert
        expect(result).toBe(Infinity);
    })
})
