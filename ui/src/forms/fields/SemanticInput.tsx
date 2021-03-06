import * as React from 'react';
import {WrappedFieldProps} from "redux-form";
import {StatelessComponent} from "react-redux";
import {Input, Form} from 'semantic-ui-react';
import {SemanticWIDTHS} from "semantic-ui-react/src";

interface FieldProps extends WrappedFieldProps<any> {
    label: string;
    type: string;
    id: string;
    tooltip: string;
    required: boolean;
    width: SemanticWIDTHS;
    action: string;
}

export const SemanticInput: StatelessComponent<FieldProps> = ({input, label, type, meta: { touched, error, warning }, id, tooltip, required, width, action }) => (
    <Form.Input
        fluid
        {...input}
        label={label}
        type={type}
        error={touched && !!error}
        required={required}
        width={width}
        action={action}
    />
);