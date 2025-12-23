jest.mock("next/image", () => ({
    __esModule: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default: (props: any) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt={props.alt} src={props.src} onClick={props.onClick} className={props.className} />
    ),
}));
