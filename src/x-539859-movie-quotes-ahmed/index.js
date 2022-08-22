import {createCustomElement} from '@servicenow/ui-core';
import react from "@storeworkflows/ui-renderer-react";
import styles from './styles.scss';
import Button from '@mui/material/Button';
import React from 'react';


const name = "Ahmed";

const view = (props) => {
	return (
		<h1>Ahmed</h1>
	);
}

createCustomElement('x-539859-movie-quotes-ahmed', {
	renderer: {type: react},
	view,
	styles
});
