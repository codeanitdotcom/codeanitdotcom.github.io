import styled, { CreateStyled } from '@emotion/styled';
import theme from '../constants/theme';

export type Theme = typeof theme.light;

export default styled as CreateStyled<Theme>;
