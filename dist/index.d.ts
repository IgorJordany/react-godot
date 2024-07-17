/**
 * @function ReactGodot
 */
import './styles.css';
import { FunctionComponent } from 'react';
import type { EngineLoaderDescription } from './typings';
export interface ReactGodotProps {
    script: EngineLoaderDescription;
    pck: string;
    unload?: boolean;
    wasm?: string;
    resize?: boolean;
    width?: number;
    height?: number;
    params?: any;
}
declare const ReactGodot: FunctionComponent<ReactGodotProps>;
export default ReactGodot;
