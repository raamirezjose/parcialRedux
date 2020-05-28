import { createAction, props } from '@ngrx/store';

export const aumentar = createAction('[contador] Aumentar');
export const disminuir = createAction('[contador] Disminuir');
export const multiplicar = createAction(
  '[contador] Multiplicar',
  props<{ numero: number }>()
);
export const dividir = createAction(
  '[contador] Dividir',
  props<{ numero: number }>()
);
export const resetear = createAction('[contador] Resetear');

/* export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset'); */
