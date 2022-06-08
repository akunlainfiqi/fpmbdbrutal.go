import { writable, derived } from 'svelte/store';

export const authenticated = writable(false);
export const user = writable(null);
export const apiurl = 'http://localhost:8080';
