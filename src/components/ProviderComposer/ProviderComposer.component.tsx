interface ProviderComposerComponentProps {
    components: {
        component: React.JSXElementConstructor<React.PropsWithChildren<any>>,
        props?: {[key: string]: any}
    }[],
    children: React.ReactNode
}

const ProviderComposerComponent: React.FC<ProviderComposerComponentProps> = props => (
    <>{props.components.reduceRight((acc, Comp) => <Comp.component {...Comp.props}>{acc}</Comp.component>, props.children)}</>
);

export default ProviderComposerComponent;