declare module 'newrelic/load-externals' {
    import type { Configuration } from 'webpack';
    export default function nrExternals(config: Configuration): void;
}
