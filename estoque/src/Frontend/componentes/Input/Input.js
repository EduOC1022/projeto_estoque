import React from 'react';
import {TextField} from "@mui/material";

const masks = {
    cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,],
    telefoneCelular: ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    telefone: function (input) {
        let numbers = input.match(/\d/g);
        let numberLength = 0;
        if (numbers) {
            numberLength = numbers.join("").length;
        }

        if (numberLength > 10) {
            return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        } else {
            return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }
    }
}

function Masked(props) {
    const {mask} = props;
    return (
        <MaskedInput
            mask={masks[mask]}
            guide={false}
            showMask
        />
    );
}

function Input(props) {
    const { mask } = props;

    return (<TextField
        fullWidth
        InputProps={{
            inputComponent: Masked,
            inputProps: {
                mask: mask
            }}}
    />);
}

export default Input;