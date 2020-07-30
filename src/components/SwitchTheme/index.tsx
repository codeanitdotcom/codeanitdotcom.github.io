import React from 'react';
import {LightDarkSwitcher}  from './LightDarkSwitcher';
import { useTheme } from '../../context/ThemeContext';
import { LinkButton } from '../Button/LinkButton';

const SwitchTheme: React.FC<{}> = () => {
    const theme = useTheme();
    return (
        <LinkButton
        // onKeyDown={(e) => ( e.keyCode === 13 ) ? theme.toggleDark():null}
        onClick={theme.toggleDark}
        aria-label={ theme.dark ? 'white' : 'black' }
        title={theme.dark ? 'black' : 'white'}
        >
            <LightDarkSwitcher isDark={theme.dark} />

        </LinkButton>
    );
}

export { SwitchTheme };
