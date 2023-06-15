import { Decorator } from '@storybook/react';
import styles from 'app/styles/index.scss';

export const StyleDecorator: Decorator = (Story) => (<Story style={styles} />);
