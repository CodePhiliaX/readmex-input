interface IProps {
    token: string;
}
interface ReadmexChat {
    initReadmexChat: (props: IProps) => void;
}
declare global {
    interface Window {
        ReadmexChat: ReadmexChat;
    }
}
export {};
